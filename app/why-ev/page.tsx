import type { Metadata } from "next";
import { AudienceJourneys, FinalCTA, InfoGrid, PageHero, SavingsCalculator } from "@/components/Option2Sections";

export const metadata: Metadata = {
  title: "Why EV",
  description: "Understand NXTE electric mobility for office riders, students, households, drivers, cargo owners and fleets."
};

export default function WhyEvPage() {
  return (
    <main>
      <PageHero eyebrow="For every journey" title="Cleaner routes that make practical sense." copy="EV buying should start with your route, charging access, finance comfort and service confidence." image="/option2/hero-india-in-motion.png" />
      <AudienceJourneys />
      <SavingsCalculator />
      <InfoGrid
        title="Choose electric when the ownership math and support system work."
        items={[
          ["Lower daily running cost", "Electric mobility can reduce route-level energy spend, but actual savings depend on usage, tariff and vehicle choice."],
          ["Quiet city movement", "EVs reduce tailpipe emissions at point of use and can make everyday routes quieter."],
          ["Finance-led ownership", "NXTE highlights finance partner support and routes buyers through test ride and enquiry forms."],
          ["Service confidence", "A trusted dealer and service handoff is essential before any EV decision."]
        ]}
      />
      <FinalCTA />
    </main>
  );
}
