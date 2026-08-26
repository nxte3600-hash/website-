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
  posterImage: string;
  gallery: string[];
  imagePending?: boolean;
  audience?: string;
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

const option2 = (name: string) => `/option2/${name}`;
const vehicleImage = (name: string) => `/vehicles/${name}`;
const gallery = (prefix: string, count: number) => Array.from({ length: count }, (_, index) => option2(`${prefix}${index + 1}.png`));
const imageList = (prefix: string, count: number, extension = "png") => Array.from({ length: count }, (_, index) => option2(`${prefix}${index + 1}.${extension}`));

const scooterParts: VehiclePart[] = [
  {
    id: "motor",
    name: "Motor",
    x: 72,
    y: 68,
    purpose: "Supports quiet electric movement for city use.",
    technology: "Model-specific motor data is published only when approved product documentation is available.",
    maintenance: "Inspect during scheduled service."
  },
  {
    id: "battery",
    name: "Battery",
    x: 49,
    y: 55,
    purpose: "Stores energy for everyday routes.",
    technology: "Battery chemistry and capacity require approved model-wise documentation.",
    maintenance: "Use the matched charger and follow dealer service guidance."
  },
  {
    id: "controller",
    name: "Controller",
    x: 58,
    y: 47,
    purpose: "Manages throttle response and electrical protection.",
    technology: "Controller rating requires management-approved specification data.",
    maintenance: "Dealer diagnostic inspection required."
  },
  {
    id: "brakes",
    name: "Brakes",
    x: 20,
    y: 76,
    purpose: "Provides everyday stopping confidence.",
    technology: "Brake configuration is model-specific and should be verified before publishing.",
    maintenance: "Check pads, cables and response at service intervals."
  }
];

const erickshawParts: VehiclePart[] = [
  {
    id: "motor",
    name: "Shaft Motor",
    x: 68,
    y: 73,
    purpose: "Moves passenger or cargo loads with steady low-speed torque.",
    technology: "Commercial-duty shaft-drive package.",
    maintenance: "Inspect drivetrain noise, mounts and couplers during service."
  },
  {
    id: "battery",
    name: "Traction Battery",
    x: 44,
    y: 69,
    purpose: "Supports daily commercial duty cycles.",
    technology: "Battery chemistry and capacity require approved model-wise documentation.",
    maintenance: "Maintain charge discipline and follow dealer service guidance."
  },
  {
    id: "chassis",
    name: "Commercial Chassis",
    x: 49,
    y: 80,
    purpose: "Carries repeated passenger or cargo loads with road stability.",
    technology: "Reinforced chassis geometry for commercial use.",
    maintenance: "Inspect frame alignment, weld points and corrosion-prone areas."
  },
  {
    id: "brakes",
    name: "Brake Assembly",
    x: 24,
    y: 83,
    purpose: "Gives reliable low-speed stopping with load.",
    technology: "Rickshaw brake assembly selected for serviceability.",
    maintenance: "Check shoe or pad wear, cable tension and response feel."
  }
];

