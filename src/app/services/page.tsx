import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Lead Generation & Business Automation Services India",
  description:
    "Website development, lead capture funnels, Google Business Profile setup, Meta ads, WhatsApp follow-up automation & AI solutions for coaches, clinics, and salons in Hyderabad, Bangalore & India.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Lead Generation & Business Automation Services | SaiKumar Labs",
    description:
      "Website development, lead funnels, tracking, and automation for service businesses across India.",
    url: `${siteConfig.url}/services`,
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
      "name": "Services",
      "item": `${siteConfig.url}/services`,
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesContent />
    </>
  );
}
