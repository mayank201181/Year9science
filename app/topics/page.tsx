import type { Metadata } from "next";
import { Suspense } from "react";
import { TopicsBrowser } from "@/components/TopicsBrowser";
import { topicSummaries } from "@/lib/server/content";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "All Year 9 Science Topics",
  description: "Every Tanglin Year 9 Science topic across Paper 1 (Computer Systems) and Paper 2 (Algorithms, Programming & Logic).",
};

function TopicsFallback() {
  return (
    <div className="space-y-2" role="status">
      <h1 className="text-2xl font-black tracking-tight sm:text-3xl">All Year 9 Science Topics</h1>
      <p className="text-ink-2">Loading topics…</p>
    </div>
  );
}

export default function TopicsPage() {
  return (
    <Suspense fallback={<TopicsFallback />}>
      <TopicsBrowser summaries={topicSummaries()} />
    </Suspense>
  );
}
