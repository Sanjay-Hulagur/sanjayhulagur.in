import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/PageIntro";
import { PageShell } from "@/components/layout/PageShell";
import { experiments } from "@/data/lab";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "AI Lab",
  description:
    "AI experiments from Sanjay Hulagur’s hospital work: document reading, narration, and automation beside production systems.",
  path: "/lab",
});

export default function LabPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="AI Lab"
        title="Experiments beside the production work."
        lede="Vision, document reading, narration, and automation. Each entry is something that was actually tried. Status is stated plainly."
      />
      <ol className="mt-12 divide-y divide-stone border-y border-stone">
        {experiments.map((experiment, index) => (
          <li key={experiment.title} className="grid gap-3 py-6 md:grid-cols-[4rem_minmax(0,1fr)_9rem]">
            <span className="text-[11px] tabular-nums tracking-[0.16em] text-quiet">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="font-serif text-2xl">{experiment.title}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-quiet">{experiment.summary}</p>
              {experiment.href ? (
                <p className="mt-3 text-sm">
                  {experiment.href.startsWith("/") ? (
                    <Link href={experiment.href} className="underline decoration-stone underline-offset-4 hover:decoration-brass">
                      {experiment.hrefLabel}
                    </Link>
                  ) : (
                    <a href={experiment.href} className="underline decoration-stone underline-offset-4 hover:decoration-brass">
                      {experiment.hrefLabel}
                    </a>
                  )}
                </p>
              ) : null}
            </div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-quiet">
              {experiment.status}
              {experiment.date ? ` · ${experiment.date}` : ""}
            </p>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
