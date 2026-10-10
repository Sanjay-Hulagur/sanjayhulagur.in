import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { PageShell } from "@/components/layout/PageShell";
import { now } from "@/data/now";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Now",
  description: "What Sanjay Hulagur is working on now.",
  path: "/now",
});

export default function NowPage() {
  return (
    <PageShell width="reading">
      <PageIntro
        eyebrow={`Now · Updated ${now.updated}`}
        title="Currently."
        lede={now.note}
      />
      <div className="mt-12 divide-y divide-stone border-y border-stone">
        {now.sections.map((section) => (
          <section key={section.label} className="py-6">
            <h2 className="text-[11px] uppercase tracking-[0.16em] text-quiet">{section.label}</h2>
            <p className="mt-3 text-[17px] leading-8">{section.text}</p>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
