import Link from "next/link";
import { formatDate } from "@/lib/format";
import type { Article } from "@/content/writing/types";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="border-t border-stone py-6">
      <p className="text-[11px] uppercase tracking-[0.16em] text-quiet">
        {formatDate(article.date)} · {article.category} · {article.minutes} min
      </p>
      <h2 className="mt-2 font-serif text-3xl tracking-tight">
        <Link href={`/writing/${article.slug}`} className="text-ink">
          {article.title}
        </Link>
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-quiet">{article.excerpt}</p>
    </article>
  );
}
