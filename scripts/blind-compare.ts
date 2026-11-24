// Usage:
//   npx tsx scripts/blind-compare.ts                      -> compares ALL topics + exam against .audit-tmp/blind/ (or .audit-tmp/)
//   npx tsx scripts/blind-compare.ts <topicId|exam> [dir] -> compares one target against <dir>
// Reads [{id, answer}] JSON files (answer is option index 0..3 for MCQ or typed answer string for short)
// and reports every disagreement with the answer key.
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import type { ExamPaper, Paper, Question, TopicPractice } from "../lib/types.ts";
import { checkAnswer, displayAnswer } from "../lib/answerCheck.ts";
import { TOPIC_META } from "../lib/topics/meta.ts";

const EXAM_IDS = ["exam-bio","exam-chem","exam-phys","exam-skills"] as const;
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const [argId, argOutDir] = process.argv.slice(2);
const baseDir = path.resolve(root, argOutDir || ".audit-tmp");

const load = async <T>(rel: string, name: string): Promise<T | undefined> => {
  const p = path.join(root, rel);
  return existsSync(p) ? ((await import(pathToFileURL(p).href))[name] as T) : undefined;
};

async function questionsFor(id: string): Promise<Question[]> {
  if (id === "exam") {
    const all: Question[] = [];
    for (const e of EXAM_IDS) {
      all.push(...(((await load<ExamPaper>(`lib/exam/${e}.ts`, "paper"))?.questions) ?? []));
    }
    return all;
  }
  if ((EXAM_IDS as readonly string[]).includes(id)) {
    return ((await load<ExamPaper>(`lib/exam/${id}.ts`, "paper"))?.questions) ?? [];
  }
  const practice = await load<TopicPractice>(`lib/topics/${id}/practice.ts`, "practice");
  return [
    ...(practice?.quiz ?? []),
    ...((await load<Paper[]>(`lib/topics/${id}/mcq.ts`, "mcqPapers")) ?? []).flatMap((p) => p.questions),
    ...(practice?.papers ?? []).flatMap((p) => p.questions),
    ...((await load<Paper[]>(`lib/topics/${id}/practice2.ts`, "morePapers")) ?? []).flatMap((p) => p.questions),
    ...(practice?.challenge ?? []),
  ];
}

function loadBlindAnswers(id: string | null): Map<string, { id: string; answer: unknown; note?: string }> {
  const dirs = [baseDir, path.join(baseDir, "blind"), path.join(baseDir, "answers")].filter((d) => existsSync(d));
  const map = new Map<string, { id: string; answer: unknown; note?: string }>();
  for (const d of dirs) {
    for (const f of readdirSync(d)) {
      if (!f.endsWith(".json") || f.endsWith(".questions.json") || f.endsWith(".mismatches.json")) continue;
      if (id && id !== "exam" && !f.startsWith(id) && f !== "all.json") {
        // Still allow reading all blind files in no-arg mode or when answers are grouped differently;
        // filtering by question id below keeps only relevant answers!
      }
      try {
        const parsed = JSON.parse(readFileSync(path.join(d, f), "utf8"));
        const arr = Array.isArray(parsed) ? parsed : Array.isArray(parsed?.answers) ? parsed.answers : [];
        for (const item of arr) {
          if (item && typeof item.id === "string") map.set(item.id, item);
        }
      } catch {
        /* ignore non-answer json */
      }
    }
  }
  return map;
}

mkdirSync(baseDir, { recursive: true });
const allAnswers = loadBlindAnswers(argId ?? null);
const targets = argId ? [argId] : [...TOPIC_META.map((t) => t.id), "exam"];

let grandTotal = 0;
let grandAgree = 0;
let grandMismatches = 0;
let grandUnanswered = 0;

for (const id of targets) {
  const qs = (await questionsFor(id)).filter((q) => q.kind !== "written");
  const mismatches: unknown[] = [];
  const unanswered: string[] = [];
  let agree = 0;
  let compared = 0;
  for (const q of qs) {
    const a = allAnswers.get(q.id);
    if (!a) {
      unanswered.push(q.id);
      continue;
    }
    compared++;
    if (q.kind === "mcq") {
      if (Number(a.answer) === q.answerIndex) agree++;
      else {
        mismatches.push({
          id: q.id,
          kind: "mcq",
          solver: { index: a.answer, text: q.options[Number(a.answer)] },
          key: { index: q.answerIndex, text: q.options[q.answerIndex] },
          solverNote: a.note,
        });
      }
    } else if (q.kind === "short") {
      const r = checkAnswer(q.answer, String(a.answer ?? ""));
      if (r.status === "correct") agree++;
      else {
        mismatches.push({
          id: q.id,
          kind: "short",
          solver: a.answer,
          checker: r,
          key: displayAnswer(q.answer),
          spec: q.answer,
          solverNote: a.note,
        });
      }
    }
  }
  grandTotal += qs.length;
  grandAgree += agree;
  grandMismatches += mismatches.length;
  grandUnanswered += unanswered.length;
  const pct = compared ? ((100 * agree) / compared).toFixed(1) : "0.0";
  const report = { topic: id, total: qs.length, compared, agree, agreementPct: `${pct}%`, mismatches: mismatches.length, unanswered: unanswered.length };
  writeFileSync(path.join(baseDir, `${id}.mismatches.json`), JSON.stringify({ report, mismatches, unanswered }, null, 1));
  console.log(JSON.stringify(report));
}

if (!argId) {
  const overallPct = grandTotal - grandUnanswered > 0 ? ((100 * grandAgree) / (grandTotal - grandUnanswered)).toFixed(1) : "0.0";
  console.log(
    JSON.stringify({
      summary: "ALL",
      total: grandTotal,
      compared: grandTotal - grandUnanswered,
      agree: grandAgree,
      agreementPct: `${overallPct}%`,
      mismatches: grandMismatches,
      unanswered: grandUnanswered,
    }),
  );
  if (grandMismatches > 0 || grandUnanswered > 0) process.exitCode = 1;
}
