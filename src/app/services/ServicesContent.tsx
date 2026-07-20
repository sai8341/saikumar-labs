"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Target,
  Bot,
  ArrowRight,
  MessageCircle,
  CheckCircle,
  XCircle,
  HelpCircle,
  MapPin,
  TrendingUp,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { analytics } from "@/lib/analytics";

type ServiceGroup = {
  icon: React.ElementType;
  title: string;
  tagline: string;
  symptom: string;
  result: string;
  color: string;
  href: string;
};

const serviceGroups: ServiceGroup[] = [
  {
    icon: Globe,
    title: "Website Foundation",
    tagline: "Be found. Be trusted. Be chosen.",
    symptom: "Your current website looks outdated, doesn't rank on Google, or fails to convince visitors to contact you.",
    result: "A custom-coded, high-performance website that builds authority, ranks locally, and turns visitors into confident buyers.",
    color: "bg-blue-50 text-blue-600",
    href: "/services/digital-foundation",
  },
  {
    icon: Target,
    title: "Growth Engine",
    tagline: "Turn visitors into real enquiries.",
    symptom: "You have a website, but it's basically a digital brochure. You need a predictable way to generate new business leads.",
    result: "High-converting landing pages paired with targeted Meta Ads and Google Analytics tracking to drive predictable enquiries.",
    color: "bg-green-50 text-green-600",
    href: "/services/lead-engine",
  },
  {
    icon: TrendingUp,
    title: "Brand Authority",
    tagline: "Become the obvious choice in your market.",
    symptom: "Competitors with inferior services are getting the clients you deserve because they look better online.",
    result: "A complete brand overhaul—from logo to a massive multi-page website—positioning you as the premium leader in your space.",
    color: "bg-amber-50 text-amber-600",
    href: "/services/brand-authority",
  },
  {
    icon: Bot,
    title: "Business Systems",
    tagline: "Never miss a lead. Save hours every week.",
    symptom: "You are losing leads because you don't reply fast enough, or you're wasting hours on manual follow-ups and data entry.",
    result: "Automated WhatsApp flows, CRM integrations, and AI-powered follow-ups that handle the busywork so you can close deals.",
    color: "bg-purple-50 text-purple-600",
    href: "/services/business-automation",
  },
];

const processSteps = [
  {
    step: "Discovery Call",
    desc: "We discuss your business goals, current bottlenecks, and determine exactly which service will give you the highest ROI.",
  },
  {
    step: "Custom Strategy",
    desc: "We design a tailored roadmap for your project. No templates, no guesswork—just a clear plan built for your specific market.",
  },
  {
    step: "Setup & Launch",
    desc: "We handle 100% of the technical implementation. You review, approve, and we launch your new growth system.",
  },
  {
    step: "Ongoing Growth",
    desc: "We monitor analytics, track conversions, and optionally manage your ads or SEO to ensure continuous, predictable growth.",
  },
];

const faqs = [
  {
    q: "Do I have to buy all the services together?",
    a: "Not at all. While the services compound perfectly, they are designed as standalone solutions. We will recommend the single best starting point based on your current business bottleneck."
  },
  {
    q: "Where should I start if I have nothing set up?",
    a: "The Website Foundation. You need a trusted, conversion-optimised 'home base' before spending money on ads or automation."
  },
  {
    q: "How do you price your services?",
    a: "We charge flat, project-based fees for implementation (like a new website or landing page) and transparent monthly retainers for ongoing management (like Ads or SEO). No hidden fees."
  },
  {
    q: "How long does a typical project take?",
    a: "A Website Foundation takes about 2-3 weeks. A Growth Engine (Landing Page + Ads Setup) takes about 1-2 weeks. We move fast because we specialise."
  }
];

