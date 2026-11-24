import test from "node:test";
import assert from "node:assert/strict";
import {
  SPRINT_MODES,
  SPRINT_MODE_INFO,
  SPRINT_MODE_STRAND,
  isSprintMode,
  sprintAwardKey,
  sprintBestKey,
  sprintItem,
  sprintPool,
  sprintPoolSizes,
  sprintStars,
  type SprintStrandMode,
} from "../lib/sprint.ts";
import { makeRng } from "../lib/drills/rng.ts";
import { checkAnswer } from "../lib/answerCheck.ts";
import { TOPIC_META } from "../lib/topics/meta.ts";
import type { Drill } from "../lib/drills/types.ts";

function bankDrill(topicId: string, level: 1 | 2 | 3, slug = "terms"): Drill {
  const bank = [
    ["Sample recall prompt A", "Alpha"],
    ["Sample recall prompt B", "Beta"],
    ["Sample recall prompt C", "Gamma"],
    ["Sample recall prompt D", "Delta"],
  ] as const;
  return {
    id: `${topicId}.${slug}`,
    topicId,
    title: "Fake drill",
    level,
    generate(rng, tier) {
      assert.equal(tier, 1, "sprints always generate at tier 1");
      const [prompt, term] = rng.pick(bank);
      return { prompt: `${prompt} (${topicId})`, answer: { type: "text", accept: [term] }, solution: [term] };
    },
  };
}

function numberDrill(topicId: string): Drill {
  return {
    id: `${topicId}.num`,
    topicId,
    title: "Fake numeric drill",
    level: 1,
    generate(rng) {
      const k = rng.int(1, 8);
      return {
        prompt: `Compute ${k} × 10`,
        answer: { type: "number", value: k * 10, tolerance: 0 },
        solution: [`${k} × 10 = ${k * 10}`],
      };
    },
  };
}

const strandModes = Object.keys(SPRINT_MODE_STRAND) as SprintStrandMode[];
const firstTopic = (strand: string) => TOPIC_META.find((t) => t.strand === strand)!.id;

test("modes cover all strands plus mixed, with info and storage keys", () => {
  assert.ok(SPRINT_MODES.includes("mixed"));
  assert.equal(SPRINT_MODES.length, strandModes.length + 1);
  for (const m of SPRINT_MODES) {
    assert.ok(isSprintMode(m));
    assert.ok(SPRINT_MODE_INFO[m].label && SPRINT_MODE_INFO[m].icon);
    assert.equal(sprintBestKey(m), `sprint:${m}`);
    assert.equal(sprintAwardKey(m, "2026-01-02"), `sprint:2026-01-02:${m}`);
  }
  for (const strand of Object.values(SPRINT_MODE_STRAND)) assert.ok(TOPIC_META.some((t) => t.strand === strand), strand);
  assert.ok(!isSprintMode("nonexistent"));
  assert.ok(!isSprintMode(undefined));
});

test("stars: 1 per 5 correct, capped at 5", () => {
  assert.deepEqual([0, 4, 5, 12, 25, 99].map(sprintStars), [0, 0, 1, 2, 5, 5]);
});

test("no drills: every pool is empty and sprintItem returns null", () => {
  const sizes = sprintPoolSizes([]);
  for (const m of SPRINT_MODES) assert.equal(sizes[m], 0);
  assert.equal(sprintItem([], makeRng(1)), null);
});

test("pools: strand modes take their strand's level 1–2 drills; mixed takes all", () => {
  const m1 = strandModes[0];
  const m2 = strandModes[1];
  const t1 = firstTopic(SPRINT_MODE_STRAND[m1]);
  const t2 = firstTopic(SPRINT_MODE_STRAND[m2]);
  const drills = [bankDrill(t1, 1), bankDrill(t1, 3, "hard"), bankDrill(t2, 2), bankDrill("not-a-topic", 1)];
  assert.deepEqual(sprintPool(m1, drills).map((d) => d.id), [`${t1}.terms`]);
  assert.deepEqual(sprintPool(m2, drills).map((d) => d.id), [`${t2}.terms`]);
  assert.deepEqual(sprintPool("mixed", drills).map((d) => d.id).sort(), [`${t1}.terms`, `${t2}.terms`].sort());
});

test("items carry a checkable answer, preserve tolerance, and display the correct answer", () => {
  const t1 = firstTopic(SPRINT_MODE_STRAND[strandModes[0]]);
  const pool = sprintPool("mixed", [bankDrill(t1, 1), numberDrill(t1)]);
  const rng = makeRng(42);
  const keys = new Set<string>();
  for (let i = 0; i < 200; i++) {
    const it = sprintItem(pool, rng)!;
    assert.ok(it, "always produces an item");
    assert.ok(it.prompt && it.answerText && it.key);
    keys.add(it.key);
    if (it.answer.type === "text") {
      assert.equal(it.answerText, it.answer.accept[0]);
      assert.equal(checkAnswer(it.answer, it.answer.accept[0].toUpperCase()).status, "correct");
    } else if (it.answer.type === "number") {
      assert.equal(it.answerText, String(it.answer.value));
      assert.equal(checkAnswer(it.answer, String(it.answer.value)).status, "correct");
    }
  }
  assert.ok(keys.size > 8, "varied items");
});

test("a drill that throws is skipped, not fatal", () => {
  const m1 = strandModes[0];
  const t1 = firstTopic(SPRINT_MODE_STRAND[m1]);
  const broken: Drill = { id: `${t1}.broken`, topicId: t1, title: "Broken", level: 1, generate() { throw new Error("boom"); } };
  const pool = sprintPool(m1, [broken, bankDrill(t1, 1)]);
  const rng = makeRng(7);
  for (let i = 0; i < 50; i++) assert.ok(sprintItem(pool, rng));
  assert.equal(sprintItem(sprintPool(m1, [broken]), makeRng(3)), null);
});
