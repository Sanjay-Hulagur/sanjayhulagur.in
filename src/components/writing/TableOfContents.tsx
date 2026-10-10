export function TableOfContents({
  headings,
}: {
  headings: { id: string; text: string }[];
}) {
  if (headings.length === 0) return null;

  return (
    <nav aria-label="On this page">
      <p className="text-[11px] uppercase tracking-[0.16em] text-quiet">On this page</p>
      <ol className="mt-3 space-y-2 text-sm leading-5">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`} className="text-ink underline decoration-stone underline-offset-4 hover:decoration-brass">
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
