import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Lead Generation & Business Automation Services India",
  description:
    "Website development, lead capture funnels, Google Business Profile setup, Meta ads, WhatsApp follow-up automation & AI solutions for coaches, clinics, and salons in Hyderabad, Bangalore & India.",
  openGraph: {
    title: "Lead Generation & Business Automation Services | SaiKumar Labs",
    description:
      "Website development, lead funnels, tracking, and automation for service businesses across India.",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
