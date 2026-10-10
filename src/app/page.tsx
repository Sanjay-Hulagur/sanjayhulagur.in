import { HomeGrid } from "@/components/home/HomeGrid";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function HomePage() {
  return (
    <div className="home-screen">
      <SiteHeader />
      <HomeGrid />
      <SiteFooter compact />
    </div>
  );
}
