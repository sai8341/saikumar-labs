"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Zap, Shield, Clock, Sparkles, Bot, MonitorPlay } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";

const metrics = [
  { icon: Clock, label: "Speed-to-Lead Response", value: "<10 Seconds" },
  { icon: Zap, label: "Edge Page Load Speed", value: "<1 Second" },
  { icon: Shield, label: "Appointment No-Shows", value: "Slashed by 40%" },
  { icon: Sparkles, label: "Intellectual Property", value: "100% Client Owned" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 border-b border-bg-border">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #000000 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Icons & Doodles (Desktop wide only) */}
      <div className="absolute inset-0 max-w-[1400px] mx-auto hidden xl:block pointer-events-none z-0">
        {/* Left Side: AI Bot Badge */}
        <motion.div
          className="absolute top-[28%] left-[7%] flex items-center justify-center w-14 h-14 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 rotate-[-12deg]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: -12 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Bot className="w-7 h-7 text-blue-600" />
        </motion.div>
        {/* Doodle Line from Bot */}
        <motion.svg
          className="absolute top-[36%] left-[11%] w-24 h-24 text-gray-300 opacity-60"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <path
            d="M10 10 C 40 50, 60 70, 90 90"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="6 6"
          />
        </motion.svg>

        {/* Right Side: Figma / Design Tool Badge */}
        <motion.div
          className="absolute top-[24%] right-[8%] flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 rotate-[8deg]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 8 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <svg className="w-8 h-8" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 28.5A9.5 9.5 0 1 1 38 28.5A9.5 9.5 0 0 1 19 28.5Z" fill="#1ABCFE" />
            <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19V57H9.5A9.5 9.5 0 0 1 0 47.5Z" fill="#0ACF83" />
            <path d="M19 0L9.5 0A9.5 9.5 0 0 0 0 9.5L0 9.5A9.5 9.5 0 0 0 9.5 19L19 19L19 0Z" fill="#F24E1E" />
            <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38L19 38L19 19L9.5 19A9.5 9.5 0 0 0 0 28.5Z" fill="#A259FF" />
            <path d="M38 9.5A9.5 9.5 0 0 0 28.5 0L19 0L19 19L28.5 19A9.5 9.5 0 0 0 38 9.5Z" fill="#FF7262" />
          </svg>
        </motion.div>
        {/* Doodle Line from Figma */}
        <motion.svg
          className="absolute top-[34%] right-[12%] w-20 h-20 text-gray-300 opacity-60"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <path
            d="M90 10 C 60 40, 40 60, 10 80"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="6 6"
          />
        </motion.svg>

        {/* Left Bottom: Systems & Engineering Badge */}
        <motion.div
          className="absolute bottom-[22%] left-[12%] flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 rotate-[15deg]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 15 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <MonitorPlay className="w-6 h-6 text-slate-800" />
        </motion.div>
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
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-[800] tracking-[-0.04em] text-text-primary leading-[1.06] mb-6"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">AI automations</span>,{" "}
          <br className="hidden sm:block" />
          high-speed websites & custom software.
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed font-normal"
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
            className="w-full sm:w-auto !px-8 !py-4 !text-base font-bold shadow-[0_8px_25px_rgba(0,103,244,0.3)] hover:shadow-[0_12px_35px_rgba(0,103,244,0.45)] hover:-translate-y-0.5 transition-all"
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
            className="w-full sm:w-auto !px-8 !py-4 !text-base font-bold border-bg-border hover:border-emerald-500 hover:text-emerald-600 bg-white"
            trackLabel="hero_whatsapp_cta"
          >
            <MessageCircle className="w-4 h-4 mr-2 text-emerald-600" />
            Quick WhatsApp Chat
          </Button>
        </motion.div>

        {/* Metric Badges Strip */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto pt-8 border-t border-bg-border/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-bg-border text-left flex items-center gap-3.5 shadow-sm hover:border-blue-200 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-extrabold text-text-primary leading-tight">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm text-text-muted mt-0.5 font-medium">{item.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
