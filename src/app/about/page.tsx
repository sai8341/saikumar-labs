import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "SaiKumar Labs was built from a simple observation: most service businesses lose leads not because of bad marketing, but because of broken systems. Learn our story.",
  openGraph: {
    title: "About | SaiKumar Labs",
    description:
      "From coding to digital marketing to AI automation — how SaiKumar Labs was built to help service businesses get more leads.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
