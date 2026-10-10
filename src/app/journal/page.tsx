import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { PageShell } from "@/components/layout/PageShell";
import { journal } from "@/data/journal";
import { formatDate } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Journal",
  description: "Short notes by Sanjay Hulagur from hospital software work.",
  path: "/journal",
});

export default function JournalPage() {
  const entries = [...journal].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <PageShell width="reading">
      <PageIntro
        eyebrow="Journal"
        title="Short notes."
        lede="Observations from work already in public. Add new ones in src/data/journal.ts."
      />
      <ol className="mt-12 divide-y divide-stone border-y border-stone">
        {entries.map((entry) => (
          <li key={entry.title} className="py-7">
            <time dateTime={entry.date} className="text-[11px] uppercase tracking-[0.16em] text-quiet">
              {formatDate(entry.date)}
            </time>
            <h2 className="mt-2 font-serif text-3xl">{entry.title}</h2>
            <p className="mt-3 text-[17px] leading-8">{entry.text}</p>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