export default function ServicesContent() {
  return (
    <>
      {/* 1. Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-background border-b border-bg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-4 sm:mb-6 text-xs sm:text-sm font-semibold tracking-wide text-accent-primary bg-accent-primary/10 rounded-full border border-accent-primary/20 uppercase">
                Our Services
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary leading-tight">
                Everything You Need to <span className="text-accent-primary">Scale Predictably</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
                We don't sell generic marketing packages. We build focused, high-performance systems designed to fix specific bottlenecks in your business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Recommendation Matrix */}
      <section className="py-16 md:py-20 bg-bg-card border-b border-bg-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">Which Service Is Right for You?</h2>
            <p className="text-text-secondary">Identify your biggest bottleneck to find the right starting point.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-background border border-bg-border p-6 rounded-2xl hover:border-accent-primary/30 transition-colors group">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-accent-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-text-primary mb-2">If you have no online presence...</h3>
                  <p className="text-sm text-text-secondary mb-4">Start by building a trusted home base that Google can find and customers will trust.</p>
                  <Link href="/services/digital-foundation" className="text-sm font-semibold text-accent-primary group-hover:underline">→ Go to Website Foundation</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-background border border-bg-border p-6 rounded-2xl hover:border-green-500/30 transition-colors group">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-text-primary mb-2">If you need more leads fast...</h3>
                  <p className="text-sm text-text-secondary mb-4">Launch a targeted ad campaign pushing to a dedicated, high-converting landing page.</p>
                  <Link href="/services/lead-engine" className="text-sm font-semibold text-green-500 group-hover:underline">→ Go to Growth Engine</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-background border border-bg-border p-6 rounded-2xl hover:border-amber-500/30 transition-colors group">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-text-primary mb-2">If you want to dominate the market...</h3>
                  <p className="text-sm text-text-secondary mb-4">Overhaul your entire brand, build a massive multi-page site, and command premium pricing.</p>
                  <Link href="/services/brand-authority" className="text-sm font-semibold text-amber-500 group-hover:underline">→ Go to Brand Authority</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-background border border-bg-border p-6 rounded-2xl hover:border-purple-500/30 transition-colors group">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-purple-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-text-primary mb-2">If you are losing leads or too busy...</h3>
                  <p className="text-sm text-text-secondary mb-4">Automate your follow-ups, integrate your CRM, and let AI handle initial conversations.</p>
                  <Link href="/services/business-automation" className="text-sm font-semibold text-purple-500 group-hover:underline">→ Go to Business Systems</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Service Blocks (Decision Matrix) */}
      <section className="py-16 md:py-20 bg-background border-b border-bg-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">Explore Our Solutions</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">Click 'View Details' on any service to see exact deliverables, pricing structures, and processes.</p>
          </div>

          {serviceGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              className={`flex flex-col ${groupIndex % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              {/* Left/Right: Info */}
              <div className="flex-1 w-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${group.color} flex items-center justify-center`}>
                    <group.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-text-primary">{group.title}</h2>
                </div>
                <h3 className="text-xl text-text-secondary font-medium mb-6">{group.tagline}</h3>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider mb-2">The Symptom</h4>
                    <p className="text-sm text-text-secondary leading-relaxed bg-bg-card p-4 rounded-xl border border-bg-border shadow-sm">{group.symptom}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider mb-2">The Result</h4>
                    <p className="text-sm text-text-secondary leading-relaxed bg-bg-card p-4 rounded-xl border border-bg-border shadow-sm">{group.result}</p>
                  </div>
                </div>

                <Button 
                  href={group.href}
                  variant="primary" 
                  className="w-full sm:w-auto shadow-[0_4px_14px_0_rgb(0,103,244,39%)] hover:shadow-[0_6px_20px_rgba(0,103,244,23%)] hover:bg-[rgba(0,103,244,0.9)] transition-all font-semibold"
                >
                  View Details & Pricing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Right/Left: Visual Block */}
              <div className="flex-1 w-full aspect-[4/3] bg-bg-card rounded-[2rem] border border-bg-border flex items-center justify-center p-8 relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-primary/5 rounded-full blur-[80px]" />
                <div className={`w-24 h-24 rounded-full ${group.color} flex items-center justify-center relative z-10 shadow-xl border border-white/10`}>
                  <group.icon className="w-12 h-12" />
                </div>
              </div>
            </motion.div>
          ))}
          <div className="mt-16 max-w-3xl">
            <h3 className="text-xl font-bold text-text-primary mb-3">
              Need Something More Specific?
            </h3>
            <div className="border-l-2 border-accent-primary/20 pl-4 mb-6">
              <p className="text-base text-text-secondary leading-relaxed">
                These are our most common service packages. Every business is different, so every project can be customized based on your goals, requirements, and budget.
              </p>
            </div>
            <Button 
              href="https://cal.com/saikumarlabs/discovery-call?theme=light" 
              external
              variant="outline" 
              className="text-sm font-semibold"
              trackLabel="services_customization_cta"
            >
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </section>

      {/* 4. How We Work */}
      <section className="py-16 md:py-20 bg-bg-card border-b border-bg-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">How We Work</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">A transparent, no-nonsense process from first call to final launch.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative p-8 rounded-2xl bg-background border border-bg-border hover:border-accent-primary/40 transition-colors shadow-sm hover:shadow-md flex flex-col">
                <div className="w-12 h-12 rounded-full bg-accent-primary/10 text-accent-primary flex items-center justify-center font-bold text-lg mb-6">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">{step.step}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="py-16 md:py-20 bg-background border-b border-bg-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">Why Businesses Choose Us</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">We aren't a traditional web agency. We are a business growth partner.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* The Old Way */}
            <div className="bg-red-50/50 rounded-[2rem] p-8 md:p-10 border border-red-100">
              <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-3">
                <XCircle className="w-6 h-6 text-red-500" />
                The Old Way
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-red-800/80">
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400" />
                  "Pretty" websites that don't generate any actual business leads.
                </li>
                <li className="flex items-start gap-3 text-red-800/80">
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400" />
                  You have to figure out the tracking, analytics, and SEO yourself.
                </li>
                <li className="flex items-start gap-3 text-red-800/80">
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400" />
                  Freelancers who disappear after the project is delivered.
                </li>
                <li className="flex items-start gap-3 text-red-800/80">
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400" />
                  Leads slip through the cracks because there's no automated follow-up.
                </li>
              </ul>
            </div>

            {/* The SaiKumar Labs Way */}
            <div className="bg-green-50/50 rounded-[2rem] p-8 md:p-10 border border-green-200 relative overflow-hidden shadow-lg shadow-green-900/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-[40px]" />
              <h3 className="text-xl font-bold text-green-900 mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                The SaiKumar Labs Way
              </h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start gap-3 text-green-900/80 font-medium">
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500" />
                  Websites strategically designed to capture leads and drive ROI.
                </li>
                <li className="flex items-start gap-3 text-green-900/80 font-medium">
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500" />
                  Analytics, tracking, and Google setup included by default.
                </li>
                <li className="flex items-start gap-3 text-green-900/80 font-medium">
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500" />
                  Long-term partnership with ongoing support and growth management.
                </li>
                <li className="flex items-start gap-3 text-green-900/80 font-medium">
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500" />
                  Automated systems ensuring every lead gets a fast response.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="py-16 md:py-20 bg-bg-card border-b border-bg-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-text-secondary">Have questions? We have clear answers.</p>
          </div>

          <div className="grid gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] bg-background border border-bg-border flex gap-6 hover:border-accent-primary/30 transition-colors shadow-sm">
                <HelpCircle className="w-6 h-6 text-accent-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{faq.q}</h3>
                  <p className="text-text-secondary leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-16 md:py-24 bg-text-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-accent-primary/5 pointer-events-none" />
        <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-accent-primary/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-white mb-8">
            <MessageCircle className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight" style={{ color: '#ffffff' }}>
            Still Not Sure Where to Start?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: '#d1d5db' }}>
            Book a free Discovery Call. We'll look at your business, identify the biggest bottleneck, and tell you exactly which service will generate the best ROI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              href="https://cal.com/saikumarlabs/discovery-call?theme=light" 
              external
              variant="primary" 
              size="lg" 
              className="w-full sm:w-auto text-text-primary bg-white hover:bg-gray-200 border-none px-10 py-4 shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all font-bold text-lg"
              trackLabel="services_cta"
              id="services-cta"
            >
              Book a 30-Min Call
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            <Button
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/30 px-10 py-4 font-bold text-lg hover:bg-white/10 !text-white"
              external
              trackLabel="services_whatsapp"
              id="services-whatsapp"
              onClick={() => analytics.whatsappClick("services_cta")}
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
