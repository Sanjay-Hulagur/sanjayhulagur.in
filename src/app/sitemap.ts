import type { MetadataRoute } from "next";
import { articles } from "@/content/writing/articles";
import { projects } from "@/data/projects";
import { site } from "@/lib/site";

const paths = [
  "/",
  "/about",
  "/work",
  "/lab",
  "/writing",
  "/photos",
  "/tools",
  "/resume",
  "/speaking",
  "/now",
  "/reading",
  "/links",
  "/contact",
  "/journal",
  "/playground",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-10");
  return [
    ...paths.map((path) => ({
      url: new URL(path, site.url).toString(),
      lastModified,
    })),
    ...projects.map((project) => ({
      url: new URL(`/work/${project.slug}`, site.url).toString(),
      lastModified,
    })),
    ...articles.map((article) => ({
      url: new URL(`/writing/${article.slug}`, site.url).toString(),
      lastModified: new Date(article.date),
    })),
  ];
}
