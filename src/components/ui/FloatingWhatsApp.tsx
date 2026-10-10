"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { analytics } from "@/lib/analytics";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => analytics.whatsappClick("floating_button")}
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label="Chat with SaiKumar Labs on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-5 h-5 fill-current shrink-0" />
        <span className="text-sm font-semibold tracking-wide hidden sm:inline-block">
          Chat with us
        </span>
      </a>
    </aside>
  );
}
