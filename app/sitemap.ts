import type { MetadataRoute } from "next";
import { BOOKS } from "@/lib/reading";

const PORTFOLIO_FOLDERS = ["primary-1-2", "primary-3", "primary-4"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://eunsoo-website.vercel.app";

  const portfolioRoutes = PORTFOLIO_FOLDERS.map((folder) => ({
    url: `${baseUrl}/portfolio/${folder}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const readingRoutes = BOOKS.map((book) => ({
    url: `${baseUrl}/reading/${book.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...portfolioRoutes,
    ...readingRoutes,
  ];
}
