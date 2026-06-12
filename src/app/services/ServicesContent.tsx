"use client";

import { motion } from "framer-motion";
import {
  Globe,
  BarChart3,
  Target,
  Bot,
  ArrowRight,
  MessageCircle,
  Layout,
  FileText,
  Search,
  Smartphone,
  Share2,
  Link2,
  Briefcase,
  Settings,
  LineChart,
  Camera,
  MonitorSmartphone,
  Users,
  Filter,
  Workflow,
  Cpu,
  Bell,
  MessageSquare,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/config";
import { analytics } from "@/lib/analytics";

type ServiceItem = {
  icon: React.ElementType;
  name: string;
  description: string;
};

type ServiceGroup = {
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  color: string;
  items: ServiceItem[];
};

const serviceGroups: ServiceGroup[] = [
  {
    icon: Globe,
    title: "Online Presence",
    tagline: "Be found. Be trusted. Be chosen.",
    description:
      "Your online presence is the first thing a potential customer sees. We make sure it looks professional, works smoothly, and guides visitors to take action.",
    color: "bg-blue-50 text-blue-600",
    items: [
      {
        icon: Layout,
        name: "Website Development",
        description:
          "Clean, fast, mobile-friendly websites designed to convert visitors into enquiries — not just look pretty.",
      },
      {
        icon: FileText,
        name: "Landing Page Development",
        description:
          "Focused pages built for a single goal — whether it's capturing leads from ads, social, or referrals.",
      },
      {
        icon: MonitorSmartphone,
        name: "Business Website Setup",
        description:
          "A complete professional website with all the essentials — contact, services, about, and clear calls to action.",
      },
      {
        icon: Search,
        name: "Basic On-Page SEO",
        description:
          "Proper page titles, meta descriptions, headings, and content structure so Google can find and rank your pages.",
      },
      {
        icon: Users,
        name: "Bio & Profile Optimisation",
        description:
          "Your Instagram bio, Google Business profile, and social bios — optimised to make visitors take the next step.",
      },
    ],
  },
  {
    icon: BarChart3,
    title: "Tracking & Analytics",
    tagline: "Know what's working. Stop guessing.",
    description:
      "Without tracking, you're spending money blindly. We set up the tools that show you exactly where leads come from and what's actually driving results.",
    color: "bg-green-50 text-green-600",
    items: [
      {
        icon: LineChart,
        name: "Google Analytics 4 Setup",
        description:
          "Track visitor behaviour, traffic sources, and conversion events on your website — properly configured from day one.",
      },
      {
        icon: Search,
        name: "Google Search Console Setup",
        description:
          "Monitor your search performance, discover what people search to find you, and catch technical issues early.",
      },
      {
        icon: Camera,
        name: "Instagram Business Account Setup",
        description:
          "Convert to a business profile with insights, contact buttons, and the ability to run ads.",
      },
      {
        icon: Share2,
        name: "Facebook Page Setup",
        description:
          "A professional Facebook presence with proper categories, contact info, and CTA buttons.",
      },
      {
        icon: Link2,
        name: "Instagram + Facebook Connecting",
        description:
          "Link your Instagram and Facebook accounts so you can manage content, ads, and insights from one place.",
      },
      {
        icon: Briefcase,
        name: "Meta Business Manager Setup",
        description:
          "Set up Meta Business Portfolio to manage all your Meta assets — pages, ad accounts, pixels — in one dashboard.",
      },
      {
        icon: Settings,
        name: "Meta Ad Account Setup",
        description:
          "Create and configure your ad account properly so you're ready to run targeted campaigns when the time is right.",
      },
    ],
  },
  {
    icon: Target,
    title: "Lead Capture",
    tagline: "Turn visitors into real enquiries.",
    description:
      "Getting traffic is only half the battle. We build the systems that capture that traffic as real leads — with clear funnels, forms, and conversion paths.",
    color: "bg-amber-50 text-amber-600",
    items: [
      {
        icon: Filter,
        name: "Lead Funnel Setup",
        description:
          "A clear path from first touchpoint to enquiry — designed to guide visitors step by step toward reaching out.",
      },
      {
        icon: Smartphone,
        name: "Lead Generation System Setup",
        description:
          "A complete lead system with forms, landing pages, and tracking — so every potential customer is captured.",
      },
      {
        icon: MessageSquare,
        name: "WhatsApp / Enquiry Workflow Direction",
        description:
          "Route enquiries to WhatsApp, email, or your preferred channel — with a professional flow that feels seamless.",
      },
    ],
  },
  {
    icon: Bot,
    title: "Follow-up & Automation",
    tagline: "Never miss a lead. Save hours every week.",
    description:
      "Most businesses lose leads not because they don't get any — but because they don't follow up. We build the systems that do it for you.",
    color: "bg-purple-50 text-purple-600",
    items: [
      {
        icon: Workflow,
        name: "Automation Workflow Setup",
        description:
          "Automated sequences that send the right message at the right time — follow-ups, reminders, and confirmations.",
      },
      {
        icon: Cpu,
        name: "AI Automation Solutions",
        description:
          "Smart automation using AI — from chatbot responses to intelligent lead scoring and routing.",
      },
      {
        icon: Bell,
        name: "Follow-up System Setup",
        description:
          "A structured follow-up system that ensures no lead goes cold — reminders, sequences, and escalation paths.",
      },
    ],
  },
];

export default function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-cream-100 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-gold-700 bg-cream-200 rounded-full border border-gold-400/30">
                Our Services
              </span>
              <h1>
                Everything You Need to{" "}
                <span className="text-gold-500">Capture More Leads</span>
              </h1>
              <p className="mt-6 text-xl text-charcoal-600 leading-relaxed">
                We organise our services by what they do for your business — not
                by technical labels. Each service is designed to fix a specific
                part of your lead flow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Groups */}
      {serviceGroups.map((group, groupIndex) => (
        <section
          key={group.title}
          className={`section-padding ${groupIndex % 2 === 0 ? "bg-cream-50" : "bg-section-alt"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Group header */}
            <motion.div
              className="max-w-3xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-xl ${group.color} flex items-center justify-center`}
                >
                  <group.icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-gold-600 uppercase tracking-wider">
                  {group.title}
                </span>
              </div>
              <h2 className="mb-3">{group.tagline}</h2>
              <p className="text-lg text-gray-custom-500 leading-relaxed">
                {group.description}
              </p>
            </motion.div>

            {/* Service items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  className="bg-card rounded-2xl p-7 border border-border hover:border-gold-400/30 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-cream-200 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-gold-600" />
                  </div>
                  <h3 className="text-base font-semibold text-charcoal-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-custom-500 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

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
              Not Sure Where to Start?
            </h2>
            <p className="text-lg text-gray-custom-400 mb-8">
              Book a free lead flow review. We&apos;ll look at your current
              setup and tell you exactly which services will make the biggest
              difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                trackLabel="services_cta"
                id="services-cta"
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
                trackLabel="services_whatsapp"
                id="services-whatsapp"
                onClick={() => analytics.whatsappClick("services_cta")}
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
