import type { Metadata } from "next";
import { BriefcaseBusiness, GraduationCap, Users } from "lucide-react";
import { PremiumCTA, PremiumGrid, PremiumHero, PremiumTimeline } from "@/components/PremiumPage";

export const metadata: Metadata = {
  title: "Careers",
  description: "Careers at NXTE Mobility for people interested in practical electric mobility in India.",
  alternates: { canonical: "/careers" }
};

export default function CareersPage() {
  return (
    <main>
      <PremiumHero
        eyebrow="Careers"
        title="Build practical electric mobility with NXTE."
        copy="NXTE welcomes conversations with people who care about engineering, service, sales, operations and customer trust in India's EV transition."
        image="/about/leadership-team.png"
        actions={[
          { href: "/contact", label: "Contact NXTE", tone: "primary" },
          { href: "/about-us", label: "Read About Us", tone: "secondary" }
        ]}
      />
      <PremiumGrid
        eyebrow="Where people contribute"
        title="A team built around vehicles, customers and field execution."
        items={[
          { title: "Engineering and product", copy: "Work that respects verification, serviceability and Indian road realities.", icon: GraduationCap },
          { title: "Dealer and business", copy: "Help partners understand categories, territories and customer expectations.", icon: BriefcaseBusiness },
          { title: "Customer support", copy: "Keep riders connected to the right ownership and service pathways.", icon: Users }
        ]}
      />
      <PremiumTimeline
        eyebrow="Application flow"
        title="Keep the first conversation focused."
        steps={[
          { title: "Introduce", copy: "Share role interest, location and relevant experience." },
          { title: "Align", copy: "NXTE reviews the fit for current needs and city context." },
          { title: "Discuss", copy: "The team can follow up for a detailed role conversation." },
          { title: "Proceed", copy: "Move ahead only with formal NXTE communication." }
        ]}
      />
      <PremiumCTA title="Interested in joining NXTE?" copy="Use the contact page and mention the function, city and experience you want considered." href="/contact" label="Contact NXTE" />
    </main>
  );
}
