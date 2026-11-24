// ---------------------------------------------------------------------------
// Self-mark suggestion helper for written Year 9 Science questions.
// Pure (no React) so it can be shared by QuestionCard, validate.ts and tests.
// ---------------------------------------------------------------------------
import type { WrittenQ } from "./types.ts";

const NON_ANSWER =
  /^(?:i\s*(?:don'?t|do\s*not)\s*know|idk|dunno|(?:i'?m\s*|i\s*am\s*)?(?:not\s*sure|unsure)|(?:i\s*have\s*)?no\s*idea|no\s*clue|not\s*a\s*clue|skip|pass|none|nothing|n\/a|na|tbd)+$/i;

function cleanMarkup(s: string): string {
  return (s ?? "")
    .replace(/\{\{|\}\}/g, "")
    .replace(/\*\*|__|\*|_|`/g, "")
    .replace(/[’‘]/g, "'")
    .replace(/[−–—]/g, "-");
}

interface WordSpan {
  norm: string;
  start: number;
  end: number;
}

function wordSpans(s: string): WordSpan[] {
  const out: WordSpan[] = [];
  for (const m of s.matchAll(/[a-z0-9]+(?:'[a-z0-9]+)*/gi)) {
    out.push({ norm: m[0].toLowerCase(), start: m.index!, end: m.index! + m[0].length });
  }
  return out;
}

/** Remove verbatim >=4-word runs copied directly from the question stem. */
function stripCopiedStemRuns(question: string, answer: string): string {
  const qWords = wordSpans(cleanMarkup(question));
  const aClean = cleanMarkup(answer);
  if (qWords.length < 4) return aClean;
  const ngrams = new Set<string>();
  for (let i = 0; i + 3 < qWords.length; i++) {
    ngrams.add(`${qWords[i].norm} ${qWords[i + 1].norm} ${qWords[i + 2].norm} ${qWords[i + 3].norm}`);
  }
  const aWords = wordSpans(aClean);
  if (aWords.length < 4) return aClean;
  const copied = new Uint8Array(aWords.length);
  for (let i = 0; i + 3 < aWords.length; i++) {
    const key = `${aWords[i].norm} ${aWords[i + 1].norm} ${aWords[i + 2].norm} ${aWords[i + 3].norm}`;
    if (ngrams.has(key)) {
      copied[i] = copied[i + 1] = copied[i + 2] = copied[i + 3] = 1;
    }
  }
  // Mask out contiguous runs of copied words (including punctuation/units glued to them).
  const chars = aClean.split("");
  let i = 0;
  while (i < aWords.length) {
    if (!copied[i]) {
      i++;
      continue;
    }
    let j = i;
    while (j + 1 < aWords.length && copied[j + 1]) j++;
    let from = aWords[i].start;
    let to = aWords[j].end;
    // Also consume adjacent unit/symbol glyphs like %, °, +, £, $ glued directly to the copied run
    while (from > 0 && /[%°+$£€₦]/.test(chars[from - 1])) from--;
    while (to < chars.length && /[%°+]/.test(chars[to])) to++;
    for (let p = from; p < to; p++) chars[p] = " ";
    i = j + 1;
  }
  return chars.join("");
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function matchesKeyword(haystack: string, rawKw: string): boolean {
  const kw = cleanMarkup(rawKw).toLowerCase().replace(/\s+/g, " ").trim();
  if (!kw) return false;
  if (kw.length <= 3) {
    const esc = escapeRegex(kw);
    const pre = /^[a-z]/.test(kw) ? "(?<![a-z0-9])" : /^[0-9]/.test(kw) ? "(?<![a-z0-9.])" : "";
    const post = /[a-z]$/.test(kw) ? "(?![a-z0-9])" : /[0-9]$/.test(kw) ? "(?![0-9.])" : "";
    return new RegExp(`${pre}${esc}${post}`).test(haystack);
  }
  return haystack.includes(kw);
}

export function suggestMarks(q: WrittenQ, text: string): boolean[] {
  const raw = cleanMarkup(text).trim();
  const alphaCheck = raw.replace(/[^a-z0-9'\s]/gi, " ").replace(/\s+/g, " ").trim();
  if (!alphaCheck || alphaCheck.replace(/\s+/g, "").length < 2 || NON_ANSWER.test(alphaCheck)) {
    return q.markScheme.map(() => false);
  }
  const stripped = stripCopiedStemRuns(q.question, text);
  const t = ` ${stripped.toLowerCase().replace(/\s+/g, " ").trim()} `;
  if (t.trim().length < 2) return q.markScheme.map(() => false);
  return q.markScheme.map((p) => p.keywords.some((k) => matchesKeyword(t, k)));
}
