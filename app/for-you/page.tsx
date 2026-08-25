import type { Metadata } from "next";
import { CalendarCheck, Route, ShieldCheck } from "lucide-react";
import { PremiumCTA, PremiumGrid, PremiumHero, SplitStory } from "@/components/PremiumPage";
import { SavingsCalculator } from "@/components/Option2Sections";

export const metadata: Metadata = {
  title: "For You",
  description: "NXTE Mobility guidance for riders comparing electric scooters, ownership support and test rides.",
  alternates: { canonical: "/for-you" }
};

export default function ForYouPage() {
  return (
    <main>
      <PremiumHero
        eyebrow="For you"
        title="Choose electric around the life you actually ride."
        copy="NXTE helps buyers think through commute distance, charging access, route type, finance comfort and service support before choosing a vehicle."
        image="/home-locked/sections/hero-india-in-motion.png"
      />
      <PremiumGrid
        eyebrow="Buyer priorities"
        title="A calmer path from curiosity to ownership."
        items={[
          { title: "Daily-route fit", copy: "Start with your real city routine, pillion needs and parking or charging context.", icon: Route },
          { title: "Ownership clarity", copy: "Keep finance, dealer handoff and support questions close to the buying journey.", icon: CalendarCheck },
          { title: "Specification discipline", copy: "Treat final model specifications as verified only when approved product documents are available.", icon: ShieldCheck }
        ]}
      />
      <SavingsCalculator />
      <SplitStory
        eyebrow="Smart movement"
        title="Less noise in the decision. More confidence on the road."
        copy="The NXTE site keeps vehicle discovery, app controls, test rides and service inquiries connected so buyers can move without hunting through disconnected pages."
        image="/home-locked/sections/hero-india-in-motion.png"
        reverse
      />
      <PremiumCTA title="Ready to compare models?" copy="Book a test ride and let the NXTE team follow up with city-specific support." />
    </main>
  );
}
