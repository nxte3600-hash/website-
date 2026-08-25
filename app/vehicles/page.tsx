import type { Metadata } from "next";
import { CatalogueGrid, PageHero } from "@/components/Option2Sections";

export const metadata: Metadata = {
  title: "Vehicles",
  description: "Explore NXTE Mobility's six approved two-wheelers, passenger three-wheelers and cargo EVs."
};

export default function VehiclesPage() {
  return (
    <main>
      <PageHero
        eyebrow="The electric family"
        title="Choose by journey, not jargon."
        copy="Six personal scooters plus passenger and cargo platforms, presented with clear use cases and ownership actions."
        image="/option2/ola1.png"
      />
      <CatalogueGrid />
    </main>
  );
}
