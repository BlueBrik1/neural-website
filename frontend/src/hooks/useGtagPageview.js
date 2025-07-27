import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_TRACKING_ID = 'G-XERH6V93Y5';

export const useGtagPageview = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if gtag is available
    if (typeof window !== 'undefined' && window.gtag) {
      // Send pageview to Google Analytics
      window.gtag('config', GA_TRACKING_ID, {
        page_path: location.pathname + location.search + location.hash,
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }, [location]);
}; 