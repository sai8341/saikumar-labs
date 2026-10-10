import type { Metadata } from "next";
import ArticleContent from "./ArticleContent";
import { siteConfig } from "@/lib/config";

const postUrl = `${siteConfig.url}/blog/why-service-businesses-lose-leads`;

export const metadata: Metadata = {
  title: "Why Most Service Businesses Lose Leads (And How to Fix It)",
  description:
    "Your website looks fine. Your ads are running. But leads are disappearing. Here are the 5 most common reasons service businesses in India lose leads - and practical fixes for each one.",
  alternates: {
    canonical: postUrl,
  },
  openGraph: {
    title: "Why Service Businesses Lose Leads | SaiKumar Labs",
    description:
      "5 common reasons service businesses lose leads and how to fix each one.",
    url: postUrl,
    type: "article",
    publishedTime: "2026-10-09T00:00:00Z",
    modifiedTime: "2026-10-09T00:00:00Z",
    authors: ["Sai Kumar"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Most Service Businesses Lose Leads | SaiKumar Labs",
    description:
      "5 common reasons service businesses in India lose leads - and practical fixes.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${postUrl}/#article`,
      "isPartOf": {
        "@type": "WebPage",
        "@id": postUrl,
      },
      "headline": "Why Most Service Businesses Lose Leads (And How to Fix It)",
      "description":
        "5 common reasons service businesses in India lose leads - and practical fixes for each one.",
      "inLanguage": "en-IN",
      "mainEntityOfPage": postUrl,
      "datePublished": "2026-10-09T00:00:00Z",
      "dateModified": "2026-10-09T00:00:00Z",
      "author": {
        "@type": "Person",
        "name": "Sai Kumar",
        "jobTitle": "Founder & Lead Systems Engineer",
        "url": siteConfig.url,
      },
      "publisher": {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        "name": "SaiKumar Labs",
        "url": siteConfig.url,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteConfig.url}/logo.jpg`,
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${postUrl}/#breadcrumb`,
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
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Why Most Service Businesses Lose Leads",
          "item": postUrl,
        },
      ],
    },
  ],
};

export default function BlogPostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ArticleContent />
    </>
  );
}
