import ReactGA4 from "react-ga4";

export const initializeGoogleAnalytics = () => {
  ReactGA4.initialize("G-ZXKDHJBK23");
};

export const trackGoogleAnalyticsEvent = (
  category: string,
  action: string,
  label: string
) => {
  ReactGA4.event({
    category: category,
    action: action,
    label: label,
  });
};
