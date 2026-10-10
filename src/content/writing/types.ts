export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "ul"; items: string[] }
  | { type: "code"; language: string; code: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  minutes: number;
  medium?: string;
  body: ArticleBlock[];
};

export function articleHeadings(article: Article) {
  return article.body.flatMap((block) =>
    block.type === "h2" ? [{ id: block.id, text: block.text }] : [],
  );
}
