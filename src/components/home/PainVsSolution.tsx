"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle, Clock, Database, Calendar, Megaphone, X, Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const pains = [
  {
    icon: Clock,
    title: "The 2–14 Hour Delay (Speed-to-Lead Leak)",
    desc: "A prospective client reaches out in the evening or during rush hours. You reply hours later, but they've already contacted and booked with a faster competitor.",
  },
  {
    icon: Database,
    title: "Messy Excel Spreadsheets & Lost Inquiries",
    desc: "Staff waste 15–20 hours a week manually copying numbers from WhatsApp into spreadsheets. Follow-ups get forgotten and warm leads go cold.",
  },
  {
    icon: Calendar,
    title: "The 40% Appointment No-Show Plague",
    desc: "Patients and clients book slots but never show up due to zero automated reminder sequences. Empty chairs cost you tens of thousands every month.",
  },
  {
    icon: Megaphone,
    title: "Blind Ad Spend & Ads Manager Chaos",
    desc: "You run Instagram/FB ads, but the dashboard is too complicated to tell what actually produced paying clients versus wasted, tire-kicker clicks.",
  },
];

const solutions = [
  {
    icon: Clock,
    title: "10-Second WhatsApp AI Auto-Triage",
    desc: "Inquiries are greeted, qualified, and answered in under 10 seconds 24/7 via official WhatsApp Cloud API, locking in the customer before they search elsewhere.",
  },
  {
    icon: Database,
    title: "Automated n8n & Supabase Pipelines",
    desc: "Every lead is structured, enriched, and pushed into your CRM or Google Sheets instantly. Founders receive real-time Telegram alerts with a 1-tap wa.me link.",
  },
  {
    icon: Calendar,
    title: "Automated Multi-Touch WhatsApp Cadences",
    desc: "Automated confirmations, directions, and 24h/2h reminders with 1-tap 'Confirm or Reschedule' buttons slash client no-shows down to under 8%.",
  },
  {
    icon: Megaphone,
    title: "Agentic Meta Ads MCP Reporting",
    desc: "No need to open Ads Manager. Simply ask your private AI agent on WhatsApp: 'How did our ads perform this week?' and receive clean metrics instantly.",
  },
];

export function PainVsSolution() {
  return (
    <section className="py-20 md:py-28 bg-bg-card border-b border-bg-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Operational Reality"
          title="Most service businesses don't have a traffic problem. They have a lead leak problem."
          subtitle="A generic website alone won't grow your practice. You need an automated system that captures, qualifies, and schedules inquiries before they slip away."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-14">
          {/* Pain Card */}
          <motion.div
            className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-background border border-red-200 shadow-sm relative overflow-hidden group hover:border-red-300 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {/* Background Watermark */}
            <div className="absolute top-4 right-4 text-red-500 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
              <XCircle className="w-32 h-32" />
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-6 border border-red-100">
                <XCircle className="w-7 h-7" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-2">
                The Broken Manual Setup
              </h3>
              <p className="text-base text-text-secondary mb-8">
                How 90% of clinics, consultants, and agencies lose revenue daily
              </p>

              <div className="space-y-6">
                {pains.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-text-primary mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-background border-2 border-blue-500/40 shadow-[0_12px_40px_rgba(0,103,244,0.08)] relative overflow-hidden group hover:border-blue-500/70 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {/* Background Watermark */}
            <div className="absolute top-4 right-4 text-blue-600 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
              <CheckCircle className="w-32 h-32" />
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-100">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-2">
                The SaiKumar Labs Standard
              </h3>
              <p className="text-base text-text-secondary mb-8">
                Our interconnected autonomous engine engineered for high conversion
              </p>

              <div className="space-y-6">
                {solutions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-text-primary mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
