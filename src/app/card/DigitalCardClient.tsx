"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageCircle,
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

        {/* 2. CENTER ACTION: AESTHETIC COMPACT WHATSAPP CTA */}
        <div className="my-4 py-3 border-y border-slate-100">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.visitingCardWhatsApp()}
            className="group inline-flex items-center justify-center gap-2 w-full py-2.5 px-5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-[0_4px_16px_rgba(37,211,102,0.32)] hover:shadow-[0_6px_22px_rgba(37,211,102,0.45)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 text-white fill-white" />
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/90 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Aesthetic Pre-Filled Message Bubble */}
          <div className="mt-2.5 p-2 px-3 rounded-xl bg-emerald-50/70 border border-emerald-100 text-[11px] text-emerald-900 max-w-[310px] mx-auto leading-snug">
            <span className="font-semibold block text-[10px] uppercase tracking-wider text-emerald-700 mb-0.5">
              Pre-filled Message:
            </span>
            &ldquo;{WHATSAPP_PREFILLED_MESSAGE}&rdquo;
          </div>
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
