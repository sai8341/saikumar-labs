import type { Metadata } from "next";
import ArticleContent from "./ArticleContent";
import { siteConfig } from "@/lib/config";

const postUrl = `${siteConfig.url}/blog/the-agentic-meta-ads-playbook-connecting-ads-to-ai-agents`;

export const metadata: Metadata = {
  title: "The Agentic Meta Ads Playbook: How to Connect Ads to AI Agents",
  description:
    "Learn how service business owners can bypass the confusing Meta Ads Manager by connecting Meta Ads MCP to private AI agents on WhatsApp and Telegram.",
  alternates: {
    canonical: postUrl,
  },
  openGraph: {
    title: "The Agentic Meta Ads Playbook | SaiKumar Labs",
    description:
      "Step-by-step architecture: Connecting Meta Business Manager and Ads MCP to conversational AI assistants for hands-off ad management.",
    url: postUrl,
    type: "article",
    publishedTime: "2026-10-23T00:00:00Z",
    authors: ["Sai Kumar"],
  },
};

export default function AgenticMetaAdsPage() {
  return <ArticleContent />;
}
