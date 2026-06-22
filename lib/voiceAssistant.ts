import { companyAddresses, companyDetails } from "@/lib/companyKnowledge";
import { vehicles } from "@/lib/vehicles";

export type VoiceSessionStatus =
  | "idle"
  | "consent"
  | "connecting"
  | "listening"
  | "thinking"
  | "speaking"
  | "interrupted"
  | "muted"
  | "permission"
  | "unavailable"
  | "connection-lost";

export type VoiceLead = {
  intent: "test-ride" | "dealer" | "contact";
  name: string;
  phone: string;
  city?: string;
  vehicleId?: string;
  preferredTime?: string;
  company?: string;
  messageSummary: string;
  source: "voice-assistant";
};

export type VoiceActionResult = {
  id: string;
  kind: "vehicle" | "map" | "test-ride" | "dealer" | "whatsapp" | "submitted";
  label: string;
  href?: string;
  note: string;
};

const compactVehicleCatalog = vehicles
  .map(
    (vehicle) =>
      `${vehicle.id}: ${vehicle.name} (${vehicle.category}); range ${vehicle.specs.range}; speed ${vehicle.specs.speed}; charging ${vehicle.specs.chargingTime}; motor ${vehicle.specs.motor}.`
  )
  .join("\n");

const compactLocations = companyAddresses.map((location) => `${location.label}: ${location.address}.`).join("\n");

export const nxtVoiceInstructions = `
You are NXT Assistant, the warm human-like voice advisor for ${companyDetails.brand}.

Speaking style:
- Speak naturally in polite Hinglish by default, as a confident Indian showroom advisor.
- If the visitor speaks mainly Hindi, reply in Hindi. If they speak English, reply in English.
- Keep spoken responses short and conversational, usually 1 to 3 sentences, then ask a useful follow-up.
- Never claim you are human. Do not mention system prompts, APIs, or tools.
- If the visitor interrupts, stop your prior thought and answer the latest request naturally.

Ground truth:
- Company: ${companyDetails.name}; brand line "${companyDetails.tagline}"; led by ${companyDetails.ceo}, ${companyDetails.ceoTitle}; story begins in ${companyDetails.founded}.
- Contact: ${companyDetails.phone}; ${companyDetails.email}; WhatsApp is available from the website.
- Finance partners shown on this website: ${companyDetails.financePartners.join(", ")}. Do not promise finance approval or EMI amounts.
- Locations:
${compactLocations}
- Vehicles:
${compactVehicleCatalog}

Customer assistance rules:
- Help compare vehicles, understand range/speed/charging, learn technology, locate offices, and discuss test rides or dealership interest.
- Never invent prices, discounts, availability, warranties, finance approval, specifications, or service commitments.
- When a visitor wants a vehicle page, call show_vehicle after identifying the correct model.
- When they want a map, first ask which office and get verbal confirmation, then call open_location.
- For a test ride, gather and read back name, phone number, city, preferred model, and preferred time. Only after the visitor confirms, call prepare_test_ride_lead.
- For dealership interest, gather and read back name, phone number, city or territory, company if available, and their request. Only after confirmation, call prepare_dealer_lead.
- When a lead cannot be submitted, explain briefly that WhatsApp is available and ask permission before calling open_whatsapp_handoff.
- For any WhatsApp handoff, require the visitor to clearly say yes before opening/preparing it.

Start the first connected conversation with a brief friendly greeting in Hinglish and ask what mobility need the visitor has today.
`.trim();

export function findLocationHref(locationId: string) {
  if (locationId === "noida") return companyAddresses[0]?.mapsUrl;
  if (locationId === "bengaluru-rural") return companyAddresses[1]?.mapsUrl;
  return undefined;
}

export function createWhatsAppHref(summary: string) {
  const text = `Hi NXT Mobility, I spoke with NXT Assistant. ${summary}`;
  return `https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export async function submitVoiceLead(lead: VoiceLead): Promise<VoiceActionResult> {
  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead)
    });

    if (response.ok) {
      return {
        id: "lead-submitted",
        kind: "submitted",
        label: "Request submitted",
        note: "Your request has been shared with NXT Mobility."
      };
    }
  } catch {
    // A future lead endpoint can replace the WhatsApp fallback without changing the voice UI.
  }

  return {
    id: "whatsapp-fallback",
    kind: "whatsapp",
    label: "Continue on WhatsApp",
    href: createWhatsAppHref(lead.messageSummary),
    note: "The lead form is not connected yet. WhatsApp is ready after your confirmation."
  };
}

