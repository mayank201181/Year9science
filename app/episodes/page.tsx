import { Suspense } from "react";
import type { Metadata } from "next";
import { EpisodesHub } from "@/components/EpisodesHub";

export const metadata: Metadata = {
  title: "Sitcom TV — Totally Raotional: Year 9 Science",
  description: "All 8 narrated animated sitcom episodes for Tanglin Year 9 Science, with Examiner Mark-Scheme Trap roasts and 3 pause challenges per episode.",
};

export default function EpisodesPage() {
  return (
    <Suspense fallback={<p className="p-6 text-ink-2">Loading episodes…</p>}>
      <EpisodesHub />
    </Suspense>
  );
}
