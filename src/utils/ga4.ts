declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const trackGoogleAnalyticsEvent = (
  category: string,
  action: string,
  label: string
) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
    });
  }
};
