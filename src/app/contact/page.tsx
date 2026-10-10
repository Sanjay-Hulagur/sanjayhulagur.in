import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Sanjay Hulagur about a product, an internal tool, a migration, or a site and film.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell width="reading">
      <PageIntro
        eyebrow="Contact"
        title="Tell me the problem."
        lede="A useful first message names the outcome, the deadline, and whether this is a product, an internal tool, a migration, or a site and film."
      />
      <div className="mt-10 space-y-5 text-[17px] leading-8">
        <p>
          I am in {site.location}. Hospital work at ASKI comes first, so freelance projects are scoped around that.
        </p>
        {site.email ? (
          <p>
            <a className="underline decoration-stone underline-offset-4 hover:decoration-brass" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        ) : (
          <p className="text-sm leading-6 text-quiet">
            An email address is not published on this site. Set <code>email</code> in <code>src/lib/site.ts</code> when you want it listed. There is no contact form, because there is no form backend.
          </p>
        )}
      </div>
      <ul className="mt-10 divide-y divide-stone border-y border-stone">
        {site.socials.map((social) => (
          <li key={social.href}>
            <a href={social.href} className="flex items-baseline justify-between gap-4 py-4" target="_blank" rel="noreferrer">
              <span className="font-serif text-2xl">{social.label}</span>
              <span className="text-[11px] uppercase tracking-[0.16em] text-quiet">Open</span>
            </a>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
