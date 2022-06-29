export const GA_TRACKING_ID = "G-70KB5H77R2";

declare global {
  interface Window {
    gtag: (param1: string, param2: string, param3: object) => void;
  }
}

export const pageview = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// log specific events happening.
export const event = ({action, params}: {action: string; params: object}) => {
  window.gtag("event", action, params);
};
