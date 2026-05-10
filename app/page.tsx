import { BandStrip } from "@/components/home/BandStrip";
import { ContactSection } from "@/components/home/ContactSection";
import { EventsSection } from "@/components/home/EventsSection";
import { FamilySection } from "@/components/home/FamilySection";
import { Hero } from "@/components/home/Hero";
import { ShopSection } from "@/components/home/ShopSection";
import { SiteHeader } from "@/components/home/SiteHeader";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <BandStrip />
        <ShopSection />
        <EventsSection />
        <FamilySection />
        <ContactSection />
      </main>
    </div>
  );
}
