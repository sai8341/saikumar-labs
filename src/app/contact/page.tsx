import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact — Free Lead Flow Review for Your Business",
  description:
    "Book a free lead flow review for your service business. WhatsApp, email, or contact form — we respond within 24 hours. Serving Hyderabad, Bangalore & all of India.",
  openGraph: {
    title: "Contact SaiKumar Labs — Free Lead Flow Review",
    description:
      "Book a free lead flow review. WhatsApp, email, or use our contact form.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
