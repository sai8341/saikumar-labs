import type { Metadata } from "next";
import BlogContent from "./BlogContent";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Blog - Lead Generation Tips for Service Businesses",
  description:
    "Practical tips on lead generation, business automation, WhatsApp follow-up, and digital marketing for coaches, clinics, salons, and service businesses in India.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Blog | SaiKumar Labs",
    description:
      "Lead generation and business automation tips for service businesses in India.",
    url: `${siteConfig.url}/blog`,
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
      "name": "Blog",
      "item": `${siteConfig.url}/blog`,
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogContent />
    </>
  );
}
