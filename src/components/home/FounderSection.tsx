"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MessageSquare, Terminal, Award } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";

export function FounderSection() {
  return (
    <section className="py-20 md:py-28 bg-background border-b border-bg-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="md:col-span-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-bold tracking-wide uppercase text-blue-400 bg-white/10 rounded-full border border-white/10">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                The Solo-Founder Engineering Promise
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                You work directly with the builder — never a junior account manager.
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 font-normal">
                &ldquo;I started SaiKumar Labs because I watched service businesses waste lakhs on bloated agency retainers only to get slow template websites and broken manual follow-ups. When you work with us, there is no game of telephone. I personally architect your workflows, write your code, and test your automations.&rdquo;
              </p>

              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-base shadow-md">
                  SK
                </div>
                <div>
                  <div className="font-bold text-base text-white">Sai Kumar</div>
                  <div className="text-sm text-slate-400">Founder & Systems Architect, SaiKumar Labs</div>
                </div>
              </div>
            </div>

            {/* Right Column Highlights */}
            <div className="md:col-span-4 bg-white/5 p-6 sm:p-7 rounded-2xl border border-white/10 space-y-5">
              <div className="flex items-start gap-3.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-sm text-slate-300">
                  <span className="font-bold text-white block text-sm sm:text-base">100% Code Ownership</span>
                  Zero vendor lock-in. All repositories & API credentials belong to you.
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Award className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div className="text-sm text-slate-300">
                  <span className="font-bold text-white block text-sm sm:text-base">Fixed-Scope Delivery</span>
                  Every deliverable, milestone, and timeline is locked before writing code.
                </div>
              </div>

              <div className="pt-2">
                <Button
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                    "Hi Sai, I'd like to discuss a project directly with you."
                  )}`}
                  external
                  variant="primary"
                  className="w-full !py-3 !text-sm font-bold !bg-blue-600 hover:!bg-blue-500 shadow-md"
                  trackLabel="founder_direct_whatsapp"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message Sai on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
