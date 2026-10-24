"use client";

import { ArrowRight } from "lucide-react";
import { analytics } from "@/lib/analytics";

interface WhatsAppButtonProps {
  whatsappUrl: string;
}

// Official Authentic WhatsApp Vector Icon
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.348-1.665a11.832 11.832 0 005.65 1.441h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.411z" />
    </svg>
  );
}

export function WhatsAppButton({ whatsappUrl }: WhatsAppButtonProps) {
  return (
    <div className="relative group w-full">
      {/* 1. Luminous Ambient Glow (Soft pulsing aura behind button) */}
      <div className="absolute -inset-1 rounded-[22px] bg-gradient-to-r from-emerald-400 via-[#25D366] to-teal-400 opacity-50 blur-lg group-hover:opacity-85 transition-opacity duration-500 animate-pulse pointer-events-none" />

      {/* 2. Rotating Neon Border Beam Track */}
      <div className="relative rounded-[20px] p-[2.5px] overflow-hidden shadow-[0_10px_28px_rgba(37,211,102,0.3)] group-hover:shadow-[0_14px_36px_rgba(37,211,102,0.45)] transition-shadow duration-300">
        {/* Animated 360° Neon Traveling Laser Beam */}
        <span
          className="absolute inset-[-250%] animate-[spin_2.8s_linear_infinite] pointer-events-none"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg 280deg, #25D366 310deg, #a7f3d0 340deg, #ffffff 360deg)",
          }}
        />

        {/* 3. Core Tactile Button */}
        <a
          id="card-whatsapp-cta"
          data-analytics="card_whatsapp"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => analytics.visitingCardWhatsApp()}
          className="relative z-10 flex items-center justify-between w-full py-3.5 px-5 rounded-[17.5px] bg-gradient-to-r from-[#20bd5a] to-[#25D366] hover:from-[#1eb154] hover:to-[#22c55e] active:scale-[0.98] text-white font-extrabold text-[15px] transition-all duration-200 cursor-pointer shadow-inner"
        >
          {/* Left: Icon & Label */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-xs shadow-xs">
              <WhatsAppIcon className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <div className="leading-tight font-black tracking-tight text-[15px]">
                Chat on WhatsApp
              </div>
              <div className="text-[10px] font-semibold text-emerald-100/90 leading-none mt-0.5">
                Instant Direct Connect
              </div>
            </div>
          </div>

          {/* Right: Action Arrow in circle */}
          <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 group-hover:translate-x-0.5 transition-all">
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </div>
        </a>
      </div>
    </div>
  );
}
