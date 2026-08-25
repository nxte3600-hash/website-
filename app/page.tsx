import type { Metadata } from "next";
import { AppSection, AudienceJourneys, FinalCTA, HeroCarousel, ManufacturingProof, OwnershipJourney, SavingsCalculator, VehicleSelector } from "@/components/Option2Sections";

export const metadata: Metadata = {
  title: "India in Motion",
  description: "NXTE Mobility personal scooters, passenger e-rickshaws and cargo EVs for every Indian journey."
};

export default function HomePage() {
  return (
    <main>
      <HeroCarousel />
      <AudienceJourneys />
      <VehicleSelector />
      <SavingsCalculator />
      <AppSection />
      <OwnershipJourney />
      <ManufacturingProof />
      <FinalCTA />
    </main>
  );
}
