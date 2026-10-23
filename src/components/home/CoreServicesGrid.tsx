"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Bot, Globe, Layers, Megaphone, ArrowRight, Check, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { primaryServices } from "@/lib/services";

const iconMap: Record<string, React.ElementType> = {
  "ai-automation": Bot,
  websites: Globe,
  "custom-software": Layers,
  "social-ads-infrastructure": Megaphone,
};

export function CoreServicesGrid() {
  return (
    <section className="py-20 md:py-28 bg-background border-b border-bg-border" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Core Capabilities"
          title="The 4 Systems We Build For Service Businesses"
          subtitle="Engineered as interconnected operational pillars. Pick what your practice needs right now, or deploy as a unified growth engine."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {primaryServices.map((service, idx) => {
            const Icon = iconMap[service.slug] || Bot;
            const isFlagship = service.slug === "ai-automation";

            return (
              <motion.div
                key={service.slug}
                className={`group rounded-3xl p-8 sm:p-10 flex flex-col justify-between border transition-all duration-300 relative overflow-hidden ${
                  isFlagship
                    ? "bg-gradient-to-b from-blue-50/50 via-background to-background border-blue-300/80 shadow-[0_12px_40px_rgba(0,103,244,0.08)] hover:shadow-[0_18px_50px_rgba(0,103,244,0.15)]"
                    : "bg-background border-bg-border hover:border-blue-300/60 hover:shadow-xl"
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                {isFlagship && (
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold tracking-wide uppercase shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    Flagship System
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                        {service.badge}
                      </span>
                      <h3 className="text-2xl sm:text-[28px] font-extrabold text-text-primary tracking-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base text-text-secondary leading-relaxed mb-6 font-normal">
                    {service.tagline}
                  </p>

                  <div className="p-4 mb-8 rounded-2xl bg-bg-card border border-bg-border flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-text-muted">Target Outcome:</span>
                    <span className="text-sm sm:text-base font-extrabold text-blue-700">
                      {service.metricHighlight.stat} {service.metricHighlight.label}
                    </span>
                  </div>

                  {/* Highlights List */}
                  <div className="space-y-4 mb-8">
                    {service.features.slice(1, 5).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3.5">
                        <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[15px] sm:text-base text-text-primary font-medium leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-bg-border/80 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-base font-bold text-blue-600 hover:text-blue-700 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    Explore System Specifications
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>

                  <span className="text-xs sm:text-sm font-medium text-text-muted">Fixed Scope Delivery</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
