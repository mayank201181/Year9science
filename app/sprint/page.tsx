import type { Metadata } from "next";
import { SprintRunner } from "@/components/SprintRunner";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "60s Fluency Sprint",
  description: "60-second Fluency Sprint — quick-fire recall across all Year 9 Science topics.",
};

export default function SprintPage() {
  return <SprintRunner />;
}
