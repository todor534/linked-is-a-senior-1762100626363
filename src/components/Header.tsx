import React, { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

type CSS = React.CSSProperties;

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onResize = () => {
      const compact = window.innerWidth < 980;
      setIsCompact(compact);
      if (!compact) setMenuOpen(false);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    // Close menu on route change
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const navItems = useMemo(
    () => [
      { to: '/', label: 'Home' },
      { to: '/services', label: 'Services' },
      { to: '/work', label: 'Work' },
      { to: '/about', label: 'About' },
      { to: '/contact', label: 'Contact' },
    ],
    []
  );

  const ctas = useMemo(
    () => [
      { to: '/quote', label: 'Request a quote', variant: 'primary' as const },
      { to: '/contact', label: 'Book a free consult', variant: 'secondary' as const },
    ],
    []
  );

  const styles: Record<string, CSS> = {
    header: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: '#ffffffcc',
      backdropFilter: 'saturate(180%) blur(8px)',
      WebkitBackdropFilter: 'saturate(180%) blur(8px)',
      borderBottom: '1px solid #e9ecef',
    },
    inner: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '12px 16px',
    },
    row: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none',
      color: '#0b0c0e',
    },
    brandImg: {
      width: 32,
      height: 32,
      objectFit: 'contain',
      borderRadius: 6,
    },
    brandName: {
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: 0.2,
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flex: 1,
      justifyContent: 'center',
    },
    navLink: {
      color: '#2b2f36',
      textDecoration: 'none',
      fontSize: 14,
      padding: '8px 6px',
      borderRadius: 6,
      transition: 'background 0.15s ease, color 0.15s ease',
    },
    navLinkActive: {
      color: '#0b0c0e',
      background: '#f1f3f5',
    },
    ctas: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    },
    buttonBase: {
      fontSize: 14,
      fontWeight: 600,
      padding: '10px 14px',
      borderRadius: 8,
      border: '1px solid transparent',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      lineHeight: 1,
      transition: 'background 0.15s ease, color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease',
      whiteSpace: 'nowrap',
    },
    buttonPrimary: {
      background: '#111827',
      color: '#ffffff',
      borderColor: '#111827',
      boxShadow: '0 1px 0 rgba(0,0,0,0.06)',
    },
    buttonPrimaryHover: {
      background: '#0b1220',
      borderColor: '#0b1220',
    },
    buttonSecondary: {
      background: '#ffffff',
      color: '#111827',
      borderColor: '#cbd5e1',
    },
    buttonSecondaryHover: {
      background: '#f8fafc',
      borderColor: '#94a3b8',
    },
    menuBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 8,
      border: '1px solid #e2e8f0',
      background: '#ffffff',
      color: '#0b0c0e',
      cursor: 'pointer',
    },
    mobilePanel: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: '10px 0 4px 0',
    },
    mobileRow: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      paddingTop: 8,
      borderTop: '1px solid #e9ecef',
    },
    visuallyHidden: {
      position: 'absolute',
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: 'hidden',
      clip: 'rect(0,0,0,0)',
      border: 0,
      whiteSpace: 'nowrap',
    },
  };

  const renderNavLink = (to: string, label: string) => (
    <NavLink
      key={to}
      to={to}
      style={({ isActive }) => ({
        ...styles.navLink,
        ...(isActive ? styles.navLinkActive : null),
      })}
      onClick={() => setMenuOpen(false)}
    >
      {label}
    </NavLink>
  );

  const ButtonLink: React.FC<{ to: string; children: React.ReactNode; variant?: 'primary' | 'secondary' }> = ({
    to,
    children,
    variant = 'primary',
  }) => {
    const base = styles.buttonBase;
    const themed = variant === 'primary' ? styles.buttonPrimary : styles.buttonSecondary;
    const hover = variant === 'primary' ? styles.buttonPrimaryHover : styles.buttonSecondaryHover;

    const [isHover, setIsHover] = useState(false);
    return (
      <Link
        to={to}
        style={{ ...base, ...themed, ...(isHover ? hover : null) }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {children}
      </Link>
    );
  };

  return (
    <header style={styles.header}>
      <div style={styles.inner}>
        <div style={styles.row}>
          <Link to="/" style={styles.brand} aria-label="Linked home">
            <img src="https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762099399007-img-logo-mark.png" alt="" style={styles.brandImg} />
            <span style={styles.brandName}>Linked</span>
          </Link>

          {!isCompact && (
            <>
              <nav style={styles.nav} aria-label="Primary">
                {navItems.map((n) => renderNavLink(n.to, n.label))}
              </nav>
              <div style={styles.ctas}>
                <ButtonLink to={ctas[0].to} variant="primary">
                  {ctas[0].label}
                </ButtonLink>
                <ButtonLink to={ctas[1].to} variant="secondary">
                  {ctas[1].label}
                </ButtonLink>
              </div>
            </>
          )}

          {isCompact && (
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              style={styles.menuBtn}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d={menuOpen ? 'M6 6L18 18M6 18L18 6' : 'M3 6h18M3 12h18M3 18h18'}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span style={styles.visuallyHidden}>Menu</span>
            </button>
          )}
        </div>

        {isCompact && menuOpen && (
          <div id="mobile-menu" style={styles.mobilePanel}>
            <nav aria-label="Mobile primary" style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {navItems.map((n) => (
                <div key={n.to} style={{ display: 'flex' }}>
                  {renderNavLink(n.to, n.label)}
                </div>
              ))}
            </nav>
            <div style={styles.mobileRow}>
              <ButtonLink to={ctas[0].to} variant="primary">
                {ctas[0].label}
              </ButtonLink>
              <ButtonLink to={ctas[1].to} variant="secondary">
                {ctas[1].label}
              </ButtonLink>
              <Link
                to="/work"
                onClick={() => setMenuOpen(false)}
                style={{
                  ...styles.buttonBase,
                  ...styles.buttonSecondary,
                  justifyContent: 'center',
                }}
              >
                View portfolio
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;