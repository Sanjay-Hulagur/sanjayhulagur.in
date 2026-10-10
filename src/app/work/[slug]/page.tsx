import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { CaseStudySection } from "@/components/projects/CaseStudySection";
import { getProject, projects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: project.name,
    description: project.summary,
    path: `/work/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <PageShell>
      <header className="max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.18em] text-quiet">
          {project.category} · {project.period}
        </p>
        <h1 className="mt-3 font-serif text-5xl tracking-tight md:text-6xl">{project.name}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-quiet">{project.summary}</p>
        <dl className="mt-8 grid gap-4 border-y border-stone py-5 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-[11px] uppercase tracking-[0.16em] text-quiet">Status</dt>
            <dd className="mt-1">{project.status}</dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-[0.16em] text-quiet">Role</dt>
            <dd className="mt-1">{project.role}</dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-[0.16em] text-quiet">Stack</dt>
            <dd className="mt-1">{project.stack.length > 0 ? project.stack.join(", ") : "Unpublished"}</dd>
          </div>
        </dl>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {project.live ? (
            <a href={project.live} className="underline decoration-stone underline-offset-4 hover:decoration-brass" target="_blank" rel="noreferrer">
              Live website
            </a>
          ) : null}
          {project.repo ? (
            <a href={project.repo} className="underline decoration-stone underline-offset-4 hover:decoration-brass" target="_blank" rel="noreferrer">
              Source
            </a>
          ) : null}
        </div>
      </header>

      <div className="mt-12">
        <CaseStudySection label="Problem">
          <p>{project.problem}</p>
        </CaseStudySection>
        <CaseStudySection label="Overview">
          <p>{project.overview}</p>
        </CaseStudySection>
        <CaseStudySection label="Features">
          <ul className="list-disc space-y-2 pl-5">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </CaseStudySection>
        <CaseStudySection label="Architecture">
          <ul className="list-disc space-y-2 pl-5">
            {project.architecture.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CaseStudySection>
        <CaseStudySection label="Challenges">
          <ul className="list-disc space-y-2 pl-5">
            {project.challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CaseStudySection>
        {project.figures.length > 0 ? (
          <CaseStudySection label="Figures">
            <div className="grid gap-4 sm:grid-cols-2">
              {project.figures.map((figure) => (
                <figure key={figure.label} className="flex aspect-[16/10] flex-col justify-end border border-stone bg-stone/60 p-4">
                  <figcaption>
                    <span className="block font-serif text-2xl text-ink">{figure.label}</span>
                    <span className="mt-1 block text-sm text-quiet">{figure.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </CaseStudySection>
        ) : null}
        <CaseStudySection label="Outcomes">
          <ul className="list-disc space-y-2 pl-5">
            {project.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CaseStudySection>
      </div>

      <section className="mt-4 border-t border-stone pt-8">
        <h2 className="font-serif text-3xl">More work</h2>
        <ul className="mt-4 divide-y divide-stone border-y border-stone">
          {others.map((item) => (
            <li key={item.slug}>
              <Link href={`/work/${item.slug}`} className="flex items-baseline justify-between gap-4 py-4">
                <span className="font-serif text-2xl">{item.name}</span>
                <span className="text-sm text-quiet">{item.period}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <Link href="/work" className="text-sm underline decoration-stone underline-offset-4 hover:decoration-brass">
            All work
          </Link>
        </p>
      </section>
    </PageShell>
  );
}
