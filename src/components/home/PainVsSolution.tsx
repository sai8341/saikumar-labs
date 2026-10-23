"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle, Clock, Database, Calendar, Megaphone, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const pains = [
  {
    icon: Clock,
    title: "The 2–14 Hour Delay (Speed-to-Lead Leak)",
    desc: "A customer inquires in the evening or during a busy hour. You reply hours later, but they've already contacted and booked with a faster competitor.",
  },
  {
    icon: Database,
    title: "Chaotic Excel Sheets & Lost Notes",
    desc: "Staff waste 15–20 hours a week copying numbers from WhatsApp into spreadsheets. Inquiries slip through the cracks and follow-ups are forgotten.",
  },
  {
    icon: Calendar,
    title: "The 40% Appointment No-Show Plague",
    desc: "Patients and clients book slots but never show up due to zero automated reminder sequences. Empty chairs cost you tens of thousands monthly.",
  },
  {
    icon: Megaphone,
    title: "Blind Ad Spending & Ads Manager Overwhelm",
    desc: "You run Instagram/FB ads, but the dashboard is too confusing to understand what actually produced paying clients versus wasted clicks.",
  },
];

const solutions = [
  {
    icon: Clock,
    title: "10-Second WhatsApp AI Auto-Triage",
    desc: "Inquiries are greeted, qualified, and engaged in under 10 seconds 24/7 on official WhatsApp Cloud API, locking in the customer before they search elsewhere.",
  },
  {
    icon: Database,
    title: "Automated n8n CRM Data Pipelines",
    desc: "Every lead is structured, enriched, and pushed into your CRM or Google Sheets instantly. Founders get a real-time Telegram notification with a 1-tap wa.me link.",
  },
  {
    icon: Calendar,
    title: "Proactive Multi-Cadence WhatsApp Reminders",
    desc: "Automated confirmations, directions, and 24h/2h reminders with 1-tap 'Confirm or Reschedule' buttons reduce client no-shows down to under 8%.",
  },
  {
    icon: Megaphone,
    title: "Agentic Meta Ads MCP Reporting",
    desc: "No need to open Ads Manager. Simply ask your private AI agent on WhatsApp: 'How did our ads do this week?' and receive clean metrics instantly.",
  },
];

export function PainVsSolution() {
  return (
    <section className="py-20 md:py-28 bg-bg-card border-b border-bg-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Business Reality"
          title="Most service businesses don't have a traffic problem. They have a lead leak problem."
          subtitle="A generic website alone won't grow your practice. You need an automated system that captures, qualifies, and schedules inquiries before they slip away."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-14">
          {/* Pain Card */}
          <motion.div
            className="p-8 sm:p-10 rounded-3xl bg-background border border-red-200/80 shadow-sm relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary">The Broken Manual Setup</h3>
                <p className="text-xs text-text-muted">How 90% of practices lose money daily</p>
              </div>
            </div>

            <div className="space-y-6">
              {pains.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                    <XCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            className="p-8 sm:p-10 rounded-3xl bg-background border-2 border-blue-600/30 shadow-[0_10px_35px_rgba(0,103,244,0.06)] relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary">The SaiKumar Labs Standard</h3>
                <p className="text-xs text-text-muted">Our interconnected autonomous engine</p>
              </div>
            </div>

            <div className="space-y-6">
              {solutions.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
