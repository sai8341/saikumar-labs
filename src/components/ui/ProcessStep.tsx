"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type ProcessStepProps = {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
};

export default function ProcessStep({
  step,
  icon: Icon,
  title,
  description,
  index = 0,
}: ProcessStepProps) {
  return (
    <motion.div
      className="relative flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
    >
      {/* Step number */}
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-2xl bg-cream-200 flex items-center justify-center border border-border">
          <Icon className="w-7 h-7 text-gold-600" />
        </div>
        <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold-400 text-charcoal-900 text-xs font-bold flex items-center justify-center shadow-sm">
          {step}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-charcoal-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-custom-500 leading-relaxed max-w-xs">
        {description}
      </p>
    </motion.div>
  );
}
