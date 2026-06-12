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
      ],
      provider: {
        "@id": `${siteConfig.url}/#organization`,
      },
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
