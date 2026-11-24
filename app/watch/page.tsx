import type { Metadata } from "next";
import { TOPICS } from "@/lib/server/content";
import { WatchHub } from "@/components/WatchHub";

export const metadata: Metadata = {
  title: "Watch — Narrated Year 9 Science Sitcom Episodes",
  description: "Narrated animated sitcom episodes with Examiner Mark-Scheme Trap beats and 3 pause challenges for every Year 9 Science topic.",
};

export default function WatchPage() {
  const items = TOPICS.map((t, idx) => ({
    id: t.id,
    num: idx + 1,
    title: t.title,
    icon: t.icon,
    strand: t.strand,
    summary: t.summary,
  }));
  return <WatchHub topics={items} />;
}
