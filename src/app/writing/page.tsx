import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { PageShell } from "@/components/layout/PageShell";
import { ArticleCard } from "@/components/writing/ArticleCard";
import { articlesByDate } from "@/content/writing/articles";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Writing",
  description:
    "Essays by Sanjay Hulagur on hospital software, production incidents, and practical AI. Longer procedures live on Medium.",
  path: "/writing",
});

const medium = [
  {
    date: "Jun 2026",
    title: "Why our SQL Server became unusable with only 7 users",
    href: "https://medium.com/@sanjayhulagur/why-our-sql-server-became-unusable-with-only-7-users-d868cdbb509a",
  },
  {
    date: "Jun 2026",
    title: "Installing Strapi in production: the problems nobody mentions",
    href: "https://medium.com/@sanjayhulagur/installing-strapi-in-production-the-problems-nobody-mentions-efc506be0f95",
  },
  {
    date: "Jan 2026",
    title: "Migrating a Microsoft SQL Server database between Linux servers",
    href: "https://medium.com/@sanjayhulagur/migrating-a-microsoft-sql-server-database-between-linux-servers-eb34f13e7646",
  },
  {
    date: "Jan 2026",
    title: "How AI saved me from drowning in hospital pricing spreadsheets",
    href: "https://medium.com/@sanjayhulagur/how-ai-saved-me-from-drowning-in-hospital-pricing-spreadsheets-6f44b74f8bd8",
  },
  {
    date: "Jan 2026",
    title: "When “502 Bad Gateway” isn’t your fault",
    href: "https://medium.com/@sanjayhulagur/when-502-bad-gateway-isnt-your-fault-a-real-jenkins-traefik-docker-debugging-story-732daa5f005a",
  },
  {
    date: "Dec 2025",
    title: "How I turned hospital photos into a film in a few hours",
    href: "https://medium.com/@sanjayhulagur/how-i-turned-simple-hospital-photos-into-a-full-video-using-ai-in-just-a-few-hours-7ffdfc3b1ff3",
  },
  {
    date: "Nov 2025",
    title: "Blue-green deployments",
    href: "https://medium.com/@sanjayhulagur/%EF%B8%8F-hey-i-learned-about-blue-green-deployments-today-a395be97df6d",
  },
  {
    date: "Jan 2024",
    title: "Accountability buddies",
    href: "https://medium.com/@sanjayhulagur/accountability-buddies-b485d4c37912",
  },
];

export default function WritingPage() {
  const articles = articlesByDate();

  return (
    <PageShell>
      <PageIntro
        eyebrow="Writing"
        title="Notes from the work."
        lede="Short essays from hospital software and production. The longer technical write-ups live on Medium and are linked from each piece."
      />
      <div className="mt-12 border-b border-stone">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
      <section className="mt-16">
        <h2 className="font-serif text-3xl">On Medium</h2>
        <p className="mt-2 text-sm text-quiet">
          <a className="underline decoration-stone underline-offset-4 hover:decoration-brass" href={site.socials.find((social) => social.label === "Medium")?.href}>
            Profile
          </a>
        </p>
        <ul className="mt-4 divide-y divide-stone border-y border-stone">
          {medium.map((piece) => (
            <li key={piece.href}>
              <a href={piece.href} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between" target="_blank" rel="noreferrer">
                <span className="font-serif text-xl">{piece.title}</span>
                <span className="text-sm text-quiet">{piece.date}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
