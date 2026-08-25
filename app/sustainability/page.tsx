import type { Metadata } from "next";
import { FinalCTA, InfoGrid, PageHero } from "@/components/Option2Sections";

export const metadata: Metadata = {
  title: "Sustainability",
  description: "NXTE Mobility sustainability story focused on cleaner, quieter and more practical electric movement."
};

export default function SustainabilityPage() {
  return (
    <main>
      <PageHero eyebrow="Sustainability" title="Cleaner movement that still feels useful." copy="NXTE presents sustainability through everyday routes, lower point-of-use emissions, quieter streets and practical ownership support." image="/option2/sustainability-master.png" />
      <InfoGrid
        title="Sustainability belongs in the route, the service bay and the ownership math."
        items={[
          ["Cleaner city routes", "Electric vehicles reduce tailpipe emissions at point of use during daily commutes and commercial routes."],
          ["Less noise", "Quiet electric operation can improve streets for riders, families, drivers and businesses."],
          ["Longer useful life", "Serviceable parts, dealer support and battery discipline are essential to responsible EV ownership."],
          ["Honest impact", "NXTE should publish verified emissions, recycling and lifecycle data only after management-approved methodology is available."]
        ]}
      />
      <FinalCTA />
    </main>
  );
}
