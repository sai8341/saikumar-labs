"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  MessageCircle,
  Monitor,
  Layout,
  Search,
  BarChart,
  Magnet,
  Bot,
  Settings,
  Calendar,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Building2,
  Store,
  PenTool,
  Code,
  LineChart,
  HeartHandshake,
  Target,
  Lightbulb,
  Handshake,
  Heart,
  Infinity,
  RefreshCw,
  CheckCircle2,
  Clock,
  Video,
  Check
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/config";
import { analytics } from "@/lib/analytics";

const capabilities = [
  "Custom Websites",
  "SEO Ready",
  "Lead Systems",
  "AI Automation"
];

const whatWeDo = [
  { icon: Monitor, label: "Custom Websites" },
  { icon: Layout, label: "Landing Pages" },
  { icon: Search, label: "Technical SEO" },
  { icon: BarChart, label: "GA4 & GTM" },
  { icon: Magnet, label: "Lead Capture" },
  { icon: Bot, label: "AI Automation" },
  { icon: Settings, label: "Business Systems" },
  { icon: Calendar, label: "Appointment Booking" },
];

const whoWeWorkWith = [
  { icon: Stethoscope, label: "Clinics" },
  { icon: GraduationCap, label: "Coaches" },
  { icon: Briefcase, label: "Consultants" },
  { icon: Building2, label: "Agencies" },
  { icon: Store, label: "Local Businesses" },
];

const howWeWork = [
  {
    icon: Search,
    phase: "Understand the Business",
    description:
      "We begin by understanding your business goals, current bottlenecks, and target audience. We look at the big picture before recommending any specific technical solution.",
  },
  {
    icon: PenTool,
    phase: "Plan the Right Solution",
    description:
      "Based on your unique needs, we map out a connected system. We choose the right tools and strategies that will actually move the needle for your business.",
  },
  {
    icon: Code,
    phase: "Build",
    description:
      "We design and develop the solution, focusing on performance, user experience, and conversion. Everything is built to integrate seamlessly with your existing workflow.",
  },
  {
    icon: LineChart,
    phase: "Track & Improve",
    description:
      "A launch isn't the end. We set up detailed analytics to track performance. We measure what works and make data-driven adjustments to optimize your lead flow.",
  },
  {
    icon: HeartHandshake,
    phase: "Support",
    description:
      "We provide ongoing guidance and support. As your business grows, your systems should evolve with it. We're here for the long term.",
  },
];

const values = [
  {
    icon: Target,
    title: "Practical Over Fancy",
    description:
      "We build simple systems that work, rather than complex ones that only look impressive.",
  },
  {
    icon: Lightbulb,
    title: "Systems Thinking",
    description:
      "Websites, ads, and automation aren't separate. They are parts of one connected lead system.",
  },
  {
    icon: Handshake,
    title: "Honest Advice",
    description:
      "If something won't help your business, we'll say so. No unnecessary complexity or fake urgency.",
  },
  {
    icon: Heart,
    title: "Built For Real Businesses",
    description:
      "We work with service businesses that need practical tools to generate real results.",
  },
  {
    icon: Infinity,
    title: "Long-Term Partnership",
    description:
      "We don't disappear after launch. We continue helping businesses improve over time.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description:
      "We believe in tracking, measuring, and refining. Good systems get better with data.",
  },
];

