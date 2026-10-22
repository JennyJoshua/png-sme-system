import type { MetadataRoute } from "next";

// Installable-app metadata only. There is NO service worker in Batch 1, so no offline support is claimed.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Wantok Business Manager",
    short_name: "Wantok",
    description: "Simple business records for small businesses in Papua New Guinea.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f7f4",
    theme_color: "#0b6b3a",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
