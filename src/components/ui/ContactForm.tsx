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

type ContactFormProps = {
  defaultService?: string;
  title?: string;
  subtitle?: string;
  isCompact?: boolean;
};

const serviceOptions = [
  "Website Foundation",
  "Growth Engine",
  "Brand Authority",
  "Business Systems",
  "Custom Web & AI System",
  "Not Sure Yet"
];

export default function ContactForm({
  defaultService = "",
  title = "Tell Us About Your Business",
  subtitle = "Fill out the form below and we'll get back to you directly on WhatsApp.",
  isCompact = false
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    business: "",
    whatsapp: "",
    email: "",
    service: defaultService || "",
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
        className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg text-center space-y-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-xs">
          <CheckCircle className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
            Enquiry Received! 🚀
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-slate-900">{formData.name}</strong>. We have received your project requirements for <strong className="text-indigo-600">{formData.service || 'SaiKumar Labs'}</strong> and will reply directly to your WhatsApp (<span className="font-mono text-slate-800">{formData.whatsapp}</span>) within 2 to 4 business hours.
          </p>
        </div>
        <div className="pt-4">
          <a
            href={`https://wa.me/919390123367?text=${encodeURIComponent(`Hi Sai Kumar, I just submitted an enquiry for ${formData.business || formData.name} (${formData.service}). Looking forward to discussing next steps.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-sm"
          >
            <span>Open Fast-Track WhatsApp Chat →</span>
          </a>
        </div>
      </motion.div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0067F4]/20 focus:border-[#0067F4] font-medium text-sm transition-all duration-200";

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-lg relative text-slate-900"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6 border-b border-slate-100 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0067F4] mb-1.5">
          <span className="w-2 h-2 rounded-full bg-[#0067F4]" />
          <span>Option 2: Direct Written Enquiry</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Your Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              placeholder="e.g. Dr. Rajesh Varma"
              value={formData.name}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          <div>
            <label
              htmlFor="contact-whatsapp"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              WhatsApp Phone Number <span className="text-rose-500">*</span>
            </label>
            <input
              id="contact-whatsapp"
              type="tel"
              name="whatsapp"
              required
              placeholder="+91 98765 43210"
              value={formData.whatsapp}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="contact-business"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Business / Practice Name
            </label>
            <input
              id="contact-business"
              type="text"
              name="business"
              placeholder="e.g. Apex Dental Studio"
              value={formData.business}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="doctor@apexdental.in"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-service"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Service Selected
          </label>
          <div className="relative">
            <select
              id="contact-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`${inputClasses} appearance-none cursor-pointer pr-10`}
            >
              <option value="" disabled hidden>Select a service package...</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt} className="text-slate-900">{opt}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-slate-400">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-help"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            What are your core goals or bottlenecks? <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="contact-help"
            name="help"
            rows={3}
            required
            placeholder="e.g. We need a modern, fast clinic website with direct WhatsApp appointment booking and Google Maps ranking..."
            value={formData.help}
            onChange={handleChange}
            className={`${inputClasses} resize-none`}
          />
        </div>

        <div className="pt-2 space-y-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 rounded-xl bg-[#0067F4] hover:bg-blue-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            id="contact-form-submit"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending Enquiry...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Send Project Enquiry (Instant Reply)
              </span>
            )}
          </button>
          
          <div className="flex items-center justify-center gap-2 text-center text-xs text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Zero spam guarantee. Directly routed to Sai Kumar on WhatsApp & Ops.</span>
          </div>
        </div>
      </div>
    </motion.form>
  );
}
