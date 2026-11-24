# Sitcom Episode Pipeline (`Totally Raotional: Runtime Error` — IGCSE CS 0478)

Animated narrated sitcom episodes for all 8 Cambridge IGCSE Computer Science (`0478`) topics:
- Kokoro ONNX neural TTS + synthesized sound effects & music bed (`build.py`)
- HTML5 Canvas + Playwright frame renderer (`render.html`, `render.mjs`) capped at `<= 2` concurrent `ffmpeg` workers (`make_episode.sh`)
- Outputs `public/videos/<topic>.mp4` + `public/videos/posters/<topic>.jpg` and generates `lib/sitcom.ts` via `gen_manifest.py`.
