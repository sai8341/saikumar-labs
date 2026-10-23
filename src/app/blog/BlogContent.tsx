"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const blogPosts = [
  {
    slug: "how-a-healthcare-clinic-slashed-no-shows-from-38-percent-to-6-percent",
    title: "Case Study: How a Multi-Specialty Clinic Slashed Patient No-Shows from 38% to 6% with WhatsApp AI",
    excerpt:
      "A step-by-step breakdown of how deploying official WhatsApp Cloud API auto-reminders and automated slot scheduling recovered ₹54,000 in monthly consultation fees.",
    category: "Case Study",
    readTime: "6 min read",
    date: "October 2026",
    highlight: true,
  },
  {
    slug: "the-agentic-meta-ads-playbook-connecting-ads-to-ai-agents",
    title: "The Agentic Meta Ads Playbook: How to Connect Ads to AI Agents for Hands-Off Reporting",
    excerpt:
      "Why service business owners are ditching the confusing Meta Ads Manager desktop interface in favor of private AI agents that report ad spend and patient leads directly on WhatsApp.",
    category: "AI & Ads",
    readTime: "7 min read",
    date: "October 2026",
  },
  {
    slug: "why-service-businesses-lose-leads",
    title: "Why Most Service Businesses Lose Leads (And How to Fix It)",
    excerpt:
      "Your website looks fine. Your ads are running. But where are the leads going? Here are the 5 most common reasons service businesses lose leads — and what to do about each one.",
    category: "Systems & Conversion",
    readTime: "5 min read",
    date: "October 2026",
  },
];

export default function BlogContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-background border-b border-bg-border text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-blue-700 bg-blue-50 rounded-full border border-blue-200 uppercase">
              Case Studies & Systems Insights
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-primary tracking-tight leading-tight">
              Real Case Studies on <span className="text-blue-600">AI Automation</span> & Growth
            </h1>
            <p className="mt-6 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto font-normal">
              No hype. Real engineering breakdowns on speed-to-lead, WhatsApp Cloud API workflows, and custom web applications for service businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className={`block rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${
                    post.highlight
                      ? "bg-background border-blue-300/80 shadow-md hover:shadow-xl"
                      : "bg-background border-bg-border hover:border-blue-200 hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-blue-600 transition-colors mb-3">
                    {post.title}
                  </h2>

                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6 font-normal">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-3 transition-all">
                    Read Complete Case Study
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
