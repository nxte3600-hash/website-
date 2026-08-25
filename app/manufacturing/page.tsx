import type { Metadata } from "next";
import { FinalCTA, InfoGrid, ManufacturingProof, PageHero } from "@/components/Option2Sections";

export const metadata: Metadata = {
  title: "Manufacturing",
  description: "NXTE Mobility manufacturing story with assembly discipline, quality checks and dealer service handoff."
};

export default function ManufacturingPage() {
  return (
    <main>
      <PageHero eyebrow="Manufacturing proof" title="Engineering trust. Delivering quality." copy="A manufacturing story around incoming parts, assembly, electrical integration, quality checks and service-ready dealer handoff." image="/option2/manufacturing-master.png" />
      <InfoGrid
        title="Visible process, accountable ownership."
        eyebrow="Built in India, for India"
        items={[
          ["Incoming part review", "Core components should be checked for vendor quality, traceability and fitment before assembly begins."],
          ["Platform assembly", "Scooter and three-wheeler platforms are presented as frame, drivetrain, battery bay and harness systems."],
          ["Electrical integration", "Battery, controller, charger and wiring confidence are treated as safety-critical ownership systems."],
          ["Dealer service handoff", "Service-friendly architecture helps dealer teams explain maintenance, genuine parts and long-term support."]
        ]}
      />
      <ManufacturingProof />
      <FinalCTA />
    </main>
  );
}
