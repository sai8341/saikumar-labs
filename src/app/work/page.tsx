import type { Metadata } from "next";
import WorkContent from "./WorkContent";

export const metadata: Metadata = {
  title: "Case Studies — Lead Systems for Coaches, Clinics & Salons",
  description:
    "See how we built lead capture systems, booking funnels, and WhatsApp follow-up workflows for coaches, clinics, and salons in India. Real problems, real solutions, real outcomes.",
  openGraph: {
    title: "Case Studies — Lead Systems That Work | SaiKumar Labs",
    description:
      "Lead system case studies for coaches, clinics, and salons — from problem to outcome.",
  },
};

export default function WorkPage() {
  return <WorkContent />;
}
