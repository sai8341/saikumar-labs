"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { ServiceDetail } from "@/lib/services";
import { siteConfig } from "@/lib/config";

interface ServiceHeroProps {
  service: ServiceDetail;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-background border-b border-bg-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/services"
          className="inline-flex items-center text-xs font-bold text-text-muted hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
          Back to All Systems
        </Link>

        <div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-5 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-full border border-blue-200">
            <Sparkles className="w-3.5 h-3.5" />
            {service.badge}
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.12] mb-5">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl font-semibold text-blue-600 mb-6">
            {service.tagline}
          </p>

          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl mb-10 font-normal">
            {service.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              href="https://cal.com/saikumarlabs/discovery-call?theme=light"
              external
              variant="primary"
              className="w-full sm:w-auto !px-7 !py-3.5 font-semibold shadow-md"
              trackLabel={`service_${service.slug}_audit_cta`}
            >
              Book a Free Systems Audit
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <Button
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                `Hi Sai, I want to discuss the ${service.title} system for my practice.`
              )}`}
              external
              variant="outline"
              className="w-full sm:w-auto !px-7 !py-3.5 font-semibold"
              trackLabel={`service_${service.slug}_whatsapp_cta`}
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
