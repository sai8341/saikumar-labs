import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, CheckCircle, Sparkles, Zap, ShieldCheck, Target, TrendingUp, Layers, HelpCircle, Check, ArrowUpRight, Calendar, MessageSquare } from "lucide-react";
import { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";

const servicePages = {
  "digital-foundation": {
    // 1. Hero
    title: "Website Foundation",
    subtitle: "Website Foundation",
    description: "Get a custom-coded, high-performance website that builds trust and authority. We handle the tech so you don't have to.",
    
    // 2. The Problem We Solve
    problemDescription: "Your website is the face of your business. If a potential client visits your site and gets confused or sees a cheap template, they will leave. You need more than a pretty design. You need a solid foundation that Google ranks, clients trust, and competitors envy. We build websites that turn visitors into confident buyers, complete with the analytics required to measure your success.",
    
    // 3. Perfect For
    perfectFor: [
      "Clinics & Healthcare Practices",
      "Local Service Businesses",
      "Consultants & Coaches",
      "B2B Agencies"
    ],

    // 4. Expected Outcomes
    outcomes: [
      "Professional online presence",
      "Better Google visibility",
      "Faster website loading speeds",
      "Higher customer trust",
      "Proper analytics tracking",
      "Scalable digital foundation"
    ],

    // 5. What's Included
    features: [
      "Discovery Session",
      "Business Requirement Analysis",
      "Custom UI Design",
      "Next.js Development",
      "Mobile Responsive Architecture",
      "Performance Optimization",
      "Technical SEO",
      "On-Page SEO",
      "JSON-LD Structured Data",
      "Google Search Console Verification",
      "Sitemap Submission",
      "Google Analytics 4 Setup",
      "Google Tag Manager Configuration",
      "SSL Configuration",
      "Deployment & Hosting Setup",
      "QA Testing"
    ],

    // 6. Our Process
    process: [
      { step: "Discovery", desc: "Understanding your business goals, target audience, and specific requirements." },
      { step: "Planning", desc: "Creating the technical architecture, site map, and content strategy." },
      { step: "Design", desc: "Crafting a premium, high-conversion visual identity and user interface." },
      { step: "Development", desc: "Writing clean, custom Next.js code for maximum performance." },
      { step: "Launch", desc: "Deploying the site, setting up analytics, and submitting to Google." },
      { step: "Support", desc: "Providing documentation, training, and ongoing technical guidance." }
    ],

    // 8. Technology Stack
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GA4", "GTM", "JSON-LD", "Cloud Hosting"],

    // 9. FAQs
    faqs: [
      { q: "How long does it take?", a: "Most website foundations are completed within 2 to 4 weeks, depending on the complexity of your requirements." },
      { q: "Will I own the website?", a: "Yes. Once the project is complete and paid in full, you own 100% of the code and assets." },
      { q: "Can you redesign my current website?", a: "Absolutely. We can take your existing content and upgrade the design, performance, and architecture." },
      { q: "Is hosting included?", a: "We typically include the first year of premium cloud hosting, SSL, and domain management in our packages." },
      { q: "Can I edit content later?", a: "Yes, if required, we can integrate a modern Headless CMS so you can easily update text and images." },
      { q: "Will SEO be configured?", a: "Yes. Technical SEO, on-page basics, and JSON-LD structured data are built-in from day one." },
      { q: "Do you provide support?", a: "We provide comprehensive handover documentation and offer optional ongoing maintenance packages." },
      { q: "Can you connect my domain?", a: "Yes, we handle all the DNS configuration and domain linking for you." }
    ],

    // 10. Optional Add-ons
    addons: [
      "Headless CMS Integration",
      "Advanced SEO Retainer",
      "Appointment Booking Setup"
    ],

    keyword: "Premium Website Design Services"
  },
  "lead-engine": {
    // 1. Hero
    title: "Growth Engine",
    subtitle: "Growth Engine",
    description: "Scale your service business with predictable enquiries. We set up high-converting landing pages and Meta Ads.",
    
    // 2. The Problem We Solve
    problemDescription: "Getting traffic is useless if visitors don't turn into enquiries. Most businesses waste money on ads sending traffic to a confusing homepage. The Growth Engine captures attention and converts it. We build dedicated, high-converting landing pages tailored to your specific offers, integrate advanced tracking, and set up targeted Meta Ads to bring in a steady, predictable flow of qualified potential clients.",
    
    // 3. Perfect For
    perfectFor: [
      "Businesses getting traffic but no leads",
      "Service Providers ready to scale",
      "Consultants & Coaches",
      "B2B Agencies"
    ],

    // 4. Expected Outcomes
    outcomes: [
      "More qualified enquiries",
      "Better conversion rates",
      "Predictable lead flow",
      "Easier lead tracking",
      "Lower cost per acquisition",
      "Better follow-up systems"
    ],

    // 5. What's Included
    features: [
      "Offer & Audience Strategy",
      "High-Converting Landing Page Design",
      "Direct Response Copywriting",
      "Lead Capture Form Optimization",
      "Thank You Page Strategy",
      "Meta Ads Campaign Setup",
      "Ad Creative Direction",
      "Audience Targeting & Retargeting",
      "Facebook Pixel Integration",
      "Conversion API Setup",
      "UTM Tracking Implementation",
      "Google Analytics Lead Goals",
      "Lead Notification Routing",
      "Campaign Launch",
      "Initial Optimization Phase"
    ],

    // 6. Our Process
    process: [
      { step: "Discovery", desc: "Analyzing your current offer, target market, and lead generation goals." },
      { step: "Strategy", desc: "Designing the ad funnel and mapping out the user journey." },
      { step: "Landing Page", desc: "Designing and developing the high-conversion standalone page." },
      { step: "Tracking Setup", desc: "Configuring the Pixel, Conversions API, and GA4 goals." },
      { step: "Launch", desc: "Setting the Meta Ads campaigns live to your target audience." },
      { step: "Optimization", desc: "Monitoring initial data to tweak ad performance and page conversions." }
    ],

    // 8. Technology Stack
    techStack: ["Next.js", "Meta Ads Manager", "Conversions API", "GTM", "GA4", "UTM Tracking"],

    // 9. FAQs
    faqs: [
      { q: "Do I need an existing audience?", a: "No, we can target cold audiences effectively using Meta's advanced algorithms." },
      { q: "Is ad spend included in your fee?", a: "No, the ad spend is paid directly to Meta (Facebook/Instagram). Our fee covers setup and management." },
      { q: "Why use a landing page instead of my website?", a: "Landing pages remove distractions. They have one specific goal (capturing a lead), which significantly increases conversion rates." },
      { q: "How long until I see leads?", a: "Once campaigns launch, you can often see leads within the first 24 to 48 hours." },
      { q: "Can I use this for multiple services?", a: "We recommend focusing the Growth Engine on your highest-margin or most popular service first." },
      { q: "Do you write the ad copy?", a: "Yes, we provide direct response copywriting for the landing page and ad creatives." }
    ],

    // 10. Optional Add-ons
    addons: [
      "Automated Email Nurture",
      "CRM Integration",
      "Lead Magnet Creation"
    ],

    keyword: "Lead Generation Systems"
  },
  "brand-authority": {
    // 1. Hero
    title: "Brand Authority",
    subtitle: "Brand Authority",
    description: "Establish industry leadership with advanced YouTube optimization and a dominant digital presence.",
    
    // 2. The Problem We Solve
    problemDescription: "In a crowded market, being good isn't enough; you have to be known. When potential high-ticket clients search your name, they need to see an industry authority, not a ghost. We help founders and experts dominate their niche by optimizing their personal brand, primarily leveraging YouTube search visibility, content strategy, and a cohesive omnichannel digital footprint.",
    
    // 3. Perfect For
    perfectFor: [
      "Founders & CEOs",
      "Industry Experts",
      "Creators & Authors",
      "Personal Brands"
    ],

    // 4. Expected Outcomes
    outcomes: [
      "Higher perceived value",
      "Easier high-ticket sales",
      "Dominate brand search terms",
      "Evergreen content traffic",
      "Stronger client trust",
      "Clear brand positioning"
    ],

    // 5. What's Included
    features: [
      "Personal Brand Audit",
      "Brand Positioning Strategy",
      "YouTube Channel Audit",
      "YouTube SEO Optimization",
      "Video Title & Thumbnail Strategy",
      "Content Pillar Development",
      "Competitor Authority Analysis",
      "Social Profile Standardization",
      "Google Knowledge Panel Strategy",
      "Media Kit Creation",
      "Brand Asset Organization"
    ],

    // 6. Our Process
    process: [
      { step: "Audit", desc: "Reviewing your current digital footprint and identifying authority gaps." },
      { step: "Positioning", desc: "Defining your unique angle, messaging, and core audience." },
      { step: "Strategy", desc: "Developing a sustainable content and distribution plan." },
      { step: "Optimization", desc: "Overhauling your YouTube channel and social profiles for search." },
      { step: "Execution", desc: "Implementing the brand assets and SEO adjustments." },
      { step: "Review", desc: "Analyzing search visibility improvements and content performance." }
    ],

    // 8. Technology Stack
    techStack: ["YouTube Studio", "VidIQ", "TubeBuddy", "Figma", "Google Search", "SEO Tools"],

    // 9. FAQs
    faqs: [
      { q: "Do you edit the videos?", a: "This service focuses on strategy, SEO, and positioning, not video editing." },
      { q: "Why focus on YouTube?", a: "YouTube is the world's second-largest search engine. Evergreen videos build deep trust and authority over time." },
      { q: "How long does it take to build authority?", a: "While we can optimize profiles immediately, building true authority and search presence takes 3 to 6 months of consistent effort." },
      { q: "Can you manage my social media?", a: "We provide the overarching strategy and optimization. Daily social media management is a separate operational task." },
      { q: "Is this only for individuals?", a: "It's primarily for founders and personal brands, but the same principles apply to corporate brand channels." },
      { q: "Will this get me more clients?", a: "Yes. Brand authority removes friction from the sales process. People buy faster when they already trust your expertise." }
    ],

    // 10. Optional Add-ons
    addons: [
      "Podcast Setup Strategy",
      "Newsletter Launch",
      "Personal Website Build"
    ],

    keyword: "Personal Branding Services"
  },
  "business-automation": {
    // 1. Hero
    title: "Business Systems",
    subtitle: "Business Systems",
    description: "For businesses tired of manual follow-ups, chaotic operations, and lost leads.",
    
    // 2. The Problem We Solve
    problemDescription: "You shouldn't be manually texting every lead or trying to remember who to follow up with. When operations rely entirely on human memory, mistakes happen, leads are lost, and growth bottlenecks. Our Business Systems take repetitive tasks off your plate. We build smart automations that route leads, update CRMs, and send instant WhatsApp messages so your team can focus on closing deals, not copying and pasting data.",
    
    // 3. Perfect For
    perfectFor: [
      "Growing Businesses",
      "Teams lacking coordination",
      "Businesses using manual processes",
      "High-volume service providers"
    ],

    // 4. Expected Outcomes
    outcomes: [
      "Zero manual data entry",
      "Instant lead response times",
      "Better lead management",
      "Fewer missed appointments",
      "More time for high-value work",
      "Scalable operations"
    ],

    // 5. What's Included
    features: [
      "Operations Audit",
      "Process Mapping",
      "CRM Selection & Setup",
      "Lead Capture Integration",
      "Automated Lead Routing",
      "WhatsApp Business API Setup",
      "Instant WhatsApp Auto-replies",
      "Automated Appointment Reminders",
      "Internal Team Notifications",
      "Email Follow-up Sequences",
      "n8n / Zapier Architecture",
      "Error Handling & Logging",
      "System Testing",
      "Team Handover & Training"
    ],

    // 6. Our Process
    process: [
      { step: "Discovery", desc: "Identifying bottlenecks, repetitive tasks, and operational friction." },
      { step: "Mapping", desc: "Designing the ideal automated workflow and data journey." },
      { step: "Build", desc: "Configuring the CRM and building the automation sequences." },
      { step: "Testing", desc: "Running rigorous sandbox tests to ensure data flows correctly." },
      { step: "Deployment", desc: "Pushing the automations live to your production environment." },
      { step: "Support", desc: "Providing team training and monitoring the system for stability." }
    ],

    // 8. Technology Stack
    techStack: ["n8n", "Zapier", "Make", "WhatsApp API", "HubSpot / GoHighLevel", "Webhooks"],

    // 9. FAQs
    faqs: [
      { q: "What CRM do you recommend?", a: "It depends on your business. We often work with HubSpot, GoHighLevel, or specialized industry CRMs." },
      { q: "Can you automate WhatsApp from my personal number?", a: "No, we use the official WhatsApp Business API to ensure stability and compliance." },
      { q: "Will this replace my staff?", a: "No. Automations remove the robotic tasks from your staff's workload, empowering them to do more meaningful, revenue-generating work." },
      { q: "What if the automation breaks?", a: "We build robust error handling and notifications into our systems. If an API fails, you will be notified immediately." },
      { q: "Do I have to pay monthly for the software?", a: "Yes, you will need subscriptions for the CRM and automation platforms (like Zapier or n8n), which are billed directly by those companies." },
      { q: "Is this secure?", a: "Yes, we use official APIs, webhooks, and secure authentication methods to protect your business data." }
    ],

    // 10. Optional Add-ons
    addons: [
      "AI Chatbot Integration",
      "Custom Dashboard Creation",
      "Advanced Team Training"
    ],

    keyword: "Business Automation Services"
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
  const currentSlug = resolvedParams.slug;
  const service = servicePages[currentSlug as keyof typeof servicePages];

  if (!service) {
    notFound();
  }

  const otherServices = Object.entries(servicePages)
    .filter(([slug]) => slug !== currentSlug)
    .map(([slug, data]) => ({ slug, ...data }));

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
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-background overflow-hidden border-b border-bg-border">
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
              Book Discovery Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-text-muted text-sm font-medium">
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent-primary" /> 30 Minute Call</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent-primary" /> Google Meet</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent-primary" /> Free Consultation</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent-primary" /> No Obligation</div>
          </div>
        </div>
      </section>
      
      {/* 2. THE PROBLEM WE SOLVE */}
      <section className="py-16 md:py-20 bg-bg-card border-b border-bg-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-[2rem] p-8 md:p-12 border border-bg-border relative overflow-hidden shadow-xl shadow-black/5">
            <div className="absolute top-0 left-0 w-2 h-full bg-accent-primary" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-accent-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary">The Problem We Solve</h2>
            </div>
            
            <p className="text-[17px] md:text-lg text-text-secondary leading-relaxed md:leading-loose">
              {service.problemDescription}
            </p>
          </div>
        </div>
      </section>

      {/* 3. PERFECT FOR & 4. EXPECTED OUTCOMES */}
      <section className="py-16 md:py-20 bg-background border-b border-bg-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Perfect For */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Target className="w-6 h-6 text-text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary">Perfect For</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.perfectFor.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-bg-card border border-bg-border">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-text-primary font-medium text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Outcomes */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="w-6 h-6 text-text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary">Expected Outcomes</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.outcomes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-bg-card border border-bg-border">
                    <CheckCircle className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                    <span className="text-text-primary font-medium text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* 5. WHAT'S INCLUDED */}
      <section className="py-16 md:py-20 bg-bg-card border-b border-bg-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">What's Included</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">Everything you need to succeed, built completely done-for-you.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, idx) => (
              <div key={idx} className="group flex items-center gap-4 p-5 rounded-2xl bg-background border border-bg-border hover:border-accent-primary/40 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="text-base font-semibold text-text-primary leading-tight">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR PROCESS */}
      <section className="py-16 md:py-20 bg-background border-b border-bg-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">Our Process</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">A proven, structured approach to ensure flawless execution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, idx) => (
              <div key={idx} className="relative p-8 rounded-[2rem] bg-bg-card border border-bg-border">
                <div className="absolute top-8 right-8 text-4xl font-black text-text-muted/30">0{idx + 1}</div>
                <h3 className="text-xl font-bold text-text-primary mb-4 relative z-10">{step.step}</h3>
                <p className="text-text-secondary leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR PROMISE & 8. TECH STACK */}
      <section className="py-16 md:py-20 bg-bg-card border-b border-bg-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Our Promise */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-8">Our Promise</h2>
              <div className="space-y-5">
                {[
                  "Clean, honest implementation",
                  "Business-first strategic thinking",
                  "Clear, proactive communication",
                  "Performance & speed optimization",
                  "Scalable technical architecture",
                  "Long-term support guidance"
                ].map((promise, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-accent-primary" />
                    </div>
                    <span className="text-text-secondary font-medium text-lg">{promise}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-8">Technology Stack</h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                We use enterprise-grade, modern tools to ensure your business systems are secure, scalable, and lightning fast.
              </p>
              <div className="flex flex-wrap gap-3">
                {service.techStack.map((tech, idx) => (
                  <span key={idx} className="px-5 py-2.5 rounded-full bg-background border border-bg-border text-text-primary font-medium text-sm shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="py-16 md:py-20 bg-background border-b border-bg-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-text-secondary">Everything you need to know about this service.</p>
          </div>

          <div className="grid gap-6">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] bg-bg-card border border-bg-border flex gap-6">
                <HelpCircle className="w-6 h-6 text-accent-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{faq.q}</h3>
                  <p className="text-text-secondary leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. ADD-ONS & 11. RELATED SERVICES */}
      <section className="py-16 md:py-20 bg-bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Add-ons */}
            <div className="lg:col-span-4">
              <h3 className="text-xl font-bold text-text-primary mb-6">Optional Add-ons</h3>
              <div className="flex flex-col gap-3">
                {service.addons.map((addon, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-bg-border">
                    <Layers className="w-5 h-5 text-text-muted" />
                    <span className="text-text-secondary font-medium text-sm">{addon}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Services */}
            <div className="lg:col-span-8">
              <h3 className="text-xl font-bold text-text-primary mb-6">Explore Related Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherServices.map((other) => (
                  <Link 
                    key={other.slug} 
                    href={`/services/${other.slug}`}
                    className="group block p-6 rounded-2xl bg-background border border-bg-border hover:border-accent-primary/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-text-primary">{other.title}</h4>
                      <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-accent-primary transition-colors" />
                    </div>
                    <p className="text-sm text-text-secondary line-clamp-2">{other.description}</p>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 12. DUAL CONVERSION SUITE: 30-MIN STRATEGY CALL + INSTANT INBOUND ENQUIRY FORM */}
      <section className="py-20 md:py-28 bg-slate-50/80 border-t border-slate-200/80 relative overflow-hidden" id="enquiry">
        
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute -top-[200px] right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/60 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#0067F4] border border-blue-200/60 text-xs font-mono font-bold tracking-wider uppercase mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next Step: Start Your Project</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Let&apos;s Build Your {service.title} System
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Choose the easiest way to connect — book a live 30-min strategy call or send a quick 60-second written project enquiry below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Card: 30-Min Instant Video Discovery Call */}
            <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-9 shadow-lg space-y-6 text-left hover:border-blue-200 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0067F4] border border-blue-100 flex items-center justify-center font-bold">
                <Calendar className="w-6 h-6" />
              </div>
              
              <div>
                <span className="text-xs font-mono font-bold text-[#0067F4] uppercase tracking-wider block mb-1">
                  Option 1: Live Strategy Session
                </span>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Book 30-Min Discovery Call
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Direct 1-on-1 session with Lead Engineer Sai Kumar. We will audit your current setup, answer technical questions, and formulate your custom implementation roadmap.
              </p>

              <div className="space-y-3 text-xs text-slate-700 border-y border-slate-100 py-4 font-semibold">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Zero sales pressure, 100% technical clarity</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Custom scope & architectural recommendation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Same-day official SOW proposal delivery</span>
                </div>
              </div>

              <Button 
                href="https://cal.com/saikumarlabs/discovery-call?theme=light" 
                external
                variant="primary" 
                size="lg" 
                className="w-full text-white bg-[#0067F4] hover:bg-blue-600 border-none py-4 font-bold text-sm shadow-md shadow-blue-600/20 transition-all"
              >
                <span>Book 30-Min Discovery Call</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <div className="text-center pt-1">
                <a
                  href={`https://wa.me/919390123367?text=${encodeURIComponent(`Hi Sai Kumar, I am exploring the ${service.title} package on SaiKumar Labs and would like to ask a few questions.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 transition-colors font-medium"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Or message Sai Kumar on WhatsApp →</span>
                </a>
              </div>
            </div>

            {/* Right Card: Quick 60-Second Inbound Lead Enquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm 
                defaultService={service.title}
                title={`Send an Enquiry for ${service.title}`}
                subtitle="Prefer written details? Fill this out and we'll reply directly on WhatsApp with your tailored proposal & pricing breakdown."
              />
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
