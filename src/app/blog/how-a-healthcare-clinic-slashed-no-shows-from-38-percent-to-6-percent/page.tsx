import type { Metadata } from "next";
import ArticleContent from "./ArticleContent";
import { siteConfig } from "@/lib/config";

const postUrl = `${siteConfig.url}/blog/how-a-healthcare-clinic-slashed-no-shows-from-38-percent-to-6-percent`;

export const metadata: Metadata = {
  title: "Case Study: How a Clinic Slashed No-Shows from 38% to 6% with WhatsApp AI",
  description:
    "Discover how deploying the official Meta WhatsApp Cloud API with multi-cadence automated reminders reduced clinic appointment no-shows from 38% down to 6%.",
  alternates: {
    canonical: postUrl,
  },
  openGraph: {
    title: "Case Study: Slashing Clinic No-Shows with WhatsApp AI | SaiKumar Labs",
    description:
      "Real-world breakdown: Automated WhatsApp reminders and instant booking funnels for healthcare practices.",
    url: postUrl,
    type: "article",
    publishedTime: "2026-10-23T00:00:00Z",
    authors: ["Sai Kumar"],
  },
};

export default function CaseStudyPage() {
  return <ArticleContent />;
}
