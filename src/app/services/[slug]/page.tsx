import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, CheckCircle, Sparkles, Zap, ShieldCheck, Target, TrendingUp, Layers, HelpCircle, Check, ArrowUpRight, Calendar, MessageSquare } from "lucide-react";
import { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";
import { siteConfig } from "@/lib/config";

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
      "Service businesses with high-ticket offers",
      "Coaches ready to scale enrollments",
      "Clinics expanding high-value treatments",
      "Agencies looking for steady client flow"
    ],

    // 4. Expected Outcomes
    outcomes: [
      "Consistent, predictable inbound leads",
      "Lower cost-per-acquisition",
      "Accurate conversion tracking",
      "Clear ROI on your marketing spend",
      "Automated audience retargeting"
    ],

    // 5. What's Included
    features: [
      "Everything in Website Foundation",
      "High-Converting Landing Pages",
      "Meta Business Suite Setup",
      "Meta Pixel & Conversion API",
      "Custom Campaign Architecture",
      "Ad Creative Frameworks",
      "Audience Targeting & Retargeting",
      "Full Funnel Tracking Setup",
      "GA4 Custom Conversion Events",
      "1-Year Free Hosting, SSL & Domain"
    ],

    // 6. Our Process
    process: [
      { step: "Offer Audit", desc: "Refining your core value proposition and defining the perfect customer avatar." },
      { step: "Funnel Build", desc: "Designing high-speed, persuasive landing pages engineered specifically for conversion." },
      { step: "Pixel & API", desc: "Configuring server-side tracking so every ad dollar is accurately accounted for." },
      { step: "Campaign Launch", desc: "Setting up and testing targeted ad sets across Meta (Instagram & Facebook)." },
      { step: "Optimization", desc: "Continuous A/B testing of headlines, creatives, and funnels to lower acquisition costs." }
    ],

    techStack: ["Next.js", "Meta Ads", "Meta Pixel", "GTM", "GA4", "Tailwind CSS"],

    faqs: [
      { q: "Do you include ad spend in the package?", a: "No, ad spend is paid directly to Meta from your own billing account. Our fee covers strategy, funnel engineering, and technical implementation." },
      { q: "How quickly do we see results?", a: "Landing pages and campaigns are usually live within 2 weeks. Most businesses start receiving qualified enquiries within days of launching ads." },
      { q: "Do I need an existing audience?", a: "No. The combination of precision cold targeting and retargeting allows us to build your customer pipeline from scratch." }
    ],

    addons: [
      "Monthly Ad Campaign Management",
      "Creative Video Editing Retainer",
      "Multi-Variant Funnel Testing"
    ],

    keyword: "High-Converting Lead Generation Funnels"
  },
  "brand-authority": {
    // 1. Hero
    title: "Brand Authority",
    subtitle: "Brand Authority",
    description: "Position yourself as the undisputed authority in your industry through strategic YouTube SEO, content, and personal branding.",
    
    // 2. The Problem We Solve
    problemDescription: "If your competitors have a stronger personal brand, they will win clients even with an inferior service. Clients want to buy from experts they know, like, and trust. The Brand Authority package turns your expertise into high-leverage digital assets. From YouTube video SEO to custom internal AI workflows, we position you as the definitive leader in your market.",
    
    // 3. Perfect For
    perfectFor: [
      "Founders and CEOs building a personal brand",
      "Consultants wanting high-ticket inbound leads",
      "Specialized doctors and clinic owners",
      "Industry educators and authors"
    ],

    // 4. Expected Outcomes
    outcomes: [
      "Top-of-mind industry positioning",
      "Organic inbound search authority",
      "Evergreen lead generation from YouTube",
      "Higher pricing power and client trust",
      "Custom AI assistants to streamline content"
    ],

    // 5. What's Included
    features: [
      "YouTube Channel Strategy & Setup",
      "Video SEO & Metadata Optimization",
      "Custom Thumbnail Templates",
      "Omnichannel Content Repurposing Plan",
      "Custom Internal AI Prompts & Workflows",
      "Personal Brand Landing Hub",
      "Interactive Media Kit Integration",
      "Newsletter & Lead Magnet Funnel",
      "1-Year Free Hosting, SSL & Domain"
    ],

    // 6. Our Process
    process: [
      { step: "Authority Audit", desc: "Analyzing your market niche, identifying content gaps, and crafting your core message." },
      { step: "Platform Setup", desc: "Configuring your YouTube, social, and web presence with high-authority visual design." },
      { step: "Workflow Automation", desc: "Building AI-assisted research and scripting pipelines tailored to your tone of voice." },
      { step: "Distribution Strategy", desc: "Establishing an efficient system to convert video viewers into consultation enquiries." }
    ],

    techStack: ["YouTube Studio", "Next.js", "AI Pipelines", "Canva/Figma", "Tailwind CSS"],

    faqs: [
      { q: "Do I have to appear on camera?", a: "For maximum trust, personal branding works best on video, but we can also build faceless educational authority frameworks depending on your business model." },
      { q: "How long until YouTube starts driving leads?", a: "YouTube is a compounding asset. Unlike ads that stop when budget ends, an optimized YouTube video can generate qualified clients for 2+ years." }
    ],

    addons: [
      "Weekly Video SEO & Upload Management",
      "Podcast Syndication Setup",
      "Ghostwriting for LinkedIn"
    ],

    keyword: "Executive Personal Branding and Video SEO"
  },
  "business-automation": {
    // 1. Hero
    title: "Business Systems",
    subtitle: "Business Systems",
    description: "Eliminate manual chaos. We build custom WhatsApp automations, CRM pipelines, and AI workflows that work 24/7.",
    
    // 2. The Problem We Solve
    problemDescription: "Every hour you spend manually copying lead data, sending follow-up messages, or chasing no-shows is an hour stolen from closing deals. When leads wait even 15 minutes for a reply, conversion rates drop by 80%. Business Systems automate the tedious busywork. We deploy instant WhatsApp response bots, synchronized CRMs, and automated booking reminders so your operations run flawlessly around the clock.",
    
    // 3. Perfect For
    perfectFor: [
      "Busy clinics losing patients to no-shows",
      "High-volume service providers",
      "Coaches tired of manual DM management",
      "Companies with messy lead management"
    ],

    // 4. Expected Outcomes
    outcomes: [
      "Sub-60 second lead response times",
      "Dramatic reduction in appointment no-shows",
      "100% automated lead capture into your CRM",
      "Zero missed follow-ups or lost contacts",
      "Dozens of hours saved every single week"
    ],

    // 5. What's Included
    features: [
      "WhatsApp Business API Integration",
      "Instant Automated Welcome & Qualifying Flows",
      "Cal.com / Booking System Integration",
      "SMS & WhatsApp Appointment Reminders",
      "Lead Capture Webhooks & Integrations",
      "Centralized Notion or Airtable CRM",
      "Staff Alert Dispatch (Telegram / Email)",
      "Automated Review Collection Sequences",
      "1-Year Free Hosting, SSL & Domain"
    ],

    // 6. Our Process
    process: [
      { step: "System Audit", desc: "Mapping your current customer journey from first touch to closed client." },
      { step: "Architecture", desc: "Designing frictionless automation logic and webhook routing." },
      { step: "Integration", desc: "Connecting your website, WhatsApp, CRM, and calendar into a single unified engine." },
      { step: "Rigorous Testing", desc: "Simulating live edge-cases and load to ensure 100% reliability." },
      { step: "Team Handover", desc: "Training your staff on how to monitor and operate the automated workflows." }
    ],

    techStack: ["n8n", "WhatsApp Cloud API", "Cal.com", "Supabase", "Next.js", "Webhooks"],

    faqs: [
      { q: "Will automated WhatsApp messages get my number banned?", a: "No. We build strictly using official WhatsApp Business API standards and pre-approved utility templates to protect your number." },
      { q: "Can my team still chat manually on WhatsApp?", a: "Yes. The automated flow qualifies and collects info first, then hands off seamlessly to your staff for live human chat when needed." },
      { q: "What CRM does this connect to?", a: "We can connect to HubSpot, Zoho, Notion, Airtable, Google Sheets, or custom Supabase databases." }
    ],

    addons: [
      "Custom AI Lead Qualifier Bot",
      "Multi-Agent Support Routing",
      "Payment Gateway Integration"
    ],

    keyword: "WhatsApp Business Automation and CRM Integration"
  }
};