export const vehicles: Vehicle[] = [
  {
    id: "grace",
    name: "Grace",
    type: "scooter",
    category: "2-Wheeler",
    brandLine: "NXTE Mobility",
    audience: "Office-going women and family journeys",
    shortDescription: "A premium everyday scooter story for confident city movement. Final public specifications must be verified from approved product documents.",
    posterImage: option2("grace1.png"),
    gallery: gallery("grace", 4),
    specs: {
      range: "Specification pending",
      speed: "Specification pending",
      chargingTime: "Specification pending",
      motor: "Specification pending",
      battery: "Specification pending",
      brakes: "Specification pending",
      suspension: "Specification pending",
      seatingOrLoad: "Rider + pillion"
    },
    parts: scooterParts
  },
  {
    id: "prince",
    name: "Prince",
    type: "scooter",
    category: "2-Wheeler",
    brandLine: "NXTE Mobility",
    audience: "Office-going men and daily commute",
    shortDescription: "A clean white scooter story for office commutes and everyday city riding. Final public specifications require approved product documentation.",
    posterImage: option2("prince1.jpg"),
    gallery: imageList("prince", 4, "jpg"),
    specs: {
      range: "Specification pending",
      speed: "Specification pending",
      chargingTime: "Specification pending",
      motor: "Specification pending",
      battery: "Specification pending",
      brakes: "Specification pending",
      suspension: "Specification pending",
      seatingOrLoad: "Rider + pillion"
    },
    parts: scooterParts
  },
  {
    id: "energy",
    name: "Energy",
    type: "scooter",
    category: "2-Wheeler",
    brandLine: "NXTE Mobility",
    audience: "College students and city errands",
    shortDescription: "A red city scooter story for campus routes, errands and practical daily movement. Publish final specifications only after management-approved product documentation is available.",
    posterImage: option2("energy1.png"),
    gallery: gallery("energy", 4),
    specs: {
      range: "Specification pending",
      speed: "Specification pending",
      chargingTime: "Specification pending",
      motor: "Specification pending",
      battery: "Specification pending",
      brakes: "Specification pending",
      suspension: "Specification pending",
      seatingOrLoad: "Rider + pillion"
    },
    parts: scooterParts
  },
  {
    id: "energy-pro",
    name: "Energy Pro",
    type: "scooter",
    category: "2-Wheeler",
    brandLine: "NXTE Mobility",
    audience: "Everyday market and household journeys",
    shortDescription: "A practical scooter story for household routes, short errands and reliable daily movement. Final public specifications require approved documentation.",
    posterImage: option2("energypro1.png"),
    gallery: gallery("energypro", 4),
    specs: {
      range: "Specification pending",
      speed: "Specification pending",
      chargingTime: "Specification pending",
      motor: "Specification pending",
      battery: "Specification pending",
      brakes: "Specification pending",
      suspension: "Specification pending",
      seatingOrLoad: "Rider + pillion"
    },
    parts: scooterParts
  },
  {
    id: "xt1",
    name: "XT1",
    type: "scooter",
    category: "2-Wheeler",
    brandLine: "NXTE Mobility",
    audience: "Connected urban riding",
    shortDescription: "A connected, app-ready scooter experience for customers who want smart ownership controls and simple service access.",
    posterImage: option2("ola1.png"),
    gallery: gallery("ola", 4),
    specs: {
      range: "Specification pending",
      speed: "Specification pending",
      chargingTime: "Specification pending",
      motor: "Specification pending",
      battery: "Specification pending",
      brakes: "Specification pending",
      suspension: "Specification pending",
      seatingOrLoad: "Rider + pillion"
    },
    parts: scooterParts
  },
  {
    id: "e4",
    name: "E4",
    type: "scooter",
    category: "2-Wheeler",
    brandLine: "NXTE Mobility",
    audience: "Compact city routes",
    shortDescription: "A compact city scooter in the approved six-model two-wheeler range. Final specifications must be confirmed before publication.",
    posterImage: option2("e41.png"),
    gallery: gallery("e4", 4),
    specs: {
      range: "Specification pending",
      speed: "Specification pending",
      chargingTime: "Specification pending",
      motor: "Specification pending",
      battery: "Specification pending",
      brakes: "Specification pending",
      suspension: "Specification pending",
      seatingOrLoad: "Rider + pillion"
    },
    parts: scooterParts
  },
  {
    id: "buland-rsd-standard",
    name: "BULAND RSD STANDARD",
    type: "erickshaw",
    category: "Passenger 3-Wheeler",
    brandLine: "Buland Motors",
    shortDescription: "A standard electric rickshaw model for practical commercial routes.",
    posterImage: vehicleImage("buland-rsd-standard.jpg"),
    gallery: [vehicleImage("buland-rsd-standard.jpg"), vehicleImage("buland-rsd-ms.jpg"), vehicleImage("buland-rsd-ss.jpg")],
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
    category: "Passenger 3-Wheeler",
    brandLine: "Buland Motors",
    shortDescription: "Medium Strong electric rickshaw for urban duty and commercial dependability.",
    posterImage: vehicleImage("buland-rsd-ms.jpg"),
    gallery: [vehicleImage("buland-rsd-ms.jpg"), vehicleImage("buland-rsd-standard.jpg"), vehicleImage("buland-rsd-ss.jpg")],
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
    category: "Passenger 3-Wheeler",
    brandLine: "Buland Motors",
    shortDescription: "Super Strong e-rickshaw for commercial routes where durability matters.",
    posterImage: vehicleImage("buland-rsd-ss.jpg"),
    gallery: [vehicleImage("buland-rsd-ss.jpg"), vehicleImage("buland-rsd-ms.jpg"), vehicleImage("buland-rsd-standard.jpg")],
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
    category: "Cargo EV",
    brandLine: "Buland Motors",
    shortDescription: "Heavy-duty electric loader designed for practical local cargo movement.",
    posterImage: vehicleImage("buland-rsd-loader.jpg"),
    gallery: [vehicleImage("buland-rsd-loader.jpg"), vehicleImage("veer-loader.jpg"), vehicleImage("buland-rsd-ss.jpg")],
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
    category: "Cargo EV",
    brandLine: "Veer Motors",
    shortDescription: "A utility electric loader for last-mile businesses and everyday cargo duty.",
    posterImage: vehicleImage("veer-loader.jpg"),
    gallery: [vehicleImage("veer-loader.jpg"), vehicleImage("buland-rsd-loader.jpg"), vehicleImage("buland-rsd-standard.jpg")],
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
export const passengerThreeWheelers = vehicles.filter((vehicle) => vehicle.category === "Passenger 3-Wheeler");
export const cargoVehicles = vehicles.filter((vehicle) => vehicle.category === "Cargo EV");

export function getVehicleById(id: string) {
  return vehicles.find((vehicle) => vehicle.id === id);
}
