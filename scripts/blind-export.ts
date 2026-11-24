// Usage:
//   npx tsx scripts/blind-export.ts                       -> exports ALL topics + exam papers to .audit-tmp/questions/
//   npx tsx scripts/blind-export.ts <topicId|exam> [dir]  -> exports a single target to <dir> (default .audit-tmp/questions)
// Writes <outDir>/<id>.questions.json: every MCQ + short question WITHOUT answer keys,
// for independent "blind" solving. Form requirements are included (not values).
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import type { AnswerSpec, ExamPaper, Paper, Question, TopicPractice } from "../lib/types.ts";
import { TOPIC_META } from "../lib/topics/meta.ts";

const EXAM_IDS = ["exam-bio","exam-chem","exam-phys","exam-skills"] as const;
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const [argId, argOutDir] = process.argv.slice(2);
const outDir = path.resolve(root, argOutDir || ".audit-tmp/questions");

const load = async <T>(rel: string, name: string): Promise<T | undefined> => {
  const p = path.join(root, rel);
  return existsSync(p) ? ((await import(pathToFileURL(p).href))[name] as T) : undefined;
};

function form(a: AnswerSpec): string {
  switch (a.type) {
    case "number":
      return `a single number${a.allowFraction === false ? " (as a decimal, not a fraction)" : ""}${a.standardForm ? " in standard form like 3.2 x 10^4" : ""}`;
    case "fraction":
      return `a fraction${a.simplest ? " in simplest form" : ""}${a.form === "mixed" ? " written as a mixed number like 2 1/3" : a.form === "improper" ? " written as an improper fraction" : ""}`;
    case "list":
      return `${a.values.length} numbers separated by commas${a.ordered ? " IN THE ORDER THE QUESTION ASKS" : " (any order)"}`;
    case "ratio":
      return `a ratio with ${a.parts.length} parts like 3:4${a.simplest ? " in simplest form" : ""}`;
    case "expression":
      return `an algebraic expression in plain text like 3x+2 or 2(x-1)${a.form && a.form !== "any" ? ` (${a.form})` : ""}`;
    case "text":
      return "a short word, phrase or mathematical expression";
  }
}

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

function serialize(qs: Question[]) {
  return qs
    .filter((q) => q.kind !== "written")
    .map((q) =>
      q.kind === "mcq"
        ? { id: q.id, kind: "mcq", question: q.question, hasDiagram: !!q.diagram, diagram: q.diagram, options: q.options.map((o, i) => ({ i, text: o })) }
        : { id: q.id, kind: "short", question: q.question, hasDiagram: !!q.diagram, diagram: q.diagram, answerFormat: form(q.answer) },
    );
}

mkdirSync(outDir, { recursive: true });
const targets = argId ? [argId] : [...TOPIC_META.map((t) => t.id), "exam"];
let total = 0;
for (const id of targets) {
  const out = serialize(await questionsFor(id));
  const dest = path.join(outDir, `${id}.questions.json`);
  writeFileSync(dest, JSON.stringify(out, null, 1));
  total += out.length;
  console.log(`${out.length} questions → ${dest}`);
}
if (!argId) console.log(`Total blind-exported questions: ${total}`);
