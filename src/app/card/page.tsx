import { Metadata } from "next";
import { DigitalCardClient } from "./DigitalCardClient";

export const metadata: Metadata = {
  title: "Sai Kumar — Founder & Systems Architect | SaiKumar Labs",
  description:
    "Connect with Sai Kumar, Founder at SaiKumar Labs. AI Automations, High-Speed Next.js Websites, and Custom Software for service businesses.",
  openGraph: {
    title: "Sai Kumar — Founder & Systems Architect",
    description: "Connect with Sai Kumar at SaiKumar Labs via WhatsApp or Save Contact.",
    url: "https://saikumarlabs.com/card",
    images: [{ url: "/logo.jpg", width: 400, height: 400, alt: "Sai Kumar" }],
  },
};

export default function CardPage() {
  return <DigitalCardClient />;
}
