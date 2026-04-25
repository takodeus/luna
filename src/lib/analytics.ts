/**
 * Analytics — thin wrapper around HubSpot's _hsq queue.
 * All functions are safe no-ops if HubSpot's script hasn't loaded yet
 * or fails to load (e.g. ad blocker, offline).
 */

declare global {
  interface Window {
    _hsq?: unknown[];
  }
}

const hsq = (): unknown[] => {
  if (typeof window === "undefined") return [];
  window._hsq = window._hsq || [];
  return window._hsq;
};

/** Fire a virtual page view (use on route changes in single-page apps). */
export const trackPageView = (path: string) => {
  hsq().push(["setPath", path]);
  hsq().push(["trackPageView"]);
};

/**
 * Fire a custom event with optional properties.
 * Note: HubSpot's _hsq.trackEvent works for Marketing Hub Enterprise;
 * for other tiers it falls back to harmless no-op. Either way, safe to call.
 */
export const trackEvent = (
  eventName: string,
  properties: Record<string, string | number | boolean> = {}
) => {
  hsq().push([
    "trackCustomBehavioralEvent",
    {
      name: eventName,
      properties,
    },
  ]);
};
