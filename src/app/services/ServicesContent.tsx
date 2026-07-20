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
      "We build professional websites and landing pages that convert visitors into enquiries - not just look pretty. Your Google profile, social bios, and SEO are all set up to work together.",
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
      "Most businesses lose leads because they don't follow up. We build automated sequences that send the right message at the right time - so no lead goes cold.",
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
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background border-b border-bg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-4 sm:mb-6 text-xs sm:text-sm font-medium text-accent-primary bg-accent-primary/10 rounded-full border border-accent-primary/20">
                Our Services
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary">
                Everything You Need to{" "}
                <span className="text-accent-primary">Capture More Leads</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-text-secondary leading-relaxed">
                We don&apos;t sell one-off tasks. We build complete systems - each service
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
          className={`py-12 md:py-20 lg:py-24 ${groupIndex % 2 === 0 ? "bg-bg-card" : "bg-background"}`}
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
              <div className={groupIndex % 2 !== 0 ? "lg:order-last" : ""}>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl ${group.color} flex items-center justify-center`}
                  >
                    <group.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-accent-primary uppercase tracking-wider">
                    {group.title}
                  </span>
                </div>
                <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">{group.tagline}</h2>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Right: Outcomes */}
              <div className="bg-background rounded-3xl p-6 sm:p-8 border border-bg-border shadow-sm">
                <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-6">
                  What You Get
                </h3>
                <ul className="space-y-4">
                  {group.outcomes.map((outcome, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm sm:text-base text-text-secondary"
                    >
                      <span className="w-2 h-2 rounded-full bg-accent-primary mt-2 shrink-0" />
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
      <section className="py-20 md:py-32 bg-text-primary relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-primary/20 rounded-full blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="!text-white mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Not Sure Where to Start?
            </h2>
            <p className="!text-gray-300 text-sm sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
              Book a free lead flow review. We&apos;ll look at your current
              setup and tell you exactly which services will make the biggest
              difference.
            </p>
            <div className="flex flex-row gap-3 justify-center">
              <Button
                href="https://cal.com/saikumarlabs/30min"
                external
                variant="primary"
                size="sm"
                className="sm:px-6 sm:py-3 sm:text-base"
                trackLabel="services_cta"
                id="services-cta"
              >
                Book a 30-Min Call
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                variant="outline"
                size="sm"
                className="border-white/30 !text-white hover:bg-white/10 sm:px-6 sm:py-3 sm:text-base"
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
