import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const EnhancedCursorBackground = () => {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorPosRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const nodesRef = useRef([]);
  const animationRef = useRef();
  const [isHovering, setIsHovering] = useState(false);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Initialize ambient particles
    particlesRef.current = Array.from({ length: 120 }, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.6 + 0.3,
      pulseOffset: Math.random() * Math.PI * 2
    }));

    // Initialize neural network nodes
    nodesRef.current = Array.from({ length: 25 }, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      size: Math.random() * 5 + 3,
      connections: [],
      pulseOffset: Math.random() * Math.PI * 2
    }));

    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Create ambient glow effect
      const ambientGradient = ctx.createRadialGradient(
        dimensions.width / 2, dimensions.height / 2, 0,
        dimensions.width / 2, dimensions.height / 2, dimensions.width / 2
      );
      ambientGradient.addColorStop(0, 'rgba(255, 107, 53, 0.03)');
      ambientGradient.addColorStop(0.5, 'rgba(255, 107, 53, 0.02)');
      ambientGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = ambientGradient;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      // Cursor reactive glow
      const cursorDistance = Math.sqrt(
        Math.pow(cursorPosRef.current.x - dimensions.width / 2, 2) +
        Math.pow(cursorPosRef.current.y - dimensions.height / 2, 2)
      );
      const cursorInfluence = Math.max(0, 1 - cursorDistance / (dimensions.width * 0.3));
      
      const cursorGradient = ctx.createRadialGradient(
        cursorPosRef.current.x, cursorPosRef.current.y, 0,
        cursorPosRef.current.x, cursorPosRef.current.y, 150 + cursorInfluence * 100
      );
      cursorGradient.addColorStop(0, `rgba(255, 107, 53, ${0.15 + cursorInfluence * 0.1})`);
      cursorGradient.addColorStop(0.5, `rgba(255, 107, 53, ${0.08 + cursorInfluence * 0.05})`);
      cursorGradient.addColorStop(1, 'rgba(255, 107, 53, 0)');
      ctx.fillStyle = cursorGradient;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      // Update and draw ambient particles
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Cursor attraction
        const dx = cursorPosRef.current.x - particle.x;
        const dy = cursorPosRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          const force = (120 - distance) / 120;
          particle.vx += dx * force * 0.0001;
          particle.vy += dy * force * 0.0001;
        }

        // Boundary check with smooth wrap
        if (particle.x < -50) particle.x = dimensions.width + 50;
        if (particle.x > dimensions.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = dimensions.height + 50;
        if (particle.y > dimensions.height + 50) particle.y = -50;

        // Pulsing effect
        const pulse = Math.sin(time * 2 + particle.pulseOffset) * 0.3 + 0.7;
        
        // Draw particle with enhanced glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * pulse, 0, Math.PI * 2);
        
        // Glow effect
        const glowGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 4
        );
        glowGradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity * pulse * 0.8})`);
        glowGradient.addColorStop(0.3, `rgba(255, 107, 53, ${particle.opacity * 0.4})`);
        glowGradient.addColorStop(1, 'rgba(255, 107, 53, 0)');
        
        ctx.fillStyle = glowGradient;
        ctx.fill();
      });

      // Update and draw neural network
      nodesRef.current.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        // Boundary check
        if (node.x < 0 || node.x > dimensions.width) node.vx *= -1;
        if (node.y < 0 || node.y > dimensions.height) node.vy *= -1;

        // Draw connections
        nodesRef.current.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = otherNode.x - node.x;
            const dy = otherNode.y - node.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 180) {
              const opacity = (1 - distance / 180) * 0.2;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.strokeStyle = `rgba(255, 107, 53, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });

        // Draw node with pulse
        const pulse = Math.sin(time * 1.5 + node.pulseOffset) * 0.2 + 0.8;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * pulse, 0, Math.PI * 2);
        
        const nodeGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.size * 2
        );
        nodeGradient.addColorStop(0, `rgba(255, 255, 255, ${0.5 * pulse})`);
        nodeGradient.addColorStop(0.5, `rgba(255, 107, 53, ${0.3 * pulse})`);
        nodeGradient.addColorStop(1, 'rgba(255, 107, 53, 0)');
        
        ctx.fillStyle = nodeGradient;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Smooth cursor following with GSAP
      gsap.to(cursorPosRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      
      {/* Cursor follower */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-50 transition-all duration-300 ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          left: mouseRef.current.x - 15,
          top: mouseRef.current.y - 15,
          width: '30px',
          height: '30px',
          background: isHovering 
            ? 'radial-gradient(circle, rgba(255, 107, 53, 0.6) 0%, rgba(255, 107, 53, 0.3) 30%, rgba(255, 107, 53, 0.1) 60%, transparent 100%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 107, 53, 0.4) 30%, rgba(255, 107, 53, 0.1) 60%, transparent 100%)',
          borderRadius: '50%',
          border: '2px solid rgba(255, 107, 53, 0.5)',
          boxShadow: isHovering 
            ? '0 0 20px rgba(255, 107, 53, 0.6)' 
            : '0 0 10px rgba(255, 107, 53, 0.3)',
        }}
      />
    </>
  );
};

export default EnhancedCursorBackground;