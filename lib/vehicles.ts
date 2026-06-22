export type VehicleType = "scooter" | "erickshaw";

export type VehiclePart = {
  id: string;
  name: string;
  x: number;
  y: number;
  purpose: string;
  technology: string;
  maintenance: string;
};

export type Vehicle = {
  id: string;
  name: string;
  type: VehicleType;
  category: string;
  brandLine: string;
  shortDescription: string;
  video?: string;
  posterImage: string;
  gallery: string[];
  specs: {
    range: string;
    speed: string;
    chargingTime: string;
    motor: string;
    battery: string;
    brakes: string;
    suspension: string;
    seatingOrLoad: string;
  };
  parts: VehiclePart[];
};

const vehicleImage = (name: string) => `/vehicles/${name}`;
const vehicleFolderImage = (folder: string, index: number) => `/vehoicle_image/${folder.replaceAll(" ", "%20")}/${index}.png`;
const vehicleFolderGallery = (folder: string) => [1, 2, 3, 4].map((index) => vehicleFolderImage(folder, index));

const scooterParts: VehiclePart[] = [
  {
    id: "motor",
    name: "BLDC Hub Motor",
    x: 72,
    y: 68,
    purpose: "Delivers quiet instant torque directly at the wheel for city starts and smooth cruising.",
    technology: "Brushless hub-drive architecture with sealed casing and low-maintenance bearings.",
    maintenance: "Inspect wiring couplers and wheel alignment during scheduled service."
  },
  {
    id: "battery",
    name: "Battery Pack",
    x: 49,
    y: 55,
    purpose: "Stores energy for daily commute range with stable discharge under traffic conditions.",
    technology: "Configurable lead-acid or lithium pack depending on vehicle variant and use case.",
    maintenance: "Keep terminals clean, charge with the matched charger, and avoid deep discharge."
  },
  {
    id: "controller",
    name: "Motor Controller",
    x: 58,
    y: 47,
    purpose: "Translates throttle input into smooth power delivery and protects the drive system.",
    technology: "Programmable EV controller with overload and thermal protection logic.",
    maintenance: "Check waterproofing, connector fit, and error codes during diagnostics."
  },
  {
    id: "charger",
    name: "Smart Charger",
    x: 34,
    y: 62,
    purpose: "Recharges the battery safely with automatic cut-off behavior.",
    technology: "Matched charging profile for NXT scooter battery configuration.",
    maintenance: "Use dry sockets and inspect charger cable condition before long charging cycles."
  },
  {
    id: "suspension",
    name: "Dual Tube Suspension",
    x: 25,
    y: 67,
    purpose: "Absorbs uneven roads and improves rider comfort on daily Indian routes.",
    technology: "Front telescopic and rear dual-tube tuned suspension layout.",
    maintenance: "Inspect seals, fasteners, and damping response at service intervals."
  },
  {
    id: "brakes",
    name: "Brake System",
    x: 20,
    y: 76,
    purpose: "Provides predictable stopping performance in urban traffic.",
    technology: "Disc/drum or dual-disc configuration based on model class.",
    maintenance: "Check pads, cables, fluid where applicable, and rotor surface."
  },
  {
    id: "wheels",
    name: "Road Wheels",
    x: 76,
    y: 78,
    purpose: "Keeps the ride stable while supporting acceleration, braking, and grip.",
    technology: "EV-ready wheel and tyre package tuned for low rolling resistance.",
    maintenance: "Maintain tyre pressure and inspect tread wear weekly."
  },
  {
    id: "lights",
    name: "LED Headlamp",
    x: 61,
    y: 29,
    purpose: "Improves night visibility and gives the vehicle a premium road signature.",
    technology: "Energy-efficient LED lighting with focused beam output.",
    maintenance: "Clean lens surface and check beam alignment."
  },
  {
    id: "frame",
    name: "Reinforced Frame",
    x: 43,
    y: 69,
    purpose: "Carries rider load and keeps handling predictable.",
    technology: "Welded steel frame geometry designed for urban durability.",
    maintenance: "Inspect weld points and underbody after heavy impacts."
  },
  {
    id: "dashboard",
    name: "Digital Cluster",
    x: 56,
    y: 21,
    purpose: "Shows speed, charge, status lights, and rider information.",
    technology: "Low-power digital instrumentation with weather-resistant housing.",
    maintenance: "Keep dry and verify display brightness during service."
  },
  {
    id: "seat",
    name: "Comfort Seat",
    x: 42,
    y: 37,
    purpose: "Supports longer daily rides with stable posture and cushioning.",
    technology: "Ergonomic saddle foam and durable exterior trim.",
    maintenance: "Clean with mild solution and check hinge/latch fit."
  }
];

