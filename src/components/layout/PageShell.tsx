import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { cn } from "@/lib/cn";

export function PageShell({
  children,
  width = "wide",
}: {
  children: React.ReactNode;
  width?: "wide" | "reading";
}) {
  return (
    <div className="flex min-h-svh flex-col bg-porcelain text-ink">
      <SiteHeader />
      <main
        id="content"
        className={cn(
          "mx-auto w-full flex-1 px-4 py-12 sm:px-6 md:py-16 lg:px-8",
          width === "reading" ? "max-w-3xl" : "max-w-6xl",
        )}
      >
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
