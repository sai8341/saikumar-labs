"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      className={`max-w-3xl mb-12 md:mb-16 ${alignClass} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-gold-700 bg-cream-200 rounded-full border border-gold-400/30">
          {badge}
        </span>
      )}
      <h2 className="mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-custom-500 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