const erickshawParts: VehiclePart[] = [
  {
    id: "motor",
    name: "Shaft Motor",
    x: 68,
    y: 73,
    purpose: "Moves higher passenger or cargo loads with steady low-speed torque.",
    technology: "Commercial-duty electric shaft motor tuned for utility cycles.",
    maintenance: "Inspect drivetrain noise, mounts, and couplers during service."
  },
  {
    id: "battery",
    name: "Traction Battery",
    x: 44,
    y: 69,
    purpose: "Supports 120-130 km duty cycles on Buland rickshaw models.",
    technology: "High-capacity EV battery bay with service-accessible placement.",
    maintenance: "Check electrolyte/health based on battery type and maintain charge discipline."
  },
  {
    id: "controller",
    name: "Drive Controller",
    x: 58,
    y: 58,
    purpose: "Balances load, acceleration, and protection for commercial operation.",
    technology: "EV controller calibrated for payload and low-speed urban driving.",
    maintenance: "Keep controller housing dry and inspect harness locks."
  },
  {
    id: "charger",
    name: "Charging System",
    x: 31,
    y: 71,
    purpose: "Enables depot or overnight charging with predictable turnaround.",
    technology: "Vehicle-matched charger support with safe cut-off behavior.",
    maintenance: "Use rated sockets and keep charging connectors dust-free."
  },
  {
    id: "body",
    name: "Roof & Body",
    x: 50,
    y: 23,
    purpose: "Protects passengers or cargo while carrying NXT's road presence.",
    technology: "Durable commercial body panels and canopy structure.",
    maintenance: "Inspect panel mounts, roof fasteners, and paint protection."
  },
  {
    id: "chassis",
    name: "Commercial Chassis",
    x: 49,
    y: 80,
    purpose: "Carries repeated passenger or cargo loads with road stability.",
    technology: "Reinforced chassis geometry designed for fleet service.",
    maintenance: "Inspect frame alignment, weld points, and corrosion-prone areas."
  },
  {
    id: "axle",
    name: "Rear Axle",
    x: 73,
    y: 82,
    purpose: "Transfers drive load to the rear wheel assembly.",
    technology: "Utility axle assembly specified for commercial three-wheelers.",
    maintenance: "Check lubrication, mounting points, and bearing noise."
  },
  {
    id: "suspension",
    name: "Load Suspension",
    x: 76,
    y: 64,
    purpose: "Keeps passengers or cargo stable on imperfect roads.",
    technology: "Commercial spring/damper setup tuned for payload comfort.",
    maintenance: "Inspect leaf/spring condition and damper leakage."
  },
  {
    id: "brakes",
    name: "Brake Assembly",
    x: 24,
    y: 83,
    purpose: "Gives reliable low-speed stopping with passenger or cargo load.",
    technology: "Rickshaw brake assembly selected for serviceability.",
    maintenance: "Check shoe/pad wear, cable tension, and response feel."
  },
  {
    id: "dashboard",
    name: "Driver Console",
    x: 33,
    y: 42,
    purpose: "Keeps speed, state of charge, and controls visible to the driver.",
    technology: "Simple service-friendly commercial control layout.",
    maintenance: "Clean switches and verify indicator operation."
  },
  {
    id: "wiring",
    name: "Protected Wiring",
    x: 52,
    y: 52,
    purpose: "Connects drive, lighting, charging, and instrumentation systems.",
    technology: "Bundled harness routing for commercial EV reliability.",
    maintenance: "Inspect routing clips, insulation, and exposed connectors."
  },
  {
    id: "seating",
    name: "Seats / Load Bay",
    x: 55,
    y: 45,
    purpose: "Supports passenger comfort or cargo utility depending on model.",
    technology: "Durable upholstery or cargo bed packaging for daily operation.",
    maintenance: "Clean surfaces and inspect mounts after heavy use."
  }
];

