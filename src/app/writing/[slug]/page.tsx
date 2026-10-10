import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { ArticleLayout } from "@/components/writing/ArticleLayout";
import { articles, getArticle } from "@/content/writing/articles";
import { getArticleNeighbors } from "@/lib/content";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const url = new URL(`/writing/${article.slug}`, site.url).toString();
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      type: "article",
      publishedTime: article.date,
      authors: [site.name],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const { previous, next } = getArticleNeighbors(slug);
  const url = new URL(`/writing/${article.slug}`, site.url).toString();

  const structured = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { "@type": "Person", name: site.name, url: site.url },
    mainEntityOfPage: url,
    url,
  };

  return (
    <PageShell width="wide">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }} />
      <ArticleLayout article={article} previous={previous} next={next} />
    </PageShell>
  );
}
