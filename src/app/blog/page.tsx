import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog — Lead Generation Tips for Service Businesses",
  description:
    "Practical tips on lead generation, business automation, WhatsApp follow-up, and digital marketing for coaches, clinics, salons, and service businesses in India.",
  openGraph: {
    title: "Blog | SaiKumar Labs",
    description:
      "Lead generation and business automation tips for service businesses in India.",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
