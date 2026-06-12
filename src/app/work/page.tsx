import type { Metadata } from "next";
import WorkContent from "./WorkContent";

export const metadata: Metadata = {
  title: "Work",
  description:
    "See real examples of lead systems we've designed for coaches, clinics, and salons. Each case study shows the problem, solution, and outcome.",
  openGraph: {
    title: "Our Work | SaiKumar Labs",
    description:
      "Real examples of lead systems designed for service businesses — from problem to outcome.",
  },
};

export default function WorkPage() {
  return <WorkContent />;
}
