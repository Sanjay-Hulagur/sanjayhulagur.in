import { SectionLabel } from "@/components/ui/SectionLabel";

export function CaseStudySection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-4 border-t border-stone py-8 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-8">
      <SectionLabel>{label}</SectionLabel>
      <div className="max-w-2xl text-[15px] leading-7 text-ink">{children}</div>
    </section>
  );
}
