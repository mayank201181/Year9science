import type { MetadataRoute } from "next";

// Web app manifest: makes Year 9 Science installable on iPad ("Add to Home Screen").
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Year 9 Science",
    short_name: "Year 9 Science",
    description: "Tanglin Trust School · Year 9 Science — discovery lessons, mark-saver traps, interactive explorables, skill drills, Exam Cram & mock papers.",
    lang: "en-GB",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#f5f6fb",
    theme_color: "#15803d",
    categories: ["education"],
    icons: [
      { src: "/api/appicon?size=192", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/api/appicon?size=512", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/api/appicon?size=512&maskable=1", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
