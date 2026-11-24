"use client";
// 60-second Fluency Sprint for Year 9 Science
// timed (60 s) or untimed. Questions come from the level 1–2 skill drills.
// Wrong answers never stop the flow — they come back a few questions later
// and are listed at the end. Scores are only ever compared with your own best.
import { useEffect, useEffectEvent, useRef, useState, type FormEvent } from "react";
import { flushSync } from "react-dom";
import type { Drill, Rng } from "@/lib/drills/types";
import { makeRng } from "@/lib/drills/rng";
import { ALL_DRILLS, freshSeed } from "@/lib/drills";
import { checkAnswer } from "@/lib/answerCheck";
import { todayISO } from "@/lib/dates";
import { useStore } from "@/lib/store";
import {
  SPRINT_MODES,
  SPRINT_MODE_INFO,
  SPRINT_SECONDS,
  sprintAwardKey,
  sprintBestKey,
  sprintItem,
  sprintPool,
  sprintPoolSizes,
  sprintStars,
  type SprintItem,
  type SprintMode,
} from "@/lib/sprint";
import { Diagram, RichInline } from "./Rich";

type Phase = "pick" | "run" | "done";

interface Current {
  item: SprintItem;
  /** An item missed earlier, coming back for a second go. */
  retry: boolean;
}

interface Miss {
  key: string;
  prompt: string;
  answerText: string;
  diagram?: string;
  /** What the learner typed ("" = passed). */
  given: string;
  /** Answered correctly when it came back. */
  fixed: boolean;
}

interface Run {
  mode: SprintMode;
  timed: boolean;
  pool: Drill[];
  score: number;
  answered: number;
  misses: Miss[];
  /** Missed items waiting to come back, due after `due` answers. */
  queue: { item: SprintItem; due: number }[];
  /** Recent item keys (avoid immediate repeats). */
  recent: string[];
  current: Current | null;
  startedAt: number;
  endAt: number;
  finished: boolean;
}

interface Flash {
  n: number;
  ok: boolean;
  /** The correct answer (shown on a miss). */
  answerText: string;
  /** Extra feedback: a trap explanation, a sign slip, or a spelling note. */
  hint?: string;
}

interface Summary {
  mode: SprintMode;
  timed: boolean;
  score: number;
  answered: number;
  seconds: number;
  stoppedEarly: boolean;
  misses: Miss[];
  prevBest?: number;
  newBest: boolean;
  starsWanted: number;
  starsEarned: number;
}

const DURATION_MS = SPRINT_SECONDS * 1000;
const RETRY_GAP = [3, 5] as const;

/** How many drills each mode can draw from (the registry is static). */
const POOL_SIZES = sprintPoolSizes(ALL_DRILLS);
const ANY_AVAILABLE = SPRINT_MODES.some((m) => POOL_SIZES[m] > 0);

/** Wall-clock time (only ever read in handlers and timers). */
function clock(): number {
  return Date.now();
}

function idleRun(): Run {
  return { mode: "mixed", timed: true, pool: [], score: 0, answered: 0, misses: [], queue: [], recent: [], current: null, startedAt: 0, endAt: 0, finished: true };
}

/** Next item: a due retry first, otherwise a fresh one that isn't a recent repeat. */
function draw(run: Run, rng: Rng): Current | null {
  const dueIdx = run.queue.findIndex((p) => p.due <= run.answered);
  let next: Current | null = null;
  if (dueIdx >= 0) {
    const [p] = run.queue.splice(dueIdx, 1);
    next = { item: p.item, retry: true };
  } else {
    const seen = (it: SprintItem) => run.recent.includes(it.key) || run.queue.some((p) => p.item.key === it.key);
    let item = sprintItem(run.pool, rng);
    for (let i = 0; i < 30 && item && seen(item); i++) item = sprintItem(run.pool, rng);
    if (item) next = { item, retry: false };
    else if (run.queue.length) {
      // Couldn't make a fresh one: bring a missed item back early instead.
      const [p] = run.queue.splice(0, 1);
      next = { item: p.item, retry: true };
    }
  }
  if (next) run.recent = [...run.recent, next.item.key].slice(-12);
  return next;
}

/** Text size for a prompt: short prompts big, long sentences smaller. */
function promptSize(prompt: string): string {
  const len = prompt.replace(/\{\{|\}\}|\*\*/g, "").trim().length;
  if (len <= 14) return "text-4xl sm:text-5xl";
  if (len <= 70) return "text-2xl sm:text-3xl";
  return "text-xl sm:text-2xl";
}

