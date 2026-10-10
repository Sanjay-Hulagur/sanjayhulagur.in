import { HomeTile } from "@/components/home/HomeTile";
import { homeTiles } from "@/data/home";

export function HomeGrid() {
  return (
    <nav id="content" aria-label="Site index" className="home-grid">
      {homeTiles.map((tile) => (
        <HomeTile key={tile.href} tile={tile} />
      ))}
    </nav>
  );
}
