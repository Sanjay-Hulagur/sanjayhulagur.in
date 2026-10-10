export function PageIntro({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="max-w-3xl">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-quiet">{eyebrow}</p>
      <h1 className="mt-3 font-serif text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
        {title}
      </h1>
      {lede ? <p className="mt-5 max-w-2xl text-base leading-7 text-quiet">{lede}</p> : null}
    </header>
  );
}
