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
  Bot,
  Calendar,
  Star,
  Zap,
  Check,
  X,
  Search,
  Lightbulb,
  Palette,
  Code,
  BarChart3,
  Rocket,
  Headphones,
  Users,
  PlayCircle,
  MessageSquare,
  Settings,
  Megaphone,
  FileCode,
  Gauge,
  ShieldCheck,
  Database,
  FileText,
  Monitor,
  HardDrive,
  ClipboardCheck,
  Share2,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { AutoScrollRamp } from "@/components/ui/AutoScrollRamp";
import { siteConfig } from "@/lib/config";
import { analytics } from "@/lib/analytics";

const packages = [
  {
    title: "Website Foundation",
    slug: "/services/digital-foundation",
    description: "For businesses going online properly. A custom-coded, SEO-ready website — not a template.",
    icon: Globe,
    features: [
      "Custom, High-Performance Website",
      "Google Search Console Setup",
      "Technical SEO & Indexing",
      "GA4 Tracking Setup",
      "1-Year Free Hosting, SSL & Domain"
    ]
  },
  {
    title: "Growth Engine",
    slug: "/services/lead-engine",
    description: "For businesses ready to capture traffic and turn visitors into real enquiries.",
    icon: TrendingUp,
    highlight: true,
    features: [
      "Everything in Website Foundation",
      "High-Converting Landing Pages",
      "Advanced GA4 & GTM Integration",
      "Meta Ads Setup (Steady Leads)",
      "1-Year Free Hosting, SSL & Domain"
    ]
  },
  {
    title: "Brand Authority",
    slug: "/services/brand-authority",
    description: "For founders scaling through content, personal brand, and multi-channel presence.",
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
    title: "Business Systems",
    slug: "/services/business-automation",
    description: "For businesses tired of manual follow-ups, missed leads, and disconnected tools.",
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

const portfolioItems = [
  {
    title: "Healthcare Website",
    description: "Complete digital presence for a multi-specialty clinic with appointment booking and patient flow.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    tag: "Concept Project",
    link: "/work"
  },
  {
    title: "Coaching Platform",
    description: "Personal branding and lead generation system for an executive coach.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop",
    tag: "Demo Build",
    link: "/work"
  },
  {
    title: "Agency Website",
    description: "High-performance, scalable website for a marketing agency with lead capture.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    tag: "Sample Build",
    link: "/work"
  }
];

const deliverables = [
  { icon: Search, label: "Requirement Discovery" },
  { icon: Lightbulb, label: "Business Strategy" },
  { icon: Palette, label: "Custom UI Design" },
  { icon: Code, label: "Responsive Development" },
  { icon: Gauge, label: "Performance Optimization" },
  { icon: FileText, label: "Technical SEO" },
  { icon: FileCode, label: "On-Page SEO" },
  { icon: Database, label: "JSON-LD Schema" },
  { icon: Globe, label: "Google Search Console" },
  { icon: Share2, label: "Sitemap Submission" },
  { icon: BarChart3, label: "Google Analytics 4" },
  { icon: Monitor, label: "Google Tag Manager" },
  { icon: ShieldCheck, label: "SSL & Security" },
  { icon: HardDrive, label: "Hosting & Deployment" },
  { icon: ClipboardCheck, label: "Quality Assurance" },
  { icon: Headphones, label: "Launch Support" },
];

const processSteps = [
  { number: "01", title: "Discovery", description: "We learn your business, audience, and goals" },
  { number: "02", title: "Strategy", description: "We define the structure, pages, and conversion flow" },
  { number: "03", title: "Design", description: "You see the UI before a single line of code is written" },
  { number: "04", title: "Development", description: "Custom-coded in Next.js, optimized for speed" },
  { number: "05", title: "SEO & Tracking", description: "GA4, GTM, GSC, schema, sitemap — all configured" },
  { number: "06", title: "Launch", description: "Deployed on fast, reliable infrastructure with SSL" },
  { number: "07", title: "Support", description: "Ongoing assistance and performance monitoring" },
];

const comparisonItems = [
  { typical: "Template-based design", ours: "Custom-coded from scratch" },
  { typical: "Basic layout only", ours: "Business strategy built in" },
  { typical: "No analytics tracking", ours: "GA4 + GTM configured" },
  { typical: "No search visibility", ours: "Technical SEO + schema" },
  { typical: "No structured data", ours: "JSON-LD markup" },
  { typical: "Launch and forget", ours: "Launch + ongoing support" },
];

const additionalCapabilities = [
  { icon: Users, label: "Instagram & Facebook Setup" },
  { icon: Megaphone, label: "Business Manager & Ads Manager" },
  { icon: PlayCircle, label: "YouTube Channel Setup & SEO" },
  { icon: MessageCircle, label: "WhatsApp Automation" },
  { icon: Calendar, label: "Booking & Appointment Systems" },
  { icon: MessageSquare, label: "AI Chatbots & Auto-Responses" },
];

export default function HomePage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden bg-background pt-16 pb-12 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20">
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
        
        {/* Floating Icons & Doodles (Desktop wide only) */}
        <div className="absolute inset-0 max-w-[1400px] mx-auto hidden xl:block pointer-events-none z-0">
          {/* Left Side: Bot */}
          <motion.div 
            className="absolute top-[30%] left-[8%] flex items-center justify-center w-14 h-14 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 rotate-[-12deg]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: -12 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Bot className="w-7 h-7 text-purple-600" />
          </motion.div>
          {/* Doodle Line from Bot */}
          <motion.svg 
            className="absolute top-[38%] left-[12%] w-24 h-24 text-gray-300 opacity-60"
            viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <path d="M10 10 C 40 50, 60 70, 90 90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 6"/>
          </motion.svg>

          {/* Right Side: Figma */}
          <motion.div 
            className="absolute top-[25%] right-[10%] flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 rotate-[8deg]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 8 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <svg className="w-8 h-8" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 28.5A9.5 9.5 0 1 1 38 28.5A9.5 9.5 0 0 1 19 28.5Z" fill="#1ABCFE"/>
              <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19V57H9.5A9.5 9.5 0 0 1 0 47.5Z" fill="#0ACF83"/>
              <path d="M19 0L9.5 0A9.5 9.5 0 0 0 0 9.5L0 9.5A9.5 9.5 0 0 0 9.5 19L19 19L19 0Z" fill="#F24E1E"/>
              <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38L19 38L19 19L9.5 19A9.5 9.5 0 0 0 0 28.5Z" fill="#A259FF"/>
              <path d="M38 9.5A9.5 9.5 0 0 0 28.5 0L19 0L19 19L28.5 19A9.5 9.5 0 0 0 38 9.5Z" fill="#FF7262"/>
            </svg>
          </motion.div>
          {/* Doodle Line from Figma */}
          <motion.svg 
            className="absolute top-[35%] right-[14%] w-20 h-20 text-gray-300 opacity-60"
            viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <path d="M90 10 C 60 40, 40 60, 10 80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 6"/>
          </motion.svg>

          {/* Left Bottom: Cursor */}
          <motion.div 
            className="absolute bottom-[20%] left-[15%] flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 rotate-[15deg]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 15 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <MonitorPlay className="w-6 h-6 text-black" />
          </motion.div>
        </div>

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50/50 rounded-full border border-blue-200 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Website & Lead Systems
            </span>
          </motion.div>

          <div className="relative">
            <motion.h1
              className="mb-5 text-[40px] leading-[1.05] sm:text-5xl md:text-[56px] lg:text-[64px] font-[800] tracking-[-0.04em] text-text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">premium websites</span><br className="hidden sm:block" /> & automated lead systems.
            </motion.h1>
          </div>

          <motion.p
            className="text-[16px] md:text-[18px] text-text-secondary mb-8 max-w-[640px] mx-auto leading-[1.6] font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your website shouldn&apos;t just look good — it needs to bring in business. We build custom-coded websites with SEO, analytics, and lead capture systems built in from day one.
          </motion.p>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              href="https://cal.com/saikumarlabs/discovery-call?theme=light"
              external
              variant="primary"
              className="!px-6 !py-3 !text-[15px] font-semibold w-auto shadow-[0_0_20px_rgba(0,103,244,0.3)] hover:shadow-[0_0_30px_rgba(0,103,244,0.4)] hover:-translate-y-0.5 transition-all"
              trackLabel="hero_cta"
            >
              Book a 30-Min Call
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ==================== AUTO SCROLL USPs (Ramp) ==================== */}
      <AutoScrollRamp />

      {/* ==================== PAIN VS SOLUTION ==================== */}
      <section className="section-padding bg-bg-card border-y border-bg-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Problem"
            title="Most agencies build websites. We build systems."
            subtitle="A website alone won't grow your business. You need a system that captures traffic, tracks performance, and converts visitors into real enquiries."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
            {/* The Pain */}
            <motion.div
              className="group bg-background rounded-3xl p-8 md:p-10 border border-bg-border relative overflow-hidden transition-all duration-300 hover:border-red-500/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <XCircle className="w-24 h-24 text-red-500" />
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6">
                  <XCircle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  Common Website Limitations
                </h3>
                <p className="text-text-secondary mb-8">What most website packages typically include</p>
                
                <ul className="space-y-5">
                  {[
                    "Built on a template with limited customization options.",
                    "No Google Search Console or sitemap submission.",
                    "No analytics tracking — no data on visitor behaviour.",
                    "No structured data or schema markup for search engines."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-text-primary">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center">
                        <X className="w-3 h-3 text-red-500" />
                      </div>
                      <span className="text-[15px] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* The Solution */}
            <motion.div
              className="group bg-background rounded-3xl p-8 md:p-10 border border-bg-border relative overflow-hidden shadow-[0_0_40px_rgba(0,103,244,0.03)] hover:shadow-[0_0_60px_rgba(0,103,244,0.08)] transition-all duration-500 hover:border-accent-primary/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <CheckCircle className="w-24 h-24 text-accent-primary" />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-accent-primary" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  The SaiKumar Labs Standard
                </h3>
                <p className="text-text-secondary mb-8">What we build into every project</p>
                
                <ul className="space-y-5">
                  {[
                    "Custom-coded websites built around your business goals.",
                    "Google Search Console, sitemap, and proper indexing.",
                    "GA4 + GTM tracking to measure what actually works.",
                    "JSON-LD schema markup for structured search visibility."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-text-primary font-medium">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent-primary/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-accent-primary" />
                      </div>
                      <span className="text-[15px] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== PACKAGES (SYSTEMS) ==================== */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Solutions"
            title="What We Build"
            subtitle="Complete systems tailored to where your business is right now — from first website to full automation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.title}
                className={`group rounded-3xl p-8 flex flex-col h-full border relative overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                  pkg.highlight 
                    ? 'bg-background border-accent-primary/40 shadow-[0_20px_40px_rgba(0,103,244,0.1)] hover:shadow-[0_30px_60px_rgba(0,103,244,0.2)]' 
                    : 'bg-background border-bg-border hover:border-accent-primary/20 hover:shadow-xl'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Subtle top gradient line for highlighted package */}
                {pkg.highlight && (
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400" />
                )}
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300 ${
                  pkg.highlight 
                    ? 'bg-accent-primary text-white shadow-md shadow-accent-primary/30' 
                    : 'bg-accent-primary/10 text-accent-primary group-hover:bg-accent-primary group-hover:text-white'
                }`}>
                  <pkg.icon className="w-7 h-7" />
                </div>
                
                {/* Text Content */}
                <h3 className="text-xl xl:text-2xl font-bold text-text-primary mb-3">
                  {pkg.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-text-secondary mb-8">
                  {pkg.description}
                </p>
                
                {/* Features List */}
                <div className="mt-auto">
                  <div className="space-y-4 mb-10">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          pkg.highlight ? 'bg-accent-primary/10' : 'bg-bg-card'
                        }`}>
                          <Check className={`w-3 h-3 ${pkg.highlight ? 'text-accent-primary' : 'text-text-muted'}`} />
                        </div>
                        <span className="text-[14px] font-medium text-text-primary leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Button */}
                  <Button 
                    href={pkg.slug} 
                    variant={pkg.highlight ? "primary" : "outline"} 
                    className={`w-full font-semibold ${
                      pkg.highlight 
                        ? 'shadow-[0_0_20px_rgba(0,103,244,0.3)] hover:shadow-[0_0_30px_rgba(0,103,244,0.4)]' 
                        : 'border-bg-border hover:border-accent-primary hover:text-accent-primary'
                    }`}
                  >
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHAT'S INCLUDED (DELIVERABLES) ==================== */}
      <section className="section-padding bg-bg-card border-y border-bg-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="What's Included"
            title="Everything That Goes Into Every Build"
            subtitle="Every project includes a complete setup — from strategy and design to SEO, tracking, and launch support."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
            {deliverables.map((item, i) => (
              <motion.div
                key={item.label}
                className="group flex items-center gap-3 p-4 md:p-5 rounded-2xl bg-background border border-bg-border hover:border-accent-primary/30 hover:shadow-sm transition-all duration-300"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent-primary/10 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors duration-300">
                  <item.icon className="w-4 h-4 text-accent-primary" />
                </div>
                <span className="text-[13px] md:text-[14px] font-semibold text-text-primary leading-tight">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HOW WE WORK (PROCESS) ==================== */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="How We Work"
            title="A Clear Process From Start to Launch"
            subtitle="No guesswork, no surprises. Here's exactly how we take your project from idea to live website."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {processSteps.slice(0, 4).map((step, i) => (
              <motion.div
                key={step.number}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="p-6 md:p-8 rounded-3xl bg-bg-card border border-bg-border h-full hover:border-accent-primary/30 hover:shadow-sm transition-all duration-300">
                  <span className="text-3xl md:text-4xl font-[800] text-accent-primary/15 block mb-4">{step.number}</span>
                  <h3 className="text-lg font-bold text-text-primary mb-2">{step.title}</h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 max-w-4xl mx-auto">
            {processSteps.slice(4).map((step, i) => (
              <motion.div
                key={step.number}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i + 4) * 0.1 }}
              >
                <div className="p-6 md:p-8 rounded-3xl bg-bg-card border border-bg-border h-full hover:border-accent-primary/30 hover:shadow-sm transition-all duration-300">
                  <span className="text-3xl md:text-4xl font-[800] text-accent-primary/15 block mb-4">{step.number}</span>
                  <h3 className="text-lg font-bold text-text-primary mb-2">{step.title}</h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY SAIKUMAR LABS ==================== */}
      <section className="section-padding bg-bg-card border-y border-bg-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why Us"
            title="What Sets Us Apart"
            subtitle="A side-by-side look at what you get when you work with SaiKumar Labs."
          />

          <motion.div
            className="mt-12 bg-background rounded-3xl border border-bg-border overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Table Header */}
            <div className="grid grid-cols-2 border-b border-bg-border">
              <div className="p-5 md:p-6 text-center">
                <span className="text-sm font-semibold text-text-muted uppercase tracking-wider">Typical Website</span>
              </div>
              <div className="p-5 md:p-6 text-center bg-accent-primary/5 border-l border-bg-border">
                <span className="text-sm font-semibold text-accent-primary uppercase tracking-wider">SaiKumar Labs</span>
              </div>
            </div>
            
            {/* Table Rows */}
            {comparisonItems.map((row, i) => (
              <div key={i} className={`grid grid-cols-2 ${i < comparisonItems.length - 1 ? 'border-b border-bg-border' : ''}`}>
                <div className="p-4 md:p-5 flex items-center justify-center text-center">
                  <span className="text-[14px] text-text-muted">{row.typical}</span>
                </div>
                <div className="p-4 md:p-5 flex items-center justify-center text-center bg-accent-primary/5 border-l border-bg-border">
                  <span className="text-[14px] font-medium text-text-primary">{row.ours}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== OUR WORK (PORTFOLIO) ==================== */}
      <section className="section-padding bg-background border-t border-bg-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <SectionHeading
              badge="Our Work"
              title="Recent Projects"
              subtitle="A selection of websites and systems we've built."
            />
            <div className="hidden md:flex">
              <Button href="/work" variant="ghost">View All Work <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </div>
          </div>
          
          {/* Horizontal Scroll Container */}
          <div className="flex gap-6 lg:gap-8 overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory pb-12 pt-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.title}
                className="snap-start shrink-0 w-[85vw] sm:w-[420px] lg:w-[480px] bg-bg-card rounded-[2rem] overflow-hidden border border-bg-border group relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,103,244,0.12)] hover:border-accent-primary/30"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Image Area */}
                <div className="h-60 sm:h-72 overflow-hidden relative">
                  {/* Base overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                  
                  {/* Hover overlay for deep blue tint */}
                  <div className="absolute inset-0 bg-accent-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  
                  {/* Tag Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex items-end">
                    <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 transform transition-transform duration-500 group-hover:translate-x-2">
                      <p className="text-sm font-semibold text-white tracking-wide">
                        {item.tag}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Left bordered description */}
                  <div className="pl-4 border-l-2 border-accent-primary/20 mb-8">
                    <p className="text-text-secondary text-[15px] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  
                  <Button 
                    href={item.link} 
                    variant="outline" 
                    size="lg" 
                    className="w-full justify-between group-hover:bg-accent-primary group-hover:text-white group-hover:border-accent-primary transition-all duration-300"
                  >
                    <span className="font-semibold">View Project</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ADDITIONAL CAPABILITIES ==================== */}
      <section className="section-padding bg-bg-card border-y border-bg-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Also Available"
            title="Additional Services"
            subtitle="Beyond websites, we can help set up and configure the platforms that support your business."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5 mt-12">
            {additionalCapabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                className="flex items-center gap-3 p-4 rounded-2xl bg-background border border-bg-border"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <cap.icon className="w-5 h-5 text-text-muted flex-shrink-0" />
                <span className="text-[13px] md:text-[14px] font-medium text-text-secondary">{cap.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FOUNDER AUTHORITY ==================== */}
      <section className="section-padding bg-background border-b border-bg-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-text-primary uppercase bg-background rounded-full border border-bg-border">
                Our Approach
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                Why SaiKumar Labs Exists
              </h2>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                Most businesses don&apos;t need another website. They need a website that actually brings in enquiries, shows up on Google, and gives them clear data on what&apos;s working.
              </p>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                SaiKumar Labs was built around that idea. Every project starts with understanding the business — the audience, the goals, the gaps. Only then does design and code begin. The result is a system built to perform, not just to look good.
              </p>
              
              <div className="flex gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-background border border-bg-border flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-text-primary" />
                  </div>
                  <span className="text-sm font-medium text-text-primary">Business First</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-background border border-bg-border flex items-center justify-center">
                    <Code className="w-5 h-5 text-text-primary" />
                  </div>
                  <span className="text-sm font-medium text-text-primary">Custom Built</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/5] bg-bg-card border border-bg-border flex items-center justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full p-8 md:p-10 space-y-5">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-6">Every Project Includes</p>
                {[
                  { icon: Code, label: "Custom Coded" },
                  { icon: Search, label: "SEO Ready" },
                  { icon: BarChart3, label: "GA4 + GTM" },
                  { icon: Database, label: "Schema Enabled" },
                  { icon: Gauge, label: "Fast Performance" },
                  { icon: Briefcase, label: "Business Focused" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-accent-primary" />
                    </div>
                    <span className="text-[15px] font-semibold text-text-primary">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT CTA ==================== */}
      <section className="py-24 sm:py-32 bg-text-primary relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-primary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="!text-white mb-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Ready to build something that actually works?
            </h2>
            <p className="text-lg md:text-xl !text-gray-400 mb-10 max-w-xl mx-auto">
              Book a free, no-pressure call. We&apos;ll review your current setup, identify gaps, and show you exactly what a proper system looks like.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="https://cal.com/saikumarlabs/discovery-call?theme=light"
                external
                variant="primary"
                size="lg"
                className="w-full sm:w-auto !bg-white !text-text-primary hover:!bg-gray-200 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
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
