"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Search,
  BarChart3,
  Target,
  Zap,
  ClipboardCheck,
  Wrench,
  TrendingUp,
  PhoneOff,
  UserX,
  EyeOff,
  Clock,
  Globe,
  LayoutGrid,
  Bot,
  CheckCircle,
  Shield,
  Users,
  Star,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import ProcessStep from "@/components/ui/ProcessStep";
import FAQItem from "@/components/ui/FAQItem";
import { siteConfig } from "@/lib/config";
import { analytics } from "@/lib/analytics";

// ============================================
// DATA
// ============================================

const problems = [
  {
    icon: PhoneOff,
    title: "Missed Calls & Enquiries",
    description:
      "Leads reach out, but no one follows up in time. They go to competitors instead.",
  },
  {
    icon: UserX,
    title: "No System for Follow-up",
    description:
      "You get enquiries but there's no process to track, remind, or convert them consistently.",
  },
  {
    icon: EyeOff,
    title: "No Visibility on What's Working",
    description:
      "You spend on ads and social media but have no way to see what's actually bringing in leads.",
  },
  {
    icon: Clock,
    title: "Manual, Time-Consuming Processes",
    description:
      "Sending quotes, replying to DMs, booking appointments — everything is done manually.",
  },
];

const services = [
  {
    icon: Globe,
    title: "Online Presence",
    description:
      "Get a professional, conversion-ready online setup that makes your business easy to find and trust.",
    items: [
      "Website & landing page development",
      "Basic on-page SEO",
      "Social media account setup",
      "Profile & bio optimisation",
    ],
  },
  {
    icon: BarChart3,
    title: "Tracking & Analytics",
    description:
      "Know exactly where your leads come from and what's working — no more guessing.",
    items: [
      "Google Analytics 4 setup",
      "Search Console integration",
      "Meta Business Manager setup",
      "Ad account configuration",
    ],
  },
  {
    icon: Target,
    title: "Lead Capture",
    description:
      "Turn visitors into enquiries with clear lead funnels and capture systems.",
    items: [
      "Lead funnel setup",
      "Lead generation systems",
      "Enquiry form design",
      "WhatsApp integration",
    ],
  },
  {
    icon: Bot,
    title: "Follow-up & Automation",
    description:
      "Never miss a lead again. Automate follow-ups and save hours every week.",
    items: [
      "Automation workflow setup",
      "AI automation solutions",
      "Follow-up sequences",
      "WhatsApp workflow direction",
    ],
  },
];

const process = [
  {
    icon: Search,
    title: "Audit",
    description:
      "We review your current lead flow — website, social, tracking, follow-up — and find the leaks.",
  },
  {
    icon: ClipboardCheck,
    title: "Plan",
    description:
      "We build a clear, prioritised plan focused on fixing the gaps that cost you the most leads.",
  },
  {
    icon: Wrench,
    title: "Build",
    description:
      "We set up your systems — website, tracking, lead capture, follow-up — clean and connected.",
  },
  {
    icon: TrendingUp,
    title: "Optimise",
    description:
      "We monitor, tweak, and improve so your system gets better over time.",
  },
];

const caseStudies = [
  {
    title: "Coach Lead Capture System",
    industry: "Coaching",
    problem:
      "Leads from Instagram and the website were falling through the cracks — no structured way to capture or follow up.",
    solution:
      "Built a conversion-focused landing page, connected a lead capture funnel, and set up automated follow-up sequences.",
    outcome:
      "Structured lead pipeline with every enquiry tracked, followed up, and no leads lost.",
    systemType: "Landing Page + Lead Funnel + Follow-up",
  },
  {
    title: "Clinic Booking & Follow-up System",
    industry: "Healthcare Clinic",
    problem:
      "Missed appointments and no reminders. Patients booked but often forgot, leading to revenue loss.",
    solution:
      "Created an online booking flow with automated reminders via WhatsApp and SMS before each appointment.",
    outcome:
      "Fewer no-shows, more confirmed bookings, and a smoother patient experience.",
    systemType: "Booking Flow + Automated Reminders",
  },
  {
    title: "Salon Enquiry & WhatsApp Flow",
    industry: "Salon & Beauty",
    problem:
      "All enquiries came through Instagram DMs — chaotic, slow responses, and no tracking.",
    solution:
      "Set up a clean enquiry form connected to WhatsApp, with automated greeting and service selection.",
    outcome:
      "Organised enquiry pipeline, faster responses, and a professional first impression.",
    systemType: "Enquiry Form + WhatsApp Integration",
  },
];

