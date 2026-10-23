import { ServiceDetail } from "./types";

export const aiAutomationService: ServiceDetail = {
  slug: "ai-automation",
  legacySlugs: ["business-automation", "clinic-lead-systems"],
  title: "AI Automation & Intelligent Agents",
  subtitle: "Autonomous Operations & WhatsApp Systems",
  badge: "Flagship Service",
  tagline: "Automate your repetitive ops, lead triage, and customer follow-up 24/7.",
  description:
    "We engineer custom AI agents, official WhatsApp Cloud API auto-responders, and self-hosted n8n workflows that eliminate manual busywork and slash response times to under 10 seconds.",
  problemDescription:
    "Service businesses lose up to 60% of potential revenue due to slow replies, missed evening calls, and chaotic manual Excel sheets. When inquiry response takes hours, leads go to competitors. Furthermore, 30%–40% of booked appointments result in no-shows without automated reminders. We deploy autonomous AI agents that qualify leads instantly on WhatsApp, book calendar slots 24/7, and send proactive reminders without adding staff headcount.",
  perfectFor: [
    "Healthcare Practices & Multi-Specialty Clinics",
    "Diagnostic Centers & Pathology Networks",
    "Executive Coaches & Consultants",
    "Salons, Med-Spas & Aesthetic Centers",
    "B2B Service Agencies & High-Ticket Consultancies",
  ],
  outcomes: [
    "Under 10-second speed-to-lead response times 24/7",
    "Up to 40% reduction in customer & patient no-shows",
    "15–20 hours saved weekly per employee on manual data entry",
    "Zero dropped leads with automated CRM & pipeline sync",
    "Real-time instant Telegram / Phone alerts to founders",
    "Human-in-the-loop safety queues for high-stakes decisions",
  ],
  features: [
    "Operational Bottleneck & Systems Audit",
    "Official Meta WhatsApp Cloud API Setup & Verification",
    "24/7 Intelligent WhatsApp Triage & Qualification Agent",
    "Automated Interactive Calendar Booking (Cal.com / Google Calendar)",
    "Multi-Cadence WhatsApp Appointment Reminders (24h & 2h)",
    "Instant 3-Second Telegram / Mobile Alerts with 1-Tap wa.me Links",
    "Self-Hosted n8n Workflow Pipelines & Webhook Integrations",
    "Automated CRM & Google Sheets Data Ingestion",
    "Human-in-the-Loop Review Queue for Exception Handling",
    "End-to-End Encryption & GDPR-Aligned Data Privacy",
    "Weekly Automation Reliability & Exception Monitoring",
    "Team SOPs & Comprehensive Video Handover",
  ],
  process: [
    {
      step: "01. Systems Audit",
      desc: "We analyze your communication channels, bottlenecks, and repetitive tasks to identify highest-ROI automations.",
    },
    {
      step: "02. Workflow Architecture",
      desc: "We design the data journeys, WhatsApp message templates, and human approval triggers in an exact blueprint.",
    },
    {
      step: "03. Sprint Engineering",
      desc: "We configure the Meta Cloud API, build the n8n logic, connect your database, and run sandbox test cases.",
    },
    {
      step: "04. Production Handover",
      desc: "We deploy the system to live production, monitor real conversations, and train your team on exception handling.",
    },
  ],
  techStack: [
    "WhatsApp Cloud API",
    "n8n Automation",
    "Telegram Bot API",
    "OpenAI / Claude",
    "Supabase PostgreSQL",
    "Cal.com / Google Calendar",
    "Webhooks",
  ],
  faqs: [
    {
      q: "Can the AI agent run on my existing phone number?",
      a: "Yes. We configure the official Meta WhatsApp Business Cloud API on your verified business phone number with green-tick compliance.",
    },
    {
      q: "Will the AI give inaccurate medical or pricing advice?",
      a: "No. We engineer deterministic guardrails and strict prompt sandboxes. The AI qualifies intent and books appointments, and routes custom queries to a human review queue.",
    },
    {
      q: "How does it reduce appointment no-shows?",
      a: "By delivering timely, helpful reminders (24 hours and 2 hours prior) with directions, parking tips, and 1-tap 'Confirm or Reschedule' buttons right inside WhatsApp.",
    },
    {
      q: "Do I need to pay monthly per-user software fees?",
      a: "No. Unlike rigid SaaS platforms that charge per user seat, we build on self-hosted or serverless infrastructure where you own 100% of your workflows.",
    },
  ],
  addons: [
    "Multi-Doctor / Multi-Staff Routing",
    "Voice AI Inbound Call Assistant",
    "Automated Patient Feedback & Google Review Engine",
  ],
  keyword: "AI Automation Agency India",
  metricHighlight: {
    stat: "<10s",
    label: "Lead Response Velocity",
  },
};
