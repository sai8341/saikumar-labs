"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  CheckCircle,
  XCircle,
  Globe,
  TrendingUp,
  MonitorPlay,
  Briefcase,
  Bot
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/config";
import { analytics } from "@/lib/analytics";

const packages = [
  {
    title: "The Digital Foundation",
    slug: "/services/digital-foundation",
    description: "For businesses moving online. A solid, SEO-ready presence, not a cheap template.",
    icon: Globe,
    features: [
      "Custom, High-Performance Website",
      "Google Search Console (GSC) Setup",
      "Basic Technical SEO & Indexing",
      "GA4 Tracking Setup",
      "1-Year Free Hosting, SSL & Domain"
    ]
  },
  {
    title: "The Lead Engine",
    slug: "/services/lead-engine",
    description: "For service businesses ready to capture traffic and scale predictable enquiries.",
    icon: TrendingUp,
    highlight: true,
    features: [
      "Everything in Foundation",
      "High-Converting Landing Pages",
      "Advanced GA4 & GTM Integration",
      "Meta Ads Setup (Steady Leads)",
      "1-Year Free Hosting, SSL & Domain"
    ]
  },
  {
    title: "Brand Authority",
    slug: "/services/brand-authority",
    description: "For industry leaders scaling through personal brand and advanced workflows.",
    icon: MonitorPlay,
    features: [
      "YouTube Channel SEO & Strategy",
      "Custom Internal AI Workflows",
      "Advanced Personal Branding",
      "Omnichannel Content Strategy",
      "1-Year Free Hosting, SSL & Domain"
    ]
  },
  {
    title: "Business Automation",
    slug: "/services/business-automation",
    description: "For businesses tired of manual follow-ups and chaotic operations.",
    icon: Bot,
    features: [
      "WhatsApp Automation Follow-ups",
      "CRM & Lead Capture Integration",
      "Automated Appointment Reminders",
      "Custom Business Workflows",
      "1-Year Free Hosting, SSL & Domain"
    ]
  }
];


export default function HomePage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden bg-bg-dark pt-16 pb-12 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20">
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Subtle Glows */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px]" />
        
        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-text-primary uppercase bg-bg-card rounded-full border border-bg-border shadow-sm">
              Your Digital Growth Partner
            </span>
          </motion.div>

          <motion.h1
            className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">premium websites</span> & automated lead systems.
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your website shouldn't just look good, it needs to generate revenue. We design premium websites integrated with complete tracking and WhatsApp automations.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-black bg-white hover:bg-gray-200 border-transparent shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              trackLabel="hero_cta"
            >
              Book a Free Lead Review
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              external
              trackLabel="hero_whatsapp"
              onClick={() => analytics.whatsappClick("hero")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </motion.div>
          
          <motion.p
            className="mt-8 text-sm text-text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Trusted by clinics, coaches, and salons across India.
          </motion.p>
        </div>
      </section>

      {/* ==================== PAIN VS SOLUTION ==================== */}
      <section className="section-padding bg-bg-card border-y border-bg-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Problem"
            title="Most agencies build websites. We build systems."
            subtitle="A pretty website won't grow your business. You need a system that captures traffic and converts it into revenue."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
            {/* The Pain */}
            <motion.div
              className="bg-bg-dark rounded-2xl p-8 border border-bg-border relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500/20" />
              <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                <XCircle className="w-6 h-6 text-red-400" />
                The ₹2,499 Template Trap
              </h3>
              <ul className="space-y-4">
                {[
                  "Cheap agencies just edit a template and hand it over.",
                  "Your website is never submitted to Google (no SEO).",
                  "No tracking for visitor numbers or time spent on page.",
                  "Poor security that leaves your business vulnerable."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400/50 mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* The Solution */}
            <motion.div
              className="bg-bg-dark rounded-2xl p-8 border border-bg-border relative overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.02)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-green-500/30" />
              <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                The SaiKumar Labs Standard
              </h3>
              <ul className="space-y-4">
                {[
                  "Custom, high-quality websites built for performance.",
                  "Properly submitted to Google for SEO visibility.",
                  "Advanced visitor tracking to monitor behavior.",
                  "Robust security and clean, clutter-free architecture."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== PACKAGES (SYSTEMS) ==================== */}
      <section className="section-padding bg-bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Solutions"
            title="End-to-End Systems for Growth"
            subtitle="We don't sell disconnected services. We provide complete packages tailored to where your business is right now."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.title}
                className={`rounded-3xl p-8 flex flex-col h-full border ${pkg.highlight ? 'bg-bg-card border-gray-600/30 relative overflow-hidden shadow-2xl shadow-black/50' : 'bg-transparent border-bg-border'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gray-500 to-gray-100" />
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${pkg.highlight ? 'bg-white text-black' : 'bg-bg-border text-text-primary'}`}>
                  <pkg.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-text-primary mb-3">
                  {pkg.title}
                </h3>
                <p className="text-text-secondary mb-8">
                  {pkg.description}
                </p>
                
                <div className="mt-auto">
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 shrink-0 ${pkg.highlight ? 'text-gray-300' : 'text-text-muted'}`} />
                        <span className="text-sm text-text-primary">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    href={pkg.slug} 
                    variant={pkg.highlight ? "primary" : "outline"} 
                    className={`w-full ${pkg.highlight ? 'bg-white text-black hover:bg-gray-200' : ''}`}
                  >
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FOUNDER AUTHORITY ==================== */}
      <section className="section-padding bg-bg-card border-y border-bg-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-text-primary uppercase bg-bg-dark rounded-full border border-bg-border">
                The Architect
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                Hi, I'm Sai Kumar.
              </h2>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                I started in full-stack development, moved into digital marketing, and then mastered AI automation. Now, I combine these skills to build lead systems that actually generate revenue.
              </p>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                As the creator of <span className="text-text-primary font-medium">Think IT Telugu</span>, I've dedicated myself to simplifying complex tech. I bring that same clarity and execution to your business. No jargon, just systems that work.
              </p>
              
              <div className="flex gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-bg-dark border border-bg-border flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-text-primary" />
                  </div>
                  <span className="text-sm font-medium text-text-primary">Full-Stack Dev</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-bg-dark border border-bg-border flex items-center justify-center">
                    <Bot className="w-5 h-5 text-text-primary" />
                  </div>
                  <span className="text-sm font-medium text-text-primary">AI Automation</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/5] bg-bg-dark border border-bg-border flex items-center justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Placeholder for Founder Image */}
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-full bg-bg-border mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-text-muted">SK</span>
                </div>
                <p className="text-text-muted text-sm uppercase tracking-widest">SaiKumar Labs</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT CTA ==================== */}
      <section className="py-24 sm:py-32 bg-bg-dark relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-text-primary mb-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Ready to fix your lead flow?
            </h2>
            <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-xl mx-auto">
              Get a free, no-pressure review of your current lead system. We'll show you where leads are being lost and what to fix first.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto text-black bg-white hover:bg-gray-200"
                trackLabel="bottom_cta"
              >
                Book a Free Review
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
