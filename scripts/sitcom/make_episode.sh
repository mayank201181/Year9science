#!/usr/bin/env bash
# Build + render one or more IGCSE CS 0478 sitcom episodes end to end.
#   scripts/sitcom/make_episode.sh <topic-id> [<topic-id> ...]
# Output: public/videos/<topic>.mp4 and public/videos/posters/<topic>.jpg
# Respects <= 2 concurrent ffmpeg workers per render!
set -euo pipefail
cd "$(dirname "$0")"
ROOT="$(cd ../.. && pwd)"
TTS_BIN="/Users/mayankrawat/Downloads/year8-workspace/.tts-env/.venv/bin"
if [ -d "$TTS_BIN" ]; then
  export PATH="$TTS_BIN:$PATH"
fi
PY="${TTS_BIN}/python"
[ -x "$PY" ] || PY="python3"
SHARED_MODELS="/Users/mayankrawat/Downloads/year8-workspace/.tts-env/models"
if [ ! -s "$SHARED_MODELS/kokoro-v1.0.onnx" ] && [ ! -s kokoro-v1.0.onnx ]; then
  REL=https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0
  curl -sSL -o kokoro-v1.0.onnx "$REL/kokoro-v1.0.onnx"
  curl -sSL -o voices-v1.0.bin "$REL/voices-v1.0.bin"
fi
export NODE_PATH="${NODE_PATH:-$ROOT/node_modules}"
mkdir -p "$ROOT/public/videos/posters"
WORKERS="${SITCOM_WORKERS:-1}"
stamp() { echo "=== $T: $1 (+$(( $(date +%s) - S0 ))s)"; }
for T in "$@"; do
  S0=$(date +%s)
  echo "=== $T: lint"; "$PY" lint_episode.py "episodes/$T.py"
  if [ -s "out/$T/timeline.json" ] && [ -s "out/$T/audio.wav" ]; then
    echo "=== $T: voices + timeline already cached in out/$T"
  else
    echo "=== $T: voices + timeline"; "$PY" build.py "episodes/$T.py" "out/$T"
  fi
  stamp "voices done"; echo "=== $T: frames (workers=$WORKERS)"; rm -f out/$T/part*.mp4; "$PY" render.py "out/$T" --workers "$WORKERS"
  stamp "frames done"; echo "=== $T: encode"
  # 2-pass EBU R128 loudnorm + -2.6 dBFS lookahead alimiter before AAC encoding so final MP4 stays strictly <= -1.5 dBTP and ~-16 LUFS
  LN_AF="$("$PY" - "out/$T/audio.wav" <<'PYEOF'
import json, re, subprocess, sys
p = subprocess.run(["ffmpeg", "-nostdin", "-hide_banner", "-i", sys.argv[1], "-af", "loudnorm=I=-16:TP=-2.2:LRA=11:print_format=json", "-f", "null", "-"], capture_output=True, text=True).stderr
j = json.loads(re.search(r'\{[^{}]*"input_i"[^{}]*\}', p, re.S).group(0))
print(f"loudnorm=I=-16:TP=-2.2:LRA=11:measured_I={j['input_i']}:measured_LRA={j['input_lra']}:measured_TP={j['input_tp']}:measured_thresh={j['input_thresh']}:offset={j['target_offset']}:linear=true,aresample=48000,alimiter=limit=0.74:level=false:attack=5:release=50")
PYEOF
)"
  ffmpeg -nostdin -y -loglevel error -f concat -safe 0 -i "out/$T/parts.txt" -i "out/$T/audio.wav" \
    -c:v copy -color_range tv \
    -af "$LN_AF" -ar 48000 -c:a aac -b:a 128k -movflags +faststart -shortest \
    "$ROOT/public/videos/$T.mp4"
  "$PY" render.py "out/$T" --poster "$ROOT/public/videos/posters/$T.jpg"
  rm -f out/$T/part*.mp4
  stamp "encoded + poster"
  echo "=== $T: done $(du -h "$ROOT/public/videos/$T.mp4" | cut -f1) $(ffprobe -v error -show_entries format=duration -of csv=p=0 "$ROOT/public/videos/$T.mp4")s"
done
