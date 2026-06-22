import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AssistantDock } from "@/components/AssistantDock";
import { ScrollProgress } from "@/components/ScrollProgress";
import { VoiceBot } from "@/components/VoiceBot";

export const metadata: Metadata = {
  title: "NXT Mobility | Futuristic Electric Vehicle Manufacturer",
  description:
    "NXT Mobility manufactures electric scooters, e-rickshaws, and utility EVs with cinematic product storytelling, blue-theme EV technology, finance support, dealer enquiries, and service-ready manufacturing."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-navy-radial font-sans antialiased">
        <div className="noise" />
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
        <AssistantDock />
        <VoiceBot />
      </body>
    </html>
  );
}
