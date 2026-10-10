import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { PageShell } from "@/components/layout/PageShell";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { projects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description:
    "Selected work by Sanjay Hulagur: Param, Roster, hospital software at ASKI, and the production systems underneath.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Work"
        title="Selected projects."
        lede="Hospital products, the role around them, and the internal tools that replaced a workbook. Case studies stay with what can be said in public."
      />
      <div className="mt-12 border-b border-stone">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={String(index + 1).padStart(2, "0")}
          />
        ))}
      </div>
      <p className="mt-8">
        <ArrowLink href="/lab">AI experiments live in the lab</ArrowLink>
      </p>
    </PageShell>
  );
}
