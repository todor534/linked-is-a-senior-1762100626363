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

  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link to="/" className="brand" aria-label="Linked home">
          <span className="brand-logo" aria-hidden="true" />
          <span>Linked</span>
        </Link>

        {!isCompact && (
          <>
            <nav className="nav" aria-label="Primary">
              <ul className="nav-list">
                {navItems.map((n) => (
                  <li key={n.to}>
                    <NavLink
                      to={n.to}
                      className="nav-link"
                      aria-current={location.pathname === n.to ? 'page' : undefined}
                    >
                      {n.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="nav">
              <Link to="/quote" className="btn btn-primary btn-sm">
                Get Started
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-sm">
                Schedule Call
              </Link>
            </div>
          </>
        )}

        {isCompact && (
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="nav-toggle"
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
            <span className="visually-hidden">Menu</span>
          </button>
        )}

        {isCompact && menuOpen && (
          <div id="mobile-menu" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: '10px 0 4px 0',
            width: '100%'
          }}>
            <nav aria-label="Mobile primary" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {navItems.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className="nav-link"
                  aria-current={location.pathname === n.to ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {n.label}
                </NavLink>
              ))}
            </nav>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              paddingTop: '8px',
              borderTop: '1px solid var(--border)'
            }}>
              <Link to="/quote" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
                Get Started
              </Link>
              <Link to="/contact" className="btn btn-secondary" onClick={() => setMenuOpen(false)}>
                Schedule Call
              </Link>
              <Link to="/work" className="btn btn-secondary" onClick={() => setMenuOpen(false)}>
                View Portfolio
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;