import Link from "next/link";
import { Arrow } from "@/components/ui/ArrowLink";
import type { Project } from "@/data/projects";

const coverClass = {
  petrol: "bg-petrol",
  sage: "bg-sage",
  stone: "bg-stone",
  ink: "bg-ink",
} as const;

export function ProjectCard({ project, index }: { project: Project; index: string }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group grid border-t border-stone py-6 sm:grid-cols-[7.5rem_minmax(0,1fr)_auto] sm:items-stretch sm:gap-6"
    >
      <span className={`hidden sm:block ${coverClass[project.cover]}`} aria-hidden="true" />
      <span className="min-w-0">
        <span className="text-[11px] uppercase tracking-[0.16em] text-quiet">
          {index} · {project.category}
        </span>
        <span className="mt-2 block font-serif text-3xl tracking-tight text-ink">
          {project.name}
        </span>
        <span className="mt-2 block max-w-2xl text-sm leading-6 text-quiet">
          {project.summary}
        </span>
        {project.stack.length > 0 ? (
          <span className="mt-3 block text-[12px] uppercase tracking-[0.12em] text-quiet">
            {project.stack.join(" · ")}
          </span>
        ) : null}
      </span>
      <span className="mt-4 flex items-end justify-between gap-4 sm:mt-0 sm:flex-col sm:items-end">
        <span className="text-[12px] text-quiet">{project.period}</span>
        <Arrow className="size-4 text-brass transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
      </span>
    </Link>
  );
}