export async function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages[slug as keyof typeof servicePages];
  if (!service) return {};

  return {
    title: `${service.title} - SaiKumar Labs`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicePages[slug as keyof typeof servicePages];

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-cream-100 to-cream-50 border-b border-border/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-200 border border-gold-400/30 text-gold-700 text-xs sm:text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span>{service.subtitle}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-charcoal-900 mb-6">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed mb-10">
            {service.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href="https://cal.com/saikumarlabs/discovery-call?theme=light"
              external
              variant="primary"
              size="lg"
            >
              Book a Strategy Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="#service-enquiry"
              variant="outline"
              size="lg"
            >
              Get Free Custom Scope
            </Button>
          </div>
        </div>
      </section>

      {/* The Core Problem & Transformation */}
      <section className="py-16 md:py-24 bg-white border-b border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream-50 rounded-3xl p-8 sm:p-12 border border-border shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-900 mb-6">
              The Problem We Solve
            </h2>
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
              {service.problemDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes & Perfect For */}
      <section className="py-16 md:py-24 bg-cream-50 border-b border-border/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Perfect For */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal-900 mb-6">
                Who This Is Built For
              </h3>
              <ul className="space-y-4">
                {service.perfectFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-charcoal-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expected Outcomes */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal-900 mb-6">
                Measurable Outcomes
              </h3>
              <ul className="space-y-4">
                {service.outcomes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    <span className="text-charcoal-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Deliverables List */}
      <section className="py-16 md:py-24 bg-white border-b border-border/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900 mb-4">
              What&apos;s Included In The Package
            </h2>
            <p className="text-gray-custom-500 max-w-2xl mx-auto">
              Everything required to engineer an enterprise-grade, high-conversion digital asset from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-2xl bg-cream-50/70 border border-border/60"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-semibold text-charcoal-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Process */}
      <section className="py-16 md:py-24 bg-cream-50 border-b border-border/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900 mb-4">
              How We Execute
            </h2>
            <p className="text-gray-custom-500 max-w-2xl mx-auto">
              A transparent, phased delivery process with zero friction and continuous milestone updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-border shadow-xs flex gap-5 items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-400/10 text-gold-700 font-bold flex items-center justify-center shrink-0 border border-gold-400/20">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-charcoal-900 mb-1.5">{step.step}</h4>
                  <p className="text-sm text-gray-custom-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-14 bg-white border-b border-border/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-gray-custom-400 block mb-6">
            Engineered With Modern Technologies
          </span>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {service.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-cream-100 text-charcoal-800 text-xs sm:text-sm font-semibold border border-border/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-cream-50 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-custom-500">
              Clear answers to the most common questions regarding {service.title}.
            </p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-border shadow-xs">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-charcoal-900 mb-2">{faq.q}</h3>
                    <p className="text-sm text-gray-custom-500 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Section: 30-Min Strategy Call OR Direct Written Form */}
      <section id="service-enquiry" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0067F4] text-xs font-mono font-bold uppercase tracking-wider mb-3">
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
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi Sai Kumar, I am exploring the ${service.title} package on SaiKumar Labs and would like to ask a few questions.`)}`}
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
