import Link from "next/link";
import { RichText } from "@/components/writing/RichText";
import { TableOfContents } from "@/components/writing/TableOfContents";
import type { Article } from "@/content/writing/types";
import { articleHeadings } from "@/content/writing/types";
import { formatDate } from "@/lib/format";

export function ArticleLayout({
  article,
  previous,
  next,
}: {
  article: Article;
  previous?: Article;
  next?: Article;
}) {
  const headings = articleHeadings(article);

  return (
    <div className="lg:grid lg:grid-cols-[minmax(0,40rem)_14rem] lg:justify-between lg:gap-12">
      <article className="max-w-[42rem]">
        <p className="text-[11px] uppercase tracking-[0.16em] text-quiet">
          {article.category}
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl">
          {article.title}
        </h1>
        <p className="mt-4 text-sm text-quiet">
          {formatDate(article.date)} · {article.minutes} min · Sanjay Hulagur
        </p>
        {headings.length > 0 ? (
          <div className="mt-8 border border-stone p-4 lg:hidden">
            <TableOfContents headings={headings} />
          </div>
        ) : null}
        <div className="mt-8 space-y-5 text-[17px] leading-8 text-ink">
          {article.body.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={block.id}
                  id={block.id}
                  className="scroll-mt-8 pt-4 font-serif text-3xl tracking-tight"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={index} className="list-disc space-y-2 pl-5">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            if (block.type === "code") {
              return (
                <pre
                  key={index}
                  className="overflow-x-auto border border-stone bg-stone/50 p-4 text-[13px] leading-6 text-ink"
                >
                  <code>{block.code}</code>
                </pre>
              );
            }
            return (
              <p key={index}>
                <RichText text={block.text} />
              </p>
            );
          })}
        </div>
        {article.medium ? (
          <p className="mt-8 text-sm">
            <a
              href={article.medium}
              className="text-ink underline decoration-stone underline-offset-4 hover:decoration-brass"
              target="_blank"
              rel="noreferrer"
            >
              Full piece on Medium
            </a>
          </p>
        ) : null}
        <nav aria-label="More writing" className="mt-12 grid gap-4 border-t border-stone pt-6 sm:grid-cols-2">
          {previous ? (
            <Link href={`/writing/${previous.slug}`} className="text-sm">
              <span className="block text-[11px] uppercase tracking-[0.16em] text-quiet">Previous</span>
              <span className="mt-1 block font-serif text-xl text-ink">{previous.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/writing/${next.slug}`} className="text-sm sm:text-right">
              <span className="block text-[11px] uppercase tracking-[0.16em] text-quiet">Next</span>
              <span className="mt-1 block font-serif text-xl text-ink">{next.title}</span>
            </Link>
          ) : null}
        </nav>
        <p className="mt-8">
          <Link href="/writing" className="text-sm text-ink underline decoration-stone underline-offset-4 hover:decoration-brass">
            All writing
          </Link>
        </p>
      </article>
      {headings.length > 0 ? (
        <aside className="sticky top-8 hidden self-start lg:block">
          <TableOfContents headings={headings} />
        </aside>
      ) : null}
    </div>
  );
}
