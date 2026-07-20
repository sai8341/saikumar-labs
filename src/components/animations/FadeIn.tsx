"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  fullWidth?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  fullWidth = false,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <div
      ref={ref}
      style={{ width: fullWidth ? "100%" : "auto" }}
    >
      <motion.div
        initial={{
          opacity: 0,
          ...directions[direction],
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                x: 0,
                y: 0,
              }
            : {
                opacity: 0,
                ...directions[direction],
              }
        }
        transition={{
          duration: 0.7,
          delay: delay,
          ease: [0.21, 0.47, 0.32, 0.98], // Custom ease for smooth feel
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
