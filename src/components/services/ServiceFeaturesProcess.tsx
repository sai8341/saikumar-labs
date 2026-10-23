"use client";

import { Check, Cpu, Layers } from "lucide-react";
import { ServiceDetail } from "@/lib/services";

interface ServiceFeaturesProcessProps {
  service: ServiceDetail;
}

export function ServiceFeaturesProcess({ service }: ServiceFeaturesProcessProps) {
  return (
    <section className="py-20 bg-background border-b border-bg-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features / Deliverables */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight mb-3">
            What&apos;s Included in the System
          </h2>
          <p className="text-sm sm:text-base text-text-secondary mb-8">
            Every deliverable is production-grade, tested under real volume, and 100% owned by your business.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-bg-card/70 border border-bg-border flex items-start gap-3.5"
              >
                <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-text-primary leading-snug">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight mb-3">
            Our 4-Step Implementation Sprint
          </h2>
          <p className="text-base text-text-secondary mb-8">
            How we take you from current bottlenecks to live production within 1 to 2 weeks.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-bg-card border border-bg-border flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-blue-600 mb-2">
                    {step.step}
                  </div>
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="p-6 sm:p-8 rounded-2xl bg-bg-card border border-bg-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Cpu className="w-5 h-5 text-blue-600 shrink-0" />
            <span className="text-sm font-bold text-text-primary">Production Tech Stack:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {service.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-background text-text-secondary text-xs font-semibold border border-bg-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
