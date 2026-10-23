import { ServiceDetail } from "./types";
import { aiAutomationService } from "./ai-automation";
import { websitesService } from "./websites";
import { customSoftwareService } from "./custom-software";
import { socialAdsService } from "./social-ads";

export * from "./types";
export {
  aiAutomationService,
  websitesService,
  customSoftwareService,
  socialAdsService,
};

export const primaryServices: ServiceDetail[] = [
  aiAutomationService,
  websitesService,
  customSoftwareService,
  socialAdsService,
];

// Map containing primary slugs and legacy backward-compatible slugs
export const servicesMap = new Map<string, ServiceDetail>();

primaryServices.forEach((service) => {
  servicesMap.set(service.slug, service);
  if (service.legacySlugs) {
    service.legacySlugs.forEach((legacy) => {
      servicesMap.set(legacy, service);
    });
  }
});

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesMap.get(slug);
}

export function getAllServiceSlugs(): string[] {
  return Array.from(servicesMap.keys());
}
