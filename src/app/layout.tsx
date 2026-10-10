import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleTagManager from "@/components/analytics/GoogleTagManager";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import ScrollDepthTracker from "@/components/analytics/ScrollDepthTracker";
import SmoothScroll from "@/components/layout/SmoothScroll";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { siteConfig } from "@/lib/config";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "SaiKumar Labs - Lead Systems for Service Businesses",
    template: "%s | SaiKumar Labs",
  },
  description: siteConfig.description,
  keywords: [
    "lead generation system for service business India",
    "WhatsApp lead follow-up system for service businesses",
    "website development for clinics in Hyderabad",
    "custom web design company Hyderabad",
    "Next.js website development Hyderabad",
    "AI automation agency for small business India",
    "landing page development for coaches India",
    "patient appointment booking web app India",
    "n8n workflow automation services India",
    "Meta ads lead generation agency India",
    "business automation India",
    "lead management system small business",
    "Google Business Profile setup India",
    "salon booking system WhatsApp",
    "clinic appointment follow-up automation",
    "digital marketing for service businesses Hyderabad",
    "SaiKumar Labs",
  ],
  authors: [{ name: "SaiKumar Labs" }],
  creator: "SaiKumar Labs",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "SaiKumar Labs - Lead Systems for Service Businesses",
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SaiKumar Labs - Lead Systems for Service Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaiKumar Labs - Lead Systems for Service Businesses",
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  verification: {
    google: siteConfig.googleSiteVerification || undefined,
  },
  ...(siteConfig.googleSiteVerification
    ? {
        other: {
          "google-site-verification": siteConfig.googleSiteVerification,
        },
      }
    : {}),
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: "SaiKumar Labs",
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.jpg`,
      description: siteConfig.description,
      founder: {
        "@type": "Person",
        name: "Sai Kumar",
        jobTitle: "Founder & Lead Systems Engineer",
        url: siteConfig.url,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        availableLanguage: ["English", "Telugu", "Hindi"],
      },
      sameAs: Object.values(siteConfig.social),
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": `${siteConfig.url}/#service`,
      name: "SaiKumar Labs",
      url: siteConfig.url,
      description:
        "Lead systems and business automation for service businesses in India - more enquiries, better follow-up, fewer missed leads. Serving Hyderabad, Bangalore, and all of India.",
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "AdministrativeArea", name: "Telangana" },
        { "@type": "City", name: "Hyderabad" },
        { "@type": "City", name: "Bangalore" },
        { "@type": "City", name: "Mumbai" },
      ],
      serviceType: [
        "Lead Generation Systems",
        "Website Development for Service Businesses",
        "Custom Next.js Web Development",
        "WhatsApp Lead Follow-up Automation",
        "Business Automation & Workflow Engineering",
        "AI Automation Solutions",
        "Landing Page Development for Clinics and Coaches",
        "Meta Ads Lead Generation Funnels",
        "Google Business Profile Local SEO",
        "Patient Appointment Booking Web Apps",
      ],
      provider: {
        "@id": `${siteConfig.url}/#organization`,
      },
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: "SaiKumar Labs",
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does SaiKumar Labs do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SaiKumar Labs helps service businesses (coaches, clinics, salons, consultants) fix their lead flow. We build connected systems that capture leads, track enquiries, and automate follow-up - so you get more clients without chasing every lead manually.",
          },
        },
        {
          "@type": "Question",
          name: "How is this different from hiring a web designer or a marketing agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most agencies build you a website OR run ads. We build the system between them - the funnel, tracking, and follow-up that actually converts visitors into paying clients. It's not about looking good; it's about getting results.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of businesses do you work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We work with service-based businesses - coaches, consultants, clinics, salons, agencies, and local service providers across India, including Hyderabad and Bangalore, who get enquiries but struggle to convert them consistently.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a lead system cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every business is different. We offer a free lead flow review first, then give you an honest recommendation. No packages, no pressure - just what your business actually needs.",
          },
        },
        {
          "@type": "Question",
          name: "Do you only build websites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. A website is just one part of a lead system. We also set up tracking, lead capture funnels, WhatsApp follow-up workflows, Meta ad accounts, and AI automation - everything connected into one system.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to set up a lead system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on what your business needs. A simple website with tracking can be done in 1-2 weeks. A full lead system with funnels, automation, and follow-up workflows typically takes 3-4 weeks.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with businesses outside Hyderabad and Bangalore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we work with service businesses across India. Everything we build is digital, so location doesn't matter. We've helped coaches, clinics, and salons in multiple cities.",
          },
        },
        {
          "@type": "Question",
          name: "What if I already have a website but it's not getting leads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "That's exactly what we fix. Most service businesses have a website that looks fine but doesn't convert visitors into enquiries. We audit your current setup, identify the leaks, and build the missing pieces - tracking, CTAs, follow-up, and funnels.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <GoogleTagManager />
        <SmoothScroll>
          <GoogleAnalytics />
          <ScrollDepthTracker />
          <Header />
          <main className="flex-1 pt-16 md:pt-20">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
