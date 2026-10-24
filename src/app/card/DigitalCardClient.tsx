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
} from "lucide-react";
import { analytics } from "@/lib/analytics";
import { siteConfig } from "@/lib/config";
import { WhatsAppButton } from "./WhatsAppButton";

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
    analytics.visitingCardShare();
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

      {/* Main Spacious Mobile Card (Sticks to full viewport without vertical scroll) */}
      <motion.div
        className="w-full max-w-[385px] h-[calc(100dvh-20px)] max-h-[740px] bg-white rounded-[32px] border border-slate-200/90 shadow-[0_20px_60px_rgba(0,103,244,0.08),0_4px_20px_rgba(0,0,0,0.04)] px-5 py-5 sm:px-6 sm:py-6 text-center relative overflow-hidden flex flex-col justify-between my-auto"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {/* Top Metallic Stripe Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500" />

        {/* 1. TOP HEADER SECTION */}
        <div>
          {/* Header Badge & Share */}
          <div className="flex items-center justify-between mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-200/80 uppercase tracking-wider">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600"></span>
              </span>
              Digital Pass
            </span>

            <button
              id="card-share-btn"
              data-analytics="card_share"
              onClick={handleShare}
              className="p-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              title="Share card"
              aria-label="Share card"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Logo with Verified Ring + Ample Breathing Room */}
          <div className="relative w-[68px] h-[68px] mx-auto mt-2 mb-3.5">
            <Image
              src="/logo.jpg"
              alt="SaiKumar Labs"
              width={68}
              height={68}
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
          <p className="text-xs font-bold text-blue-600 mt-1">
            Founder & Systems Architect
          </p>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
            SaiKumar Labs
          </p>

          <p className="text-[12px] font-medium text-slate-600 max-w-[290px] mx-auto mt-2.5 leading-relaxed">
            Automation, High-speed Websites, Custom Software for Businesses
          </p>
        </div>

        {/* 2. CENTER ACTION: WHATSAPP CTA WITH ROTATING NEON BEAM */}
        <div className="my-auto py-2">
          <WhatsAppButton whatsappUrl={whatsappUrl} />
        </div>

        {/* 3. BOTTOM SECTION: DIRECT CALL, EMAIL & SOCIALS */}
        <div className="space-y-3">
          {/* Phone & Email Rows with tactile click states & analytics */}
          <div className="grid grid-cols-1 gap-2">
            <a
              id="card-phone-btn"
              data-analytics="card_phone"
              href="tel:+917036416086"
              onClick={() => analytics.visitingCardPhone()}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100/90 active:scale-[0.98] border border-slate-200/80 text-slate-800 text-xs font-bold transition-all shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>+91 70364 16086</span>
            </a>

            <a
              id="card-email-btn"
              data-analytics="card_email"
              href="mailto:contact@saikumarlabs.com"
              onClick={() => analytics.visitingCardEmail()}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100/90 active:scale-[0.98] border border-slate-200/80 text-slate-800 text-xs font-medium transition-all shadow-xs"
            >
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>contact@saikumarlabs.com</span>
            </a>
          </div>

          {/* Social Links: Instagram, Facebook & Website with distinct spacing */}
          <div className="flex items-center justify-center gap-2.5 pt-1">
            <a
              id="card-instagram-btn"
              data-analytics="card_instagram"
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.visitingCardSocial("instagram")}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-pink-50/80 hover:bg-pink-100 active:scale-[0.96] text-pink-700 text-[11px] font-bold border border-pink-200/60 transition-all shadow-2xs"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
              <span>Instagram</span>
            </a>

            <a
              id="card-facebook-btn"
              data-analytics="card_facebook"
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.visitingCardSocial("facebook")}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-50/80 hover:bg-blue-100 active:scale-[0.96] text-blue-700 text-[11px] font-bold border border-blue-200/60 transition-all shadow-2xs"
            >
              <FacebookIcon className="w-3.5 h-3.5 text-blue-600" />
              <span>Facebook</span>
            </a>

            <Link
              id="card-website-btn"
              data-analytics="card_website"
              href="/"
              onClick={() => analytics.visitingCardSocial("website")}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 active:scale-[0.96] text-slate-700 text-[11px] font-bold border border-slate-200/60 transition-all shadow-2xs"
            >
              <Globe className="w-3.5 h-3.5 text-slate-600" />
              <span>Website</span>
            </Link>
          </div>

          {/* Official Trust Footnote: Govt. of India MSME Registered */}
          <div className="pt-1.5 space-y-0.5">
            <p className="text-[11px] font-bold text-slate-700 tracking-tight">
              Govt. of India MSME Registered
            </p>
            <p className="text-[10px] text-slate-400 font-medium">
              © {new Date().getFullYear()} SaiKumar Labs
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
