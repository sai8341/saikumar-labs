import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SaiKumar Labs. Book a free lead flow review for your service business. WhatsApp, email, or use our contact form.",
  openGraph: {
    title: "Contact | SaiKumar Labs",
    description:
      "Book a free lead flow review. WhatsApp, email, or use our contact form.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
