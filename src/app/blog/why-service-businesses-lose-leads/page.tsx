import type { Metadata } from "next";
import ArticleContent from "./ArticleContent";

export const metadata: Metadata = {
  title: "Why Most Service Businesses Lose Leads (And How to Fix It)",
  description:
    "Your website looks fine. Your ads are running. But leads are disappearing. Here are the 5 most common reasons service businesses in India lose leads — and practical fixes for each one.",
  openGraph: {
    title: "Why Service Businesses Lose Leads | SaiKumar Labs",
    description:
      "5 common reasons service businesses lose leads and how to fix each one.",
    type: "article",
  },
};

export default function BlogPostPage() {
  return <ArticleContent />;
}
