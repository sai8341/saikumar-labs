"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  Phone,
  Clock,
  ArrowUpRight,
  Shield,
} from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";
import { siteConfig } from "@/lib/config";
import { analytics } from "@/lib/analytics";

export default function ContactContent() {
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
                Contact Us
              </span>
              <h1>
                Let&apos;s Fix Your{" "}
                <span className="text-gold-500">Lead Flow</span>
              </h1>
              <p className="mt-6 text-xl text-charcoal-600 leading-relaxed">
                Book a free review, ask a question, or just say hello. We
                respond to every message — usually within a few hours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Side - Contact Info */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* WhatsApp - Primary */}
              <div>
                <h2 className="text-2xl font-semibold text-charcoal-900 mb-2">
                  Fastest Way to Reach Us
                </h2>
                <p className="text-gray-custom-500 mb-6">
                  WhatsApp is the quickest way to get a response. Tap below and
                  we&apos;ll reply personally.
                </p>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => analytics.whatsappClick("contact_page")}
                  className="inline-flex items-center gap-3 px-6 py-4 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors shadow-md hover:shadow-lg"
                  id="contact-whatsapp"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp SaiKumar Labs
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Other contact methods */}
              <div className="space-y-5">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-custom-400">
                  Other Ways to Reach Us
                </h3>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-gold-400/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cream-200 flex items-center justify-center group-hover:bg-gold-400/20 transition-colors">
                    <Mail className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-custom-400 block">
                      Email
                    </span>
                    <span className="text-sm font-medium text-charcoal-900">
                      {siteConfig.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  onClick={() => analytics.phoneClick()}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-gold-400/30 transition-colors group"
                  id="contact-phone"
                >
                  <div className="w-10 h-10 rounded-lg bg-cream-200 flex items-center justify-center group-hover:bg-gold-400/20 transition-colors">
                    <Phone className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-custom-400 block">
                      Phone
                    </span>
                    <span className="text-sm font-medium text-charcoal-900">
                      {siteConfig.phone}
                    </span>
                  </div>
                </a>
              </div>

              {/* Trust signals */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-500 mt-0.5" />
                  <div>
                    <span className="text-sm font-medium text-charcoal-900 block">
                      Quick Response
                    </span>
                    <span className="text-xs text-gray-custom-500">
                      We respond within 24 hours — usually much sooner.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-gold-500 mt-0.5" />
                  <div>
                    <span className="text-sm font-medium text-charcoal-900 block">
                      No Pressure, No Pitch
                    </span>
                    <span className="text-xs text-gray-custom-500">
                      Just honest advice about your lead flow.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
