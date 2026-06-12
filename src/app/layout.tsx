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
    "lead systems",
    "service business",
    "lead generation",
    "business automation",
    "enquiry management",
    "follow-up system",
    "website development India",
    "digital marketing",
    "lead capture",
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
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#service`,
      name: "SaiKumar Labs",
      url: siteConfig.url,
      description:
        "Lead systems and business systems for service businesses — more enquiries, better follow-up, fewer missed leads.",
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      serviceType: [
        "Lead Generation Systems",
        "Website Development",
        "Business Automation",
        "Digital Marketing",
        "Follow-up Systems",
        "SEO Services",
        "Google Business Profile Setup",
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
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteConfig.url}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
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
            text: "We work with service-based businesses — coaches, consultants, clinics, salons, agencies, and local service providers across India who get enquiries but struggle to convert them consistently.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every business is different. We offer a free lead flow review first, then give you an honest recommendation. No packages, no pressure — just what your business actually needs.",
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
