import { useEffect, useRef, useCallback } from 'react';

// Performance monitoring hook
export const usePerformance = (componentName) => {
  const renderCount = useRef(0);
  const lastRenderTime = useRef(performance.now());

  useEffect(() => {
    renderCount.current += 1;
    const currentTime = performance.now();
    const renderTime = currentTime - lastRenderTime.current;
    lastRenderTime.current = currentTime;

    // Log performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`${componentName} rendered ${renderCount.current} times in ${renderTime.toFixed(2)}ms`);
    }

    // Send to analytics if available
    if (window.gtag && renderTime > 16) { // Log slow renders (>16ms)
      window.gtag('event', 'slow_render', {
        event_category: 'Performance',
        event_label: componentName,
        value: Math.round(renderTime),
      });
    }
  });

  return {
    renderCount: renderCount.current,
    lastRenderTime: lastRenderTime.current,
  };
};

// Memory usage monitoring
export const useMemoryUsage = () => {
  const memoryInfo = useRef(null);

  const getMemoryInfo = useCallback(() => {
    if ('memory' in performance) {
      memoryInfo.current = {
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        limit: performance.memory.jsHeapSizeLimit,
        percentage: (performance.memory.usedJSHeapSize / performance.memory.jsHeapSizeLimit) * 100,
      };
    }
    return memoryInfo.current;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const info = getMemoryInfo();
      if (info && info.percentage > 80) {
        console.warn('High memory usage detected:', info.percentage.toFixed(2) + '%');
        
        if (window.gtag) {
          window.gtag('event', 'high_memory_usage', {
            event_category: 'Performance',
            value: Math.round(info.percentage),
          });
        }
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [getMemoryInfo]);

  return { getMemoryInfo };
};

// Network performance monitoring
export const useNetworkPerformance = () => {
  const networkInfo = useRef(null);

  const getNetworkInfo = useCallback(() => {
    if ('connection' in navigator) {
      networkInfo.current = {
        effectiveType: navigator.connection.effectiveType,
        downlink: navigator.connection.downlink,
        rtt: navigator.connection.rtt,
        saveData: navigator.connection.saveData,
      };
    }
    return networkInfo.current;
  }, []);

  useEffect(() => {
    const handleOnline = () => {
      if (window.gtag) {
        window.gtag('event', 'network_status', {
          event_category: 'Performance',
          event_label: 'online',
        });
      }
    };

    const handleOffline = () => {
      if (window.gtag) {
        window.gtag('event', 'network_status', {
          event_category: 'Performance',
          event_label: 'offline',
        });
      }
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return { getNetworkInfo };
};

// Resource loading performance
export const useResourceTiming = () => {
  const getResourceTiming = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.initiatorType === 'img' && entry.duration > 1000) {
            console.warn('Slow image load:', entry.name, entry.duration + 'ms');
            
            if (window.gtag) {
              window.gtag('event', 'slow_resource_load', {
                event_category: 'Performance',
                event_label: 'image',
                value: Math.round(entry.duration),
              });
            }
          }
        });
      });

      observer.observe({ entryTypes: ['resource'] });
    }
  }, []);

  useEffect(() => {
    getResourceTiming();
  }, [getResourceTiming]);
};

// Component load time monitoring
export const useLoadTime = (componentName) => {
  const loadStartTime = useRef(performance.now());

  useEffect(() => {
    const loadTime = performance.now() - loadStartTime.current;
    
    if (loadTime > 100) { // Log slow component loads
      console.warn(`${componentName} took ${loadTime.toFixed(2)}ms to load`);
      
      if (window.gtag) {
        window.gtag('event', 'slow_component_load', {
          event_category: 'Performance',
          event_label: componentName,
          value: Math.round(loadTime),
        });
      }
    }
  }, [componentName]);
};

// Bundle size monitoring
export const useBundleSize = () => {
  useEffect(() => {
    // Monitor bundle size through performance marks
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'measure' && entry.name.includes('bundle')) {
            if (window.gtag) {
              window.gtag('event', 'bundle_size', {
                event_category: 'Performance',
                event_label: entry.name,
                value: Math.round(entry.duration),
              });
            }
          }
        });
      });

      observer.observe({ entryTypes: ['measure'] });
    }
  }, []);
};

// Combined performance hook
export const usePerformanceMonitoring = (componentName) => {
  const performance = usePerformance(componentName);
  const memory = useMemoryUsage();
  const network = useNetworkPerformance();
  
  useLoadTime(componentName);
  useResourceTiming();
  useBundleSize();

  return {
    performance,
    memory,
    network,
  };
}; 