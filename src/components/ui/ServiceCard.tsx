"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  index?: number;
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  items,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      className="group relative bg-card rounded-2xl p-8 border border-border hover:border-gold-400/40 transition-all duration-300 hover:shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* Gold accent line */}
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="w-12 h-12 rounded-xl bg-cream-200 flex items-center justify-center mb-6 group-hover:bg-gold-400/20 transition-colors duration-300">
        <Icon className="w-6 h-6 text-gold-600" />
      </div>

      <h3 className="text-xl font-semibold mb-3 text-charcoal-900">{title}</h3>
      <p className="text-gray-custom-500 mb-6 leading-relaxed">{description}</p>

      <ul className="space-y-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm text-charcoal-600"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
