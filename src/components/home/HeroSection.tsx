"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Zap, Shield, Clock, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";

const metrics = [
  { icon: Clock, label: "Speed-to-Lead", value: "<10 Seconds" },
  { icon: Zap, label: "Page Load Speed", value: "<1 Second" },
  { icon: Shield, label: "No-Show Reduction", value: "Up to 40%" },
  { icon: Sparkles, label: "Code Ownership", value: "100% Yours" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-14 md:pt-28 md:pb-20 border-b border-bg-border">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #000000 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-wider text-blue-700 uppercase bg-blue-50 rounded-full border border-blue-200/80 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          Autonomous Operations & High-Conversion Systems
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-[800] tracking-[-0.035em] text-text-primary leading-[1.08] mb-6"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          We build <span className="text-blue-600">AI automations</span>,{" "}
          <br className="hidden sm:block" />
          high-speed websites & custom software.
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed font-normal"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.18 }}
        >
          Stop losing clients to slow replies, messy Excel sheets, and outdated templates. We engineer official WhatsApp AI agents, sub-second Next.js web applications, and agentic Meta Ads infrastructure that run your operations on autopilot.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25 }}
        >
          <Button
            href="https://cal.com/saikumarlabs/discovery-call?theme=light"
            external
            variant="primary"
            className="w-full sm:w-auto !px-7 !py-3.5 !text-base font-semibold shadow-[0_8px_25px_rgba(0,103,244,0.25)] hover:shadow-[0_12px_32px_rgba(0,103,244,0.35)]"
            trackLabel="hero_discovery_cta"
          >
            Book a Free 30-Min Systems Audit
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <Button
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
              "Hi Sai, I want to audit our business operations and discuss AI automation."
            )}`}
            external
            variant="outline"
            className="w-full sm:w-auto !px-7 !py-3.5 !text-base font-semibold border-bg-border hover:border-emerald-500 hover:text-emerald-600"
            trackLabel="hero_whatsapp_cta"
          >
            <MessageCircle className="w-4 h-4 mr-2 text-emerald-600" />
            Quick WhatsApp Chat
          </Button>
        </motion.div>

        {/* Metric Badges Strip */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-bg-border/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-4 rounded-2xl bg-bg-card/70 border border-bg-border text-left flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-text-primary leading-tight">
                  {item.value}
                </div>
                <div className="text-xs text-text-muted mt-0.5">{item.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
