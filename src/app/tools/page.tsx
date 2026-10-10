import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { PageShell } from "@/components/layout/PageShell";
import { EmptyState } from "@/components/ui/EmptyState";
import { tools } from "@/data/tools";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Tools",
  description: "A directory of small utilities by Sanjay Hulagur. Empty until a tool has a real link.",
  path: "/tools",
});

export default function ToolsPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Tools"
        title="Utilities, when they are real."
        lede="This directory only lists something you can open. A card is not added for an idea."
      />
      <div className="mt-12">
        {tools.length === 0 ? (
          <EmptyState title="Nothing published here yet.">
            <p>
              Add an entry to <code>src/data/tools.ts</code> with a name, description, category, link, and status once the utility exists.
            </p>
          </EmptyState>
        ) : (
          <ul className="divide-y divide-stone border-y border-stone">
            {tools.map((tool) => (
              <li key={tool.href} className="grid gap-2 py-5 md:grid-cols-[minmax(0,1fr)_8rem]">
                <div>
                  <h2 className="font-serif text-2xl">
                    <a href={tool.href} className="underline decoration-stone underline-offset-4 hover:decoration-brass">
                      {tool.name}
                    </a>
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-quiet">{tool.description}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-quiet">{tool.category}</p>
                </div>
                <p className="text-sm text-quiet">{tool.status}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </PageShell>
  );
}
