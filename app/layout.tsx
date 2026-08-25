import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AssistantDock } from "@/components/AssistantDock";
import { companyAddresses, companyDetails } from "@/lib/companyKnowledge";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nxtemobility.com"),
  title: {
    default: "NXTE Mobility | India in Motion",
    template: "%s | NXTE Mobility"
  },
  description:
    "NXTE Mobility builds personal scooters, passenger e-rickshaws and cargo EVs for practical Indian journeys, dealer partners and fleet operators.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "NXTE Mobility | India in Motion",
    description: "Personal scooters, passenger e-rickshaws and cargo EVs for everyday Indian mobility.",
    url: "https://www.nxtemobility.com",
    siteName: "NXTE Mobility",
    images: [{ url: "/option2/hero-india-in-motion.png", width: 1200, height: 630 }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyDetails.name,
    alternateName: companyDetails.brand,
    url: "https://www.nxtemobility.com",
    email: companyDetails.email,
    telephone: companyDetails.phone,
    address: companyAddresses.map((item) => ({
      "@type": "PostalAddress",
      name: item.label,
      streetAddress: item.address
    }))
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <Header />
        {children}
        <Footer />
        <AssistantDock />
      </body>
    </html>
  );
}
