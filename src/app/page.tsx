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
  X
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { AutoScrollRamp } from "@/components/ui/AutoScrollRamp";
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

const portfolioItems = [
  {
    title: "Clinic Portfolio",
    description: "Complete digital transformation for a multi-specialty clinic.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    feedback: "Patient bookings increased by 300%.",
    link: "/work"
  },
  {
    title: "Coach Portfolio",
    description: "Personal branding and lead generation engine for an executive coach.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop",
    feedback: "Finally, a system that works on autopilot.",
    link: "/work"
  },
  {
    title: "Agency Portfolio",
    description: "A high-performance scalable setup for a marketing agency.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    feedback: "Our conversion rate doubled in a month.",
    link: "/work"
  }
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
              Your Digital Growth Partner
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
            Your website shouldn't just look good, it needs to generate revenue. We design premium websites integrated with complete tracking and WhatsApp automations.
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
            subtitle="A pretty website won't grow your business. You need a system that captures traffic and converts it into revenue."
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
                  The ₹2,499 Template Trap
                </h3>
                <p className="text-text-secondary mb-8">What most cheap agencies deliver</p>
                
                <ul className="space-y-5">
                  {[
                    "Cheap agencies just edit a template and hand it over.",
                    "Your website is never submitted to Google (no SEO).",
                    "No tracking for visitor numbers or time spent on page.",
                    "Poor security that leaves your business vulnerable."
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
                <p className="text-text-secondary mb-8">What we build for you</p>
                
                <ul className="space-y-5">
                  {[
                    "Custom, high-converting websites built for performance.",
                    "Properly submitted to Google for local SEO visibility.",
                    "Advanced visitor tracking to monitor user behavior.",
                    "Robust security and clean, clutter-free architecture."
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
            title="End-to-End Systems for Growth"
            subtitle="We don't sell disconnected services. We provide complete packages tailored to where your business is right now."
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

      {/* ==================== OUR WORK (PORTFOLIO) ==================== */}
      <section className="section-padding bg-bg-card border-t border-bg-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <SectionHeading
              badge="Our Work"
              title="Recent Success Stories"
              subtitle="Scroll through to see the premium systems we've built."
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
                className="snap-start shrink-0 w-[85vw] sm:w-[420px] lg:w-[480px] bg-background rounded-[2rem] overflow-hidden border border-bg-border group relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,103,244,0.12)] hover:border-accent-primary/30"
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
                  
                  {/* Feedback Overlay (Always visible for impact) */}
                  <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex items-end">
                    <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 transform transition-transform duration-500 group-hover:translate-x-2">
                      <p className="text-sm font-semibold text-white tracking-wide">
                        <span className="text-green-400 mr-2">↗</span>
                        {item.feedback}
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
                    <span className="font-semibold">View Case Study</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
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
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-text-primary uppercase bg-background rounded-full border border-bg-border">
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
                  <div className="w-10 h-10 rounded-full bg-background border border-bg-border flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-text-primary" />
                  </div>
                  <span className="text-sm font-medium text-text-primary">Full-Stack Dev</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-background border border-bg-border flex items-center justify-center">
                    <Bot className="w-5 h-5 text-text-primary" />
                  </div>
                  <span className="text-sm font-medium text-text-primary">AI Automation</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/5] bg-background border border-bg-border flex items-center justify-center"
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
      <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
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
                href="https://cal.com/saikumarlabs/discovery-call?theme=light"
                external
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
