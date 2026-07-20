"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Users,
  Stethoscope,
  Scissors,
  Globe,
  BarChart3,
  Zap,
  Target,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/config";
import { analytics } from "@/lib/analytics";

const commonChallenges = [
  "Low Website Enquiries",
  "Missed Leads",
  "No Lead Tracking",
  "Manual Follow-ups",
  "Poor Conversion Rates",
  "Slow Response Times",
  "No Online Booking",
  "Disconnected Business Tools"
];

const industriesHelped = [
  "Healthcare",
  "Professional Coaching",
  "Consultants",
  "Agencies",
  "Salons & Clinics",
  "Local Businesses",
  "Small Service Businesses"
];

const caseStudies = [
  {
    icon: Users,
    title: "Coach Lead Capture System",
    industry: "Coaching",
    color: "from-blue-500 to-blue-600",
    problem:
      "Leads from Instagram and the website were scattered with no follow-up process - enquiries went cold within hours.",
    solution:
      "Built a conversion-focused landing page, connected lead capture to WhatsApp, and set up automated follow-up sequences.",
    outcome:
      "Every enquiry captured in one place. Automated follow-up runs without manual effort. Clear data on which channels bring real leads.",
    technologies: ["Next.js", "WhatsApp", "n8n", "GA4", "Cal.com"],
  },
  {
    icon: Stethoscope,
    title: "Clinic Booking & Follow-up System",
    industry: "Healthcare Clinic",
    color: "from-green-500 to-green-600",
    problem:
      "High no-show rate - patients booked but forgot, and staff had to manually call each person.",
    solution:
      "Created an online booking flow with automated WhatsApp and SMS reminders before each appointment.",
    outcome:
      "Significant reduction in missed appointments. Staff freed from manual calling. Smoother patient experience.",
    technologies: ["Next.js", "Cal.com", "WhatsApp", "n8n", "GA4"],
  },
  {
    icon: Scissors,
    title: "Salon Enquiry & WhatsApp Flow",
    industry: "Salon & Beauty",
    color: "from-pink-500 to-pink-600",
    problem:
      "All enquiries came through Instagram DMs - chaotic, slow responses, and no way to track service requests.",
    solution:
      "Set up a clean enquiry form connected to WhatsApp with automated greeting and service selection.",
    outcome:
      "Organised enquiry pipeline. Professional first impression. Clients explore services and reach out in seconds.",
    technologies: ["Next.js", "WhatsApp", "Google Tag Manager", "n8n", "Schema"],
  },
];

