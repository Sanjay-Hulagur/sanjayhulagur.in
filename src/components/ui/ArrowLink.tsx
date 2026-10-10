import Link from "next/link";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
};

export function ArrowLink({ href, children, external }: ArrowLinkProps) {
  const className =
    "inline-flex items-center gap-2 text-sm text-ink underline decoration-stone underline-offset-4 transition-colors duration-200 hover:decoration-brass";

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
        <Arrow />
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
      <Arrow />
    </Link>
  );
}

export function Arrow({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={className}>
      <path
        d="M2.5 8h11M9 3.5 13.5 8 9 12.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}
