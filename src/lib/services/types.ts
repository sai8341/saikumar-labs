export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceProcessStep {
  step: string;
  desc: string;
}

export interface ServiceDetail {
  slug: string;
  legacySlugs?: string[];
  title: string;
  subtitle: string;
  badge: string;
  tagline: string;
  description: string;
  problemDescription: string;
  perfectFor: string[];
  outcomes: string[];
  features: string[];
  process: ServiceProcessStep[];
  techStack: string[];
  faqs: ServiceFAQ[];
  addons: string[];
  keyword: string;
  metricHighlight: {
    stat: string;
    label: string;
  };
}
