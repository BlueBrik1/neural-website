import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export const FadeInText = ({ children, delay = 0, className = '' }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.set(element, { opacity: 0, y: 30 });
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: delay,
            ease: "power2.out"
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export const StaggeredText = ({ text, className = '', delay = 0 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll('.word');
    
    gsap.set(words, { opacity: 0, y: 20 });
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(words, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: delay,
            stagger: 0.1,
            ease: "power2.out"
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={containerRef} className={className}>
      {text.split(' ').map((word, index) => (
        <span key={index} className="word inline-block mr-2">
          {word}
        </span>
      ))}
    </div>
  );
};

export const GlowText = ({ children, className = '', hoverColor = '#ff6b35' }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseEnter = () => {
      gsap.to(element, {
        textShadow: `0 0 20px ${hoverColor}, 0 0 30px ${hoverColor}, 0 0 40px ${hoverColor}`,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        textShadow: 'none',
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hoverColor]);

  return (
    <div ref={elementRef} className={`cursor-pointer ${className}`}>
      {children}
    </div>
  );
};

export const SkewText = ({ children, className = '' }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseEnter = () => {
      gsap.to(element, {
        skewX: -2,
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        skewX: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={elementRef} className={`cursor-pointer ${className}`}>
      {children}
    </div>
  );
};

export const RotatingTaglines = ({ taglines, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const interval = setInterval(() => {
      gsap.to(element, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setCurrentIndex((prev) => (prev + 1) % taglines.length);
          gsap.fromTo(element, 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
          );
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <div ref={elementRef} className={className}>
      {taglines[currentIndex]}
    </div>
  );
};

export const PulseButton = ({ children, className = '', onClick }) => {
  const buttonRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseEnter = () => {
      setIsHovering(true);
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`relative overflow-hidden ${className}`}
      style={{
        background: isHovering 
          ? 'linear-gradient(135deg, #ff6b35, #ff8555, #ff6b35)'
          : 'linear-gradient(135deg, #ff6b35, #ff5722)',
        backgroundSize: isHovering ? '200% 100%' : '100% 100%',
        animation: isHovering ? 'shimmer 1.5s infinite' : 'pulse 2s infinite',
      }}
    >
      {children}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 107, 53, 0.3); }
          50% { box-shadow: 0 0 30px rgba(255, 107, 53, 0.6); }
        }
      `}</style>
    </button>
  );
};