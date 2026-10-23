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
        <span className="inline-block px-4 py-1.5 mb-5 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-full border border-blue-200/80 shadow-sm">
          {badge}
        </span>
      )}
      <h2 className="mb-4 text-3xl sm:text-4xl md:text-[42px] font-extrabold tracking-tight text-text-primary leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
