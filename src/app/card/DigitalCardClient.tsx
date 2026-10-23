"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageCircle,
  UserPlus,
  Globe,
  Calendar,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Share2,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";
import { analytics } from "@/lib/analytics";
import { siteConfig } from "@/lib/config";

const WHATSAPP_PREFILLED_MESSAGE =
  "Hi SaiKumar Labs, I scanned your visiting card and want to connect";

export function DigitalCardClient() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    analytics.visitingCardScan();
  }, []);

  const handleWhatsAppClick = () => {
    analytics.visitingCardWhatsApp();
  };

  const handleSaveContactClick = () => {
    analytics.visitingCardSaveContact();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Sai Kumar — SaiKumar Labs",
          text: "Connect with Sai Kumar, Founder & Systems Architect at SaiKumar Labs",
          url: "https://saikumarlabs.com/card",
        });
      } catch {
        // User cancelled share
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
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex flex-col justify-between py-8 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-md mx-auto relative z-10">
        {/* Top Header Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Founder Digital Pass
          </div>

          <button
            onClick={handleShare}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors cursor-pointer"
            aria-label="Share card"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Profile Card Header */}
        <motion.div
          className="p-6 sm:p-7 rounded-3xl bg-white/[0.04] border border-white/10 shadow-2xl backdrop-blur-md text-center mb-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Avatar with Glow */}
          <div className="relative w-24 h-24 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full bg-blue-600/30 blur-md animate-pulse" />
            <Image
              src="/logo.jpg"
              alt="Sai Kumar — SaiKumar Labs"
              width={96}
              height={96}
              className="relative rounded-full object-cover border-2 border-white/20 shadow-xl"
              priority
            />
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
            Sai Kumar
          </h1>
          <p className="text-sm font-semibold text-blue-400 mb-2">
            Founder & Systems Architect
          </p>
          <p className="text-xs text-slate-400 max-w-xs mx-auto mb-4 leading-relaxed font-normal">
            SaiKumar Labs · AI Automations, High-Speed Next.js Websites & Custom Software
          </p>

          {/* MSME & Fast Response Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3 border-t border-white/10 text-[11px] text-slate-300">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              MSME UDYAM Verified
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-medium">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              &lt;10s WhatsApp Reply
            </span>
          </div>
        </motion.div>

        {/* PRIMARY ACTION: WhatsApp with Pre-Filled Message */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-4"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="group block w-full p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold shadow-[0_8px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.5)] transition-all duration-300 text-center"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-base font-extrabold leading-tight">
                  Message on WhatsApp
                </div>
                <div className="text-xs text-emerald-100 font-normal">
                  Pre-filled message ready to send
                </div>
              </div>
            </div>
          </a>
        </motion.div>

        {/* SECONDARY ACTION: Save Contact to Phone (.vcf) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="mb-6"
        >
          <a
            href="/api/vcard"
            download="Sai-Kumar-SaiKumar-Labs.vcf"
            onClick={handleSaveContactClick}
            className="group block w-full p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold transition-all duration-300 text-center shadow-sm"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                <UserPlus className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-white leading-tight">
                  Save Contact to Phone
                </div>
                <div className="text-[11px] text-slate-400 font-normal">
                  1-tap download phone & email to contacts
                </div>
              </div>
            </div>
          </a>
        </motion.div>

        {/* ADDITIONAL LINKS */}
        <div className="space-y-3">
          <Link
            href="/"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/5 text-blue-400 flex items-center justify-center shrink-0">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Explore Website & Systems</div>
                <div className="text-[11px] text-slate-400">saikumarlabs.com</div>
              </div>
            </div>
            <span className="text-xs text-blue-400 font-semibold">Visit →</span>
          </Link>

          <a
            href="https://cal.com/saikumarlabs/discovery-call?theme=light"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/5 text-purple-400 flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Book 30-Min Systems Audit</div>
                <div className="text-[11px] text-slate-400">Free video consultation</div>
              </div>
            </div>
            <span className="text-xs text-purple-400 font-semibold">Book →</span>
          </a>

          <a
            href="mailto:contact@saikumarlabs.com"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/5 text-amber-400 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Direct Email</div>
                <div className="text-[11px] text-slate-400">contact@saikumarlabs.com</div>
              </div>
            </div>
            <span className="text-xs text-amber-400 font-semibold">Write →</span>
          </a>
        </div>
      </div>

      {/* Footer Branding */}
      <footer className="w-full max-w-md mx-auto mt-8 pt-4 border-t border-white/10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} SaiKumar Labs · Systems That Convert
      </footer>
    </main>
  );
}
