// Performance optimization utilities

// Image optimization with lazy loading
export const optimizeImage = (src, alt, className = '', placeholder = null) => {
  return {
    src,
    alt,
    className,
    loading: 'lazy',
    decoding: 'async',
    onLoad: (e) => {
      e.target.style.opacity = '1';
    },
    style: {
      opacity: 0,
      transition: 'opacity 0.3s ease-in-out',
    },
  };
};

// Preload critical resources
export const preloadResource = (href, as = 'script', crossorigin = true) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (crossorigin) link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
};

// Prefetch non-critical resources
export const prefetchResource = (href) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Performance monitoring
export const measurePerformance = (name, fn) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  
  console.log(`${name} took ${end - start}ms`);
  
  // Send to analytics if available
  if (window.gtag) {
    window.gtag('event', 'timing_complete', {
      name: name,
      value: Math.round(end - start),
      event_category: 'performance',
    });
  }
  
  return result;
};

// Debounce function for performance
export const debounce = (func, wait, immediate = false) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

// Throttle function for performance
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Check if element is in viewport
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Optimize scroll events
export const optimizeScroll = (callback) => {
  let ticking = false;
  
  return function() {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };
};

// Memory management
export const cleanupEventListeners = (element, eventType, handler) => {
  if (element && element.removeEventListener) {
    element.removeEventListener(eventType, handler);
  }
};

// Resource hints
export const addResourceHints = () => {
  const hints = [
    { rel: 'dns-prefetch', href: '//www.googletagmanager.com' },
    { rel: 'dns-prefetch', href: '//us.i.posthog.com' },
    { rel: 'preconnect', href: 'https://www.googletagmanager.com', crossorigin: true },
    { rel: 'preconnect', href: 'https://us.i.posthog.com', crossorigin: true },
  ];

  hints.forEach(hint => {
    const link = document.createElement('link');
    Object.assign(link, hint);
    document.head.appendChild(link);
  });
};

// Critical CSS injection
export const injectCriticalCSS = (css) => {
  const style = document.createElement('style');
  style.textContent = css;
  style.setAttribute('data-critical', 'true');
  document.head.appendChild(style);
};

// Web Vitals monitoring
export const monitorWebVitals = () => {
  if ('PerformanceObserver' in window) {
    // Monitor Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'LCP',
          value: Math.round(lastEntry.startTime),
        });
      }
    });
    
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Monitor First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'FID',
            value: Math.round(entry.processingStart - entry.startTime),
          });
        }
      });
    });
    
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Monitor Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'CLS',
          value: Math.round(clsValue * 1000) / 1000,
        });
      }
    });
    
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }
};

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  addResourceHints();
  monitorWebVitals();
  
  // Add loading attribute to images
  const images = document.querySelectorAll('img:not([loading])');
  images.forEach(img => {
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });
}; 