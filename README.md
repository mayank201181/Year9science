# Year 9 Science — Tanglin Trust School Study Hub

Interactive Year 9 study guide, question bank, procedural drill engine, custom Exam Cram builder, and mock exam suite built on Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4.

## Key Features
- **Zero-login iPad/device persistence** (`localStorage`) with optional cloud family sync when configured.
- **AoPS discovery-first guides** with inline SVG diagrams, worked examples, auto-marked `yourTurn` checks, flashcards, and "Never Write ❌ → Write Instead ✅" mark-savers.
- **Custom multi-topic Exam Cram (`/cram`)** + printable **Equations, Practicals & Mark-Saver Vault (`/formulas`)**.
- **Deterministic MCQ option shuffling** (`lib/optionOrder.ts`), hardened answer checkers, 3-tier seeded procedural drills, and 60s Fluency Sprint.
- **4 full mock exam papers** with timed/untimed modes and topic breakdown.

## Commands
```bash
npm ci
npm run typecheck
npx eslint .
npm test
npm run validate
npm run build
```
