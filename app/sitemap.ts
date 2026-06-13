import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ai-coding-plan-finder.vercel.app";
const lastModified = new Date("2026-06-13");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/blog"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.lastUpdated),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...blogRoutes];
}
