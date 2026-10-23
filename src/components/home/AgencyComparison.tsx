"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const comparisonRows = [
  {
    feature: "Delivery Speed",
    ours: "1–2 Weeks (Fast Sprints)",
    others: "2–4 Months (Endless Delays)",
    diy: "Months of Trial & Error",
  },
  {
    feature: "Tech Stack",
    ours: "Next.js 16 + Meta Cloud API + n8n",
    others: "Bloated WordPress / Elementor",
    diy: "Fragmented Zapier Subscriptions",
  },
  {
    feature: "Speed-to-Lead Automation",
    ours: "Under 10s WhatsApp AI Triage",
    others: "Manual Email Form Submissions",
    diy: "Simple Unreliable Webhooks",
  },
  {
    feature: "Appointment No-Show System",
    ours: "Automated 24h & 2h WhatsApp Cadence",
    others: "Receptionist Manual Calls",
    diy: "Generic Email Confirmations",
  },
  {
    feature: "Code & Workflow Ownership",
    ours: "100% Yours (Zero Lock-in)",
    others: "Locked into Agency Hosting",
    diy: "Tied to Ongoing Tool Bills",
  },
  {
    feature: "Who You Work With",
    ours: "Directly with Senior Builder (Sai)",
    others: "Junior Account Managers",
    diy: "You, Alone on Weekends",
  },
];

export function AgencyComparison() {
  return (
    <section className="py-20 md:py-28 bg-bg-card border-b border-bg-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Side-by-Side"
          title="Why Leading Practices Choose SaiKumar Labs"
          subtitle="Before hiring a traditional agency or trying to glue tools together yourself, compare the delivery model side by side."
        />

        <div className="mt-14 overflow-x-auto">
          <table className="w-full text-left border-collapse bg-background rounded-3xl overflow-hidden shadow-sm border border-bg-border">
            <thead>
              <tr className="border-b border-bg-border bg-bg-card/50">
                <th className="p-5 sm:p-6 text-sm sm:text-base font-extrabold text-text-primary">Key Dimension</th>
                <th className="p-5 sm:p-6 text-sm sm:text-base font-extrabold text-blue-700 bg-blue-50/60 border-x border-blue-100">
                  SaiKumar Labs
                </th>
                <th className="p-5 sm:p-6 text-sm sm:text-base font-bold text-text-secondary">Typical Agencies</th>
                <th className="p-5 sm:p-6 text-sm sm:text-base font-bold text-text-muted">DIY / Freelancers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-bg-border text-sm sm:text-base">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-bg-card/30 transition-colors">
                  <td className="p-5 sm:p-6 font-bold text-text-primary">{row.feature}</td>
                  <td className="p-5 sm:p-6 font-extrabold text-blue-700 bg-blue-50/30 border-x border-blue-100">
                    <div className="flex items-center gap-2.5">
                      <Check className="w-5 h-5 text-blue-600 shrink-0" />
                      <span>{row.ours}</span>
                    </div>
                  </td>
                  <td className="p-5 sm:p-6 text-text-secondary font-medium">
                    <div className="flex items-center gap-2.5">
                      <X className="w-5 h-5 text-red-400 shrink-0" />
                      <span>{row.others}</span>
                    </div>
                  </td>
                  <td className="p-5 sm:p-6 text-text-muted font-normal">
                    <div className="flex items-center gap-2.5">
                      <X className="w-5 h-5 text-gray-400 shrink-0" />
                      <span>{row.diy}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
