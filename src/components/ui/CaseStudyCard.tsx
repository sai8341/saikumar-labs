"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { analytics } from "@/lib/analytics";

type CaseStudyCardProps = {
  title: string;
  industry: string;
  problem: string;
  solution: string;
  outcome: string;
  systemType: string;
  index?: number;
};

export default function CaseStudyCard({
  title,
  industry,
  problem,
  solution,
  outcome,
  systemType,
  index = 0,
}: CaseStudyCardProps) {
  return (
    <motion.div
      className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-gold-400/40 transition-all duration-300 hover:shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      onClick={() => analytics.portfolioClick(title)}
    >
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />

      <div className="p-8">
        {/* Industry badge */}
        <span className="inline-block px-3 py-1 text-xs font-medium text-gold-700 bg-cream-200 rounded-full mb-4">
          {industry}
        </span>

        <h3 className="text-xl font-semibold text-charcoal-900 mb-6 group-hover:text-gold-600 transition-colors">
          {title}
        </h3>

        <div className="space-y-5">
          {/* Problem */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-custom-400">
                Problem
              </span>
            </div>
            <p className="text-sm text-charcoal-600 pl-4">{problem}</p>
          </div>

          {/* Solution */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-custom-400">
                Solution
              </span>
            </div>
            <p className="text-sm text-charcoal-600 pl-4">{solution}</p>
          </div>

          {/* Outcome */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-custom-400">
                Outcome
              </span>
            </div>
            <p className="text-sm text-charcoal-600 pl-4">{outcome}</p>
          </div>
        </div>

        {/* System type */}
        <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-custom-400 block">
              System Type
            </span>
            <span className="text-sm font-medium text-charcoal-800">
              {systemType}
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-cream-200 flex items-center justify-center group-hover:bg-gold-400 transition-colors duration-300">
            <ArrowRight className="w-4 h-4 text-charcoal-600 group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
