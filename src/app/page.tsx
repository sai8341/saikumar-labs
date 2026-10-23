import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { AutoScrollRamp } from "@/components/ui/AutoScrollRamp";
import { PainVsSolution } from "@/components/home/PainVsSolution";
import { CoreServicesGrid } from "@/components/home/CoreServicesGrid";
import { LeadLeakCalculator } from "@/components/home/LeadLeakCalculator";
import { SpeedToLeadSimulator } from "@/components/home/SpeedToLeadSimulator";
import { ProcessSection } from "@/components/home/ProcessSection";
import { AgencyComparison } from "@/components/home/AgencyComparison";
import { FounderSection } from "@/components/home/FounderSection";
import { HomeFAQSection } from "@/components/home/HomeFAQSection";
import { HomeCTASection } from "@/components/home/HomeCTASection";

export const metadata: Metadata = {
  title: "SaiKumar Labs — AI Automations, High-Speed Websites & Custom Software",
  description:
    "We engineer intelligent AI agents, official WhatsApp Cloud API auto-responders, sub-second Next.js web applications, and agentic Meta Ads infrastructure for service businesses.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AutoScrollRamp />
      <PainVsSolution />
      <CoreServicesGrid />
      <LeadLeakCalculator />
      <SpeedToLeadSimulator />
      <ProcessSection />
      <AgencyComparison />
      <FounderSection />
      <HomeFAQSection />
      <HomeCTASection />
    </>
  );
}
