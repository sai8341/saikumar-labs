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
  Phone,
  ShieldCheck,
  Share2,
  Check,
  Sparkles,
  ArrowUpRight,
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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Sai Kumar — Founder, SaiKumar Labs",
          text: "Connect with Sai Kumar at SaiKumar Labs",
          url: "https://saikumarlabs.com/card",
        });
      } catch {
        // User cancelled
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
    <main className="min-h-screen bg-[#F8F9FA] text-slate-900 pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-6 relative flex flex-col justify-center items-center">
      {/* Background Soft Dot Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #000000 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="w-full max-w-md mx-auto relative z-10">
        {/* Luxury Tactile Business Card */}
        <motion.div
          className="bg-white rounded-[28px] border border-slate-200/90 shadow-[0_20px_50px_rgba(0,103,244,0.08),0_4px_15px_rgba(0,0,0,0.04)] p-6 sm:p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Top Decorative Gold/Blue Stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-amber-500" />

          {/* Top Bar: Pass Badge + Share */}
          <div className="flex items-center justify-between mb-6 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200/80 tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Digital Visiting Card
            </span>

            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              title="Share card"
              aria-label="Share card"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Profile Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-20 h-20 shrink-0">
              <Image
                src="/logo.jpg"
                alt="Sai Kumar"
                width={80}
                height={80}
                className="rounded-2xl object-cover border border-slate-200 shadow-md"
                priority
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center shadow-sm">
                <Check className="w-3 h-3 text-white stroke-[3]" />
              </div>
            </div>

            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
                Sai Kumar
              </h1>
              <p className="text-sm font-bold text-blue-600 mt-0.5">
                Founder & Systems Architect
              </p>
              <p className="text-xs font-medium text-slate-500 mt-0.5">
                SaiKumar Labs (Sydx AI)
              </p>
            </div>
          </div>

          {/* Bio Tagline */}
          <p className="text-sm text-slate-600 leading-relaxed mb-6 pb-5 border-b border-slate-100">
            We engineer intelligent AI automations, high-speed Next.js websites, and custom software that fix lead leaks for service businesses.
          </p>

          {/* PRIMARY CTA: Message on WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.visitingCardWhatsApp()}
            className="group block w-full p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-[0_8px_25px_rgba(16,185,129,0.3)] hover:shadow-[0_12px_32px_rgba(16,185,129,0.4)] hover:-translate-y-0.5 transition-all duration-200 mb-3 text-left"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-white leading-tight">
                    Message on WhatsApp
                  </div>
                  <div className="text-xs text-emerald-100 font-medium mt-0.5">
                    Pre-filled: &ldquo;I scanned your visiting card...&rdquo;
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-emerald-200 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* SECONDARY CTA: Save Contact to Phone */}
          <a
            href="/api/vcard"
            download="Sai-Kumar-SaiKumar-Labs.vcf"
            onClick={() => analytics.visitingCardSaveContact()}
            className="group block w-full p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200 text-slate-900 font-bold transition-all duration-200 mb-6 text-left"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <UserPlus className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900 leading-tight">
                    Save Contact to Phone
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    1-tap save phone & email (.vcf)
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold text-blue-600">Save ↓</span>
            </div>
          </a>

          {/* Direct Quick Actions Grid */}
          <div className="grid grid-cols-2 gap-2.5 mb-6">
            <a
              href="tel:+917036416086"
              className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200 flex items-center gap-2.5 text-slate-800 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600 shrink-0" />
              <div className="truncate">
                <div className="text-[11px] text-slate-400 font-semibold uppercase">Call</div>
                <div className="text-xs font-bold truncate">+91 70364 16086</div>
              </div>
            </a>

            <a
              href="mailto:contact@saikumarlabs.com"
              className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200 flex items-center gap-2.5 text-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-600 shrink-0" />
              <div className="truncate">
                <div className="text-[11px] text-slate-400 font-semibold uppercase">Email</div>
                <div className="text-xs font-bold truncate">contact@saikumar...</div>
              </div>
            </a>
          </div>

          {/* Website & Systems Link */}
          <div className="space-y-2.5 pt-5 border-t border-slate-100">
            <Link
              href="/"
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-bold text-slate-800">Visit saikumarlabs.com</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </Link>

            <a
              href="https://cal.com/saikumarlabs/discovery-call?theme=light"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-bold text-slate-800">Book Free 30-Min Systems Audit</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              MSME UDYAM-TS-11-0061133
            </span>
            <span className="inline-flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              &lt;10s Reply Time
            </span>
          </div>
        </motion.div>

        {/* Footer Subtle Note */}
        <p className="text-center text-xs text-slate-400 font-medium mt-6">
          © {new Date().getFullYear()} SaiKumar Labs · Systems That Convert
        </p>
      </div>
    </main>
  );
}
