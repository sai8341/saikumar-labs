"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Tag, Terminal, Bot, ArrowRight, MessageCircle, Check } from "lucide-react";
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
              Agentic Marketing Guide
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
              <Clock className="w-3 h-3" />
              7 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.15] mb-6">
            The Agentic Meta Ads Playbook: How to Connect Ads to AI Agents for Hands-Off Reporting
          </h1>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Why business owners are ditching the confusing Meta Ads Manager desktop interface in favor of private AI agents that report ad spend and patient leads directly on WhatsApp.
          </p>
        </div>

        {/* Body Content */}
        <div className="space-y-8 text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
              The Problem: Meta Ads Manager Was Not Built for Busy Founders
            </h2>
            <p>
              If you run a clinic, a consulting practice, or a high-ticket service agency, you already know that paid traffic on Instagram and Facebook is one of the most reliable ways to acquire new clients.
            </p>
            <p className="mt-3">
              However, logging into <strong>Meta Ads Manager</strong> on a desktop computer is a headache. There are dozens of cluttered columns, confusing acronyms (ROAS, CPM, CTR, Frequency), and delayed metrics. Traditional marketing agencies take advantage of this complexity by sending 20-page monthly PDF reports filled with vanity numbers like &quot;impressions&quot; and &quot;reach&quot;, while ignoring the only question that matters: <strong>How much money did we spend, and how many paying clients did we get?</strong>
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
              The Solution: Conversational Ad Intelligence via MCP
            </h2>
            <p>
              In 2026, modern software engineering introduced a breakthrough: the <strong>Model Context Protocol (MCP)</strong>. By connecting the official Meta Ads API to an MCP server, we can give an AI Agent secure, real-time access to your ad account data.
            </p>
            <p className="mt-3">
              Instead of navigating dashboards, you simply open your WhatsApp or Telegram and send a natural language message to your private assistant:
            </p>

            {/* Mock Chat Box */}
            <div className="my-6 p-5 rounded-2xl bg-slate-900 text-white font-mono text-xs sm:text-sm space-y-3">
              <div className="text-blue-400">
                You: &quot;Hey, how did our Instagram ads perform this week?&quot;
              </div>
              <div className="text-emerald-400 border-l-2 border-emerald-500 pl-3 py-1">
                AI Agent: &quot;Between Monday and Friday, you spent ₹4,200 across 2 active ad sets. You generated 19 patient inquiries at an average cost of ₹221 per lead. 12 of them booked consultations on WhatsApp.&quot;
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
              The 3-Step Setup Architecture
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-bg-card border border-bg-border">
                <h3 className="font-bold text-text-primary text-sm mb-1">Step 1: Foundational Social Infrastructure</h3>
                <p className="text-xs sm:text-sm text-text-secondary">
                  We configure your official Facebook Page, Instagram Business Profile, and Meta Business Suite with verified domain settings and server-side Conversions API (CAPI).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-bg-card border border-bg-border">
                <h3 className="font-bold text-text-primary text-sm mb-1">Step 2: Meta Ads MCP Connection</h3>
                <p className="text-xs sm:text-sm text-text-secondary">
                  We securely integrate read-only Meta Ads API tokens into an MCP server, giving your AI agent the ability to query live spend, active ad sets, click-through rates, and lead counts safely.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-bg-card border border-bg-border">
                <h3 className="font-bold text-text-primary text-sm mb-1">Step 3: Automated Anomaly Alerts</h3>
                <p className="text-xs sm:text-sm text-text-secondary">
                  If an ad begins burning budget without generating inquiries, the AI agent immediately sends an alert: <em>&quot;Cost per lead spiked to ₹650 on Ad #2. Paused automatically to protect your budget.&quot;</em>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
              Why This Model Wins
            </h2>
            <p>
              You maintain <strong>100% control</strong> over your advertising budget. No bloated agency fees, no gatekeeping of your ad account, and instant answers on your phone in 5 seconds.
            </p>
          </section>
        </div>

        {/* CTA Card */}
        <div className="mt-14 p-8 rounded-3xl bg-bg-card border-2 border-blue-600/30 text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-3">
            Ready to deploy Agentic Meta Ads for your business?
          </h3>
          <p className="text-sm text-text-secondary max-w-md mx-auto mb-6">
            Book a 30-minute discovery session with Sai Kumar. We will map out your complete social and ad infrastructure.
          </p>
          <Button
            href="https://cal.com/saikumarlabs/discovery-call?theme=light"
            external
            variant="primary"
            className="!px-7 !py-3.5 font-semibold"
            trackLabel="article_meta_ads_cta"
          >
            Book Your Free Systems Audit
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </article>
  );
}
