"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, ChevronDown, ShieldCheck } from "lucide-react";
import Button from "./Button";
import { analytics } from "@/lib/analytics";

type FormData = {
  name: string;
  business: string;
  whatsapp: string;
  email: string;
  service: string;
  help: string;
};

const serviceOptions = [
  "Custom Website",
  "Landing Page",
  "Technical SEO",
  "AI Automation",
  "Website + Lead System",
  "Appointment Booking",
  "Not Sure Yet"
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    business: "",
    whatsapp: "",
    email: "",
    service: "",
    help: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const opsApiUrl = process.env.NEXT_PUBLIC_OPS_API_URL || 'https://ops.sydxai.com';
      await fetch(`${opsApiUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          businessName: formData.business,
          phone: formData.whatsapp,
          email: formData.email,
          contact: formData.whatsapp,
          service: formData.service || 'Custom Website & Lead System',
          help: formData.help,
          source: 'website_contact_form'
        })
      });
    } catch (err) {
      console.warn('Ops API dispatch failed (offline fallback):', err);
    } finally {
      analytics.formSubmit("contact_form");
      setIsSubmitted(true);
      setIsSubmitting(false);
    }
  };


  if (isSubmitted) {
    return (
      <motion.div
        className="bg-card rounded-2xl p-10 border border-border text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-semibold text-charcoal-900 mb-3">
          Thank you!
        </h3>
        <p className="text-gray-custom-500 max-w-md mx-auto">
          We&apos;ve received your enquiry. We will review your requirements and reply directly to your WhatsApp shortly.
        </p>
      </motion.div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3.5 rounded-xl border border-border bg-cream-50 text-charcoal-900 placeholder:text-gray-custom-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all duration-200";

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-sm relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-charcoal-900 mb-2">Tell Us About Your Business</h2>
        <p className="text-sm text-gray-custom-500">Fill out the form below and we&apos;ll get back to you directly on WhatsApp.</p>
      </div>

      <div className="space-y-5">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-charcoal-800 mb-1.5"
          >
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            placeholder="e.g. Priya Sharma"
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="contact-business"
            className="block text-sm font-medium text-charcoal-800 mb-1.5"
          >
            Business Name <span className="text-gray-custom-400 font-normal">(Optional)</span>
          </label>
          <input
            id="contact-business"
            type="text"
            name="business"
            placeholder="e.g. Glow Skin Clinic"
            value={formData.business}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="contact-whatsapp"
            className="block text-sm font-medium text-charcoal-800 mb-1.5"
          >
            WhatsApp Number <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-whatsapp"
            type="tel"
            name="whatsapp"
            required
            placeholder="e.g. +91 98765 43210"
            value={formData.whatsapp}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-charcoal-800 mb-1.5"
          >
            Email Address <span className="text-gray-custom-400 font-normal">(Optional)</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="e.g. priya@example.com"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>


        <div>
          <label
            htmlFor="contact-service"
            className="block text-sm font-medium text-charcoal-800 mb-1.5"
          >
            Service Interested In <span className="text-gray-custom-400 font-normal">(Optional)</span>
          </label>
          <div className="relative">
            <select
              id="contact-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`${inputClasses} appearance-none cursor-pointer ${!formData.service ? 'text-gray-custom-300' : 'text-charcoal-900'}`}
            >
              <option value="" disabled hidden>Select a service...</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt} className="text-charcoal-900">{opt}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-custom-400">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-help"
            className="block text-sm font-medium text-charcoal-800 mb-1.5"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="contact-help"
            name="help"
            rows={4}
            required
            placeholder="Tell us about your business and what you'd like to improve..."
            value={formData.help}
            onChange={handleChange}
            className={`${inputClasses} resize-none`}
          />
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            id="contact-form-submit"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-charcoal-900/30 border-t-charcoal-900 rounded-full animate-spin" />
                Sending...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Send My Enquiry
              </span>
            )}
          </Button>
          
          <div className="mt-5 flex items-start justify-center gap-2 text-center text-xs text-gray-custom-400">
            <ShieldCheck className="w-4 h-4 shrink-0 text-gold-400/70" />
            <p>
              Your information will only be used to respond to your enquiry. We never share your details.
            </p>
          </div>
        </div>
      </div>
    </motion.form>
  );
}
