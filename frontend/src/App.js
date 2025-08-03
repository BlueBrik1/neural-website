import React, { useEffect, Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useGtagPageview } from "./hooks/useGtagPageview";
import { initPerformanceOptimizations } from "./utils/performance";

// Enhanced lazy loading with retry mechanism
const lazyLoad = (importFunc, retries = 3) => {
  return lazy(() => {
    return new Promise((resolve, reject) => {
      const attempt = () => {
        importFunc()
          .then(resolve)
          .catch((error) => {
            if (retries > 0) {
              retries--;
              setTimeout(attempt, 1000);
            } else {
              reject(error);
            }
          });
      };
      attempt();
    });
  });
};

// Lazy load large page components for code splitting with retry mechanism
const Homepage = lazyLoad(() => import("./pages/Homepage"));
const Contact = lazyLoad(() => import("./pages/Contact"));
const Hiring = lazyLoad(() => import("./pages/Hiring"));
const Vision = lazyLoad(() => import("./pages/Vision"));
const Preorder = lazyLoad(() => import("./pages/Preorder"));

// Enhanced loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-black text-white">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mb-4"></div>
      <p className="text-lg">Loading Neural...</p>
    </div>
  </div>
);

// Error boundary for lazy loaded components
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="flex items-center justify-center min-h-screen bg-black text-white">
    <div className="text-center max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-red-400">Something went wrong</h2>
      <p className="text-gray-300 mb-4">We're having trouble loading this page. Please try again.</p>
      <button
        onClick={resetErrorBoundary}
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  resetErrorBoundary = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} resetErrorBoundary={this.resetErrorBoundary} />;
    }

    return this.props.children;
  }
}

// Service Worker Registration
const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered successfully:', registration);
      
      // Check for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // New content is available, show update notification
            if (confirm('New version available! Reload to update?')) {
              window.location.reload();
            }
          }
        });
      });
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }
};

const ScrollToTop = React.memo(function ScrollToTop() {
  const location = useLocation();
  
  // Track pageviews with Google Analytics
  useGtagPageview();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    // No cleanup needed
  }, [location]);
  return null;
});

const App = React.memo(function App() {
  useEffect(() => {
    document.body.classList.add('dark');
    
    // Initialize performance optimizations
    initPerformanceOptimizations();
    
    // Register service worker
    registerServiceWorker();
    
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical images
      const criticalImages = [
        '/logo.png',
        '/android-chrome-192x192.png',
        '/android-chrome-512x512.png'
      ];
      
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();
    
    // No cleanup needed for theme
  }, []);

  return (
    <div className="App min-h-screen bg-black">
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/hiring" element={<Hiring />} />
                <Route path="/vision" element={<Vision />} />
                <Route path="/preorder" element={<Preorder />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
});

export default App;