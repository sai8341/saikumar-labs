import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import ScrollDepthTracker from "@/components/analytics/ScrollDepthTracker";
import { siteConfig } from "@/lib/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "SaiKumar Labs — Lead Systems for Service Businesses",
    template: "%s | SaiKumar Labs",
  },
  description: siteConfig.description,
  keywords: [
    "lead generation for service business India",
    "lead management system small business",
    "business automation India",
    "follow-up automation leads",
    "WhatsApp lead follow-up system",
    "website development coaches India",
    "lead capture system clinics",
    "landing page lead generation",
    "Google Business Profile setup",
    "Meta Business Manager setup India",
    "lead funnel for service business",
    "salon booking system WhatsApp",
    "clinic appointment follow-up",
    "digital marketing Hyderabad",
    "lead generation Bangalore",
    "SaiKumar Labs",
  ],
  authors: [{ name: "SaiKumar Labs" }],
  creator: "SaiKumar Labs",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "SaiKumar Labs — Lead Systems for Service Businesses",
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SaiKumar Labs — Lead Systems for Service Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaiKumar Labs — Lead Systems for Service Businesses",
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
      contactPoint: {
        "@type": "ContactPoint",
        email: siteConfig.email,
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
        "Lead systems and business automation for service businesses in India — more enquiries, better follow-up, fewer missed leads. Serving Hyderabad, Bangalore, and all of India.",
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "City", name: "Hyderabad" },
        { "@type": "City", name: "Bangalore" },
      ],
      serviceType: [
        "Lead Generation Systems",
        "Website Development",
        "Business Automation",
        "Digital Marketing",
        "Follow-up Systems",
        "SEO Services",
        "Google Business Profile Setup",
        "Meta Business Manager Setup",
        "WhatsApp Lead Follow-up",
        "Landing Page Development",
        "AI Automation Solutions",
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
            text: "SaiKumar Labs helps service businesses (coaches, clinics, salons, consultants) fix their lead flow. We build connected systems that capture leads, track enquiries, and automate follow-up — so you get more clients without chasing every lead manually.",
          },
        },
        {
          "@type": "Question",
          name: "How is this different from hiring a web designer or a marketing agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most agencies build you a website OR run ads. We build the system between them — the funnel, tracking, and follow-up that actually converts visitors into paying clients. It's not about looking good; it's about getting results.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of businesses do you work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We work with service-based businesses — coaches, consultants, clinics, salons, agencies, and local service providers across India, including Hyderabad and Bangalore, who get enquiries but struggle to convert them consistently.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a lead system cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every business is different. We offer a free lead flow review first, then give you an honest recommendation. No packages, no pressure — just what your business actually needs.",
          },
        },
        {
          "@type": "Question",
          name: "Do you only build websites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. A website is just one part of a lead system. We also set up tracking (GA4, Search Console), lead capture funnels, WhatsApp follow-up workflows, Meta ad accounts, and AI automation — everything connected into one system.",
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
            text: "That's exactly what we fix. Most service businesses have a website that looks fine but doesn't convert visitors into enquiries. We audit your current setup, identify the leaks, and build the missing pieces — tracking, CTAs, follow-up, and funnels.",
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
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <GoogleAnalytics />
        <ScrollDepthTracker />
        <Header />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
