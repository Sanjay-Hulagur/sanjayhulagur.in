import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { PageShell } from "@/components/layout/PageShell";
import { bookmarks } from "@/data/links";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Bookmarks",
  description: "References and links Sanjay Hulagur keeps: hospital, writing, and profiles.",
  path: "/links",
});

export default function LinksPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Bookmarks"
        title="References worth returning to."
        lede="A short shelf. Mostly the public writing and the places the work already points."
      />
      <div className="mt-12 space-y-12">
        {bookmarks.map((group) => (
          <section key={group.category}>
            <h2 className="text-[11px] uppercase tracking-[0.18em] text-quiet">{group.category}</h2>
            <ul className="mt-3 divide-y divide-stone border-y border-stone">
              {group.links.map((link) => (
                <li key={link.href} className="py-4">
                  <a href={link.href} className="font-serif text-2xl underline decoration-stone underline-offset-4 hover:decoration-brass" target="_blank" rel="noreferrer">
                    {link.title}
                  </a>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-quiet">{link.note}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
