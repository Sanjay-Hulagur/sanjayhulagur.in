import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { PageShell } from "@/components/layout/PageShell";
import { EmptyState } from "@/components/ui/EmptyState";
import { talks } from "@/data/speaking";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Speaking",
  description: "Talks and presentations by Sanjay Hulagur.",
  path: "/speaking",
});

export default function SpeakingPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Speaking"
        title="Talks and rooms."
        lede="Presentations are listed only when there is an event to point at."
      />
      <div className="mt-12">
        {talks.length === 0 ? (
          <EmptyState title="No talks are listed.">
            <p>
              Add a title, event, date, and link in <code>src/data/speaking.ts</code> when there is one.
            </p>
          </EmptyState>
        ) : (
          <ul className="divide-y divide-stone border-y border-stone">
            {talks.map((talk) => (
              <li key={talk.title} className="py-5">
                <h2 className="font-serif text-2xl">{talk.title}</h2>
                <p className="mt-1 text-sm text-quiet">{talk.event} · {talk.date} · {talk.location}</p>
                <p className="mt-2 max-w-2xl text-sm leading-6">{talk.summary}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </PageShell>
  );
}
