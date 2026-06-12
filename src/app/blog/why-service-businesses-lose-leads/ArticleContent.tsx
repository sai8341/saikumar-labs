"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, ArrowRight, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";

export default function ArticleContent() {
  return (
    <article>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-cream-100 to-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-custom-500 hover:text-gold-600 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gold-700 bg-gold-400/10 px-2.5 py-1 rounded-full">
                <Tag className="w-3 h-3" />
                Lead Generation
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-gray-custom-400">
                <Clock className="w-3 h-3" />5 min read
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl">
              Why Most Service Businesses Lose Leads{" "}
              <span className="text-gold-500">(And How to Fix It)</span>
            </h1>
            <p className="mt-4 text-lg text-charcoal-600">
              Your website looks fine. Your ads are running. But where are the
              leads going? Here are the 5 most common reasons — and practical
              fixes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12 md:py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-charcoal-600 leading-relaxed mb-8">
                If you run a coaching business, clinic, salon, or consulting
                practice in India, you&apos;ve probably invested in a website and
                maybe even some ads. But the leads aren&apos;t coming in the way
                you expected. Or worse — they&apos;re coming in, but
                you&apos;re not converting them.
              </p>
              <p className="text-charcoal-600 leading-relaxed mb-8">
                The problem usually isn&apos;t your service or your marketing
                budget. It&apos;s the system between them. Here are the 5 most
                common lead leaks we see — and how to fix each one.
              </p>
            </motion.div>

            {/* Reason 1 */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-charcoal-900 mb-3">
                1. No Clear Call-to-Action on Your Website
              </h2>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Most service business websites look like online brochures. They
                explain what you do, but they don&apos;t tell visitors what to
                do next. There&apos;s no clear &quot;Book a Call&quot; or
                &quot;Get a Quote&quot; button.
              </p>
              <div className="bg-card border border-border rounded-xl p-5 mb-4">
                <p className="text-sm font-semibold text-gold-700 mb-1">
                  ✅ Fix:
                </p>
                <p className="text-sm text-charcoal-600">
                  Add a visible CTA button above the fold on every page. Use
                  action-oriented text like &quot;Book a Free Review&quot; or
                  &quot;WhatsApp Us Now&quot; instead of generic &quot;Contact
                  Us&quot;.
                </p>
              </div>
            </motion.div>

            {/* Reason 2 */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-charcoal-900 mb-3">
                2. No Follow-Up System After Enquiry
              </h2>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                A lead fills your contact form. You see it 3 days later. By
                then, they&apos;ve already gone to a competitor. This is the
                single biggest reason service businesses lose leads — slow or
                zero follow-up.
              </p>
              <div className="bg-card border border-border rounded-xl p-5 mb-4">
                <p className="text-sm font-semibold text-gold-700 mb-1">
                  ✅ Fix:
                </p>
                <p className="text-sm text-charcoal-600">
                  Set up an automated WhatsApp or email response that triggers
                  immediately when a lead comes in. Even a simple &quot;Thanks
                  for reaching out, we&apos;ll get back in 2 hours&quot; keeps
                  the conversation alive.
                </p>
              </div>
            </motion.div>

            {/* Reason 3 */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-charcoal-900 mb-3">
                3. No Tracking — You Don&apos;t Know What&apos;s Working
              </h2>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                If you don&apos;t have Google Analytics, Search Console, or any
                form of tracking, you&apos;re running blind. You don&apos;t know
                how many people visit your site, where they come from, or where
                they drop off.
              </p>
              <div className="bg-card border border-border rounded-xl p-5 mb-4">
                <p className="text-sm font-semibold text-gold-700 mb-1">
                  ✅ Fix:
                </p>
                <p className="text-sm text-charcoal-600">
                  Set up GA4 and Google Search Console on day one. Track form
                  submissions, WhatsApp clicks, and phone calls as conversion
                  events. This gives you real data to make decisions.
                </p>
              </div>
            </motion.div>

            {/* Reason 4 */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-charcoal-900 mb-3">
                4. Your Website Isn&apos;t Mobile-Friendly
              </h2>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Over 75% of internet users in India browse on mobile. If your
                website is slow, hard to navigate, or has tiny text on phones —
                visitors leave in seconds.
              </p>
              <div className="bg-card border border-border rounded-xl p-5 mb-4">
                <p className="text-sm font-semibold text-gold-700 mb-1">
                  ✅ Fix:
                </p>
                <p className="text-sm text-charcoal-600">
                  Test your website on your phone right now. Can you fill the
                  contact form easily? Is the WhatsApp button visible? Does it
                  load in under 3 seconds? If not, it needs a rebuild with
                  mobile-first design.
                </p>
              </div>
            </motion.div>

            {/* Reason 5 */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-charcoal-900 mb-3">
                5. No Lead Capture Funnel — Just a Website
              </h2>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Having a website is not the same as having a lead system. A
                website shows information. A lead system captures enquiries,
                tracks them, and follows up automatically. Most service
                businesses have the first but not the second.
              </p>
              <div className="bg-card border border-border rounded-xl p-5 mb-4">
                <p className="text-sm font-semibold text-gold-700 mb-1">
                  ✅ Fix:
                </p>
                <p className="text-sm text-charcoal-600">
                  Build a connected system: Website → Lead Capture Form →
                  Instant Notification → Auto Follow-up → CRM/Spreadsheet
                  Tracking. Every step should be automated and connected.
                </p>
              </div>
            </motion.div>

            {/* Summary */}
            <motion.div
              className="bg-cream-200/50 border border-gold-400/20 rounded-2xl p-6 md:p-8 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-semibold text-charcoal-900 mb-4">
                Quick Summary: 5 Lead Leaks & Fixes
              </h2>
              <ol className="space-y-2 text-charcoal-600">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-gold-600 shrink-0">
                    1.
                  </span>
                  <span>
                    <strong>No CTA</strong> → Add visible &quot;Book Now&quot; buttons on every page
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-gold-600 shrink-0">
                    2.
                  </span>
                  <span>
                    <strong>No Follow-up</strong> → Auto-respond via WhatsApp/email
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-gold-600 shrink-0">
                    3.
                  </span>
                  <span>
                    <strong>No Tracking</strong> → Set up GA4 + Search Console
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-gold-600 shrink-0">
                    4.
                  </span>
                  <span>
                    <strong>Not Mobile-Friendly</strong> → Mobile-first redesign
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-gold-600 shrink-0">
                    5.
                  </span>
                  <span>
                    <strong>No Funnel</strong> → Build a connected lead capture system
                  </span>
                </li>
              </ol>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            className="bg-charcoal-900 rounded-2xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-cream-50 mb-3">
              Want Us to Find Your Lead Leaks?
            </h3>
            <p className="text-gray-custom-400 mb-6 text-sm">
              We&apos;ll review your current website and lead flow for free — no
              pitch, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                trackLabel="blog_cta"
                id="blog-post-cta"
              >
                Book a Free Review
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I read your blog post about losing leads. Can you review my business?")}`}
                variant="outline"
                size="md"
                external
                className="border-cream-300/30 text-cream-100 hover:bg-cream-100/10 hover:text-cream-50"
                trackLabel="blog_whatsapp"
                id="blog-post-whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </Button>
            </div>
          </motion.div>

          {/* Back to blog */}
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-custom-500 hover:text-gold-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all articles
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
