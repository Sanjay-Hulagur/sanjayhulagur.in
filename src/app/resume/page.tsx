import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/layout/PageIntro";
import { PageShell } from "@/components/layout/PageShell";
import { projects } from "@/data/projects";
import { resume } from "@/data/resume";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Resume",
  description:
    "AI Product Manager and Product Engineer. Experience at ASKI Hospitals and Kalpas Innovations, including PARAM.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <PageShell>
      <PageIntro eyebrow="Resume" title={resume.title} lede={resume.summary} />
      <section className="mt-14">
        <h2 className="font-serif text-3xl">Highlights</h2>
        <ul className="mt-4 max-w-2xl list-disc space-y-3 pl-5 text-sm leading-6">
          {resume.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="mt-14">
        <h2 className="font-serif text-3xl">Experience</h2>
        <ol className="mt-4 divide-y divide-stone border-y border-stone">
          {resume.experience.map((job) => (
            <li key={job.period} className="grid gap-2 py-5 md:grid-cols-[11rem_minmax(0,1fr)]">
              <p className="text-sm text-quiet">{job.period}</p>
              <div>
                <h3 className="font-serif text-2xl">{job.role}</h3>
                <p className="mt-1 text-sm">
                  {job.href ? (
                    <a href={job.href} className="underline decoration-stone underline-offset-4 hover:decoration-brass">
                      {job.org}
                    </a>
                  ) : (
                    job.org
                  )}
                  {", "}
                  {job.place}
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-quiet">{job.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="mt-14">
        <h2 className="font-serif text-3xl">Education</h2>
        <ul className="mt-4 divide-y divide-stone border-y border-stone">
          {resume.education.map((item) => (
            <li key={item.credential} className="py-5">
              <h3 className="font-serif text-2xl">{item.credential}</h3>
              <p className="mt-1 text-sm">{item.place ? `${item.org}, ${item.place}` : item.org}</p>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-quiet">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-14">
        <h2 className="font-serif text-3xl">Skills</h2>
        <ul className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resume.skills.map((group) => (
            <li key={group.label} className="border-t border-stone pt-4">
              <h3 className="text-[11px] uppercase tracking-[0.16em] text-quiet">{group.label}</h3>
              <p className="mt-3 text-sm leading-6">{group.items.join(" · ")}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-14">
        <h2 className="font-serif text-3xl">Selected projects</h2>
        <ul className="mt-4 divide-y divide-stone border-y border-stone">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link href={`/work/${project.slug}`} className="flex items-baseline justify-between gap-4 py-4">
                <span className="font-serif text-2xl">{project.name}</span>
                <span className="text-sm text-quiet">{project.category}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-14">
        <h2 className="font-serif text-3xl">Languages</h2>
        <p className="mt-3 text-sm leading-6">{resume.languages.join(" · ")}</p>
      </section>
      <section className="mt-14 max-w-2xl">
        <h2 className="font-serif text-3xl">How I judge the work</h2>
        <p className="mt-3 text-sm leading-6">{resume.philosophy}</p>
      </section>
      <section className="mt-14 border border-stone p-6">
        <h2 className="font-serif text-2xl">Contact</h2>
        <p className="mt-2 text-sm text-quiet">{site.location}</p>
        <p className="mt-2 text-sm">
          <a className="underline decoration-stone underline-offset-4 hover:decoration-brass" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {site.socials.map((social) => (
            <li key={social.href}>
              <a href={social.href} className="underline decoration-stone underline-offset-4 hover:decoration-brass">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
