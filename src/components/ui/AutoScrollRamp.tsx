"use client";

import React from "react";
import { TrendingUp, Zap, Target, Users, ShieldCheck } from "lucide-react";

const USPs = [
  {
    icon: <TrendingUp className="w-5 h-5 text-accent-primary" />,
    title: "3x More Leads",
    description: "Proven funnels for service businesses",
  },
  {
    icon: <Zap className="w-5 h-5 text-accent-primary" />,
    title: "Instant Follow-ups",
    description: "Automated WhatsApp & Email",
  },
  {
    icon: <Target className="w-5 h-5 text-accent-primary" />,
    title: "100% Tracking",
    description: "Zero guesswork in analytics",
  },
  {
    icon: <Users className="w-5 h-5 text-accent-primary" />,
    title: "High Conversion",
    description: "Tested on 100+ landing pages",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-accent-primary" />,
    title: "Reliable Systems",
    description: "No tech headaches for you",
  },
];

// Duplicate the array to create a seamless infinite scroll effect
const duplicatedUSPs = [...USPs, ...USPs, ...USPs]; // Tripled to ensure it is wide enough

export function AutoScrollRamp() {
  return (
    <div className="w-full overflow-hidden bg-background py-8 md:py-12 border-b border-border">
      <div className="relative flex max-w-[100vw] overflow-hidden hover-pause group">
        <div className="flex w-max animate-marquee space-x-4 md:space-x-8 px-4 md:px-8">
          {duplicatedUSPs.map((usp, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 px-6 py-4 rounded-full bg-card border border-border shadow-[0_4px_14px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,103,244,0.12)] hover:-translate-y-[2px] transition-all duration-300 cursor-default shrink-0 min-w-[280px]"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-accent-primary/10">
                {usp.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-foreground font-bold text-sm md:text-base leading-tight tracking-tight">
                  {usp.title}
                </span>
                <span className="text-muted text-xs md:text-sm font-medium tracking-tight mt-0.5">
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
