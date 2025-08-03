import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = null,
  threshold = 0.1,
  rootMargin = '50px',
  onLoad = null,
  onError = null,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Create intersection observer for lazy loading
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.unobserve(img);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observerRef.current.observe(img);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div className={`lazy-image-container ${className}`} ref={imgRef}>
      {/* Placeholder */}
      {!isLoaded && !hasError && placeholder && (
        <div className="lazy-image-placeholder">
          {placeholder}
        </div>
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="lazy-image-error">
          <div className="flex items-center justify-center w-full h-full bg-gray-800 text-gray-400">
            <span>Failed to load image</span>
          </div>
        </div>
      )}
      
      {/* Actual image */}
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${isLoaded ? 'loaded' : 'loading'}`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
          {...props}
        />
      )}
      
      {/* Loading skeleton */}
      {!isLoaded && !hasError && !placeholder && (
        <div className="lazy-image-skeleton animate-pulse bg-gray-700 w-full h-full" />
      )}
    </div>
  );
};

export default LazyImage; 