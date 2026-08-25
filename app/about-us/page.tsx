import type { Metadata } from "next";
import { FinalCTA, InfoGrid, PageHero } from "@/components/Option2Sections";
import { companyAddresses, companyDetails } from "@/lib/companyKnowledge";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about NXTE Mobility's practical electric mobility story, leadership and operating locations."
};

export default function AboutUsPage() {
  return (
    <main>
      <PageHero eyebrow="About NXTE" title="Built for India in motion." copy={`${companyDetails.brand} presents electric scooters, passenger e-rickshaws and cargo EVs for everyday Indian movement.`} image="/option2/hero-india-in-motion.png" />
      <InfoGrid
        eyebrow="Company story"
        title="Practical electric mobility with dealer, service and finance clarity."
        items={[
          ["Founded story", "NXTE's public company source presents a 2021 story start and a product direction across scooters, e-rickshaws and utility EVs."],
          ["Leadership", `${companyDetails.ceo} is presented as ${companyDetails.ceoTitle}. Leadership details should be verified through management records before investor use.`],
          ["Operating locations", companyAddresses.map((item) => `${item.label}: ${item.address}`).join(" ")],
          ["Official contact", `${companyDetails.email} and ${companyDetails.phone}`]
        ]}
      />
      <FinalCTA />
    </main>
  );
}
