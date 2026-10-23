"use client";

import { AlertCircle, CheckCircle, Target, TrendingUp } from "lucide-react";
import { ServiceDetail } from "@/lib/services";

interface ServiceProblemOutcomesProps {
  service: ServiceDetail;
}

export function ServiceProblemOutcomes({ service }: ServiceProblemOutcomesProps) {
  return (
    <section className="py-20 bg-bg-card border-b border-bg-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Problem Description */}
        <div className="p-8 sm:p-10 rounded-3xl bg-background border border-bg-border shadow-sm mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
              The Operational Bottleneck We Solve
            </h2>
          </div>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
            {service.problemDescription}
          </p>
        </div>

        {/* 2. Grid: Perfect For & Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Perfect For */}
          <div className="p-8 rounded-3xl bg-background border border-bg-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">Perfect For</h3>
            </div>
            <ul className="space-y-3.5">
              {service.perfectFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-[15px] text-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expected Outcomes */}
          <div className="p-8 rounded-3xl bg-background border border-bg-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">Expected Outcomes</h3>
            </div>
            <ul className="space-y-3.5">
              {service.outcomes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-[15px] text-text-primary font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