const faqs = [
  {
    question: "What exactly does SaiKumar Labs do?",
    answer:
      "We help service businesses build lead systems — the websites, tracking, lead capture, and follow-up tools that work together to bring in more enquiries and convert them into customers. Think of us as the team that fixes the gaps in how your business gets and handles leads online.",
  },
  {
    question: "I already have a website. Do I need a new one?",
    answer:
      "Not always. Sometimes the issue isn't the website itself — it's the lack of tracking, poor call-to-action placement, or missing follow-up. We'll audit what you have first and only recommend changes that will actually move the needle.",
  },
  {
    question: "How is this different from hiring a freelancer or agency?",
    answer:
      "Most freelancers build websites and leave. Agencies charge high retainers for ongoing management. We focus on building systems — once they're set up, they keep working. You get a clear lead flow that you own, not a monthly dependency.",
  },
  {
    question: "What kind of businesses do you work with?",
    answer:
      "Service businesses — coaches, consultants, clinics, salons, agencies, and local businesses in India. If your business depends on getting enquiries and converting them, we can help.",
  },
  {
    question: "How long does it take to set everything up?",
    answer:
      "It depends on the scope. A basic lead system (website + tracking + lead capture) can be ready in 1–2 weeks. More complex setups with automation and AI may take 3–4 weeks. We'll give you a clear timeline during the free review.",
  },
  {
    question: "What does the Free Lead Flow Review include?",
    answer:
      "We look at your current online presence — website, social profiles, tracking setup, lead capture, and follow-up process — and give you a clear, honest breakdown of where leads are being lost and what to fix first. No sales pitch, just practical advice.",
  },
];

// ============================================
// HOME PAGE
// ============================================

