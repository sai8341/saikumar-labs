import type { Metadata } from "next";
import WorkContent from "./WorkContent";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Case Studies - Lead Systems for Coaches, Clinics & Salons",
  description:
    "See how we built lead capture systems, booking funnels, and WhatsApp follow-up workflows for coaches, clinics, and salons in India. Real problems, real solutions, real outcomes.",
  alternates: {
    canonical: `${siteConfig.url}/work`,
  },
  openGraph: {
    title: "Case Studies - Lead Systems That Work | SaiKumar Labs",
    description:
      "Lead system case studies for coaches, clinics, and salons - from problem to outcome.",
    url: `${siteConfig.url}/work`,
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
      "name": "Case Studies",
      "item": `${siteConfig.url}/work`,
    },
  ],
};

export default function WorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <WorkContent />
    </>
  );
}
