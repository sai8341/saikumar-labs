"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";

const assurances = [
  "No-obligation 30-min audit",
  "Fixed scope & timeline",
  "Ships in 1–2 weeks",
  "100% code & data ownership",
];

export function HomeCTASection() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-full border border-blue-200/80 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Ready to Upgrade Your Operations?
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight max-w-3xl mx-auto leading-[1.12] mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08 }}
        >
          Stop losing clients to manual delays. Let&apos;s build your autonomous lead system.
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.16 }}
        >
          Book a free 30-minute systems discovery call. We&apos;ll audit your current lead pipeline, identify the highest-ROI automations, and give you an exact implementation roadmap.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.24 }}
        >
          <Button
            href="https://cal.com/saikumarlabs/discovery-call?theme=light"
            external
            variant="primary"
            className="w-full sm:w-auto !px-8 !py-4 !text-base font-bold shadow-[0_8px_25px_rgba(0,103,244,0.3)] hover:shadow-[0_12px_35px_rgba(0,103,244,0.45)] hover:-translate-y-0.5 transition-all"
            trackLabel="final_discovery_cta"
          >
            Book Your Free 30-Min Audit
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <Button
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
              "Hi Sai, I want to book a systems audit for my business."
            )}`}
            external
            variant="outline"
            className="w-full sm:w-auto !px-8 !py-4 !text-base font-bold border-bg-border hover:border-emerald-500 hover:text-emerald-600 bg-white"
            trackLabel="final_whatsapp_cta"
          >
            <MessageCircle className="w-4 h-4 mr-2 text-emerald-600" />
            WhatsApp Us Directly
          </Button>
        </motion.div>

        {/* Assurance Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm font-semibold text-text-secondary">
          {assurances.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
