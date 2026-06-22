import {
  BatteryCharging,
  Banknote,
  Factory,
  Leaf,
  Route,
  Settings,
  type LucideIcon
} from "lucide-react";

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  heroImage: string;
  icon: LucideIcon;
  sections: Array<{ heading: string; body: string }>;
};

export const blogCategories = [
  "EV Technology",
  "Battery & Charging",
  "Manufacturing",
  "Sustainability",
  "Buying Guide",
  "Company Updates"
];

export const blogPosts: BlogPost[] = [
  {
    slug: "battery-range-charging-confidence",
    title: "Battery choices, charge time, and daily range confidence",
    category: "Battery & Charging",
    date: "2026-06-01",
    author: "NXT Mobility Team",
    readTime: "5 min read",
    excerpt:
      "A practical guide for buyers comparing lead-acid, lithium, daily range, charging discipline, and service expectations.",
    heroImage: "/vehoicle_image/zenith/2.png",
    icon: BatteryCharging,
    sections: [
      {
        heading: "Range should start with your route",
        body:
          "Most EV decisions become easier when the buyer starts with route length, charging access, passenger or cargo load, and expected daily operating hours. A premium EV website should explain range as a confidence system, not only a number."
      },
      {
        heading: "Charging clarity reduces anxiety",
        body:
          "Charging time, battery type, charger discipline, and service guidance should be visible before a form submission. This helps first-time EV buyers understand what daily ownership actually feels like."
      },
      {
        heading: "NXT's opportunity",
        body:
          "NXT can build trust by pairing every vehicle model with route-fit guidance, charging guidance, finance handoff, and dealer support language."
      }
    ]
  },
  {
    slug: "finance-first-ev-buying",
    title: "Finance-first EV buying: how EMI clarity changes conversion",
    category: "Buying Guide",
    date: "2026-06-04",
    author: "NXT Mobility Team",
    readTime: "4 min read",
    excerpt:
      "Why premium EV experiences present bank partners, EMI readiness, and running-cost logic before the user reaches a sales form.",
    heroImage: "/vehoicle_image/prince/2.png",
    icon: Banknote,
    sections: [
      {
        heading: "EV affordability is not only sticker price",
        body:
          "Electric vehicles often become compelling when the buyer sees monthly cost, fuel savings, maintenance savings, and finance availability together."
      },
      {
        heading: "Finance is a trust signal",
        body:
          "Bank and NBFC partner visibility makes the brand feel prepared for real retail and dealer conversations."
      }
    ]
  },
  {
    slug: "inside-electric-rickshaw-platform",
    title: "Inside an e-rickshaw: motor, controller, chassis, and axle",
    category: "Manufacturing",
    date: "2026-06-08",
    author: "NXT Mobility Engineering",
    readTime: "6 min read",
    excerpt:
      "A parts-led guide for dealers, fleet owners, and commercial drivers evaluating durability and serviceability.",
    heroImage: "/vehicles/buland-rsd-ss.jpg",
    icon: Settings,
    sections: [
      {
        heading: "Commercial EVs are duty-cycle products",
        body:
          "Passenger and cargo EVs need to communicate motor torque, chassis strength, load expectation, braking, and service access more clearly than lifestyle vehicles."
      },
      {
        heading: "Serviceability matters",
        body:
          "A dealer can sell with more confidence when the website explains how major systems are checked, maintained, and supported."
      }
    ]
  },
  {
    slug: "choose-ev-by-route",
    title: "Scooter, e-rickshaw, or loader: choosing by route",
    category: "Buying Guide",
    date: "2026-06-11",
    author: "NXT Mobility Team",
    readTime: "5 min read",
    excerpt:
      "Match a model to city commute, passenger route, or last-mile cargo needs with route-first EV selection.",
    heroImage: "/vehoicle_image/glide/1.png",
    icon: Route,
    sections: [
      {
        heading: "The right EV begins with the job",
        body:
          "A family scooter, route passenger vehicle, and commercial loader solve different problems. Product discovery should help users choose by mission before they compare specs."
      },
      {
        heading: "A better showroom conversation",
        body:
          "Route-led product matching gives dealers a stronger, more useful starting point for enquiry follow-up."
      }
    ]
  },
  {
    slug: "serviceability-brand-advantage",
    title: "Why serviceability is a brand advantage",
    category: "Manufacturing",
    date: "2026-06-15",
    author: "NXT Mobility Service",
    readTime: "4 min read",
    excerpt:
      "How transparent parts, genuine spares, diagnostics, and local service language build long-term EV trust.",
    heroImage: "/vehicles/veer-loader.jpg",
    icon: Factory,
    sections: [
      {
        heading: "Support is part of the product",
        body:
          "The best EV experience continues after purchase. Clear service language helps riders, fleets, and dealers understand maintenance and reliability."
      },
      {
        heading: "Make parts visible",
        body:
          "Interactive parts education can reduce confusion and support more confident ownership."
      }
    ]
  },
  {
    slug: "sustainability-lowers-operating-cost",
    title: "Sustainability that lowers operating cost",
    category: "Sustainability",
    date: "2026-06-18",
    author: "NXT Mobility Team",
    readTime: "4 min read",
    excerpt:
      "How clean mobility can be communicated through economics, emissions, noise reduction, and local business value.",
    heroImage: "/vehoicle_image/energy/4.png",
    icon: Leaf,
    sections: [
      {
        heading: "Clean mobility should feel useful",
        body:
          "The strongest sustainability story connects cleaner air and quieter streets with lower running cost and practical ownership benefits."
      },
      {
        heading: "Cities need quieter movement",
        body:
          "Electric mobility can improve streets for families, workers, students, and local businesses by reducing tailpipe emissions and noise."
      }
    ]
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
