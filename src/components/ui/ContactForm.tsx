"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import Button from "./Button";
import { analytics } from "@/lib/analytics";

type FormData = {
  name: string;
  business: string;
  contact: string;
  help: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    business: "",
    contact: "",
    help: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission (replace with actual API endpoint later)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    analytics.formSubmit("contact_form");
    setIsSubmitted(true);
    setIsSubmitting(false);
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
          We&apos;ve received your message. SaiKumar Labs will get back to you
          within 24 hours — usually much sooner.
        </p>
      </motion.div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3.5 rounded-xl border border-border bg-cream-50 text-charcoal-900 placeholder:text-gray-custom-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all duration-200";

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-5">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-charcoal-800 mb-1.5"
          >
            Your Name
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
            Business Name
          </label>
          <input
            id="contact-business"
            type="text"
            name="business"
            required
            placeholder="e.g. Glow Skin Clinic"
            value={formData.business}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="contact-contact"
            className="block text-sm font-medium text-charcoal-800 mb-1.5"
          >
            Phone or Email
          </label>
          <input
            id="contact-contact"
            type="text"
            name="contact"
            required
            placeholder="e.g. +91 98765 43210 or hello@example.com"
            value={formData.contact}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="contact-help"
            className="block text-sm font-medium text-charcoal-800 mb-1.5"
          >
            What do you need help with?
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
              Send Message
            </span>
          )}
        </Button>
      </div>
    </motion.form>
  );
}
