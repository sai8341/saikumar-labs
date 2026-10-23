"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Tag, CheckCircle2, TrendingUp, ArrowRight, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";

export default function ArticleContent() {
  return (
    <article className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-xs font-bold text-text-muted hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
          Back to Blog & Insights
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              <Tag className="w-3 h-3" />
              Healthcare Case Study
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
              <Clock className="w-3 h-3" />
              6 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.15] mb-6">
            How a Multi-Specialty Clinic Slashed Patient No-Shows from 38% to 6% with WhatsApp AI
          </h1>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            A step-by-step breakdown of how deploying official WhatsApp Cloud API auto-reminders and automated slot scheduling recovered ₹54,000 in monthly consultation fees.
          </p>
        </div>

        {/* Key Metrics Banner */}
        <div className="p-6 rounded-2xl bg-bg-card border border-bg-border grid grid-cols-3 gap-4 mb-12 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-blue-600">38% → 6%</div>
            <div className="text-xs text-text-muted mt-1">No-Show Rate</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">+₹54,000</div>
            <div className="text-xs text-text-muted mt-1">Monthly Recovered Fees</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-purple-600">16 hrs/wk</div>
            <div className="text-xs text-text-muted mt-1">Staff Time Saved</div>
          </div>
        </div>

        {/* Body Content */}
        <div className="space-y-8 text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
              The Reality: High Ad Spend, Empty Doctor Chairs
            </h2>
            <p>
              Like many healthcare clinics across Hyderabad, our client was spending roughly ₹35,000 each month running Instagram ads and local Google campaigns for skin and dental consultations. Inquiries were coming in, but their actual clinic waiting room told a different story.
            </p>
            <p className="mt-3">
              Nearly <strong>4 out of every 10 patients who booked an appointment simply did not show up</strong>. The doctors sat idle in reserved consultation rooms, while the reception team spent hours making awkward manual reminder calls that patients either declined or ignored.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
              The Root Cause: Zero Speed-to-Lead & Manual Chaos
            </h2>
            <p>
              When we audited the clinic&apos;s patient intake journey, we identified two severe lead leaks:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>
                <strong>Slow Response Time:</strong> Over 60% of inquiries arrived after 7:30 PM. Since reception left at 8 PM, these leads sat untouched until 10:30 AM the next day. By then, over half had already booked with another clinic.
              </li>
              <li>
                <strong>Zero Pre-Appointment Cadence:</strong> Booking confirmation was given via a rushed phone call. Patients were not sent Google Maps location links, parking instructions, or timely reminders.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
              The Solution: The 4-Part Autonomous WhatsApp Engine
            </h2>
            <p>
              We completely removed manual phone tag and deployed an interconnected WhatsApp Cloud API system in Next.js and n8n:
            </p>
            <div className="space-y-4 mt-4">
              <div className="p-4 rounded-xl bg-bg-card border border-bg-border">
                <h3 className="font-bold text-text-primary text-sm mb-1">1. Sub-10s Auto-Response & Triage</h3>
                <p className="text-xs sm:text-sm text-text-secondary">
                  The moment an ad form was submitted, the patient received a warm WhatsApp greeting within 6 seconds, asking what consultation they needed and providing 1-tap slot choices.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-bg-card border border-bg-border">
                <h3 className="font-bold text-text-primary text-sm mb-1">2. Direct Calendar Booking</h3>
                <p className="text-xs sm:text-sm text-text-secondary">
                  Patients selected open slots directly inside WhatsApp without logging into any app. The system automatically blocked the doctor&apos;s Google Calendar.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-bg-card border border-bg-border">
                <h3 className="font-bold text-text-primary text-sm mb-1">3. Automated 24h & 2h Reminder Sequence</h3>
                <p className="text-xs sm:text-sm text-text-secondary">
                  24 hours prior, patients received Google Maps directions and parking instructions. 2 hours before, an automated message asked: <em>&quot;Quick check! Are you on schedule? Reply 1 to Confirm or 2 to Reschedule.&quot;</em>
                </p>
              </div>

              <div className="p-4 rounded-xl bg-bg-card border border-bg-border">
                <h3 className="font-bold text-text-primary text-sm mb-1">4. Instant Slot Re-Opening</h3>
                <p className="text-xs sm:text-sm text-text-secondary">
                  If a patient tapped &quot;Reschedule&quot;, their old slot was immediately made available for walk-in patients, while the bot provided new slots for the next day.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
              The 30-Day Results
            </h2>
            <p>
              Within the first month of launching this automated workflow:
            </p>
            <div className="space-y-2 mt-3">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Patient attendance jumped from 62% to <strong>94%</strong>.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Recovered <strong>₹54,000</strong> in consultation fees that previously vanished.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Reception staff saved <strong>16 hours weekly</strong>, redirecting their time to in-clinic patient care.</span>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Card */}
        <div className="mt-14 p-8 rounded-3xl bg-bg-card border-2 border-blue-600/30 text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-3">
            Want to install this system for your practice?
          </h3>
          <p className="text-sm text-text-secondary max-w-md mx-auto mb-6">
            Book a free 30-minute discovery call with Sai Kumar. We will audit your current booking process and provide a fixed-scope roadmap.
          </p>
          <Button
            href="https://cal.com/saikumarlabs/discovery-call?theme=light"
            external
            variant="primary"
            className="!px-7 !py-3.5 font-semibold"
            trackLabel="case_study_clinic_cta"
          >
            Book Your Free Systems Audit
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </article>
  );
}
