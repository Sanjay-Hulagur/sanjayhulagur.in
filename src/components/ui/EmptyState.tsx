export function EmptyState({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-stone bg-stone/40 px-6 py-10">
      <h2 className="font-serif text-2xl text-ink">{title}</h2>
      <div className="mt-3 max-w-xl text-sm leading-6 text-quiet">{children}</div>
    </div>
  );
}