export default function HomePage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 via-cream-100 to-cream-50">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #1A1A1A 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Gold accent glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 mb-3 sm:mb-4 md:mb-6 text-xs md:text-sm font-medium text-gold-700 bg-cream-200 rounded-full border border-gold-400/30">
                Lead Systems for Service Businesses
              </span>
            </motion.div>

            <motion.h1
              className="mb-3 sm:mb-4 md:mb-6 text-[1.75rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Stop Losing Leads.{" "}
              <span className="text-gold-500">Start Growing.</span>
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-xl lg:text-2xl text-charcoal-600 mb-5 sm:mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We help service businesses fix lead leaks and turn their online
              presence into a system that brings more enquiries, better
              follow-up, and fewer missed leads.
            </motion.p>

            <motion.div
              className="flex flex-row items-center gap-2.5 sm:gap-3 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="sm:px-6 sm:py-3 sm:text-base"
                trackLabel="hero_cta"
                id="hero-cta"
              >
                Book a Free Review
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                variant="outline"
                size="sm"
                className="sm:px-6 sm:py-3 sm:text-base"
                external
                trackLabel="hero_whatsapp"
                id="hero-whatsapp"
                onClick={() => analytics.whatsappClick("hero")}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </Button>
            </motion.div>

            {/* Trust line */}
            <motion.p
              className="mt-4 sm:mt-6 text-xs md:text-sm text-gray-custom-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              For coaches, consultants, clinics, salons & local businesses in
              India
            </motion.p>
          </div>
        </div>
      </section>

      {/* ==================== PROBLEM ==================== */}
      <section className="section-padding bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Problem"
            title="Your Business Is Leaking Leads"
            subtitle="Most service businesses lose potential customers every day — not because of bad marketing, but because of broken systems."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problems.map((problem, i) => (
              <motion.div
                key={problem.title}
                className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-red-200 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                  <problem.icon className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-900 mb-1 text-base">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-gray-custom-500 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SOLUTION ==================== */}
      <section className="section-padding bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Solution"
            title="A Lead System That Works While You Work"
            subtitle="We don't just build websites or run ads. We build connected systems that capture, track, and follow up with every lead — so nothing falls through the cracks."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: LayoutGrid,
                title: "Capture",
                desc: "Every visitor sees a clear path to enquire — through your website, landing page, or social profile.",
              },
              {
                icon: BarChart3,
                title: "Track",
                desc: "Know exactly where leads come from, what they do, and which channels bring real results.",
              },
              {
                icon: Zap,
                title: "Follow Up",
                desc: "Automated reminders, WhatsApp flows, and structured follow-up — no lead forgotten.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="text-center p-8 rounded-2xl bg-card border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gold-400/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-gold-600" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-custom-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section className="section-padding bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="What We Build"
            title="Services Grouped by Outcome"
            subtitle="We organise our work around what matters to your business — not technical jargon."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              href="/services"
              variant="outline"
              trackLabel="home_view_services"
              id="home-view-services"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="section-padding bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="How It Works"
            title="From Leaky to Lean — In 4 Steps"
            subtitle="A clear, no-nonsense process that takes your business from scattered lead handling to a structured system."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {process.map((step, i) => (
              <ProcessStep
                key={step.title}
                step={i + 1}
                icon={step.icon}
                title={step.title}
                description={step.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PORTFOLIO ==================== */}
      <section className="section-padding bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Work"
            title="Systems We've Designed"
            subtitle="Real examples of how we've helped service businesses build lead systems that work. These demonstrate our approach — from problem to outcome."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={study.title} {...study} index={i} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              href="/work"
              variant="outline"
              trackLabel="home_view_work"
              id="home-view-work"
            >
              See All Work
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ==================== TRUST ==================== */}
      <section className="section-padding bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why SaiKumar Labs"
            title="Built on Results, Not Promises"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: CheckCircle,
                title: "Systems, Not Just Services",
                desc: "We build connected systems that keep working — not one-off projects that gather dust.",
              },
              {
                icon: Shield,
                title: "Honest, Practical Advice",
                desc: "No upselling, no fake urgency. We tell you what will actually move the needle for your business.",
              },
              {
                icon: Users,
                title: "Built for Service Businesses",
                desc: "We understand coaches, clinics, salons, and consultants — because that's all we focus on.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="text-center p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-gold-400/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="font-semibold text-charcoal-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-custom-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[
              { label: "Systems Built", value: "20+" },
              { label: "Service Businesses Helped", value: "15+" },
              { label: "Lead Leaks Fixed", value: "50+" },
            ].map((stat) => (
              <div key={stat.label} className="px-6">
                <p className="text-3xl font-bold text-gold-500 font-heading">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-custom-400 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="section-padding bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FAQ"
            title="Common Questions"
            subtitle="Answers to the things you're probably wondering."
          />

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.question} {...faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CONTACT CTA ==================== */}
      <section className="section-padding bg-charcoal-900 relative overflow-hidden">
        {/* Gold glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Star className="w-8 h-8 text-gold-400 mx-auto mb-6" />
            <h2 className="text-cream-50 mb-4">
              Ready to Fix Your Lead Flow?
            </h2>
            <p className="text-lg text-gray-custom-400 mb-8 max-w-xl mx-auto">
              Get a free, no-pressure review of your current lead system. We'll
              show you exactly where leads are being lost and what to fix first.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                trackLabel="bottom_cta"
                id="bottom-cta"
              >
                Book a Free Review
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                variant="outline"
                size="lg"
                external
                className="border-cream-300/30 text-cream-100 hover:bg-cream-100/10 hover:text-cream-50"
                trackLabel="bottom_whatsapp"
                id="bottom-whatsapp"
                onClick={() => analytics.whatsappClick("bottom_cta")}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
