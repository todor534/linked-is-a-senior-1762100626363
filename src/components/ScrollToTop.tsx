import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return reduced;
}

type Props = {
  withButton?: boolean;
  threshold?: number;
};

const styles: Record<string, CSSProperties> = {
  button: {
    position: 'fixed',
    right: '24px',
    bottom: '24px',
    width: '48px',
    height: '48px',
    borderRadius: '9999px',
    border: '1px solid rgba(0,0,0,0.08)',
    background: '#0f172a',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow:
      '0 2px 8px rgba(0,0,0,0.15), 0 6px 20px rgba(2,132,199,0.15)',
    cursor: 'pointer',
    zIndex: 1000,
    opacity: 0,
    transform: 'translateY(8px) scale(0.98)',
    pointerEvents: 'none',
    transition: 'opacity 200ms ease, transform 200ms ease, box-shadow 200ms ease, background 200ms ease',
    WebkitTapHighlightColor: 'transparent',
  },
  buttonVisible: {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
    pointerEvents: 'auto',
  },
  buttonHover: {
    boxShadow:
      '0 4px 12px rgba(0,0,0,0.18), 0 10px 28px rgba(2,132,199,0.22)',
    background: 'linear-gradient(135deg, #0f172a 0%, #0284c7 100%)',
  },
  buttonFocus: {
    outline: 'none',
    boxShadow:
      '0 0 0 3px rgba(2,132,199,0.35), 0 8px 24px rgba(2,132,199,0.25)',
  },
  srOnly: {
    position: 'absolute',
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    whiteSpace: 'nowrap',
    borderWidth: 0,
  },
  svg: {
    width: '22px',
    height: '22px',
    display: 'block',
  },
};

export default function ScrollToTop({ withButton = true, threshold = 280 }: Props) {
  const location = useLocation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const rafPending = useRef(false);

  // Scroll to top on route change
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const behavior: ScrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';
    try {
      window.scrollTo({ top: 0, behavior });
    } catch {
      // Fallback for older browsers
      window.scrollTo(0, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, prefersReducedMotion]);

  // Show/hide button based on scroll position
  useEffect(() => {
    if (typeof window === 'undefined' || !withButton) return;

    const onScroll = () => {
      if (rafPending.current) return;
      rafPending.current = true;
      requestAnimationFrame(() => {
        rafPending.current = false;
        const y = window.scrollY || document.documentElement.scrollTop || 0;
        setVisible(y > threshold);
      });
    };

    onScroll(); // initialize
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [threshold, withButton]);

  const handleClick = () => {
    const behavior: ScrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';
    try {
      window.scrollTo({ top: 0, behavior });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  if (!withButton) return null;

  const style: CSSProperties = {
    ...styles.button,
    ...(visible ? styles.buttonVisible : null),
    ...(hovered ? styles.buttonHover : null),
    ...(focused ? styles.buttonFocus : null),
    ...(prefersReducedMotion ? { transition: 'none' } : null),
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={handleClick}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <span style={styles.srOnly}>Back to top</span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        style={styles.svg}
        aria-hidden="true"
        focusable="false"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}