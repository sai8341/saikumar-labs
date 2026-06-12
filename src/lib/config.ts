// ============================================
// SaiKumar Labs — Central Configuration
// ============================================
// Update these values to change site-wide info.
// No need to touch any component code.

export const siteConfig = {
  name: "SaiKumar Labs",
  tagline: "Lead Systems for Service Businesses",
  description:
    "Helping service businesses fix lead leaks and turn their online presence into a lead system that brings more enquiries, better follow-up, and fewer missed leads.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://saikumarlabs.com",
  ogImage: "/og-image.jpg",

  // Contact
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210",
  whatsappMessage:
    "Hi SaiKumar Labs, I'd like to discuss how you can help my business get more enquiries.",
  email: "hello@saikumarlabs.com",
  phone: "+91 98765 43210",

  // Social
  social: {
    instagram: "https://instagram.com/saikumarlabs",
    linkedin: "https://linkedin.com/company/saikumarlabs",
    twitter: "https://twitter.com/saikumarlabs",
  },

  // Analytics
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || "",

  // Google Search Console Verification
  googleSiteVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",

  // Navigation
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
