import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/ui/ArrowLink";
import type { HomeTile as HomeTileData } from "@/data/home";

const toneClass = {
  editorial: "tone-editorial",
  featured: "tone-featured",
  visual: "tone-visual",
  sage: "tone-sage",
  stone: "tone-stone",
} as const;

export function HomeTile({ tile }: { tile: HomeTileData }) {
  const light = tile.tone === "featured" || tile.tone === "visual";

  return (
    <Link
      href={tile.href}
      className={`home-tile ${toneClass[tile.tone]} focus-visible:z-10`}
    >
      {tile.image ? (
        <span className="home-tile-media" aria-hidden="true">
          <Image
            src={tile.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            className="object-cover"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-petrol via-petrol/50 to-petrol/15" />
        </span>
      ) : null}
      <span className="relative z-10 flex h-full flex-col justify-between">
        <span
          className={`text-[11px] tabular-nums tracking-[0.16em] ${light ? "text-porcelain/80" : "text-quiet"}`}
        >
          {tile.index}
        </span>
        <span className="mt-auto flex items-end justify-between gap-3">
          <span className="min-w-0">
            <span className="block font-serif text-[clamp(1.15rem,2.4vh,1.85rem)] leading-none tracking-tight">
              {tile.title}
            </span>
            <span
              className={`tile-desc mt-1.5 block max-w-[18rem] text-[12px] leading-snug md:text-[13px] ${light ? "text-porcelain" : "text-quiet"}`}
            >
              {tile.description}
            </span>
          </span>
          <Arrow
            className={`home-tile-arrow size-4 shrink-0 ${light ? "text-brass" : "text-brass"}`}
          />
        </span>
      </span>
    </Link>
  );
}
