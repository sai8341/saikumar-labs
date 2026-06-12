// ============================================
// Google Analytics 4 — Event Tracking
// ============================================

type GAEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

// Safely send GA4 events
export function trackEvent({ action, category, label, value }: GAEvent) {
  if (typeof window === "undefined") return;

  const w = window as Window & { gtag?: (...args: unknown[]) => void };
  if (!w.gtag) return;

  w.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

// Pre-built event helpers
export const analytics = {
  whatsappClick: (location: string) =>
    trackEvent({
      action: "whatsapp_click",
      category: "engagement",
      label: location,
    }),

  ctaClick: (label: string) =>
    trackEvent({
      action: "cta_click",
      category: "conversion",
      label,
    }),

  formSubmit: (formName: string) =>
    trackEvent({
      action: "form_submit",
      category: "conversion",
      label: formName,
    }),

  phoneClick: () =>
    trackEvent({
      action: "phone_click",
      category: "engagement",
      label: "phone_number",
    }),

  portfolioClick: (projectName: string) =>
    trackEvent({
      action: "portfolio_click",
      category: "engagement",
      label: projectName,
    }),

  scrollDepth: (percentage: number) =>
    trackEvent({
      action: "scroll_depth",
      category: "engagement",
      value: percentage,
    }),
};
