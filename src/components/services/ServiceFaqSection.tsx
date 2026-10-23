"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, MessageCircle, Plus } from "lucide-react";
import Button from "@/components/ui/Button";
import { ServiceDetail } from "@/lib/services";
import { siteConfig } from "@/lib/config";

interface ServiceFaqSectionProps {
  service: ServiceDetail;
}

export function ServiceFaqSection({ service }: ServiceFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQs */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-background rounded-2xl border border-bg-border overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left font-bold text-text-primary flex items-center justify-between gap-4"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
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
                        <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-bg-border/40 pt-4">
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

        {/* Optional Add-ons */}
        {service.addons && service.addons.length > 0 && (
          <div className="p-6 rounded-2xl bg-background border border-bg-border mb-16">
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">
              Optional System Add-ons:
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {service.addons.map((addon, aIdx) => (
                <span
                  key={aIdx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-bg-card text-xs font-semibold text-text-secondary border border-bg-border"
                >
                  <Plus className="w-3.5 h-3.5 text-blue-600" />
                  {addon}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Final Service CTA Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-background border-2 border-blue-600/30 text-center shadow-md">
          <h3 className="text-2xl font-bold text-text-primary mb-3">
            Ready to deploy {service.title}?
          </h3>
          <p className="text-sm text-text-secondary max-w-lg mx-auto mb-8 font-normal">
            Book a 30-minute systems discovery call. We will review your current architecture and give you an exact, fixed-scope proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="https://cal.com/saikumarlabs/discovery-call?theme=light"
              external
              variant="primary"
              className="w-full sm:w-auto !px-7 !py-3.5 font-semibold"
              trackLabel={`service_bottom_${service.slug}_cta`}
            >
              Book Free Systems Audit
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                `Hi Sai, I'd like to get started with ${service.title}.`
              )}`}
              external
              variant="outline"
              className="w-full sm:w-auto !px-7 !py-3.5 font-semibold"
              trackLabel={`service_bottom_whatsapp_${service.slug}`}
            >
              <MessageCircle className="w-4 h-4 mr-2 text-emerald-600" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
