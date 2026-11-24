import type { Metadata } from "next";
import { SkillsMap } from "@/components/SkillsMap";
import { TOPICS } from "@/lib/server/content";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Skills & Procedural Drills",
  description: "Every Year 9 Science procedural skill — unlimited 3-tier seeded drills with instant feedback.",
};

export default function SkillsPage() {
  return <SkillsMap readyTopicIds={TOPICS.map((t) => t.id)} />;
}
