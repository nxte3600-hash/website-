export type VideoAssetKey =
  | "home"
  | "about"
  | "manufacturing"
  | "whyEv"
  | "blog"
  | "vehicles"
  | "dealer"
  | "testRide"
  | "contact";

export type VideoAsset = {
  videoSrc: string;
  poster: string;
  note: string;
};

const localHeroVideo = "/video/hero-electric-scooter.mp4";

export const videoAssets: Record<VideoAssetKey, VideoAsset> = {
  home: {
    videoSrc: localHeroVideo,
    poster: "/option2/hero-india-in-motion.png",
    note: "Replace with licensed EV mobility/manufacturing hero footage when available."
  },
  about: {
    videoSrc: localHeroVideo,
    poster: "/assets/ceo.jpeg",
    note: "Replace with founder, team, factory, or brand vision footage."
  },
  manufacturing: {
    videoSrc: localHeroVideo,
    poster: "/vehicles/buland-rsd-loader.jpg",
    note: "Replace with licensed assembly line, battery integration, or QC footage."
  },
  whyEv: {
    videoSrc: localHeroVideo,
    poster: "/option2/sustainability-master.png",
    note: "Replace with legal clean-air family/nature footage from Pexels, Pixabay, Coverr, or Mixkit."
  },
  blog: {
    videoSrc: localHeroVideo,
    poster: "/option2/energypro1.png",
    note: "Replace with EV innovation, charging, or mobility editorial footage."
  },
  vehicles: {
    videoSrc: localHeroVideo,
    poster: "/option2/grace1.png",
    note: "Replace with cinematic product running footage."
  },
  dealer: {
    videoSrc: localHeroVideo,
    poster: "/vehicles/buland-rsd-loader.jpg",
    note: "Replace with showroom, territory growth, or dealer team footage."
  },
  testRide: {
    videoSrc: localHeroVideo,
    poster: "/option2/ola3.png",
    note: "Replace with rider/customer test ride experience footage."
  },
  contact: {
    videoSrc: localHeroVideo,
    poster: "/vehicles/nxt-logo.png",
    note: "Replace with office, support desk, or customer connect footage."
  }
};

export function getVideoAsset(key: VideoAssetKey = "home") {
  return videoAssets[key];
}
