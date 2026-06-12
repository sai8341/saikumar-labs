"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { analytics } from "@/lib/analytics";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <a
      id="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => analytics.whatsappClick("floating_button")}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />

      {/* Button */}
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:shadow-xl hover:scale-110 transition-all duration-300">
        <MessageCircle className="w-6 h-6" />
      </span>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-charcoal-900 text-cream-50 text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
        Chat with us
        <span className="absolute right-0 top-1/2 translate-x-1 -translate-y-1/2 w-2 h-2 bg-charcoal-900 rotate-45" />
      </span>
    </a>
  );
}
