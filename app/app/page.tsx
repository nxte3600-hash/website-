import type { Metadata } from "next";
import { AppSection } from "@/components/Option2Sections";
import { PremiumCTA, PremiumGrid, PremiumHero, SplitStory } from "@/components/PremiumPage";
import { BatteryCharging, Lock, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "NXTE App",
  description: "Explore the NXTE app experience for connected vehicle controls and ownership support.",
  alternates: { canonical: "/app" }
};

export default function NxteAppPage() {
  return (
    <main>
      <PremiumHero
        eyebrow="NXTE App"
        title="Connected ownership, designed for daily confidence."
        copy="The NXTE app page presents vehicle controls and support-oriented features only as product experience messaging, with live data shown only where backend APIs exist."
        image="/home-locked/sections/mobileapp.png"
      />
      <AppSection />
      <PremiumGrid
        eyebrow="App experience"
        title="Controls that make the vehicle feel closer."
        items={[
          { title: "Battery visibility", copy: "Keep ownership context close before starting a ride or service conversation.", icon: BatteryCharging },
          { title: "Security prompts", copy: "Lock, unlock and alert concepts are shown as app experience features.", icon: Lock },
          { title: "Support access", copy: "Service and diagnostic flows guide riders back into verified NXTE support channels.", icon: Wrench }
        ]}
      />
      <SplitStory
        eyebrow="Digital layer"
        title="The app supports ownership rather than replacing human help."
        copy="The website keeps app education connected with dealership, service, WhatsApp, chat and voice support already present in production."
        image="/home-locked/sections/mobileapp.png"
      />
      <PremiumCTA title="Want to see the connected experience?" copy="Book a test ride and ask the team about NXTE app support for your preferred model." />
    </main>
  );
}
