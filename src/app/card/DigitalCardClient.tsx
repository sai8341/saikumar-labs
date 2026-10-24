"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Globe,
  Share2,
  Check,
  ArrowRight,
} from "lucide-react";
import { analytics } from "@/lib/analytics";
import { siteConfig } from "@/lib/config";

const WHATSAPP_PREFILLED_MESSAGE =
  "Hi SaiKumar Labs, I scanned your visiting card and want to connect";

// Official Authentic WhatsApp Vector Logo
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

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function DigitalCardClient() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    analytics.visitingCardScan();
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Sai Kumar — SaiKumar Labs",
          text: "Connect with Sai Kumar, Founder & Systems Architect at SaiKumar Labs",
          url: "https://saikumarlabs.com/card",
        });
      } catch {
        // User dismissed
      }
    } else {
      navigator.clipboard.writeText("https://saikumarlabs.com/card");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    WHATSAPP_PREFILLED_MESSAGE
  )}`;

  return (
    <main className="h-[100dvh] max-h-[100dvh] w-full overflow-hidden bg-[#FAFAF8] text-slate-900 flex flex-col justify-center items-center p-3 sm:p-5 select-none">
      {/* Background Subtle Dot Matrix */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #000000 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Main Single-Screen Mobile Card Container (No Scroll) */}
      <motion.div
        className="w-full max-w-[370px] bg-white rounded-[28px] border border-slate-200/90 shadow-[0_16px_45px_rgba(0,103,244,0.08),0_4px_16px_rgba(0,0,0,0.04)] p-5 sm:p-6 text-center relative overflow-hidden flex flex-col justify-between my-auto"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {/* Top Metallic Stripe Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500" />

        {/* 1. TOP HEADER SECTION */}
        <div>
          {/* Header Badge & Share */}
          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-200/80 uppercase tracking-wider">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600"></span>
              </span>
              Digital Pass
            </span>

            <button
              onClick={handleShare}
              className="p-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              title="Share card"
              aria-label="Share card"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Logo with Verified Ring */}
          <div className="relative w-16 h-16 mx-auto mb-2">
            <Image
              src="/logo.jpg"
              alt="SaiKumar Labs"
              width={64}
              height={64}
              className="rounded-2xl object-cover border border-slate-200 shadow-sm"
              priority
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center shadow-xs">
              <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
            </div>
          </div>

          {/* Name & Role */}
          <h1 className="!text-slate-900 text-2xl font-black tracking-tight leading-tight">
            Sai Kumar
          </h1>
          <p className="text-xs font-bold text-blue-600 mt-0.5">
            Founder & Systems Architect
          </p>
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
            SaiKumar Labs
          </p>

          <p className="text-[11px] text-slate-500 max-w-[290px] mx-auto mt-2 leading-relaxed">
            AI Automations · High-Speed Websites · Custom Software
          </p>
        </div>

        {/* 2. CENTER ACTION: CLEAN OFFICIAL WHATSAPP CTA */}
        <div className="my-5 py-4 border-y border-slate-100">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.visitingCardWhatsApp()}
            className="group inline-flex items-center justify-center gap-2.5 w-full py-3 px-5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-[15px] shadow-[0_6px_20px_rgba(37,211,102,0.32)] hover:shadow-[0_8px_26px_rgba(37,211,102,0.45)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* 3. BOTTOM SECTION: DIRECT PHONE, EMAIL & SOCIALS */}
        <div className="space-y-2">
          {/* Phone & Email Rows */}
          <div className="grid grid-cols-1 gap-1.5">
            <a
              href="tel:+917036416086"
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100/90 border border-slate-200/80 text-slate-800 text-xs font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>+91 70364 16086</span>
            </a>

            <a
              href="mailto:contact@saikumarlabs.com"
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100/90 border border-slate-200/80 text-slate-800 text-xs font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>contact@saikumarlabs.com</span>
            </a>
          </div>

          {/* Social Links: Instagram, Facebook & Website */}
          <div className="flex items-center justify-center gap-2 pt-1.5">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-50/80 hover:bg-pink-100 text-pink-700 text-[11px] font-bold border border-pink-200/60 transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
              <span>Instagram</span>
            </a>

            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50/80 hover:bg-blue-100 text-blue-700 text-[11px] font-bold border border-blue-200/60 transition-colors"
            >
              <FacebookIcon className="w-3.5 h-3.5 text-blue-600" />
              <span>Facebook</span>
            </a>

            <Link
              href="/"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 text-[11px] font-bold border border-slate-200/60 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-slate-600" />
              <span>Website</span>
            </Link>
          </div>

          {/* Trust Footnote */}
          <p className="text-[10px] text-slate-400 font-medium pt-1">
            © {new Date().getFullYear()} SaiKumar Labs · MSME UDYAM-TS-11-0061133
          </p>
        </div>
      </motion.div>
    </main>
  );
}