const commitments = [
  "Business-first planning",
  "Custom implementation",
  "Honest recommendations",
  "Clean documentation",
  "Performance optimization",
  "Long-term support",
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-cream-100 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-gold-700 bg-cream-200 rounded-full border border-gold-400/30">
                About SaiKumar Labs
              </span>
              <h1 className="mb-6">
                Built To Solve <span className="text-gold-500">Business Problems</span>
              </h1>
              <p className="text-xl text-charcoal-600 leading-relaxed mb-6">
                Most businesses don't struggle because they lack a website. They struggle because their online systems are fragmented and disconnected.
              </p>
              <p className="text-lg text-gray-custom-500 leading-relaxed mb-6">
                Websites. SEO. Analytics. Tracking. Lead Capture. Follow-ups. When these pieces exist separately, leads fall through the cracks.
              </p>
              <p className="text-lg font-semibold text-charcoal-800 leading-relaxed">
                SaiKumar Labs exists to connect everything into one cohesive business system that actually works.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-border shadow-xl relative group">
                  <Image
                    src="/logo.jpg"
                    alt="SaiKumar Labs"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                  {/* Subtle Capabilities Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div className="flex flex-wrap gap-2 justify-center mt-8">
                      {capabilities.map((cap, i) => (
                        <div key={i} className="flex items-center gap-1 bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-full text-xs font-medium text-white shadow-sm">
                          <Check className="w-3 h-3 text-gold-400" />
                          {cap}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-400/10 rounded-2xl -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-cream-300 rounded-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Actually Do */}
      <section className="py-16 md:py-20 bg-cream-50 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Capabilities"
            title="What We Actually Do"
            subtitle="The tools and strategies we use to build comprehensive online systems."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {whatWeDo.map((item, i) => (
              <motion.div
                key={item.label}
                className="bg-card rounded-xl p-4 border border-border flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-cream-100 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-gold-600" />
                </div>
                <span className="font-semibold text-sm text-charcoal-900">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 md:py-20 bg-section-alt border-t border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            badge="Our Clients"
            title="Who We Work With"
            subtitle="We primarily help service-based businesses improve their online presence and streamline their lead generation."
          />
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {whoWeWorkWith.map((item, i) => (
              <motion.div
                key={item.label}
                className="bg-cream-50 rounded-full px-6 py-3 border border-border flex items-center gap-2 shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <item.icon className="w-4 h-4 text-gold-600" />
                <span className="font-semibold text-charcoal-800">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 md:py-20 bg-cream-50 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Process"
            title="How We Work"
            subtitle="A transparent, proven process from our very first conversation to your final launch and beyond."
          />

          <div className="space-y-8 mt-12">
            {howWeWork.map((step, i) => (
              <motion.div
                key={step.phase}
                className="flex gap-6 md:gap-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Timeline */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-gold-600" />
                  </div>
                  {i < howWeWork.length - 1 && (
                    <div className="w-px h-full bg-border mt-4 min-h-[2rem]" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <h3 className="text-lg font-semibold text-charcoal-900 mb-2">
                    {step.phase}
                  </h3>
                  <p className="text-gray-custom-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-section-alt border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="What We Believe"
            title="Our Values"
            subtitle="These aren't corporate buzzwords. They're the principles we actually follow when working with every client."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className="bg-card rounded-2xl p-8 border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-gold-600" />
                </div>
                <h3 className="text-base font-semibold text-charcoal-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-custom-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 md:py-20 bg-cream-50 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            badge="The Standard"
            title="Our Commitment"
            subtitle="What every client can expect when partnering with us."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mt-10">
            {commitments.map((commitment, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 bg-white p-4 rounded-xl border border-border shadow-sm text-left"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <span className="font-semibold text-sm text-charcoal-800">{commitment}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-charcoal-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-400/10 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-cream-50 mb-4">
              Let&apos;s Talk About Your Business
            </h2>
            <p className="text-lg text-gray-custom-400 mb-8 max-w-2xl mx-auto">
              We'll understand your business, discuss your goals, answer your questions, and if we're a good fit, we'll recommend the best next steps for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                href="https://cal.com/saikumarlabs/discovery-call?theme=light"
                external
                variant="primary"
                size="lg"
                trackLabel="about_cta"
                id="about-cta"
              >
                Book a Discovery Call
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                variant="outline"
                size="lg"
                external
                className="border-cream-300/30 text-cream-100 hover:bg-cream-100/10 hover:text-cream-50"
                trackLabel="about_whatsapp"
                id="about-whatsapp"
                onClick={() => analytics.whatsappClick("about_cta")}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-cream-100/60 text-sm font-medium">
                <Clock className="w-4 h-4" /> 30 Minute Call
              </div>
              <div className="flex items-center gap-2 text-cream-100/60 text-sm font-medium">
                <Video className="w-4 h-4" /> Google Meet
              </div>
              <div className="flex items-center gap-2 text-cream-100/60 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4" /> No Obligation
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
