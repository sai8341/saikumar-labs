import { notFound } from "next/navigation";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Metadata } from "next";

const servicePages = {
  "digital-foundation": {
    title: "Premium Website Design Services",
    subtitle: "The Digital Foundation",
    description: "Get a custom, high-performance website that builds trust and authority. We handle the tech so you don't have to.",
    content: "Your website is the face of your business. If a potential client visits your site and gets confused or sees a cheap template, they will leave. We don't just hand over a pretty design. We build a solid foundation. We submit your site directly to Google so people can actually find you. We set up advanced tracking so you know how many visitors you're getting and what they are looking at. And the best part? We include 1-Year Free Hosting, Free SSL, and a Free Domain. No headaches for you.",
    features: [
      "Custom, High-Quality Website Development",
      "Mobile-Responsive & Fast Loading Architecture",
      "Google Search Submission & Setup",
      "Advanced Visitor Tracking Setup",
      "1-Year Free Hosting, SSL & Domain"
    ],
    keyword: "Premium Website Design Services",
  },
  "lead-engine": {
    title: "Lead Generation Systems",
    subtitle: "The Lead Engine",
    description: "Scale your service business with predictable enquiries. We set up high-converting landing pages and Meta Ads.",
    content: "Getting traffic to your website is useless if those visitors don't turn into enquiries. The Lead Engine is designed to capture attention and convert it. We build dedicated, high-converting landing pages tailored to your services. We integrate advanced tracking systems so you can see exactly where your leads come from. Then, we set up targeted Meta Ads to bring in a steady flow of potential clients. And just like the Foundation plan, you get 1-Year Free Hosting, SSL, and Domain included.",
    features: [
      "High-Converting Landing Pages",
      "Advanced Lead Tracking Integration",
      "Meta Ads Setup for Predictable Lead Flow",
      "Lead Capture Forms",
      "1-Year Free Hosting, SSL & Domain"
    ],
    keyword: "Lead Generation Systems",
  },
  "brand-authority": {
    title: "Content & Branding Automation",
    subtitle: "Brand Authority",
    description: "Establish industry leadership with advanced YouTube optimization and custom AI workflows.",
    content: "For true industry leaders, founders, and service providers who want to scale their personal brand. We help you dominate platforms like YouTube with proper SEO and content strategies. But more importantly, as you grow, your operations will get messy. We implement custom AI workflows that automate your internal business tasks, saving you and your team hundreds of hours. Focus on delivering value while the system does the heavy lifting. Includes 1-Year Free Hosting, SSL, and Domain.",
    features: [
      "YouTube Channel SEO & Optimization",
      "Custom Internal AI Workflows",
      "Advanced Personal Branding Strategy",
      "Omnichannel Presence Management",
      "1-Year Free Hosting, SSL & Domain"
    ],
    keyword: "AI Automation Services",
  },
  "business-automation": {
    title: "Business Automation Systems",
    subtitle: "Business Automation",
    description: "For businesses tired of manual follow-ups, chaotic operations, and lost leads.",
    content: "You shouldn't be manually texting every lead or trying to remember who to follow up with. Our Business Automation systems take the repetitive tasks off your plate. We build smart WhatsApp automation sequences that engage your leads instantly. We integrate your lead capture forms directly into a CRM so no enquiry slips through the cracks. We set up automated appointment reminders to reduce no-shows. Let the system run your business so you can focus on serving your clients. Includes 1-Year Free Hosting, SSL, and Domain.",
    features: [
      "WhatsApp Automation Follow-ups",
      "CRM & Lead Capture Integration",
      "Automated Appointment Reminders",
      "Custom Business Workflows",
      "1-Year Free Hosting, SSL & Domain"
    ],
    keyword: "Business Automation Services",
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
