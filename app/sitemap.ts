// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lyschorrealestate.ae";

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    {
      url: `${baseUrl}/freelance`,
      lastModified: new Date(),
      priority: 0.9,
    },
    { url: `${baseUrl}/documents`, lastModified: new Date(), priority: 0.8 },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      priority: 0.5,
    },
    { url: `${baseUrl}/terms-of-use`, lastModified: new Date(), priority: 0.5 },
  ];
}
