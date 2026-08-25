import type { MetadataRoute } from "next";
import { vehicles } from "@/lib/vehicles";
import { blogPosts } from "@/lib/blogPosts";

const baseUrl = "https://www.nxtemobility.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/vehicles",
    "/for-you",
    "/business",
    "/app",
    "/about-us",
    "/manufacturing",
    "/why-ev",
    "/technology",
    "/sustainability",
    "/dealer",
    "/careers",
    "/contact",
    "/test-ride",
    "/service",
    "/finance",
    "/blog",
    "/privacy",
    "/terms"
  ];

  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: route === "" ? 1 : 0.8 })),
    ...vehicles.map((vehicle) => ({ url: `${baseUrl}/vehicles/${vehicle.id}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 })),
    ...blogPosts.map((post) => ({ url: `${baseUrl}/blog/${post.slug}`, lastModified: new Date(post.date), changeFrequency: "monthly" as const, priority: 0.55 }))
  ];
}
