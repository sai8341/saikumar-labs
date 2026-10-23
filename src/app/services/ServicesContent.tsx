"use client";

import { motion } from "framer-motion";
import { Bot, Globe, Layers, Megaphone, ArrowRight, MessageCircle, CheckCircle, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { primaryServices } from "@/lib/services";

const iconMap: Record<string, React.ElementType> = {
  "ai-automation": Bot,
  websites: Globe,
  "custom-software": Layers,
  "social-ads-infrastructure": Megaphone,
};

export default function ServicesContent() {
  return (
    <>
      {/* 1. Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-background border-b border-bg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-blue-700 bg-blue-50 rounded-full border border-blue-200 uppercase">
              Our Core Systems
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary leading-tight">
              Engineering <span className="text-blue-600">Autonomous Growth</span> for Service Businesses
            </h1>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed font-normal">
              We don&apos;t sell generic agency marketing. We engineer bespoke AI automations, sub-second web applications, and agentic ad infrastructure designed to eliminate operational friction and fix lead leaks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. The 4 Pillars Grid */}
      <section className="py-20 bg-bg-card border-b border-bg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {primaryServices.map((service, idx) => {
              const Icon = iconMap[service.slug] || Bot;
              const isFlagship = service.slug === "ai-automation";

              return (
                <div
                  key={service.slug}
                  className={`rounded-3xl p-8 sm:p-10 border transition-all flex flex-col justify-between ${
                    isFlagship
                      ? "bg-gradient-to-b from-blue-50/50 via-background to-background border-blue-300/80 shadow-md"
                      : "bg-background border-bg-border hover:border-blue-200 hover:shadow-lg"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-bg-card text-text-muted text-xs font-semibold border border-bg-border">
                        {service.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-text-primary tracking-tight mb-2">
                      {service.title}
                    </h2>
                    <p className="text-sm font-semibold text-blue-600 mb-4">{service.tagline}</p>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      {service.features.slice(1, 5).map((f, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                          <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-bg-border flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700"
                    >
                      View Full Specifications
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Link>
                    <span className="text-xs text-text-muted">{service.metricHighlight.stat} {service.metricHighlight.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Callout CTA */}
      <section className="py-20 bg-background text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">
            Unsure which system your practice needs first?
          </h2>
          <p className="text-base sm:text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Book a 30-minute discovery session. We will audit your current lead pipeline, identify your primary bottleneck, and recommend the exact starting point.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="https://cal.com/saikumarlabs/discovery-call?theme=light"
              external
              variant="primary"
              className="!px-7 !py-3.5 font-semibold shadow-md"
              trackLabel="services_page_audit_cta"
            >
              Book a Free Systems Audit
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                "Hi Sai, I want advice on which automation system my business needs."
              )}`}
              external
              variant="outline"
              className="!px-7 !py-3.5 font-semibold"
              trackLabel="services_page_whatsapp_cta"
            >
              <MessageCircle className="w-4 h-4 mr-2 text-emerald-600" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
