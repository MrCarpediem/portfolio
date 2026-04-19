import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const SplashLoader = ({ onAnimationComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;

    if (!container || !textEl) return;

    const letters = textEl.querySelectorAll('.letter');

    // Set initial state
    gsap.set(letters, {
      opacity: 0,
      y: 50,
      rotateX: -90,
    });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(container, {
          opacity: 0,
          duration: 0.6,
          ease: 'power2.inOut',
          onComplete: () => {
            setIsMounted(false);
            if (onAnimationComplete) onAnimationComplete();
          }
        });
      },
    });

    // Animate letters in
    tl.to(letters, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
      stagger: 0.08,
    })
    // Add glow
    .to(textEl, {
      textShadow: '0 0 40px rgba(184, 242, 230, 0.8), 0 0 80px rgba(184, 242, 230, 0.4)',
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.3')
    // Hold
    .to({}, { duration: 0.8 });

    return () => tl.kill();
  }, [onAnimationComplete]);

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        zIndex: 100000,
        opacity: 1,
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(184, 242, 230, 0.1) 0%, transparent 70%)',
          animation: 'pulse 3s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      <div
        ref={textRef}
        style={{
          display: 'flex',
          gap: '4px',
          perspective: '500px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {"Prem Prakash".split("").map((char, i) => (
          <span
            key={i}
            className="letter"
            style={{
              display: 'inline-block',
              fontSize: '4rem',
              fontWeight: 'bold',
              color: '#b8f2e6',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              minWidth: char === ' ' ? '1rem' : 'auto',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default SplashLoader;