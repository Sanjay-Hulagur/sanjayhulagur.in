import { PageIntro } from "@/components/layout/PageIntro";
import { PageShell } from "@/components/layout/PageShell";
import { ArrowLink } from "@/components/ui/ArrowLink";

export default function NotFound() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="404"
        title="This page is not in the index."
        lede="The address may have changed. The homepage is the map."
      />
      <p className="mt-8">
        <ArrowLink href="/">Back to the index</ArrowLink>
      </p>
    </PageShell>
  );
}
