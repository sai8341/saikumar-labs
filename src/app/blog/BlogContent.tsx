"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

// Blog posts data — expand this as you write more content
const blogPosts = [
  {
    slug: "why-service-businesses-lose-leads",
    title: "Why Most Service Businesses Lose Leads (And How to Fix It)",
    excerpt:
      "Your website looks fine. Your ads are running. But where are the leads going? Here are the 5 most common reasons service businesses lose leads — and what to do about each one.",
    category: "Lead Generation",
    readTime: "5 min read",
    date: "2025-06-10",
  },
  {
    slug: "whatsapp-follow-up-system-guide",
    title:
      "How to Set Up a WhatsApp Follow-Up System for Your Business in India",
    excerpt:
      "WhatsApp is where your customers already are. Learn how to build a simple follow-up system that automatically responds to new leads and keeps the conversation going.",
    category: "Automation",
    readTime: "7 min read",
    date: "2025-06-05",
  },
  {
    slug: "google-business-profile-setup-india",
    title:
      "Google Business Profile Setup Guide for Service Businesses in India",
    excerpt:
      "Getting found on Google Maps and local search starts with a properly set up Google Business Profile. Here's exactly how to do it step by step — no SEO jargon needed.",
    category: "Online Presence",
    readTime: "6 min read",
    date: "2025-05-28",
  },
];

export default function BlogContent() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-cream-100 to-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-gold-700 bg-cream-200 rounded-full border border-gold-400/30">
              Blog & Insights
            </span>
            <h1>
              Practical Tips to Get More{" "}
              <span className="text-gold-500">Leads & Clients</span>
            </h1>
            <p className="mt-6 text-lg text-charcoal-600 max-w-2xl mx-auto">
              No fluff. No jargon. Just actionable advice on lead generation,
              follow-up automation, and growing your service business in India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block group bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-gold-400/30 hover:shadow-lg transition-all duration-300"
                >
                  {/* Category & Read Time */}
                  <div className="flex items-center gap-4 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gold-700 bg-gold-400/10 px-2.5 py-1 rounded-full">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-custom-400">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-semibold text-charcoal-900 group-hover:text-gold-600 transition-colors mb-3">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-custom-500 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Note */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-custom-400 text-sm">
              More articles coming soon. Follow us on{" "}
              <a
                href="https://instagram.com/saikumarlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-600 hover:underline"
              >
                Instagram
              </a>{" "}
              for updates.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
