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
  CheckCircle,
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
    problem: [
      "Leads from Instagram and website were scattered — no central capture point.",
      "No follow-up process — enquiries went cold within hours.",
      "Couldn't tell which content or channel was actually driving leads.",
    ],
    solution: [
      "Built a conversion-focused landing page with clear call-to-action.",
      "Set up a lead capture funnel connected to WhatsApp and email.",
      "Added automated follow-up sequences to nurture new enquiries.",
      "Installed GA4 tracking to measure what was working.",
    ],
    outcome: [
      "Every enquiry captured in one place — nothing falls through.",
      "Automated follow-up runs without manual effort.",
      "Clear data on which channels bring real leads.",
    ],
    systemType: "Landing Page + Lead Funnel + Follow-up Automation",
    systems: ["Landing Page", "Lead Funnel", "GA4 Tracking", "WhatsApp Flow", "Follow-up Automation"],
  },
  {
    icon: Stethoscope,
    title: "Clinic Booking & Follow-up System",
    industry: "Healthcare Clinic",
    color: "from-green-500 to-green-600",
    problem: [
      "Patients booked appointments but often forgot — high no-show rate.",
      "No automated reminders — staff had to manually call each patient.",
      "Walk-in patients couldn't easily book follow-ups online.",
    ],
    solution: [
      "Created an online booking flow integrated with the clinic website.",
      "Set up automated WhatsApp and SMS reminders before appointments.",
      "Built a simple follow-up system for post-visit care reminders.",
      "Added basic tracking to see booking conversion rates.",
    ],
    outcome: [
      "Significant reduction in missed appointments.",
      "Staff freed from manual calling — more time for patient care.",
      "Smoother patient experience from booking to follow-up.",
    ],
    systemType: "Booking Flow + Automated Reminders + Follow-up",
    systems: ["Online Booking", "WhatsApp Reminders", "SMS Alerts", "Follow-up Automation", "Conversion Tracking"],
  },
  {
    icon: Scissors,
    title: "Salon Enquiry & WhatsApp Flow",
    industry: "Salon & Beauty",
    color: "from-pink-500 to-pink-600",
    problem: [
      "All enquiries came through Instagram DMs — chaotic and slow.",
      "No structured way to capture enquiries or track service requests.",
      "Potential clients didn't know pricing or availability without DMing.",
    ],
    solution: [
      "Set up a clean enquiry form on the website with service selection.",
      "Connected the form to WhatsApp for instant notifications.",
      "Built an automated greeting with service menu and pricing guidance.",
      "Created a simple CRM-style tracking for enquiry status.",
    ],
    outcome: [
      "Organised enquiry pipeline — every lead tracked and responded to.",
      "Professional first impression — no more delayed DM replies.",
      "Clients can explore services and reach out in seconds.",
    ],
    systemType: "Enquiry Form + WhatsApp Integration + Lead Tracking",
    systems: ["Enquiry Form", "WhatsApp Integration", "Auto-greeting", "Service Menu", "Lead Tracking"],
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
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-gold-700 bg-cream-200 rounded-full border border-gold-400/30">
                Our Work
              </span>
              <h1>
                Systems That{" "}
                <span className="text-gold-500">Actually Work</span>
              </h1>
              <p className="mt-6 text-xl text-charcoal-600 leading-relaxed">
                Real examples of how we&apos;ve helped service businesses build
                lead systems. Each case study shows the problem, what we built,
                and the result.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-cream-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((study, studyIndex) => (
            <motion.article
              key={study.title}
              className="bg-card rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: studyIndex * 0.1 }}
              onClick={() => analytics.portfolioClick(study.title)}
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${study.color} p-8 md:p-10`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <study.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white/80">
                    {study.industry}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {study.title}
                </h2>
                <p className="mt-2 text-sm text-white/70">
                  {study.systemType}
                </p>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                  {/* Problem */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-3 h-3 rounded-full bg-red-400" />
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-custom-400">
                        Problem
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {study.problem.map((p) => (
                        <li
                          key={p}
                          className="text-sm text-charcoal-600 leading-relaxed flex gap-2"
                        >
                          <span className="text-red-300 mt-1 shrink-0">•</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-3 h-3 rounded-full bg-gold-400" />
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-custom-400">
                        Solution
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {study.solution.map((s) => (
                        <li
                          key={s}
                          className="text-sm text-charcoal-600 leading-relaxed flex gap-2"
                        >
                          <span className="text-gold-400 mt-1 shrink-0">•</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-3 h-3 rounded-full bg-green-500" />
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-custom-400">
                        Outcome
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {study.outcome.map((o) => (
                        <li
                          key={o}
                          className="text-sm text-charcoal-600 leading-relaxed flex gap-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Systems used */}
                <div className="mt-8 pt-8 border-t border-border">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-custom-400 block mb-3">
                    Systems Built
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {study.systems.map((sys) => (
                      <span
                        key={sys}
                        className="px-3 py-1.5 bg-cream-200 text-charcoal-700 text-xs font-medium rounded-full"
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

      {/* Approach Section */}
      <section className="section-padding bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Approach"
            title="How We Think About Every Project"
            subtitle="Every system we build follows the same principle: understand the problem, build for the outcome, and make it sustainable."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Target, label: "Outcome-First", desc: "We start with what the business needs, not what technology to use." },
              { icon: Globe, label: "Connected Systems", desc: "Every piece — website, tracking, capture, follow-up — works together." },
              { icon: BarChart3, label: "Measurable", desc: "If we can't track it, we don't build it. Every system has clear metrics." },
              { icon: Zap, label: "Sustainable", desc: "Systems that keep working without constant attention or high maintenance." },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="font-semibold text-charcoal-900 text-sm mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-gray-custom-500 leading-relaxed">
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
            <h2 className="text-cream-50 mb-4">
              Want a System Like This for Your Business?
            </h2>
            <p className="text-lg text-gray-custom-400 mb-8">
              Let&apos;s talk about your lead flow. We&apos;ll show you where
              the gaps are and how to fix them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                trackLabel="work_cta"
                id="work-cta"
              >
                Book a Free Review
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                variant="outline"
                size="lg"
                external
                className="border-cream-300/30 text-cream-100 hover:bg-cream-100/10 hover:text-cream-50"
                trackLabel="work_whatsapp"
                id="work-whatsapp"
                onClick={() => analytics.whatsappClick("work_cta")}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
