import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/PageIntro";
import { PageShell } from "@/components/layout/PageShell";
import { playground } from "@/data/playground";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Playground",
  description: "Side projects and experiments by Sanjay Hulagur: film, prototypes, and production procedures.",
  path: "/playground",
});

export default function PlaygroundPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Playground"
        title="Side work with a result."
        lede="Films, prototypes, and procedures that earned a page. Nothing here is a button that pretends to run."
      />
      <ul className="mt-12 divide-y divide-stone border-y border-stone">
        {playground.map((item) => (
          <li key={item.title} className="grid gap-3 py-6 md:grid-cols-[8rem_minmax(0,1fr)]">
            <p className="text-[11px] uppercase tracking-[0.16em] text-quiet">{item.kind}</p>
            <div>
              <h2 className="font-serif text-3xl">{item.title}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-quiet">{item.summary}</p>
              <p className="mt-3">
                <Link href={item.href} className="text-sm underline decoration-stone underline-offset-4 hover:decoration-brass">
                  {item.hrefLabel}
                </Link>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
