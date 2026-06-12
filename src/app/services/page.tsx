import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Lead systems, online presence setup, tracking & analytics, lead capture, and follow-up automation for service businesses. See how SaiKumar Labs helps you get more enquiries.",
  openGraph: {
    title: "Services | SaiKumar Labs",
    description:
      "Lead systems, online presence setup, tracking & analytics, lead capture, and follow-up automation for service businesses.",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
