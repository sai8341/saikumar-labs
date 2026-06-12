"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  MessageCircle,
  Code,
  Megaphone,
  Bot,
  Layers,
  Heart,
  Target,
  Lightbulb,
  Handshake,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/config";
import { analytics } from "@/lib/analytics";

const journey = [
  {
    icon: Code,
    phase: "Started in Coding",
    description:
      "It began with curiosity about how things work. I learned to code, build websites, and understand the technical side of the internet. This gave me a strong foundation — I don't just plan systems, I can build them.",
  },
  {
    icon: Megaphone,
    phase: "Learned Digital Marketing",
    description:
      "Then I wanted to understand why some businesses get noticed online and others don't. I dug into SEO, social media, ad campaigns, and analytics. I started seeing the gap between 'having a website' and 'getting actual leads from it.'",
  },
  {
    icon: Bot,
    phase: "Moved into AI & Automation",
    description:
      "Next came the realisation that even businesses getting leads were losing them — because follow-up was manual, slow, and inconsistent. I explored automation and AI to build systems that handle the follow-up automatically.",
  },
  {
    icon: Layers,
    phase: "Combined Everything into Lead Systems",
    description:
      "Now I bring all three together — coding, marketing, and automation — to build lead systems for service businesses. Not just a website. Not just ads. A connected system that captures, tracks, and follows up with every lead.",
  },
];

const values = [
  {
    icon: Target,
    title: "Practical Over Fancy",
    description:
      "We'd rather build something simple that works than something complex that looks impressive but doesn't deliver.",
  },
  {
    icon: Lightbulb,
    title: "Systems Thinking",
    description:
      "We don't see websites, ads, and automation as separate things. We see them as parts of one connected lead system.",
  },
  {
    icon: Handshake,
    title: "Honest Advice",
    description:
      "If something won't help your business, we'll say so. No upselling, no unnecessary complexity, no fake urgency.",
  },
  {
    icon: Heart,
    title: "Built for Real Businesses",
    description:
      "We work with coaches, clinics, salons, and consultants — real service businesses that need real results.",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-cream-100 to-cream-50">
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
                Building Lead Systems That{" "}
                <span className="text-gold-500">Actually Work</span>
              </h1>
              <p className="text-xl text-charcoal-600 leading-relaxed mb-4">
                SaiKumar Labs was built from a simple observation: most service
                businesses lose leads not because of bad marketing, but because
                of broken systems.
              </p>
              <p className="text-lg text-gray-custom-500 leading-relaxed">
                The website looks fine. The ads are running. But there&apos;s no
                clear funnel, no tracking, and no follow-up. Leads come in — and
                quietly disappear. That&apos;s the gap we fix.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-border shadow-xl">
                  <Image
                    src="/logo.jpg"
                    alt="SaiKumar Labs"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-400/10 rounded-2xl -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-cream-300 rounded-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section-padding bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Journey"
            title="How I Got Here"
            subtitle="The path to building lead systems wasn't a straight line — it was a series of skills and realisations that came together."
          />

          <div className="space-y-8">
            {journey.map((step, i) => (
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
                  {i < journey.length - 1 && (
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
      <section className="section-padding bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="What We Believe"
            title="Our Values"
            subtitle="These aren't corporate buzzwords. They're the principles we actually follow when working with every client."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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

      {/* CTA */}
      <section className="section-padding bg-charcoal-900 relative overflow-hidden">
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
            <p className="text-lg text-gray-custom-400 mb-8">
              No pitch. No pressure. Just an honest conversation about how your
              lead flow works — and where it can be better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                trackLabel="about_cta"
                id="about-cta"
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
                trackLabel="about_whatsapp"
                id="about-whatsapp"
                onClick={() => analytics.whatsappClick("about_cta")}
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
