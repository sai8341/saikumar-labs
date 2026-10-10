import type { Metadata } from "next";
import AboutContent from "./AboutContent";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About - From Code to AI-Powered Lead Systems",
  description:
    "SaiKumar Labs combines coding, digital marketing, and AI automation to build lead systems for service businesses in India. No fluff - just honest, practical systems that work.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About SaiKumar Labs - Code + Marketing + AI = Lead Systems",
    description:
      "How SaiKumar Labs was built to help service businesses in Hyderabad, Bangalore, and India get more leads.",
    url: `${siteConfig.url}/about`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": siteConfig.url,
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": `${siteConfig.url}/about`,
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutContent />
    </>
  );
}
