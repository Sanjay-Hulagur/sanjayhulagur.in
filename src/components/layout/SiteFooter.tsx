import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <footer className="flex items-center justify-between gap-4 bg-porcelain px-4 py-2 text-[11px] tracking-[0.08em] text-quiet sm:px-6 lg:px-8">
        <p>{site.location}</p>
        <p>Index 01—15</p>
      </footer>
    );
  }

  return (
    <footer className="border-t border-stone bg-porcelain">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-serif text-xl text-ink">{site.name}</p>
          <p className="mt-1 text-sm text-quiet">{site.location}</p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {site.socials.map((social) => (
            <li key={social.href}>
              <a href={social.href} className="text-ink underline decoration-stone underline-offset-4 hover:decoration-brass" target="_blank" rel="noreferrer">
                {social.label}
              </a>
            </li>
          ))}
          <li>
            <Link href="/contact" className="text-ink underline decoration-stone underline-offset-4 hover:decoration-brass">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
