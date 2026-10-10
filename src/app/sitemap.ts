import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModDate = new Date("2026-10-10");

  return [
    {
      url: baseUrl,
      lastModified: lastModDate,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: lastModDate,
    },
    {
      url: `${baseUrl}/services/clinic-lead-systems`,
      lastModified: lastModDate,
    },
    {
      url: `${baseUrl}/services/web-applications`,
      lastModified: lastModDate,
    },
    {
      url: `${baseUrl}/services/digital-foundation`,
      lastModified: lastModDate,
    },
    {
      url: `${baseUrl}/services/lead-engine`,
      lastModified: lastModDate,
    },
    {
      url: `${baseUrl}/services/business-automation`,
      lastModified: lastModDate,
    },
    {
      url: `${baseUrl}/services/brand-authority`,
      lastModified: lastModDate,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: lastModDate,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: lastModDate,
    },
    {
      url: `${baseUrl}/blog/why-service-businesses-lose-leads`,
      lastModified: lastModDate,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastModDate,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastModDate,
    },
  ];
}
