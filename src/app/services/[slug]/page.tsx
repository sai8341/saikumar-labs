import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import { ArrowRight, CheckCircle, Sparkles, Zap, ShieldCheck } from "lucide-react";
import { Metadata } from "next";

const servicePages = {
  "digital-foundation": {
    title: "Website Foundation",
    subtitle: "Website Foundation",
    description: "Get a custom-coded, high-performance website that builds trust and authority. We handle the tech so you don't have to.",
    content: "Your website is the face of your business. If a potential client visits your site and gets confused or sees a cheap template, they will leave. We don't just hand over a pretty design. We build a solid foundation. We submit your site directly to Google so people can actually find you. We set up advanced tracking so you know how many visitors you're getting and what they are looking at.",
    features: [
      "Custom, High-Quality Website Development",
      "Mobile-Responsive & Fast Loading Architecture",
      "Google Search Submission & Setup",
      "Advanced Visitor Tracking Setup",
      "1-Year Free Hosting, SSL & Domain",
      "Dedicated Technical Support"
    ],
    keyword: "Premium Website Design Services",
  },
  "lead-engine": {
    title: "Growth Engine",
    subtitle: "Growth Engine",
    description: "Scale your service business with predictable enquiries. We set up high-converting landing pages and Meta Ads.",
    content: "Getting traffic to your website is useless if those visitors don't turn into enquiries. The Growth Engine is designed to capture attention and convert it. We build dedicated, high-converting landing pages tailored to your services. We integrate advanced tracking systems so you can see exactly where your leads come from. Then, we set up targeted Meta Ads to bring in a steady flow of potential clients.",
    features: [
      "High-Converting Landing Pages",
      "Advanced Lead Tracking Integration",
      "Meta Ads Setup for Predictable Lead Flow",
      "Lead Capture Forms & Funnels",
      "1-Year Free Hosting, SSL & Domain",
      "Ongoing Optimization Strategy"
    ],
    keyword: "Lead Generation Systems",
  },
  "brand-authority": {
    title: "Brand Authority",
    subtitle: "Brand Authority",
    description: "Establish industry leadership with advanced YouTube optimization and custom AI workflows.",
    content: "For true industry leaders, founders, and service providers who want to scale their personal brand. We help you dominate platforms like YouTube with proper SEO and content strategies. But more importantly, as you grow, your operations will get messy. We implement custom AI workflows that automate your internal business tasks, saving you and your team hundreds of hours. Focus on delivering value while the system does the heavy lifting.",
    features: [
      "YouTube Channel SEO & Optimization",
      "Custom Internal AI Workflows",
      "Advanced Personal Branding Strategy",
      "Omnichannel Presence Management",
      "1-Year Free Hosting, SSL & Domain",
      "Content Repurposing Systems"
    ],
    keyword: "AI Automation Services",
  },
  "business-automation": {
    title: "Business Systems",
    subtitle: "Business Systems",
    description: "For businesses tired of manual follow-ups, chaotic operations, and lost leads.",
    content: "You shouldn't be manually texting every lead or trying to remember who to follow up with. Our Business Systems take the repetitive tasks off your plate. We build smart WhatsApp automation sequences that engage your leads instantly. We integrate your lead capture forms directly into a CRM so no enquiry slips through the cracks. We set up automated appointment reminders to reduce no-shows. Let the system run your business so you can focus on serving your clients.",
    features: [
      "WhatsApp Automation Follow-ups",
      "CRM & Lead Capture Integration",
      "Automated Appointment Reminders",
      "Custom Business Workflows",
      "1-Year Free Hosting, SSL & Domain",
      "Lead Routing & Notifications"
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
      
      {/* 1. IMMERSIVE HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-background overflow-hidden border-b border-bg-border">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-accent-primary bg-accent-primary/10 rounded-full border border-accent-primary/20 tracking-wide uppercase">
            {service.subtitle}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary mb-8 leading-tight">
            {service.title.split(' ').map((word, i, arr) => 
              i === arr.length - 1 ? <span key={i} className="text-accent-primary">{word}</span> : <span key={i}>{word} </span>
            )}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {service.description}
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              href="https://cal.com/saikumarlabs/discovery-call?theme=light" 
              external
              variant="primary" 
              size="lg" 
              className="w-full sm:w-auto shadow-[0_0_30px_rgba(0,103,244,0.3)] hover:shadow-[0_0_40px_rgba(0,103,244,0.5)] transition-all font-semibold px-8"
            >
              Book a Discovery Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-6 text-text-muted text-sm font-medium">
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Free Consultation</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> No Obligations</div>
          </div>
        </div>
      </section>
      
      {/* 2. THE PROBLEM WE SOLVE */}
      <section className="py-20 md:py-32 bg-bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-[2rem] p-8 md:p-12 border border-bg-border relative overflow-hidden shadow-xl shadow-black/5">
            <div className="absolute top-0 left-0 w-2 h-full bg-accent-primary" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-accent-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary">Why You Need This</h2>
            </div>
            
            <p className="text-[17px] md:text-lg text-text-secondary leading-relaxed md:leading-loose">
              {service.content}
            </p>
          </div>
        </div>
      </section>
      
      {/* 3. DELIVERABLES GRID (WHAT YOU GET) */}
      <section className="py-20 md:py-32 bg-background border-t border-bg-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">What's Included</h2>
            <p className="text-lg text-text-secondary">Everything you need, built completely done-for-you.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {service.features.map((feature, idx) => (
              <div key={idx} className="group flex items-start gap-5 p-8 rounded-3xl bg-bg-card border border-bg-border hover:border-accent-primary/40 hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-2 leading-snug">{feature}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Professionally implemented and optimized for your specific business requirements.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 4. BOTTOM CTA */}
      <section className="py-24 md:py-32 bg-text-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-accent-primary/5 pointer-events-none" />
        <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-accent-primary/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-white mb-8">
            <Sparkles className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
            Ready to upgrade your business?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Stop losing potential clients to your competitors. Let's build a system that works for you 24/7.
          </p>
          
          <Button 
            href="https://cal.com/saikumarlabs/discovery-call?theme=light" 
            external
            variant="primary" 
            size="lg" 
            className="w-full sm:w-auto text-text-primary bg-white hover:bg-gray-200 border-none px-10 py-4 shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all font-bold text-lg"
          >
            Book Your Free Strategy Call
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
        </div>
      </section>
    </>
  );
}