export default function WorkContent() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cream-100 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-4 sm:mb-6 text-xs sm:text-sm font-medium text-gold-700 bg-cream-200 rounded-full border border-gold-400/30">
                Our Work
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
                Systems We Build for{" "}
                <span className="text-gold-500">Service Businesses</span>
              </h1>
              <p className="mt-6 sm:mt-8 text-sm sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto">
                The examples below demonstrate how we solve common business problems using custom websites, lead systems, automation, and tracking. Every business is different, so every solution is planned and customized based on your goals, requirements, and workflow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges and Industries */}
      <section className="py-12 md:py-16 bg-white border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-lg md:text-xl font-bold text-charcoal-900 mb-6">Common Business Challenges We Solve</h2>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
              {commonChallenges.map((challenge, i) => (
                <span key={i} className="px-4 py-2 bg-cream-50 text-charcoal-700 text-sm font-medium rounded-full border border-border shadow-sm">
                  {challenge}
                </span>
              ))}
            </div>
          </div>
          
          <div className="text-center pt-10 md:pt-16 border-t border-border/50">
            <h2 className="text-lg md:text-xl font-bold text-charcoal-900 mb-6">Industries We Commonly Help</h2>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
              {industriesHelped.map((industry, i) => (
                <span key={i} className="px-4 py-2 bg-white text-charcoal-800 text-sm font-medium rounded-full border border-border shadow-sm">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies / Solution Cards */}
      <section className="py-16 md:py-24 bg-cream-50 border-t border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
          {caseStudies.map((study, studyIndex) => (
            <motion.article
              key={study.title}
              className="bg-card rounded-2xl sm:rounded-3xl border border-border overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: studyIndex * 0.1 }}
              onClick={() => analytics.portfolioClick(study.title)}
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${study.color} p-5 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                      <study.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="text-xs sm:text-sm font-medium text-white/90">
                        {study.industry}
                      </span>
                      <span className="hidden sm:inline text-white/40">•</span>
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-charcoal-900 bg-white/90 px-2 py-0.5 rounded shadow-sm">
                        Solution Example
                      </span>
                    </div>
                  </div>
                  <h2 className="text-lg sm:text-2xl font-bold text-white mt-1">
                    {study.title}
                  </h2>
                </div>
              </div>

              {/* Content - 3 compact paragraphs */}
              <div className="p-5 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
                  {/* Problem */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-custom-400">
                        Problem
                      </h3>
                    </div>
                    <p className="text-sm text-charcoal-600 leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-gold-400" />
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-custom-400">
                        Solution
                      </h3>
                    </div>
                    <p className="text-sm text-charcoal-600 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-custom-400">
                        Outcome
                      </h3>
                    </div>
                    <p className="text-sm text-charcoal-600 leading-relaxed font-medium">
                      {study.outcome}
                    </p>
                  </div>
                </div>

                {/* Technologies and CTA */}
                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-cream-100 text-charcoal-800 text-xs font-medium rounded-full border border-cream-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Button
                    href={study.industry === "Healthcare Clinic" ? "https://clinic-portfolio-demo.vercel.app" : study.industry === "Coaching" ? "https://coach-portfolio-demo.vercel.app" : "#"}
                    variant="outline"
                    size="sm"
                    external
                    className="text-xs shrink-0 w-full sm:w-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      analytics.portfolioClick(`${study.title}_explore`);
                    }}
                  >
                    Explore Solution
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      
      {/* Need Something More Specific Section */}
      <section className="py-16 md:py-24 bg-white border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-900 mb-4">
              Need Something More Specific?
            </h2>
            <p className="text-sm sm:text-lg text-gray-custom-500 mb-8 max-w-2xl mx-auto leading-relaxed">
              These examples represent some of the most common systems we build. Every business is different, so every solution is customized based on your goals, requirements, and budget. We'll first understand your business before recommending the right solution.
            </p>
            <Button
              href="https://cal.com/saikumarlabs/discovery-call?theme=light"
              external
              variant="primary"
              size="lg"
              trackLabel="work_specific_discovery"
            >
              Book a Discovery Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Approach Section - Tightened */}
      <section className="py-16 md:py-24 bg-section-alt border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Approach"
            title="How We Think About Every Project"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Target, label: "Outcome-First", desc: "Start with what the business needs." },
              { icon: Globe, label: "Connected", desc: "Every piece works together." },
              { icon: BarChart3, label: "Measurable", desc: "Clear metrics for every system." },
              { icon: Zap, label: "Sustainable", desc: "Systems that keep working." },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold-400/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold-600" />
                </div>
                <h3 className="font-semibold text-charcoal-900 text-sm mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-gray-custom-500">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-charcoal-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-400/10 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-cream-50 mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Want a System Like This?
            </h2>
            <p className="text-sm sm:text-lg text-gray-custom-400 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
              Let's discuss your business, understand your goals, and recommend the right solution for your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button
                href="https://cal.com/saikumarlabs/discovery-call?theme=light"
                external
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                trackLabel="work_cta"
              >
                Book a Discovery Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-cream-300/30 text-cream-100 hover:bg-cream-100/10 hover:text-cream-50"
                external
                trackLabel="work_whatsapp"
                onClick={() => analytics.whatsappClick("work_cta")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