export function SprintRunner() {
  const store = useStore();
  const [phase, setPhase] = useState<Phase>("pick");
  const [timed, setTimed] = useState(true);
  const [mode, setMode] = useState<SprintMode>("mixed");
  const [cur, setCur] = useState<Current | null>(null);
  const [value, setValue] = useState("");
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [flash, setFlash] = useState<Flash | null>(null);
  const [note, setNote] = useState<string | null>(null);
  const [pickNote, setPickNote] = useState<string | null>(null);
  const [remaining, setRemaining] = useState(DURATION_MS);
  const [summary, setSummary] = useState<Summary | null>(null);

  const runRef = useRef<Run>(idleRun());
  const rngRef = useRef<Rng | null>(null);
  const flashSeq = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const doneHeadingRef = useRef<HTMLHeadingElement>(null);
  const pickHeadingRef = useRef<HTMLHeadingElement>(null);
  const prevPhase = useRef<Phase>("pick");

  const today = todayISO();

  // ---------------------------------------------------------------- actions

  function start(m: SprintMode, t: boolean) {
    const pool = sprintPool(m, ALL_DRILLS);
    const rng = makeRng(freshSeed());
    const now = clock();
    const run: Run = { mode: m, timed: t, pool, score: 0, answered: 0, misses: [], queue: [], recent: [], current: null, startedAt: now, endAt: now + DURATION_MS, finished: false };
    run.current = draw(run, rng);
    if (!run.current) {
      setPickNote(`There aren't any ${SPRINT_MODE_INFO[m].label.toLowerCase()} questions ready yet — try another set.`);
      setPhase("pick");
      return;
    }
    rngRef.current = rng;
    runRef.current = run;
    // Render the run screen synchronously so the answer box can take focus
    // inside this tap (which is what opens the keyboard on phones).
    flushSync(() => {
      setMode(m);
      setTimed(t);
      setCur(run.current);
      setValue("");
      setScore(0);
      setAnswered(0);
      setFlash(null);
      setNote(null);
      setPickNote(null);
      setRemaining(DURATION_MS);
      setSummary(null);
      setPhase("run");
    });
    inputRef.current?.focus();
    window.scrollTo({ top: 0 });
  }

  function finish(stoppedEarly: boolean) {
    const run = runRef.current;
    if (run.finished) return;
    run.finished = true;
    if (run.answered === 0 && (stoppedEarly || !run.timed)) {
      // Nothing answered: just go back to the mode picker.
      setPhase("pick");
      return;
    }
    const bestKey = sprintBestKey(run.mode);
    const prevBest = store.data.bests[bestKey];
    const newBest = run.timed && run.score > 0 ? store.setBest(bestKey, run.score) : false;
    const starsWanted = sprintStars(run.score);
    const starsEarned = starsWanted > 0 ? store.award(sprintAwardKey(run.mode, todayISO()), starsWanted) : 0;
    const seconds = Math.min(SPRINT_SECONDS, Math.max(1, Math.round((clock() - run.startedAt) / 1000)));
    setSummary({
      mode: run.mode,
      timed: run.timed,
      score: run.score,
      answered: run.answered,
      seconds,
      stoppedEarly,
      misses: run.misses.map((m) => ({ ...m })),
      prevBest,
      newBest,
      starsWanted,
      starsEarned,
    });
    setPhase("done");
  }

  /** Mark the current item. `raw === null` means the learner passed. */
  function answer(raw: string | null) {
    const run = runRef.current;
    const rng = rngRef.current;
    if (run.finished || !run.current || !rng) return;
    if (run.timed && clock() >= run.endAt) {
      finish(false);
      return;
    }
    const { item, retry } = run.current;
    let ok = false;
    let hint: string | undefined;
    if (raw !== null) {
      const res = checkAnswer(item.answer, raw);
      if (res.status === "invalid" || res.status === "close") {
        // Unreadable, or right idea in the wrong form: nudge, don't mark.
        setNote(res.feedback ?? (res.status === "close" ? "Nearly — check it and try again." : "I couldn't read that — try writing it another way."));
        inputRef.current?.focus();
        return;
      }
      ok = res.status === "correct";
      hint = res.feedback;
      if (!ok) {
        const trap = item.traps?.find((t) => checkAnswer(t.spec, raw).status === "correct");
        if (trap) hint = trap.feedback;
      }
    }
    run.answered += 1;
    const miss = run.misses.find((m) => m.key === item.key);
    if (ok) {
      run.score += 1;
      if (miss) miss.fixed = true;
    } else {
      if (miss) {
        miss.given = raw ?? "";
        miss.fixed = false;
      } else run.misses.push({ key: item.key, prompt: item.prompt, answerText: item.answerText, diagram: item.diagram, given: raw ?? "", fixed: false });
      // Not straight away — a few questions later, once.
      if (!retry) run.queue.push({ item, due: run.answered + rng.int(RETRY_GAP[0], RETRY_GAP[1]) });
    }
    const next = draw(run, rng);
    if (!next) {
      finish(false);
      return;
    }
    run.current = next;
    flashSeq.current += 1;
    setFlash({ n: flashSeq.current, ok, answerText: item.answerText, hint });
    setCur(run.current);
    setScore(run.score);
    setAnswered(run.answered);
    setValue("");
    setNote(null);
    inputRef.current?.focus();
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    const raw = value.trim();
    if (!raw) {
      inputRef.current?.focus();
      return;
    }
    answer(raw);
  }

  function backToPick() {
    setPhase("pick");
  }

  // ---------------------------------------------------------------- effects

  const onTick = useEffectEvent(() => {
    const left = runRef.current.endAt - clock();
    setRemaining(Math.max(0, left));
    if (left <= 0) finish(false);
  });

  useEffect(() => {
    if (phase !== "run" || !timed) return;
    const id = window.setInterval(() => onTick(), 250);
    return () => window.clearInterval(id);
  }, [phase, timed]);

  // In a timed run the ✓/✗ flash fades quickly; untimed keeps the last one visible.
  useEffect(() => {
    if (!flash || !timed || phase !== "run") return;
    const n = flash.n;
    const t = window.setTimeout(() => setFlash((f) => (f && f.n === n ? null : f)), flash.ok && !flash.hint ? 700 : 2200);
    return () => window.clearTimeout(t);
  }, [flash, timed, phase]);

  // Move focus to the new screen's heading for keyboard / screen-reader users
  // (the run screen focuses the answer box itself, inside the tap).
  useEffect(() => {
    if (prevPhase.current === phase) return;
    prevPhase.current = phase;
    if (phase === "done") {
      doneHeadingRef.current?.focus();
      window.scrollTo({ top: 0 });
    } else if (phase === "pick") {
      pickHeadingRef.current?.focus();
    }
  }, [phase]);

  // ---------------------------------------------------------------- views

  if (phase === "run" && cur) {
    const info = SPRINT_MODE_INFO[mode];
    const secsLeft = Math.ceil(remaining / 1000);
    const pctLeft = Math.max(0, Math.min(100, (100 * remaining) / DURATION_MS));
    const milestone = !timed ? "" : secsLeft <= 10 ? "10 seconds left" : secsLeft <= 30 ? "30 seconds left" : "";
    return (
      <div className="mx-auto max-w-xl space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="min-w-0 flex-1 truncate text-lg font-extrabold">
            <span aria-hidden>{info.icon}</span> {info.label}
            <span className="sr-only"> — {timed ? "timed sprint" : "untimed practice"}</span>
          </h1>
          <span className="chip border-0 bg-good-soft text-good tabular-nums" aria-label={`${score} correct`}>
            ✓ {score}
          </span>
          <button type="button" className="btn btn-ghost text-sm" onClick={() => finish(true)}>
            {timed ? "Stop" : "Finish"}
          </button>
        </div>

        {timed ? (
          <div className="flex items-center gap-3">
            <div
              className="h-2.5 flex-1 overflow-hidden rounded-full bg-surface-2"
              role="progressbar"
              aria-label="Time left"
              aria-valuemin={0}
              aria-valuemax={SPRINT_SECONDS}
              aria-valuenow={secsLeft}
              aria-valuetext={`${secsLeft} seconds left`}
            >
              <div className={`h-full rounded-full transition-[width] duration-300 ease-linear ${secsLeft <= 10 ? "bg-warn" : "bg-brand"}`} style={{ width: `${pctLeft}%` }} />
            </div>
            <span className={`w-12 text-right text-sm font-extrabold tabular-nums ${secsLeft <= 10 ? "text-warn" : "text-ink-2"}`} aria-hidden>
              {secsLeft}s
            </span>
            <span className="sr-only" aria-live="polite">
              {milestone}
            </span>
          </div>
        ) : (
          <p className="text-sm text-ink-2">
            Untimed practice · {answered} answered · take your time.
          </p>
        )}

        <section className="card p-5 text-center sm:p-8" aria-label="Current question">
          <p className="text-xs font-bold uppercase tracking-wide text-ink-2">
            Question {answered + 1}
            {cur.retry ? <span className="ml-2 rounded-full bg-info-soft px-2 py-0.5 normal-case tracking-normal text-info">Second go</span> : null}
          </p>
          <p
            className={`mt-3 flex min-h-[4.5rem] items-center justify-center font-extrabold leading-tight text-balance ${promptSize(cur.item.prompt)}`}
            aria-live="polite"
            aria-atomic="true"
          >
            <RichInline text={cur.item.prompt} />
          </p>
          {cur.item.diagram ? (
            <div className="mx-auto mt-3 max-w-sm">
              <Diagram svg={cur.item.diagram} />
            </div>
          ) : null}

          <form onSubmit={submit} className="mt-5" noValidate>
            <label htmlFor="sprint-answer" className="sr-only">
              Your answer
            </label>
            <input
              id="sprint-answer"
              ref={inputRef}
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setNote(null);
              }}
              inputMode="text"
              enterKeyHint="go"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              placeholder="Type your answer"
              aria-describedby="sprint-feedback"
              className="input mx-auto block h-14 max-w-sm text-center text-2xl font-bold"
            />
            <div className="mt-3 flex items-center justify-center gap-2">
              <button type="submit" className="btn btn-primary h-12 px-6" onMouseDown={(e) => e.preventDefault()}>
                Enter <span aria-hidden>↵</span>
              </button>
              <button type="button" className="btn btn-ghost h-12" onMouseDown={(e) => e.preventDefault()} onClick={() => answer(null)}>
                Pass
              </button>
            </div>
          </form>

          <div id="sprint-feedback" className="mt-4 flex min-h-[2.75rem] items-center justify-center" aria-live="polite">
            {note ? (
              <span className="rounded-xl bg-info-soft px-3 py-1.5 text-sm font-semibold text-info">{note}</span>
            ) : flash ? (
              flash.ok ? (
                <span key={flash.n} className="animate-pop rounded-xl bg-good-soft px-3 py-1.5 text-left">
                  <span className="font-extrabold text-good">✓ Correct</span>
                  {flash.hint ? <span className="block text-xs text-ink-2">{flash.hint}</span> : null}
                </span>
              ) : (
                <span key={flash.n} className="animate-pop rounded-xl bg-bad-soft px-3 py-1.5 text-left">
                  <span className="font-extrabold text-bad">✗ </span>
                  <span className="text-ink">
                    Answer: <span className="font-bold">
                      <RichInline text={flash.answerText} />
                    </span>
                  </span>
                  {flash.hint ? <span className="block text-xs text-ink-2">{flash.hint}</span> : null}
                </span>
              )
            ) : null}
          </div>
        </section>

        <p className="text-center text-xs text-ink-2">
          Press <kbd className="rounded border border-line bg-surface-2 px-1">Enter</kbd> to answer. Missed one? Keep going — it&apos;ll come back in a few questions.
        </p>
      </div>
    );
  }

  if (phase === "done" && summary) {
    const info = SPRINT_MODE_INFO[summary.mode];
    const accuracy = summary.answered ? Math.round((100 * summary.score) / summary.answered) : 0;
    const still = summary.misses.filter((m) => !m.fixed).length;
    let bestLine: string | null = null;
    if (summary.timed) {
      if (summary.newBest && summary.prevBest !== undefined) bestLine = `🏅 New personal best! Up from ${summary.prevBest}.`;
      else if (summary.newBest) bestLine = "🏁 Your first timed score — now you have a best to beat.";
      else if (summary.prevBest !== undefined && summary.score === summary.prevBest) bestLine = `You matched your best of ${summary.prevBest}. That's real consistency.`;
      else if (summary.prevBest !== undefined) bestLine = `Your best is ${summary.prevBest}. Some days are quicker than others — every run still builds recall.`;
      else bestLine = "Every run counts. Untimed practice is a great way to build up speed calmly.";
    }
    let starLine: string;
    if (summary.starsEarned > 0) starLine = `+${summary.starsEarned} ⭐ for today's ${info.label.toLowerCase()} ${summary.timed ? "sprint" : "practice"}.`;
    else if (summary.starsWanted > 0) starLine = `You've already collected today's stars for ${info.label.toLowerCase()} — the practice still counts.`;
    else starLine = "Get 5 right in one go to earn a star (up to 5 ⭐ per sprint type each day).";

    return (
      <div className="mx-auto max-w-xl space-y-4">
        <section className="card p-6 text-center sm:p-8" aria-labelledby="sprint-done">
          <p className="text-sm font-bold text-ink-2">
            <span aria-hidden>{info.icon}</span> {info.label} · {summary.timed ? "timed" : "untimed"}
          </p>
          <h1 id="sprint-done" ref={doneHeadingRef} tabIndex={-1} className="mt-1 text-2xl font-extrabold outline-none">
            {summary.timed ? (summary.stoppedEarly ? "Sprint stopped" : "Time’s up!") : "Practice complete"}
          </h1>
          <p className="mt-4 text-6xl font-black tabular-nums text-brand">{summary.score}</p>
          <p className="mt-1 font-bold">
            {summary.timed ? `correct in ${summary.seconds} ${summary.seconds === 1 ? "second" : "seconds"}` : `correct out of ${summary.answered}`}
          </p>
          <p className="mt-1 text-sm text-ink-2">
            {summary.answered ? `${summary.answered} answered · ${accuracy}% accurate` : "No answers this time — have another go when you're ready."}
          </p>
          {bestLine ? (
            <p className={`mt-4 rounded-xl px-4 py-2 font-bold ${summary.newBest ? "animate-pop bg-accent-soft" : "bg-surface-2"}`} role="status">
              {bestLine}
            </p>
          ) : null}
          <p className="mt-3 text-sm text-ink-2">{starLine}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <button type="button" className="btn btn-primary" onClick={() => start(summary.mode, summary.timed)}>
              Again
            </button>
            <button type="button" className="btn btn-secondary" onClick={backToPick}>
              Change mode
            </button>
            <button type="button" className="btn btn-ghost" onClick={() => start(summary.mode, !summary.timed)}>
              {summary.timed ? "Try it untimed" : "Try a timed sprint"}
            </button>
          </div>
        </section>

        <section className="card p-4 sm:p-5" aria-labelledby="sprint-missed">
          <h2 id="sprint-missed" className="section-title">
            {summary.misses.length ? "Terms to look at again" : "No slips"}
          </h2>
          {summary.misses.length ? (
            <>
              <ul className="mt-3 divide-y divide-line">
                {summary.misses.map((m) => (
                  <li key={m.key} className="space-y-1 py-2.5">
                    <p className="font-semibold">
                      <RichInline text={m.prompt} />
                    </p>
                    {m.diagram ? (
                      <div className="max-w-xs">
                        <Diagram svg={m.diagram} />
                      </div>
                    ) : null}
                    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-2">
                      <span>
                        Answer:{" "}
                        <span className="font-bold text-ink">
                          <RichInline text={m.answerText} />
                        </span>
                      </span>
                      {m.given ? (
                        <span>
                          You wrote <span className="font-bold text-ink">{m.given}</span>
                        </span>
                      ) : (
                        <span>Passed</span>
                      )}
                      {m.fixed ? <span className="chip border-0 bg-good-soft text-good">✓ Right when it came back</span> : null}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-ink-2">
                {still
                  ? "Say each answer out loud, cover it, and say it again — or make a quick flashcard. Then try another sprint tomorrow: that's how key terms stick."
                  : "You fixed every one when it came back — that's exactly how key terms stick."}
              </p>
            </>
          ) : (
            <p className="mt-2 text-ink-2">Every answer was right. Lovely, accurate work.</p>
          )}
        </section>

        <p className="text-center text-sm text-ink-2">
          Only compare with your own best. Untimed practice is just as good for learning — accuracy first, and speed follows.
        </p>
      </div>
    );
  }

  // ------------------------------------------------------------ mode picker
  return (
    <div className="space-y-6">
      <header>
        <h1 ref={pickHeadingRef} tabIndex={-1} className="text-2xl font-extrabold tracking-tight outline-none sm:text-3xl">
          <span aria-hidden>⚡</span> 60s Fluency Sprint
        </h1>
        <p className="mt-1 max-w-2xl text-ink-2">
          Quick-fire recall across every Year 9 Science strand. When core recall is instant, your brain is free for multi-mark problem solving.
        </p>
      </header>

      {!ANY_AVAILABLE ? (
        <section className="card p-5 text-center sm:p-6" role="status">
          <p className="text-3xl" aria-hidden>
            🗺️
          </p>
          <h2 className="mt-2 text-lg font-extrabold">Sprints unlock as soon as drills are added</h2>
          <p className="mt-1 text-sm text-ink-2">
            The key-term questions are still being written. Check back soon — in the meantime, the topic guides and quizzes are ready to go.
          </p>
        </section>
      ) : (
        <>
          <fieldset className="card p-4 sm:p-5">
            <legend className="sr-only">Timing</legend>
            <div className="grid grid-cols-2 gap-2">
              {[
                { t: true, title: "⏱ Timed · 60 s", sub: "How many in a minute?" },
                { t: false, title: "🧘 Untimed practice", sub: "No clock — stop whenever." },
              ].map((o) => {
                const on = timed === o.t;
                return (
                  <label
                    key={String(o.t)}
                    className={`flex cursor-pointer flex-col rounded-xl border-2 px-3 py-2.5 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand ${on ? "border-brand bg-brand-soft" : "border-line hover:bg-surface-2"}`}
                  >
                    <input type="radio" name="sprint-timing" className="sr-only" checked={on} onChange={() => setTimed(o.t)} />
                    <span className="font-extrabold">{o.title}</span>
                    <span className="text-xs text-ink-2">{o.sub}</span>
                  </label>
                );
              })}
            </div>
            <p className="mt-3 text-sm text-ink-2">
              {timed
                ? "Answer as many as you can in 60 seconds. Wrong answers don't stop you — they come back a little later."
                : "Untimed practice is just as good for learning: get them right first, and speed follows on its own."}
            </p>
          </fieldset>

          <section aria-labelledby="sprint-modes" className="space-y-3">
            <h2 id="sprint-modes" className="section-title">
              Choose your unit
            </h2>
            {pickNote ? (
              <p className="rounded-xl bg-info-soft px-3 py-2 text-sm font-semibold text-info" role="status">
                {pickNote}
              </p>
            ) : null}
            <div className="grid gap-3 sm:grid-cols-2">
              {SPRINT_MODES.map((m) => {
                const info = SPRINT_MODE_INFO[m];
                const ready = POOL_SIZES[m] > 0;
                const best = store.data.bests[sprintBestKey(m)];
                const starredToday = !!store.data.awarded[sprintAwardKey(m, today)];
                return (
                  <button
                    key={m}
                    type="button"
                    disabled={!ready}
                    onClick={() => start(m, timed)}
                    className={`card flex h-full flex-col items-start gap-2 p-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${ready ? "hover:border-brand" : "cursor-not-allowed opacity-60"} ${m === "mixed" ? "sm:col-span-2" : ""}`}
                  >
                    <span className="flex w-full items-center gap-3">
                      <span className="text-3xl" aria-hidden>
                        {info.icon}
                      </span>
                      <span className="min-w-0 flex-1 text-lg font-extrabold leading-tight">{info.label}</span>
                      <span className="chip shrink-0 tabular-nums">{!ready ? "Coming soon" : best !== undefined ? `🏅 Best ${best}` : "No best yet"}</span>
                    </span>
                    <span className="text-sm text-ink-2">{info.description}</span>
                    <span className="text-sm">
                      <span className="sr-only">For example: </span>
                      {info.example}
                    </span>
                    <span className="mt-auto flex w-full items-center justify-between gap-2 pt-1 text-sm font-bold">
                      {ready ? (
                        <span className="text-brand">
                          {timed ? "Start 60-second sprint" : "Start practice"} <span aria-hidden>→</span>
                        </span>
                      ) : (
                        <span className="text-ink-2">Unlocks when this unit&apos;s drills are added</span>
                      )}
                      {starredToday ? <span className="text-xs font-semibold text-ink-2">⭐ today&apos;s stars collected</span> : null}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        </>
      )}

      <section className="card p-4 text-sm sm:p-5" aria-labelledby="sprint-how">
        <h2 id="sprint-how" className="font-extrabold">
          How it works
        </h2>
        <ul className="rich-ul mt-2 space-y-1 text-ink-2">
          <li>Type your answer and press Enter — the next one appears straight away. Spelling doesn&apos;t have to be perfect: small slips are accepted.</li>
          <li>Missed one? Keep going. It comes back a few questions later, and you&apos;ll see every term to revisit at the end.</li>
          <li>Earn 1 ⭐ for every 5 correct, up to 5 ⭐ for each type of sprint per day.</li>
          <li>Personal bests are for timed sprints. Untimed practice is just as valuable — calm, accurate recall is what makes you fast.</li>
        </ul>
      </section>
    </div>
  );
}
