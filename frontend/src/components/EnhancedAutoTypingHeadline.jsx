import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const EnhancedAutoTypingHeadline = ({ phrases, className = '', speed = 100, deleteSpeed = 50, pauseTime = 2000 }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Animate cursor
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isTyping) {
      if (charIndex < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        // Wait before starting to delete
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseTime);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deleteSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Move to next phrase
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsTyping(true);
      }
    }
  }, [currentPhraseIndex, charIndex, isTyping, phrases, speed, deleteSpeed, pauseTime]);

  return (
    <span className={className}>
      {currentText}
      <span 
        ref={cursorRef}
        className="inline-block w-1 h-[1em] bg-orange-400 ml-1"
        style={{ verticalAlign: 'baseline' }}
      />
    </span>
  );
};

export default EnhancedAutoTypingHeadline;