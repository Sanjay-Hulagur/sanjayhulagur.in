import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { PageShell } from "@/components/layout/PageShell";
import { EmptyState } from "@/components/ui/EmptyState";
import { reading } from "@/data/reading";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Reading",
  description: "Books and recommendations from Sanjay Hulagur.",
  path: "/reading",
});

export default function ReadingPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Reading"
        title="On the desk."
        lede="Books, essays, and notes. Titles are added by hand so the list stays personal."
      />
      <div className="mt-12">
        {reading.length === 0 ? (
          <EmptyState title="The list is empty on purpose.">
            <p>
              Add a title, author, category, and note in <code>src/data/reading.ts</code>. Nothing is invented here to fill the page.
            </p>
          </EmptyState>
        ) : (
          <ul className="divide-y divide-stone border-y border-stone">
            {reading.map((item) => (
              <li key={item.title} className="py-5">
                <p className="text-[11px] uppercase tracking-[0.16em] text-quiet">{item.category}</p>
                <h2 className="mt-2 font-serif text-2xl">{item.title}</h2>
                <p className="mt-1 text-sm">{item.author}</p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-quiet">{item.note}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </PageShell>
  );
}
