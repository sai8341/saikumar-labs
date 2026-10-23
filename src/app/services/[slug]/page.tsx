import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProblemOutcomes } from "@/components/services/ServiceProblemOutcomes";
import { ServiceFeaturesProcess } from "@/components/services/ServiceFeaturesProcess";
import { ServiceFaqSection } from "@/components/services/ServiceFaqSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found — SaiKumar Labs",
    };
  }

  return {
    title: `${service.title} — SaiKumar Labs`,
    description: service.description,
    keywords: [service.keyword, "SaiKumar Labs", "AI Automation India", "Next.js Development"],
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <article>
      <ServiceHero service={service} />
      <ServiceProblemOutcomes service={service} />
      <ServiceFeaturesProcess service={service} />
      <ServiceFaqSection service={service} />
    </article>
  );
}
