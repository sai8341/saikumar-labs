"use client";

import { motion } from "framer-motion";
import {
  Globe,
  BarChart3,
  Target,
  Bot,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";
import { analytics } from "@/lib/analytics";

type ServiceGroup = {
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  color: string;
  outcomes: string[];
};

const serviceGroups: ServiceGroup[] = [
  {
    icon: Globe,
    title: "Online Presence",
    tagline: "Be found. Be trusted. Be chosen.",
    description:
      "We build professional websites and landing pages that convert visitors into enquiries — not just look pretty. Your Google profile, social bios, and SEO are all set up to work together.",
    color: "bg-blue-50 text-blue-600",
    outcomes: [
      "Professional, mobile-friendly website that loads fast",
      "Landing pages designed to capture leads from ads & social",
      "On-page SEO so Google can find and rank your business",
      "Social profiles optimised with clear calls-to-action",
      "Google Business Profile setup for local visibility",
    ],
  },
  {
    icon: BarChart3,
    title: "Tracking & Analytics",
    tagline: "Know what's working. Stop guessing.",
    description:
      "Without tracking, you're spending money blindly. We set up analytics, search monitoring, and ad tracking so you always know which channels bring real leads.",
    color: "bg-green-50 text-green-600",
    outcomes: [
      "Google Analytics 4 configured to track conversions",
      "Search Console monitoring your Google performance",
      "Meta Business Manager & ad accounts ready to run",
      "Clear dashboards showing what's working and what's not",
    ],
  },
  {
    icon: Target,
    title: "Lead Capture",
    tagline: "Turn visitors into real enquiries.",
    description:
      "Getting traffic is only half the battle. We build the funnels, forms, and integration flows that capture visitors as real, trackable leads.",
    color: "bg-amber-50 text-amber-600",
    outcomes: [
      "Lead funnels that guide visitors to enquire",
      "Enquiry forms connected to WhatsApp & email",
      "Landing pages optimised for ad campaigns",
      "One organised pipeline for all enquiries",
    ],
  },
  {
    icon: Bot,
    title: "Follow-up & Automation",
    tagline: "Never miss a lead. Save hours every week.",
    description:
      "Most businesses lose leads because they don't follow up. We build automated sequences that send the right message at the right time — so no lead goes cold.",
    color: "bg-purple-50 text-purple-600",
    outcomes: [
      "Automated follow-up sequences via WhatsApp & email",
      "Appointment reminders that reduce no-shows",
      "AI-powered responses for faster first contact",
      "Escalation paths so urgent leads get attention",
    ],
  },
];

export default function ServicesContent() {
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
                Our Services
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Everything You Need to{" "}
                <span className="text-gold-500">Capture More Leads</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-charcoal-600 leading-relaxed">
                We don&apos;t sell one-off tasks. We build complete systems — each service
                is designed to fix a specific part of your lead flow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Groups */}
      {serviceGroups.map((group, groupIndex) => (
        <section
          key={group.title}
          className={`section-padding ${groupIndex % 2 === 0 ? "bg-cream-50" : "bg-section-alt"}`}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Left: Info */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl ${group.color} flex items-center justify-center`}
                  >
                    <group.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-gold-600 uppercase tracking-wider">
                    {group.title}
                  </span>
                </div>
                <h2 className="mb-3 text-xl sm:text-2xl md:text-3xl">{group.tagline}</h2>
                <p className="text-sm sm:text-base text-gray-custom-500 leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Right: Outcomes */}
              <div className="bg-card rounded-2xl p-5 sm:p-6 border border-border">
                <h3 className="text-sm font-semibold text-charcoal-700 uppercase tracking-wider mb-4">
                  What You Get
                </h3>
                <ul className="space-y-3">
                  {group.outcomes.map((outcome, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm sm:text-base text-charcoal-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

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
              Not Sure Where to Start?
            </h2>
            <p className="text-sm sm:text-lg text-gray-custom-400 mb-6 sm:mb-8">
              Book a free lead flow review. We&apos;ll look at your current
              setup and tell you exactly which services will make the biggest
              difference.
            </p>
            <div className="flex flex-row gap-3 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="sm:px-6 sm:py-3 sm:text-base"
                trackLabel="services_cta"
                id="services-cta"
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
                trackLabel="services_whatsapp"
                id="services-whatsapp"
                onClick={() => analytics.whatsappClick("services_cta")}
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
