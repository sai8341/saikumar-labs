"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "Can the WhatsApp automation run on our existing clinic or business number?",
    a: "Yes. We configure the official Meta WhatsApp Business Cloud API on your verified business number with green-tick compliance, without disrupting your normal phone calls.",
  },
  {
    q: "Do I or my staff need technical skills to manage this?",
    a: "None whatsoever. Your staff continues talking on WhatsApp normally when needed. The automations handle the repetitive greeting, slot booking, reminders, and data entry silently in the background.",
  },
  {
    q: "How long does a typical build take from start to finish?",
    a: "Most implementations ship within 1 to 2 weeks. Custom Next.js websites take 7–10 days; WhatsApp AI agents and n8n pipelines take 7–12 days; bespoke client portals take 2–3 weeks.",
  },
  {
    q: "What makes your websites faster than WordPress or Wix?",
    a: "We custom-code using Next.js 16 and Tailwind CSS on serverless global edge networks. There are zero bloated plugins or slow database queries, achieving sub-second (<1s) load times on 4G/5G mobile networks.",
  },
  {
    q: "Who owns the code and workflows once the project is done?",
    a: "You own 100% of the intellectual property, source code, database, and Meta API accounts upon completion. We believe in zero vendor lock-in.",
  },
  {
    q: "How do we get started?",
    a: "Book a free 30-minute systems audit. We map out your current lead journey, identify where inquiries are slipping away, and provide an actionable blueprint with zero obligation.",
  },
];

export function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-bg-card border-b border-bg-border" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Everything You Need to Know Before Building"
          subtitle="Honest answers about our engineering process, integrations, and delivery timelines."
        />

        <div className="mt-14 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-background rounded-2xl border border-bg-border overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 sm:p-7 text-left font-bold text-text-primary flex items-center justify-between gap-4 hover:bg-bg-card/40 transition-colors"
                >
                  <span className="text-base sm:text-xl font-extrabold text-text-primary">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-7 sm:px-7 text-base text-text-secondary leading-relaxed border-t border-bg-border/60 pt-5 font-normal">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
