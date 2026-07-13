"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Users,
  Stethoscope,
  Scissors,
  Globe,
  BarChart3,
  Zap,
  Target,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/config";
import { analytics } from "@/lib/analytics";

const caseStudies = [
  {
    icon: Users,
    title: "Coach Lead Capture System",
    industry: "Coaching",
    color: "from-blue-500 to-blue-600",
    problem:
      "Leads from Instagram and the website were scattered with no follow-up process — enquiries went cold within hours.",
    solution:
      "Built a conversion-focused landing page, connected lead capture to WhatsApp, and set up automated follow-up sequences.",
    outcome:
      "Every enquiry captured in one place. Automated follow-up runs without manual effort. Clear data on which channels bring real leads.",
    systems: ["Landing Page", "Lead Funnel", "GA4 Tracking", "Follow-up Automation"],
  },
  {
    icon: Stethoscope,
    title: "Clinic Booking & Follow-up System",
    industry: "Healthcare Clinic",
    color: "from-green-500 to-green-600",
    problem:
      "High no-show rate — patients booked but forgot, and staff had to manually call each person.",
    solution:
      "Created an online booking flow with automated WhatsApp and SMS reminders before each appointment.",
    outcome:
      "Significant reduction in missed appointments. Staff freed from manual calling. Smoother patient experience.",
    systems: ["Online Booking", "WhatsApp Reminders", "SMS Alerts", "Conversion Tracking"],
  },
  {
    icon: Scissors,
    title: "Salon Enquiry & WhatsApp Flow",
    industry: "Salon & Beauty",
    color: "from-pink-500 to-pink-600",
    problem:
      "All enquiries came through Instagram DMs — chaotic, slow responses, and no way to track service requests.",
    solution:
      "Set up a clean enquiry form connected to WhatsApp with automated greeting and service selection.",
    outcome:
      "Organised enquiry pipeline. Professional first impression. Clients explore services and reach out in seconds.",
    systems: ["Enquiry Form", "WhatsApp Integration", "Auto-greeting", "Lead Tracking"],
  },
];

export default function WorkContent() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-cream-100 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-4 sm:mb-6 text-xs sm:text-sm font-medium text-gold-700 bg-cream-200 rounded-full border border-gold-400/30">
                Our Work
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Systems That{" "}
                <span className="text-gold-500">Actually Work</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-charcoal-600 leading-relaxed">
                Real examples of lead systems we&apos;ve built for service
                businesses — from problem to outcome.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-cream-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
          {caseStudies.map((study, studyIndex) => (
            <motion.article
              key={study.title}
              className="bg-card rounded-2xl sm:rounded-3xl border border-border overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: studyIndex * 0.1 }}
              onClick={() => analytics.portfolioClick(study.title)}
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${study.color} p-5 sm:p-8`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <study.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-white/80">
                    {study.industry}
                  </span>
                </div>
                <h2 className="text-lg sm:text-2xl font-bold text-white">
                  {study.title}
                </h2>
              </div>

              {/* Content — 3 compact paragraphs */}
              <div className="p-5 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
                  {/* Problem */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-custom-400">
                        Problem
                      </h3>
                    </div>
                    <p className="text-sm text-charcoal-600 leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-gold-400" />
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-custom-400">
                        Solution
                      </h3>
                    </div>
                    <p className="text-sm text-charcoal-600 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-custom-400">
                        Outcome
                      </h3>
                    </div>
                    <p className="text-sm text-charcoal-600 leading-relaxed font-medium">
                      {study.outcome}
                    </p>
                  </div>
                </div>

                {/* Systems tags */}
                <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-border">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {study.systems.map((sys) => (
                      <span
                        key={sys}
                        className="px-2.5 py-1 bg-cream-200 text-charcoal-700 text-xs font-medium rounded-full"
                      >
                        {sys}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Approach Section — Tightened */}
      <section className="section-padding bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Approach"
            title="How We Think About Every Project"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Target, label: "Outcome-First", desc: "Start with what the business needs." },
              { icon: Globe, label: "Connected", desc: "Every piece works together." },
              { icon: BarChart3, label: "Measurable", desc: "Clear metrics for every system." },
              { icon: Zap, label: "Sustainable", desc: "Systems that keep working." },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold-400/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold-600" />
                </div>
                <h3 className="font-semibold text-charcoal-900 text-sm mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-gray-custom-500">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-400/10 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-cream-50 mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Want a System Like This?
            </h2>
            <p className="text-sm sm:text-lg text-gray-custom-400 mb-6 sm:mb-8">
              Let&apos;s talk about your lead flow and how to fix it.
            </p>
            <div className="flex flex-row gap-3 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="sm:px-6 sm:py-3 sm:text-base"
                trackLabel="work_cta"
                id="work-cta"
              >
                Book a Free Review
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                variant="outline"
                size="sm"
                className="border-cream-300/30 text-cream-100 hover:bg-cream-100/10 hover:text-cream-50 sm:px-6 sm:py-3 sm:text-base"
                external
                trackLabel="work_whatsapp"
                id="work-whatsapp"
                onClick={() => analytics.whatsappClick("work_cta")}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
