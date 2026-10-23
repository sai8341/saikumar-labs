import { ServiceDetail } from "./types";

export const customSoftwareService: ServiceDetail = {
  slug: "custom-software",
  legacySlugs: ["web-applications"],
  title: "Custom Software & Client Portals",
  subtitle: "Full-Stack Web Applications & Digital Operating Systems",
  badge: "Bespoke Engineering",
  tagline: "Custom web applications and client portals tailored to your exact operational workflows.",
  description:
    "We build bespoke full-stack Next.js and Supabase web applications — giving service businesses dedicated client portals, digital touch-signature contracts, and automated payment pipelines with zero per-user SaaS license fees.",
  problemDescription:
    "Off-the-shelf SaaS tools force your unique service workflows into rigid templates while charging exorbitant recurring per-seat fees that balloon as your team grows. Furthermore, managing clients through scattered email threads and manual invoice reminders delays payments and slows execution. We engineer bespoke, fast Next.js applications tailored to your exact operations — complete with touch-sign digital agreements, secure client portals, and automated escrow billing.",
  perfectFor: [
    "High-Volume Consultancies & Agencies Needing Client Portals",
    "Healthcare Practices Requiring Patient Intake Dashboards",
    "Founders Building Scalable Internal Operations Software",
    "Businesses Outgrowing Trello, Notion & Spreadsheets",
    "Practices Needing Digital Contract Touch-Signing & Escrow",
  ],
  outcomes: [
    "100% custom workflow alignment without SaaS software compromises",
    "Zero recurring per-user license fees — infinite team scalability",
    "Accelerated onboarding: Contracts signed and advances paid in 15 mins",
    "Full IP and database ownership on Supabase / PostgreSQL",
    "Enterprise-grade AES-256-GCM encrypted credential vaults",
    "Real-time operational milestone tracking for clients and team",
  ],
  features: [
    "Technical Architecture, Schema Design & Data Modeling",
    "Next.js App Router Full-Stack Frontend & Backend",
    "Supabase PostgreSQL Database with Row-Level Security (RLS)",
    "Secure Magic-Link & Role-Based Access Control (RBAC)",
    "Client Portal Interface for Milestones, Deliverables & Previews",
    "Mobile Touch-Signature Digital SOW & MSA Signing Canvas",
    "Razorpay Escrow & 50% Advance Token Gateway Integration",
    "AES-256-GCM Authenticated Encryption for Client Credentials",
    "Automated PDF Invoices, Receipts & Work Order Generation",
    "RESTful & Webhook Endpoints for Third-Party Tool Sync",
    "Automated CI/CD Deployment Pipelines on Vercel",
    "Comprehensive Security Audit & Post-Launch Warranty",
  ],
  process: [
    {
      step: "01. Architecture & Spec",
      desc: "We define data models, user roles, security rules, and exact operational user journeys.",
    },
    {
      step: "02. UI/UX Interface",
      desc: "We craft responsive, mobile-first dashboards and portal screens tailored to your brand identity.",
    },
    {
      step: "03. Full-Stack Sprint",
      desc: "We build the application using Next.js, Supabase RLS, and secure payment/signature pipelines.",
    },
    {
      step: "04. Security Audit & Launch",
      desc: "We perform penetration testing, verify database RLS, and transfer 100% repository ownership.",
    },
  ],
  techStack: [
    "Next.js App Router",
    "TypeScript",
    "Supabase / PostgreSQL",
    "Tailwind CSS",
    "Razorpay SDK",
    "AES-256-GCM Crypto",
    "Vercel Serverless",
  ],
  faqs: [
    {
      q: "Can clients access the portal without creating passwords?",
      a: "Yes! We implement secure, zero-friction magic tokens (`/portal/[token]`). Clients open links on mobile, review milestones, and touch-sign contracts instantly.",
    },
    {
      q: "How secure is client data and credentials?",
      a: "All sensitive records are encrypted using AES-256-GCM authenticated server-side encryption, and databases are protected by PostgREST Row-Level Security policies.",
    },
    {
      q: "Do I have to pay recurring monthly subscription fees?",
      a: "No per-user license fees. You only pay for standard cloud infrastructure (e.g. Supabase and Vercel free/pro tiers), keeping your overhead near zero.",
    },
    {
      q: "Can this integrate with our existing accounting or CRM tools?",
      a: "Yes. We build clean webhook and REST API connectors to sync with QuickBooks, Zoho, Google Sheets, or custom internal systems.",
    },
  ],
  addons: [
    "Multi-Tenant SaaS Architecture",
    "Automated WhatsApp Notification Triggers for Clients",
    "Custom Analytics & Executive Financial Dashboards",
  ],
  keyword: "Custom Client Portal Development",
  metricHighlight: {
    stat: "15 Min",
    label: "Client Onboarding Velocity",
  },
};
