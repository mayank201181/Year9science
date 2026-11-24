"""Render timeline.json + render.html frames to MP4 parts or poster JPEG via Python Playwright + ffmpeg."""
import asyncio, base64, functools, http.server, json, math, os, subprocess, sys, threading, time
from playwright.async_api import async_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
out = os.path.abspath(sys.argv[1])
args = sys.argv[2:]

def opt(k, default=None):
    return args[args.index(k) + 1] if k in args and args.index(k) + 1 < len(args) else default

tl = json.load(open(os.path.join(out, "timeline.json")))

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass

def start_server():
    handler = functools.partial(QuietHandler, directory=HERE)
    srv = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
    th = threading.Thread(target=srv.serve_forever, daemon=True)
    th.start()
    return srv, srv.server_address[1]

async def open_page(browser, port):
    pg = await browser.new_page(viewport={"width": 1280, "height": 720})
    await pg.goto(f"http://127.0.0.1:{port}/render.html")
    await pg.evaluate("tl => window.init(tl)", tl)
    return pg

async def main():
    srv, port = start_server()
    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch(args=["--disable-gpu-vsync"])
            poster = opt("--poster")
            if poster:
                pg = await open_page(browser, port)
                d = await pg.evaluate("(t) => window.frameJpeg(t, 0.85)", tl.get("poster_t", 8.0))
                os.makedirs(os.path.dirname(os.path.abspath(poster)), exist_ok=True)
                with open(poster, "wb") as f:
                    f.write(base64.b64decode(d.split(",", 1)[1]))
                await browser.close()
                return

            stills = opt("--stills")
            if stills:
                pg = await open_page(browser, port)
                sdir = os.path.join(out, "stills")
                os.makedirs(sdir, exist_ok=True)
                for ts in stills.split(","):
                    tval = float(ts)
                    d = await pg.evaluate("(t) => window.frameJpeg(t, 0.85)", tval)
                    with open(os.path.join(sdir, f"t{tval:06.1f}.jpg"), "wb") as sf:
                        sf.write(base64.b64decode(d.split(",", 1)[1]))
                await browser.close()
                return

            fps = tl.get("fps", 24)
            N = math.ceil(tl["duration"] * fps)
            workers = max(1, min(2, int(opt("--workers", "1"))))
            per = math.ceil(N / workers)
            t0 = time.time()

            async def run_worker(w):
                a, b = w * per, min(N, (w + 1) * per)
                if a >= b:
                    return
                pg = await open_page(browser, port)
                seg = os.path.join(out, f"part{w}.mp4")
                ff = subprocess.Popen(
                    ["ffmpeg", "-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", str(fps),
                     "-c:v", "mjpeg", "-i", "-",
                     "-vf", "scale=in_range=full:out_range=tv,format=yuv420p",
                     "-c:v", "libx264", "-threads", "1", "-preset", "veryfast", "-crf", "24",
                     "-r", "24", "-pix_fmt", "yuv420p", "-color_range", "tv", "-tune", "animation", seg],
                    stdin=subprocess.PIPE,
                )
                assert ff.stdin is not None
                batch = 24
                for i in range(a, b, batch):
                    cnt = min(batch, b - i)
                    frames = await pg.evaluate("([i0, cnt, fps]) => window.framesBatch(i0, cnt, fps, 0.85)", [i, cnt, fps])
                    for b64 in frames:
                        ff.stdin.write(base64.b64decode(b64))
                    if w == 0 and ((i - a) // batch) % 10 == 0:
                        print(f"w0 {min(b, i + cnt) - a}/{b - a}  {int(time.time() - t0)}s", flush=True)
                ff.stdin.close()
                rc = await asyncio.to_thread(ff.wait)
                if rc != 0:
                    raise RuntimeError(f"ffmpeg worker {w} exited with {rc}")

            await asyncio.gather(*(run_worker(w) for w in range(workers)))
            await browser.close()
            parts = [f"file 'part{w}.mp4'" for w in range(workers) if w * per < N]
            with open(os.path.join(out, "parts.txt"), "w") as f:
                f.write("\n".join(parts) + "\n")
            print(f"frames done {int(time.time() - t0)}s", flush=True)
    finally:
        srv.shutdown()

if __name__ == "__main__":
    asyncio.run(main())
