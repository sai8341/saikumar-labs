import { notFound } from "next/navigation";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Metadata } from "next";

const servicePages = {
  "digital-foundation": {
    title: "Premium Website Design Services",
    subtitle: "The Digital Foundation",
    description: "Get a custom, high-performance website that builds trust and authority. Our premium website development includes essential technical SEO and Google Business Profile setup.",
    content: "Your website is the face of your business. We don't just hand over a cheap template. We build premium, custom websites optimized for performance, security, and user experience. Every website we build is properly submitted to Google (via Google Search Console) to ensure you rank for local searches.",
    features: [
      "Custom, High-Quality Website Development",
      "Mobile-Responsive & Fast Loading Architecture",
      "Google Business Profile (GBP) Configuration",
      "Meta (Facebook & Instagram) Page Setup",
      "Technical SEO & Google Indexing Setup"
    ],
    keyword: "Premium Website Design Services",
  },
  "lead-engine": {
    title: "Lead Generation Systems",
    subtitle: "The Lead Engine",
    description: "Scale your service business with predictable enquiries. We set up high-converting landing pages, GA4 tracking, and WhatsApp automation services.",
    content: "Don't guess where your traffic is coming from or lose leads because you replied too late. We build end-to-end lead generation systems. By integrating advanced GA4 tracking, Meta Ads, and automated WhatsApp follow-ups, we ensure every visitor is tracked and every lead is engaged instantly.",
    features: [
      "High-Converting Landing Pages",
      "Advanced GA4 & GTM Tracking Integration",
      "Meta Ads Setup for Predictable Lead Flow",
      "Instant WhatsApp Automation Follow-ups",
      "Lead Capture & CRM Integration"
    ],
    keyword: "Lead Generation Systems",
  },
  "brand-authority": {
    title: "AI Automation Services & Branding",
    subtitle: "Brand Authority",
    description: "Establish industry leadership with advanced content strategy, YouTube optimization, and custom AI automation services for your internal workflows.",
    content: "For founders and service providers looking to scale their personal brand. We optimize your YouTube channel for maximum reach, develop advanced content strategies, and implement custom AI workflows that automate your internal operations, saving you hundreds of hours.",
    features: [
      "YouTube Channel SEO & Optimization",
      "Custom AI Workflows for Content & Operations",
      "Internal Business Automation setup",
      "Advanced Personal Branding Strategy",
      "Omnichannel Presence Management"
    ],
    keyword: "AI Automation Services",
  }
};

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicePages[resolvedParams.slug as keyof typeof servicePages];
  if (!service) {
    return { title: "Service Not Found" };
  }
  return {
    title: `${service.title} | SaiKumar Labs`,
    description: service.description,
    keywords: [service.keyword, service.subtitle, "SaiKumar Labs", "Telugu", "Service Businesses"],
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicePages[resolvedParams.slug as keyof typeof servicePages];

  if (!service) {
    notFound();
  }

  // Generate JSON-LD for Technical SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "SaiKumar Labs"
    },
    "description": service.description,
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.title,
      "itemListElement": service.features.map((feature, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        },
        "position": index + 1
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative overflow-hidden bg-bg-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <SectionHeading
            badge={service.subtitle}
            title={service.title}
            subtitle={service.description}
          />
          
          <div className="mt-12 p-8 md:p-12 bg-bg-card border border-bg-border rounded-3xl text-left max-w-3xl mx-auto shadow-2xl">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Why You Need This</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-10">
              {service.content}
            </p>
            
            <h3 className="text-xl font-bold text-text-primary mb-6">What's Included:</h3>
            <ul className="space-y-4 mb-10">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-text-secondary text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="border-t border-bg-border pt-10 text-center">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Stop losing leads. Start building systems.</h3>
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto text-black bg-white hover:bg-gray-200">
                Book a Free Strategy Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
