"""Generate lib/shorts.ts from scripts/sitcom/out/<topic>/timeline.json + common.SEASON.
Slices each rendered CIE 0478 sitcom episode into 4 bite-sized Concept Shorts:
  1. Cold Open Story Hook (0 .. title card)
  2. Core Concept & Holo-Board Breakdown (after title .. midpoint / examiner beat)
  3. Examiner Mark-Scheme Trap & Deep Dive (midpoint / examiner beat .. challenges)
  4. 3-Question Pause Challenge Round (challenges .. end)
"""
import os, json

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))

ns = {}
exec(open(os.path.join(HERE, "common.py")).read(), ns)

WHO_NAMES = {
    "centi": "Centi",
    "globo": "Globo",
    "tara": "Tara",
    "dad": "Dad",
    "mum": "Mum",
    "teacher": "Teacher",
    "cashier": "Cashier",
    "uncle": "Uncle",
}

TOPIC_ICONS = {
    "number-systems": "🔢",
    "data-media-compression": "🗜️",
    "data-transmission": "📡",
    "hardware-architecture": "🖥️",
    "software-security-ai": "🛡️",
    "logic-gates": "⚡",
    "algorithms-testing": "🧭",
    "python-arrays-sql": "🐍",
}

clips = []
for num, topic, short, ep_title in ns["SEASON"]:
    tl_path = os.path.join(HERE, "out", topic, "timeline.json")
    mp4_path = os.path.join(ROOT, "public", "videos", f"{topic}.mp4")
    if not (os.path.exists(tl_path) and os.path.exists(mp4_path)):
        continue
    tl = json.load(open(tl_path))
    segs = tl["segments"]
    dur = float(tl["duration"])

    title_seg = next((s for s in segs if s["kind"] == "title"), None)
    chall_seg = next((s for s in segs if s["kind"] == "challenge" or (s["kind"] == "card" and "CHALLENGE" in s.get("text", "").upper())), None)
    exam_seg = next((s for s in segs if (s.get("scene") or "") == "examiner" or s.get("who") == "examiner"), None)

    t_title_start = title_seg["t0"] if title_seg else 30.0
    t_title_end = title_seg["t1"] if title_seg else 35.0
    t_chall_start = chall_seg["t0"] if chall_seg else max(t_title_end + 60.0, dur - 65.0)
    if exam_seg and t_title_end + 25.0 < exam_seg["t0"] < t_chall_start - 20.0:
        t_mid = max(t_title_end + 30.0, exam_seg["t0"] - 4.0)
    else:
        t_mid = round((t_title_end + t_chall_start) / 2.0, 1)

    windows = [
        (0.0, round(t_title_start, 1), f"{ep_title} — Cold Open Hook"),
        (round(t_title_end, 1), round(t_mid, 1), f"{ep_title} — Core Concept"),
        (round(t_mid, 1), round(t_chall_start, 1), f"{ep_title} — CIE 0478 Examiner Trap"),
        (round(t_chall_start, 1), round(dur, 1), f"{ep_title} — Pause Challenge Round"),
    ]
    valid_windows = [(a, b, ttl) for (a, b, ttl) in windows if b - a >= 8.0]

    for idx, (s0, s1, clip_title) in enumerate(valid_windows, start=1):
        caps = []
        for seg in segs:
            if seg["t1"] <= s0 or seg["t0"] >= s1:
                continue
            if seg["kind"] == "line" and seg.get("subs"):
                who = WHO_NAMES.get(seg.get("who", ""), seg.get("who", "Voice").title())
                full_txt = " ".join(sub["text"] for sub in seg["subs"]).strip()
                if full_txt:
                    caps.append(dict(t=round(max(s0, seg.get("say0", seg["t0"])), 2), who=who, text=full_txt))
            elif seg["kind"] == "challenge" and seg.get("text"):
                who = WHO_NAMES.get(seg.get("who", "byte"), "Byte")
                caps.append(dict(t=round(max(s0, seg.get("say0", seg["t0"])), 2), who=who, text=seg["text"]))
        summary = caps[0]["text"] if caps else f"Quick revision clip from {ep_title} ({short})."
        clips.append(dict(
            id=f"{topic}-s0{idx}",
            topicId=topic,
            topicTitle=short,
            topicShort=short,
            topicIcon=TOPIC_ICONS.get(topic, "💻"),
            strand="IGCSE CS 0478 Short",
            episodeTitle=ep_title,
            index=idx,
            totalInTopic=len(valid_windows),
            title=clip_title,
            summary=summary,
            startSec=s0,
            endSec=s1,
            durationSec=round(s1 - s0, 1),
            src=f"/videos/{topic}.mp4",
            poster=f"/videos/posters/{topic}.jpg",
            captions=caps,
        ))

out_ts = os.path.join(ROOT, "lib", "shorts.ts")
with open(out_ts, "w") as f:
    f.write("// Auto-generated concept Shorts manifest for Year 11 IGCSE Computer Science (0478) — do not edit by hand.\n")
    f.write("export interface ShortCaption {\n  t: number;\n  who: string;\n  text: string;\n}\n\n")
    f.write("export interface ShortPart {\n  src: string;\n  start: number;\n  duration: number;\n}\n\n")
    f.write("export interface ShortClip {\n  id: string;\n  topicId: string;\n  topicTitle: string;\n  topicShort: string;\n"
            "  topicIcon: string;\n  strand: string;\n  episodeTitle: string;\n  index: number;\n  totalInTopic: number;\n"
            "  title: string;\n  summary: string;\n  startSec: number;\n  endSec: number;\n  durationSec: number;\n"
            "  src?: string;\n  parts?: ShortPart[];\n  poster?: string;\n  embedHref?: string;\n  chapterId?: string;\n"
            "  captions: ShortCaption[];\n}\n\n")
    f.write("export const SHORTS: ShortClip[] = " + json.dumps(clips, indent=2, ensure_ascii=False) + ";\n")

print(f"wrote {out_ts}: {len(clips)} shorts")
