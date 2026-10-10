import { articlesByDate, getArticle } from "@/content/writing/articles";
import { articleHeadings } from "@/content/writing/types";

export function getArticleNeighbors(slug: string) {
  const ordered = articlesByDate();
  const index = ordered.findIndex((article) => article.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };

  return {
    previous: ordered[index + 1],
    next: ordered[index - 1],
  };
}

export { articleHeadings, articlesByDate, getArticle };