export const vehicles: Vehicle[] = [
  {
    id: "glide",
    name: "GLIDE",
    type: "scooter",
    category: "Electric Scooter / Low Speed",
    brandLine: "EV Motors",
    shortDescription:
      "A refined city scooter with BLDC hub motor, dual tube suspension, and disc braking for confident everyday mobility.",
    posterImage: vehicleFolderImage("glide", 1),
    gallery: vehicleFolderGallery("glide"),
    specs: {
      range: "100+ km*",
      speed: "30 km/h",
      chargingTime: "3 hrs*",
      motor: "BLDC hub motor",
      battery: "Configurable EV battery",
      brakes: "Disc braking package",
      suspension: "Dual tube suspension",
      seatingOrLoad: "Rider + pillion"
    },
    parts: scooterParts
  },
  {
    id: "winner",
    name: "WINNER",
    type: "scooter",
    category: "Electric Scooter / Low Speed",
    brandLine: "EV Motors",
    shortDescription:
      "A daily-use electric scooter built around reliable range, practical speed, and service-friendly mechanicals.",
    posterImage: vehicleFolderImage("winner", 1),
    gallery: vehicleFolderGallery("winner"),
    specs: {
      range: "120 km*",
      speed: "35 km/h",
      chargingTime: "2 hrs*",
      motor: "BLDC hub motor",
      battery: "Low-speed EV battery",
      brakes: "Front disc / rear drum",
      suspension: "Dual tube suspension",
      seatingOrLoad: "Rider + pillion"
    },
    parts: scooterParts
  },
  {
    id: "energy",
    name: "ENERGY",
    type: "scooter",
    category: "Electric Scooter / Low Speed",
    brandLine: "EV Motors",
    shortDescription:
      "A sharp urban scooter tuned for efficiency, smooth acceleration, and compact city parking.",
    posterImage: vehicleFolderImage("energy", 1),
    gallery: vehicleFolderGallery("energy"),
    specs: {
      range: "110 km*",
      speed: "40 km/h",
      chargingTime: "2.8 hrs*",
      motor: "BLDC hub motor",
      battery: "Efficient EV battery",
      brakes: "Disc braking system",
      suspension: "Dual tube suspension",
      seatingOrLoad: "Rider + pillion"
    },
    parts: scooterParts
  },
  {
    id: "zenith",
    name: "ZENITH",
    type: "scooter",
    category: "Electric Scooter / Low Speed",
    brandLine: "EV Motors",
    shortDescription:
      "A premium low-speed scooter with high-end build quality and advanced BLDC motor technology.",
    posterImage: vehicleFolderImage("zenith", 1),
    gallery: vehicleFolderGallery("zenith"),
    specs: {
      range: "140 km*",
      speed: "40 km/h",
      chargingTime: "1.5 hrs*",
      motor: "Advanced BLDC hub motor",
      battery: "Extended-range EV battery",
      brakes: "Disc braking package",
      suspension: "Comfort tuned suspension",
      seatingOrLoad: "Rider + pillion"
    },
    parts: scooterParts
  },
  {
    id: "prince-hs",
    name: "PRINCE HS",
    type: "scooter",
    category: "Electric Scooter / High Speed",
    brandLine: "EV Motors",
    shortDescription:
      "Royal performance high-speed electric scooter with 1500W power and advanced suspension technology.",
    posterImage: vehicleFolderImage("prince", 1),
    gallery: vehicleFolderGallery("prince"),
    specs: {
      range: "90 km*",
      speed: "50 km/h",
      chargingTime: "2.5 hrs*",
      motor: "1500W BLDC hub motor",
      battery: "High-speed EV battery",
      brakes: "Performance disc brakes",
      suspension: "Advanced dual tube suspension",
      seatingOrLoad: "Rider + pillion"
    },
    parts: scooterParts
  },
  {
    id: "grace-hs",
    name: "GRACE HS",
    type: "scooter",
    category: "Electric Scooter / High Speed",
    brandLine: "EV Motors",
    shortDescription:
      "A high-speed scooter with 1500W BLDC power, superior braking, and a balanced premium ride feel.",
    posterImage: vehicleFolderImage("grace", 1),
    gallery: vehicleFolderGallery("grace"),
    specs: {
      range: "80 km*",
      speed: "35 km/h",
      chargingTime: "4 hrs*",
      motor: "1500W BLDC hub motor",
      battery: "High-speed EV battery",
      brakes: "Superior braking system",
      suspension: "Dual tube suspension",
      seatingOrLoad: "Rider + pillion"
    },
    parts: scooterParts
  },
  {
    id: "buland-rsd-standard",
    name: "BULAND RSD STANDARD",
    type: "erickshaw",
    category: "E-Rickshaw",
    brandLine: "Buland Motors",
    shortDescription:
      "A standard electric rickshaw model with proven reliability and cost-effective daily commercial operation.",
    posterImage: vehicleImage("buland-rsd-standard.jpg"),
    gallery: [
      vehicleImage("buland-rsd-standard.jpg"),
      vehicleImage("buland-rsd-ms.jpg"),
      vehicleImage("buland-rsd-ss.jpg")
    ],
    specs: {
      range: "120-130 km",
      speed: "25 km/h",
      chargingTime: "7-8 hrs",
      motor: "Commercial shaft motor",
      battery: "High-capacity traction battery",
      brakes: "Rickshaw brake assembly",
      suspension: "Commercial load suspension",
      seatingOrLoad: "Passenger seating"
    },
    parts: erickshawParts
  },
  {
    id: "buland-rsd-ms",
    name: "BULAND RSD MS",
    type: "erickshaw",
    category: "E-Rickshaw",
    brandLine: "Buland Motors",
    shortDescription:
      "Medium Strong electric rickshaw with reliable performance and comprehensive safety features for urban duty.",
    posterImage: vehicleImage("buland-rsd-ms.jpg"),
    gallery: [
      vehicleImage("buland-rsd-ms.jpg"),
      vehicleImage("buland-rsd-standard.jpg"),
      vehicleImage("buland-rsd-ss.jpg")
    ],
    specs: {
      range: "120-130 km",
      speed: "25 km/h",
      chargingTime: "7-8 hrs",
      motor: "Commercial shaft motor",
      battery: "High-capacity traction battery",
      brakes: "Service-friendly brake system",
      suspension: "Commercial suspension",
      seatingOrLoad: "Passenger seating"
    },
    parts: erickshawParts
  },
  {
    id: "buland-rsd-ss",
    name: "BULAND RSD SS",
    type: "erickshaw",
    category: "E-Rickshaw",
    brandLine: "Buland Motors",
    shortDescription:
      "Super Strong e-rickshaw with 1200W shaft motor and 500 kg loading capacity for commercial routes.",
    posterImage: vehicleImage("buland-rsd-ss.jpg"),
    gallery: [
      vehicleImage("buland-rsd-ss.jpg"),
      vehicleImage("buland-rsd-ms.jpg"),
      vehicleImage("buland-rsd-standard.jpg")
    ],
    specs: {
      range: "120-130 km",
      speed: "25 km/h",
      chargingTime: "7-8 hrs",
      motor: "1200W shaft motor",
      battery: "Commercial traction battery",
      brakes: "Heavy-duty brake assembly",
      suspension: "Commercial load suspension",
      seatingOrLoad: "Up to 500 kg duty"
    },
    parts: erickshawParts
  },
  {
    id: "buland-rsd-loader",
    name: "BULAND RSD LOADER",
    type: "erickshaw",
    category: "Utility 3W / Loader",
    brandLine: "Buland Motors",
    shortDescription:
      "Heavy-duty electric loader with 1500W shaft motor designed for maximum cargo capacity and durability.",
    posterImage: vehicleImage("buland-rsd-loader.jpg"),
    gallery: [
      vehicleImage("buland-rsd-loader.jpg"),
      vehicleImage("veer-loader.jpg"),
      vehicleImage("buland-rsd-ss.jpg")
    ],
    specs: {
      range: "120-130 km",
      speed: "25 km/h",
      chargingTime: "7-8 hrs",
      motor: "1500W shaft motor",
      battery: "Utility traction battery",
      brakes: "Commercial brake package",
      suspension: "Cargo-rated suspension",
      seatingOrLoad: "Cargo load bay"
    },
    parts: erickshawParts
  },
  {
    id: "veer-loader",
    name: "VEER LOADER",
    type: "erickshaw",
    category: "Utility 3W / Loader",
    brandLine: "Veer Motors",
    shortDescription:
      "Heavy-duty electric loader with 300 kg loading capacity and safety features for last-mile businesses.",
    posterImage: vehicleImage("veer-loader.jpg"),
    gallery: [
      vehicleImage("veer-loader.jpg"),
      vehicleImage("buland-rsd-loader.jpg"),
      vehicleImage("buland-rsd-standard.jpg")
    ],
    specs: {
      range: "80/100 km",
      speed: "25 km/h",
      chargingTime: "4-5 hrs",
      motor: "Utility shaft motor",
      battery: "Commercial EV battery",
      brakes: "Utility brake assembly",
      suspension: "Cargo-rated suspension",
      seatingOrLoad: "300 kg load capacity"
    },
    parts: erickshawParts
  }
];

export const scooterVehicles = vehicles.filter((vehicle) => vehicle.type === "scooter");
export const erickshawVehicles = vehicles.filter((vehicle) => vehicle.type === "erickshaw");

export function getVehicleById(id: string) {
  return vehicles.find((vehicle) => vehicle.id === id);
}
