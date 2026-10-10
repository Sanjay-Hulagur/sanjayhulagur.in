import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { PageShell } from "@/components/layout/PageShell";
import { PhotoGrid } from "@/components/photography/PhotoLightbox";
import { photos } from "@/data/photos";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Photography",
  description:
    "A photography gallery for Sanjay Hulagur. The current plates are labeled samples until photographs are added.",
  path: "/photos",
});

export default function PhotosPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Photography"
        title="Plates, until the photographs arrive."
        lede="These are abstract sample plates, not pictures of people or places. Replace the files in public/visuals and the entries in src/data/photos.ts."
      />
      <div className="mt-12">
        <PhotoGrid photos={photos} />
      </div>
    </PageShell>
  );
}
