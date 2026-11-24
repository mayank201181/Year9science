"use client";
// "Ask Dr Curie" — AoPS-style Year 9 Science CS tutor panel. Gives hints, not answers.
import { useEffect, useRef, useState } from "react";
import { useStore } from "@/lib/store";
import { Rich } from "./Rich";

interface Turn {
  role: "user" | "assistant";
  content: string;
}

const PRESETS: { label: string; prompt: string }[] = [
  { label: "Give me a hint", prompt: "Can you give me a hint for the next step? Don't tell me the answer." },
  { label: "Explain simply", prompt: "Can you explain this concept simply, with a short Year 9 Science example?" },
  { label: "Mark-scheme trap?", prompt: "What is the main Year 9 Science mark-scheme trap to watch out for here?" },
  { label: "Another example", prompt: "Can you give me a similar practice example to try myself?" },
];

export function AskAI({ context, compact }: { context: string; compact?: boolean }) {
  const { mode, aiAvailable, accountsAvailable } = useStore();
  const [open, setOpen] = useState(false);
  const [turns, setTurns] = useState<Turn[]>([]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "nearest" });
  }, [turns, busy]);

  if (!aiAvailable || (mode === "guest" && !accountsAvailable)) return null;

  async function send(text: string) {
    const q = text.trim();
    if (!q || busy) return;
    const next = [...turns, { role: "user" as const, content: q }];
    setTurns(next);
    setDraft("");
    setBusy(true);
    setError(null);
    try {
      const r = await fetch("/api/ai", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: next, context }) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || typeof j.reply !== "string") setError(typeof j.error === "string" ? j.error : "Dr Curie couldn't answer just now.");
      else setTurns([...next, { role: "assistant", content: j.reply }]);
    } catch {
      setError("Couldn't reach Dr Curie. Check your internet connection.");
    } finally {
      setBusy(false);
    }
  }

  if (!open) {
    return (
      <button type="button" className={compact ? "btn btn-ghost btn-sm" : "btn btn-secondary"} onClick={() => setOpen(true)}>
        🔬 Ask Dr Curie
      </button>
    );
  }

  return (
    <div className="w-full basis-full rounded-2xl border border-line bg-surface p-3 sm:p-4" role="region" aria-label="Dr Curie tutor">
      <div className="mb-2 flex items-center justify-between">
        <div className="font-extrabold">🔬 Dr Curie</div>
        <button type="button" className="btn btn-ghost btn-sm" onClick={() => setOpen(false)} aria-label="Close tutor">
          ✕
        </button>
      </div>
      {mode === "guest" ? (
        <p className="text-sm text-ink-2">Dr Curie is available with a family account (so a grown-up can manage API usage). Sign in from the menu to enable live AI chat.</p>
      ) : (
        <>
          <p className="text-xs text-ink-2">I give guiding hints and Year 9 Science mark-scheme tips — you do the thinking! 🧠</p>
          <div className="mt-2 max-h-80 space-y-2 overflow-y-auto">
            {turns.map((t, i) => (
              <div key={i} className={t.role === "user" ? "ml-8 rounded-xl bg-brand-soft px-3 py-2 text-sm" : "mr-4 rounded-xl bg-surface-2 px-3 py-2 text-sm"}>
                {t.role === "assistant" ? <Rich text={t.content} /> : t.content}
              </div>
            ))}
            {busy ? <div className="mr-4 rounded-xl bg-surface-2 px-3 py-2 text-sm text-ink-2">Dr Curie is thinking…</div> : null}
            {error ? <div className="rounded-xl bg-bad-soft px-3 py-2 text-sm">{error}</div> : null}
            <div ref={endRef} />
          </div>
          {turns.length === 0 ? (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {PRESETS.map((p) => (
                <button key={p.label} type="button" className="chip hover:bg-brand-soft" onClick={() => send(p.prompt)}>
                  {p.label}
                </button>
              ))}
            </div>
          ) : null}
          <form
            className="mt-2 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              void send(draft);
            }}
          >
            <input className="input text-sm" value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Ask about this…" maxLength={500} aria-label="Your question" />
            <button type="submit" className="btn btn-primary btn-sm" disabled={busy || !draft.trim()}>
              Ask
            </button>
          </form>
        </>
      )}
    </div>
  );
}
