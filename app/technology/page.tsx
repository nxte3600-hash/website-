import type { Metadata } from "next";
import { AppSection, FinalCTA, InfoGrid, PageHero } from "@/components/Option2Sections";

export const metadata: Metadata = {
  title: "Technology and NXTE App",
  description: "NXTE Mobility technology and app capability UI for battery, location, lock, diagnostics and service booking."
};

export default function TechnologyPage() {
  return (
    <main>
      <PageHero eyebrow="Technology" title="Connected ownership, clearly labelled." copy="Motor, battery, controller, charging and app capabilities are presented honestly, with live data shown only when backend APIs exist." image="/option2/technology-master.png" />
      <AppSection />
      <InfoGrid
        title="The technology layer should make ownership easier."
        items={[
          ["Vehicle discovery", "Product pages guide buyers by journey and clearly mark pending specification fields."],
          ["Connected controls", "The app section shows battery, location, geofence, remote control, lock, trip and diagnostics capability states."],
          ["Service booking", "Service actions should connect to dealer workflows when backend systems are available."],
          ["Backend-ready honesty", "Disconnected demo states are labelled so customers never mistake mock telemetry for live vehicle data."]
        ]}
      />
      <FinalCTA />
    </main>
  );
}
