import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About — From Code to AI-Powered Lead Systems",
  description:
    "SaiKumar Labs combines coding, digital marketing, and AI automation to build lead systems for service businesses in India. No fluff — just honest, practical systems that work.",
  openGraph: {
    title: "About SaiKumar Labs — Code + Marketing + AI = Lead Systems",
    description:
      "How SaiKumar Labs was built to help service businesses in Hyderabad, Bangalore, and India get more leads.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
