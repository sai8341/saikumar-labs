"use client";

import { motion } from "framer-motion";
import { Search, FileCode2, Cpu, Rocket } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Systems & Lead Leak Audit",
    time: "30 Minutes",
    desc: "We analyze your website, WhatsApp response times, and booking operations to pinpoint exactly where you are losing leads.",
  },
  {
    num: "02",
    icon: FileCode2,
    title: "Architecture Blueprint",
    time: "24–48 Hours",
    desc: "We design the complete system specification: page wireframes, n8n data flows, and WhatsApp templates with a fixed scope guarantee.",
  },
  {
    num: "03",
    icon: Cpu,
    title: "Agile Engineering Sprint",
    time: "1–2 Weeks",
    desc: "We code your Next.js application, configure the official Meta APIs, build workflows, and test every edge-case in sandbox environments.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Production Handover",
    time: "Launch Day",
    desc: "We deploy to global edge infrastructure, train your staff on exception handling, and transfer 100% code and account ownership to you.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-background border-b border-bg-border" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How We Work"
          title="From Discovery to Live Deployment in 1–2 Weeks"
          subtitle="A structured, no-fluff engineering protocol. No endless meetings, no scope creep, and zero vendor lock-in."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="p-8 rounded-3xl bg-bg-card border border-bg-border relative flex flex-col justify-between hover:border-blue-300/60 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-blue-600/30">{step.num}</span>
                </div>

                <div className="inline-block px-3 py-1 mb-3.5 rounded-md bg-blue-50 text-blue-700 text-xs font-bold tracking-wide uppercase">
                  {step.time}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2.5">{step.title}</h3>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">{step.desc}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-bg-border/60 text-xs sm:text-sm font-semibold text-text-muted">
                Step {step.num} of 04
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
