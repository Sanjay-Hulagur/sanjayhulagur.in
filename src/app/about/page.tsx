import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { PageShell } from "@/components/layout/PageShell";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Sanjay Hulagur is an AI Product Manager and Product Engineer. He leads PARAM at ASKI Hospitals from Dharwad, Karnataka.",
  path: "/about",
});

const principles = [
  {
    title: "Meet the channel they already use",
    text: "WhatsApp, Excel, and paper are not failures of taste. They are the system. Software has to take the handoff from them.",
  },
  {
    title: "A healthy graph is not a working ward",
    text: "Production work starts when someone at a desk says the product is down, even if the charts disagree.",
  },
  {
    title: "Judgment stays with the hospital",
    text: "Tools can remove the friction in front of a pricing decision or a roster. They should not pretend to have made it.",
  },
  {
    title: "Use is the measure",
    text: "A feature counts when people use it every day. Adoption, reliability, and the next change from feedback sit in the same job as shipping.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="About"
        title="AI Product Manager and Product Engineer."
        lede="Software is successful only when people use it every day. I take products from an idea to production, then stay with adoption."
      />
      <div className="mt-12 grid gap-10 border-t border-stone pt-10 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <div className="max-w-2xl space-y-5 text-[17px] leading-8">
          <p>
            I am Head of Software Development at{" "}
            <a className="underline decoration-stone underline-offset-4 hover:decoration-brass" href={site.organizationUrl}>
              {site.organization}
            </a>
            , based in {site.location}, with the team in Bagalkot. The current product is PARAM: 35+ modules, 100+ people using it each day, and 11,000+ patient records.
          </p>
          <p>
            Seven years in. The path ran through sales at BYJU’S, websites and SEO at MarkSense Digital, then four years as Head of Marketing and Operations at Kalpas Innovations. That seat covered discovery, delivery of 30+ web applications and 100+ websites, and the Vidfin mobile application from scoping to launch.
          </p>
          <p>
            A B.E. in mechanical engineering from KLS VDIT, 2019. I work in English, Hindi, and Kannada. Email is{" "}
            <a className="underline decoration-stone underline-offset-4 hover:decoration-brass" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </div>
        <aside className="border border-stone bg-stone/50 p-5">
          <p className="text-[11px] uppercase tracking-[0.16em] text-quiet">Portrait</p>
          <div className="mt-4 flex aspect-[4/5] items-end bg-petrol p-4 text-porcelain">
            <p className="font-serif text-3xl leading-none">A photograph will be placed here when one is supplied.</p>
          </div>
        </aside>
      </div>
      <section className="mt-16">
        <h2 className="font-serif text-3xl">Working principles</h2>
        <ol className="mt-6 divide-y divide-stone border-y border-stone">
          {principles.map((principle, index) => (
            <li key={principle.title} className="grid gap-2 py-5 md:grid-cols-[8rem_minmax(0,1fr)]">
              <span className="text-[11px] tabular-nums tracking-[0.16em] text-quiet">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block font-serif text-2xl">{principle.title}</span>
                <span className="mt-2 block max-w-2xl text-sm leading-6 text-quiet">{principle.text}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>
      <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
        <li><ArrowLink href="/work">Work</ArrowLink></li>
        <li><ArrowLink href="/writing">Writing</ArrowLink></li>
        <li><ArrowLink href="/contact">Contact</ArrowLink></li>
      </ul>
    </PageShell>
  );
}
