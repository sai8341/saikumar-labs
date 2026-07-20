"use client";

import React from "react";
import { Code, Search, BarChart3, MousePointerClick, ShieldCheck } from "lucide-react";

const USPs = [
  {
    icon: <Code className="w-5 h-5 text-accent-primary" />,
    title: "Custom Coded",
    description: "No templates, no page builders",
  },
  {
    icon: <Search className="w-5 h-5 text-accent-primary" />,
    title: "SEO Built In",
    description: "Schema, sitemap, GSC from day one",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-accent-primary" />,
    title: "Full Tracking",
    description: "GA4, GTM, and conversion events",
  },
  {
    icon: <MousePointerClick className="w-5 h-5 text-accent-primary" />,
    title: "Lead Capture Ready",
    description: "Forms, WhatsApp, booking integration",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-accent-primary" />,
    title: "Fast & Secure",
    description: "Optimized for speed and uptime",
  },
];

// Duplicate the array to create a seamless infinite scroll effect
const duplicatedUSPs = [...USPs, ...USPs, ...USPs]; // Tripled to ensure it is wide enough

export function AutoScrollRamp() {
  return (
    <div className="w-full overflow-hidden bg-background py-8 md:py-12 border-b border-border">
      <div className="relative flex max-w-[100vw] overflow-hidden hover-pause group">
        <div className="flex w-max animate-marquee space-x-6 md:space-x-8 px-4 md:px-8">
          {duplicatedUSPs.map((usp, index) => (
            <div
              key={index}
              className="group/item flex items-center space-x-4 px-8 py-4 rounded-full bg-background border border-bg-border shadow-sm hover:shadow-[0_8px_30px_rgba(0,103,244,0.15)] hover:border-accent-primary/40 hover:-translate-y-1 transition-all duration-300 cursor-default shrink-0 min-w-[320px] relative overflow-hidden"
            >
              {/* Subtle gradient hover background */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/0 via-accent-primary/5 to-accent-primary/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-accent-primary/10 text-accent-primary group-hover/item:bg-accent-primary group-hover/item:text-white transition-colors duration-300">
                {usp.icon}
              </div>
              <div className="relative z-10 flex flex-col">
                <span className="text-text-primary font-bold text-[15px] leading-tight tracking-tight">
                  {usp.title}
                </span>
                <span className="text-text-secondary text-[13px] font-medium tracking-tight mt-1">
                  {usp.description}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Subtle gradient overlays to fade the edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent" />
      </div>
    </div>
  );
}
