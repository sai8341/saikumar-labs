import type { Metadata } from "next";
import ContactContent from "./ContactContent";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact - Free Lead Flow Review for Your Business",
  description:
    "Book a free lead flow review for your service business. WhatsApp, email, or contact form - we respond within 24 hours. Serving Hyderabad, Bangalore & all of India.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact SaiKumar Labs - Free Lead Flow Review",
    description:
      "Book a free lead flow review. WhatsApp, email, or use our contact form.",
    url: `${siteConfig.url}/contact`,
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
      "name": "Contact",
      "item": `${siteConfig.url}/contact`,
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactContent />
    </>
  );
}
