import type { ReactNode } from "react";

export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!match) return <span key={index}>{part}</span>;
        const [, label, href] = match;
        const external = href.startsWith("http");
        return (
          <a
            key={index}
            href={href}
            className="underline decoration-stone underline-offset-4 hover:decoration-brass"
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            {label as ReactNode}
          </a>
        );
      })}
    </>
  );
}
