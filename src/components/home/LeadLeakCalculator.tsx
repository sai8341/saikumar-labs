"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

const businessPresets = [
  { name: "Clinic / Healthcare", avgDeal: 2500, inquiries: 80, noShowRate: 0.35 },
  { name: "Executive Coaching", avgDeal: 35000, inquiries: 25, noShowRate: 0.30 },
  { name: "Salon & Med-Spa", avgDeal: 4500, inquiries: 100, noShowRate: 0.25 },
  { name: "B2B Agency / Consult", avgDeal: 40000, inquiries: 30, noShowRate: 0.35 },
];

export function LeadLeakCalculator() {
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [inquiries, setInquiries] = useState(businessPresets[0].inquiries);
  const [avgDeal, setAvgDeal] = useState(businessPresets[0].avgDeal);

  // Calculations
  const preset = businessPresets[selectedPreset];
  // Delayed replies cause ~30% lead loss
  const lostLeadsDueToDelay = Math.round(inquiries * 0.30);
  // No-shows cause ~25% consultation loss
  const monthlyLostRevenue = Math.round((lostLeadsDueToDelay * avgDeal * 0.25) + (inquiries * 0.20 * avgDeal * preset.noShowRate));
  const annualRecoverable = monthlyLostRevenue * 12;

  const handlePresetChange = (idx: number) => {
    setSelectedPreset(idx);
    setInquiries(businessPresets[idx].inquiries);
    setAvgDeal(businessPresets[idx].avgDeal);
  };

  return (
    <section className="py-20 md:py-28 bg-bg-card border-b border-bg-border" id="calculator">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-4 text-xs font-bold tracking-wide uppercase text-blue-700 bg-blue-50 rounded-full border border-blue-200">
            <Calculator className="w-3.5 h-3.5" />
            Interactive ROI Tool
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
            How much revenue is your practice losing to lead leaks?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-text-secondary">
            Simulate the true commercial cost of delayed inquiry responses and unconfirmed appointment no-shows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-7 bg-background p-6 sm:p-8 rounded-3xl border border-bg-border shadow-sm">
            <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-text-muted mb-3.5 block">
              1. Select Your Business Type:
            </label>
            <div className="grid grid-cols-2 gap-2.5 mb-8">
              {businessPresets.map((b, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePresetChange(idx)}
                  className={`py-3 px-3.5 text-xs sm:text-sm font-bold rounded-xl border text-left transition-all ${
                    selectedPreset === idx
                      ? "bg-blue-50 border-blue-600 text-blue-700 shadow-sm"
                      : "bg-bg-card border-bg-border text-text-secondary hover:border-gray-300"
                  }`}
                >
                  {b.name}
                </button>
              ))}
            </div>

            {/* Inquiries Slider */}
            <div className="mb-6">
              <div className="flex justify-between text-sm sm:text-base font-bold text-text-primary mb-2">
                <span>Monthly Inquiries (Calls/Forms/DMs):</span>
                <span className="text-blue-600 font-extrabold text-base sm:text-lg">{inquiries} / mo</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="5"
                value={inquiries}
                onChange={(e) => setInquiries(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer h-2"
              />
              <div className="flex justify-between text-xs text-text-muted mt-1 font-medium">
                <span>10 Inquiries</span>
                <span>500 Inquiries</span>
              </div>
            </div>

            {/* Avg Deal Value Slider */}
            <div className="mb-6">
              <div className="flex justify-between text-sm sm:text-base font-bold text-text-primary mb-2">
                <span>Average Consultation / Service Fee:</span>
                <span className="text-blue-600 font-extrabold text-base sm:text-lg">₹{avgDeal.toLocaleString("en-IN")}</span>
              </div>
              <input
                type="range"
                min="500"
                max="100000"
                step="500"
                value={avgDeal}
                onChange={(e) => setAvgDeal(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer h-2"
              />
              <div className="flex justify-between text-xs text-text-muted mt-1 font-medium">
                <span>₹500</span>
                <span>₹1,00,000+</span>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 p-7 sm:p-9 rounded-3xl text-white shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400 mb-4">
              <AlertTriangle className="w-4 h-4" />
              Estimated Monthly Bleed
            </div>

            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-1.5">
              ₹{monthlyLostRevenue.toLocaleString("en-IN")}
              <span className="text-sm sm:text-base font-medium text-slate-400"> / month</span>
            </div>
            <p className="text-sm text-slate-300 mb-6">Lost to slow replies (&gt;2h) and unattended no-shows.</p>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 mb-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-400 font-bold mb-1">
                <TrendingUp className="w-4 h-4" />
                Annual Recoverable Revenue
              </div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-300">
                ₹{annualRecoverable.toLocaleString("en-IN")}
                <span className="text-xs sm:text-sm font-normal text-slate-300"> / year</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Revenue recovered simply by answering in &lt;10s and sending automated WhatsApp reminders.
              </p>
            </div>

            <Button
              href="https://cal.com/saikumarlabs/discovery-call?theme=light"
              external
              variant="primary"
              className="w-full !py-3.5 !text-base font-bold !bg-blue-600 hover:!bg-blue-500 shadow-md"
              trackLabel="calculator_cta"
            >
              Plug This Leak — Free Audit
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
