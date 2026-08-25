import type { Metadata } from "next";
import { PremiumGrid, PremiumHero, PremiumTimeline } from "@/components/PremiumPage";
import { CatalogueGrid } from "@/components/Option2Sections";
import { BatteryCharging, MapPinned, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Vehicles",
  description: "Explore NXTE Mobility's approved two-wheelers, passenger three-wheelers and cargo EVs.",
  alternates: { canonical: "/vehicles" }
};

export default function VehiclesPage() {
  return (
    <main>
      <PremiumHero
        eyebrow="NXTE vehicle range"
        title="Electric mobility for personal, passenger and cargo journeys."
        copy="Choose from premium city scooters, passenger three-wheelers and cargo EVs with clear ownership actions and specification discipline."
        image="/option2/ola1.png"
      />
      <PremiumGrid
        eyebrow="How to choose"
        title="Built around route, service access and everyday confidence."
        items={[
          { title: "Personal scooters", copy: "Models for office commutes, campus movement, household routes and connected ownership.", icon: BatteryCharging },
          { title: "Commercial EVs", copy: "Passenger and cargo three-wheelers for operators who need dependable local mobility.", icon: MapPinned },
          { title: "Service-ready buying", copy: "Every journey leads naturally into test ride, dealer, finance and support conversations.", icon: Wrench }
        ]}
      />
      <CatalogueGrid />
      <PremiumTimeline
        eyebrow="Buying flow"
        title="From discovery to road-ready handoff."
        steps={[
          { title: "Explore", copy: "Shortlist by rider, route and category." },
          { title: "Book", copy: "Share your city and preferred vehicle for follow-up." },
          { title: "Confirm", copy: "Discuss availability, finance and dealer support." },
          { title: "Ride", copy: "Move ahead with verified product documentation." }
        ]}
      />
    </main>
  );
}
