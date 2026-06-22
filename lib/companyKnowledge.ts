import { vehicles } from "@/lib/vehicles";

export const companyAddresses = [
  {
    label: "Noida Office",
    address: "SK 64, Sector 112, Noida, Uttar Pradesh 201304",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=SK%2064%2C%20Sector%20112%2C%20Noida%2C%20Uttar%20Pradesh%20201304"
  },
  {
    label: "Bengaluru Rural Office",
    address: "No 93, Somapura Industrial Area, Bengaluru Rural, Karnataka",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=No%2093%2C%20Somapura%20Industrial%20Area%2C%20Bengaluru%20Rural%2C%20Karnataka"
  }
];

export const companyDetails = {
  name: "NXTMobility Energy Pvt. Ltd.",
  brand: "NXT Mobility",
  tagline: "Powering Future Mobility",
  founded: "2021",
  ceo: "Nikhil Kumar",
  ceoTitle: "CEO & Founder",
  email: "info@nxtemobility.com",
  phone: "+91-9289484831",
  whatsappNumber: "919289484831",
  whatsappUrl:
    "https://wa.me/919289484831?text=Hi%20NXT%20Mobility%2C%20I%20want%20to%20know%20more%20about%20your%20electric%20vehicles.",
  financePartners: ["HDFC Bank", "ICICI Bank", "Axis Bank", "IDFC FIRST", "Bajaj Finserv", "Local NBFC Support"],
  pages: [
    { path: "/", label: "Home", purpose: "Premium video-led landing page with finance partner messaging." },
    { path: "/vehicles", label: "Vehicles", purpose: "Catalog of scooters, e-rickshaws, and utility three-wheelers." },
    { path: "/technology", label: "Technology", purpose: "EV lab explaining motor, battery, controller, safety, and service systems." },
    { path: "/about", label: "About", purpose: "Story from 2021 to now led by CEO & Founder Nikhil Kumar." },
    { path: "/blog", label: "Blog", purpose: "EV education, finance guides, buying advice, and product stories." },
    { path: "/dealer", label: "Dealer", purpose: "Dealership inquiry and partner opportunity page." },
    { path: "/test-ride", label: "Test Ride", purpose: "Test ride lead form and vehicle interest capture." },
    { path: "/contact-us", label: "Contact Us", purpose: "Clickable Google Maps addresses and inquiry form." }
  ],
  story: [
    "2021: NXT Mobility begins with an EV-first belief for practical Indian mobility.",
    "2022: The product direction expands into scooters, e-rickshaws, and utility three-wheelers.",
    "2023: Manufacturing, serviceability, genuine parts, and reliable support become central to the company story.",
    "2024: Dealer and B2B momentum grows through practical commercial EV categories.",
    "2025: The catalog expands into multiple scooters, Buland e-rickshaws, and loader formats.",
    "2026: The digital experience is redesigned into a premium blue-white EV website with video, 3D motion, finance support, and voice/chat assistance."
  ],
  mission:
    "NXT Mobility works toward cleaner electric mobility with reliable vehicles, service-ready parts, finance support, and practical product choices for riders, dealers, and businesses.",
  supportTopics: [
    "Book a test ride",
    "Compare scooter and e-rickshaw models",
    "Understand finance partners and EMI support",
    "Open company location on Google Maps",
    "Connect on WhatsApp",
    "Learn about founder Nikhil Kumar and NXT's story"
  ]
};

export const companyDocument = `
# ${companyDetails.brand} Company & Website Document

## Company
- Legal/brand name: ${companyDetails.name}
- Brand line: ${companyDetails.tagline}
- Founded story start: ${companyDetails.founded}
- Leadership: ${companyDetails.ceo}, ${companyDetails.ceoTitle}
- Email: ${companyDetails.email}
- Phone: ${companyDetails.phone}
- WhatsApp: ${companyDetails.whatsappNumber}

## Locations
${companyAddresses.map((item) => `- ${item.label}: ${item.address}`).join("\n")}

## Story
${companyDetails.story.map((item) => `- ${item}`).join("\n")}

## Mission
${companyDetails.mission}

## Finance Partners
${companyDetails.financePartners.map((item) => `- ${item}`).join("\n")}

## Website Pages
${companyDetails.pages.map((page) => `- ${page.label} (${page.path}): ${page.purpose}`).join("\n")}

## Vehicle Models
${vehicles.map((vehicle) => `- ${vehicle.name}: ${vehicle.category}; range ${vehicle.specs.range}; speed ${vehicle.specs.speed}; charging ${vehicle.specs.chargingTime}.`).join("\n")}

## Assistant Behavior
- The chat assistant answers from this document first.
- The voice assistant uses a realtime speech-to-speech session after the visitor explicitly starts a live conversation.
- The voice assistant listens continuously during the session and stops its reply when the visitor begins speaking.
- Live voice audio and transcript content are not stored by the website by default.
- If the user asks for a location, the assistant points them to Google Maps links.
- Confirmed test ride or dealer leads use the site's lead endpoint when connected, with WhatsApp available as the fallback handoff.
`;

export function answerFromCompanyKnowledge(input: string) {
  const text = input.toLowerCase();

  if (/\b(hello|hi|hey|namaste|good morning|good evening)\b/.test(text)) {
    return `Namaste. I am NXT Bot. I can help you explore NXT vehicles, book a test ride, understand finance options, open company locations, or connect with our team on WhatsApp.`;
  }

  if (/\b(location|address|map|maps|google map|office|where)\b/.test(text)) {
    return `NXT has two listed locations: ${companyAddresses
      .map((item) => `${item.label}: ${item.address}`)
      .join(" Also, ")}. You can open either location from the Contact Us page.`;
  }

  if (/\b(whatsapp|chat|connect|call|phone|number)\b/.test(text)) {
    return `You can connect with NXT on WhatsApp or call ${companyDetails.phone}. The WhatsApp button opens a direct chat with NXT Mobility.`;
  }

  if (/\b(founder|ceo|nikhil|leadership|owner)\b/.test(text)) {
    return `${companyDetails.ceo} is presented as ${companyDetails.ceoTitle}. The About page tells the NXT story from 2021 to today.`;
  }

  if (/\b(finance|bank|emi|loan|partner)\b/.test(text)) {
    return `NXT's finance section highlights partner support from ${companyDetails.financePartners.join(", ")}. Buyers can ask about EMI support during test ride or contact inquiries.`;
  }

  if (/\b(test ride|book|ride|demo)\b/.test(text)) {
    return "You can book a test ride from the Book Test Ride button or the Test Ride page. Choose a model, city, contact details, and preferred date.";
  }

  if (/\b(vehicle|model|scooter|rickshaw|loader|range|speed)\b/.test(text)) {
    const modelNames = vehicles.map((vehicle) => vehicle.name).join(", ");
    return `NXT's showcased models are ${modelNames}. The Vehicles page lets you explore specs, galleries, finance support, and parts for each model.`;
  }

  if (/\b(technology|battery|motor|controller|parts|service)\b/.test(text)) {
    return "The Technology page explains electric drive, battery ecosystem, controller logic, safety architecture, serviceability, and parts transparency.";
  }

  if (/\b(story|about|mission|company|2021)\b/.test(text)) {
    return `NXT's story starts in 2021 and is led by ${companyDetails.ceo}. The company focuses on practical electric scooters, e-rickshaws, utility EVs, dealer support, and cleaner mobility.`;
  }

  return "I can help with NXT vehicles, test rides, finance partners, Google Maps locations, WhatsApp connection, technology, dealership, and the company story. Ask me anything about NXT Mobility.";
}
