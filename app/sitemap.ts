import type { MetadataRoute } from "next";
import { PORTFOLIO_FOLDERS } from "@/lib/portfolio";
import { PROJECTS } from "@/lib/projects";
import { BOOKS } from "@/lib/reading";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://eunsoo-website.vercel.app";

  const page = (path: string, priority: number) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
  });

  return [
    page("", 1),
    page("/portfolio", 0.8),
    ...PORTFOLIO_FOLDERS.map((f) => page(`/portfolio/${f.slug}`, 0.8)),
    page("/projects", 0.7),
    ...PROJECTS.map((p) => page(`/projects/${p.slug}`, 0.7)),
    page("/reading", 0.6),
    ...BOOKS.map((b) => page(`/reading/${b.slug}`, 0.6)),
  ];
}
