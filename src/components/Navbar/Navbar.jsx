import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.scss';
import Logo from '../../assets/Frame 2.png';

const links = [
  { label: 'Services', anchor: 'services' },
  { label: 'Process',  anchor: 'process' },
  { label: 'Projets',  anchor: 'projets' },
  { label: 'À propos', anchor: 'apropos' },
  { label: 'Contact',  anchor: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const location = useLocation();

  const isSubRoute = location.pathname !== '/';
  const href = (anchor) => isSubRoute ? `/#${anchor}` : `#${anchor}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Bloquer le scroll body quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Fermer le menu au changement de route
  useEffect(() => { setOpen(false); }, [location.pathname]);

  // ✅ Fermer le menu avec la touche Échap
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${open ? 'navbar--open' : ''}`}>
        <div className="navbar__inner">
          <a href="/" className="navbar__logo">
            <img src={Logo} alt="Kreaweb" />
          </a>

          {/* ✅ onClick sur le fond du nav (e.target === e.currentTarget) ferme le menu */}
          <nav
            className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}
            onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
          >
            {/* Header du menu mobile */}
            <div className="navbar__nav-header">
              <a href="/" className="navbar__nav-logo">
                <img src={Logo} alt="Kreaweb" />
              </a>
              <button className="navbar__close" onClick={() => setOpen(false)} aria-label="Fermer">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Liens */}
            <div className="navbar__nav-links">
              {links.map((l, i) => (
                <a
                  key={l.anchor}
                  href={href(l.anchor)}
                  className="navbar__nav-link"
                  style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
                  onClick={() => setOpen(false)}
                >
                  <span className="navbar__nav-link-num">0{i + 1}</span>
                  {l.label}
                </a>
              ))}
            </div>

            {/* CTA mobile */}
            <div className="navbar__nav-footer">
              <a href={href('contact')} className="navbar__cta navbar__cta--mobile" onClick={() => setOpen(false)}>
                Démarrer un projet
              </a>
              <div className="navbar__nav-socials">
                <a href="https://www.instagram.com/kreaweb__" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@kreaweb" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/kreaweb0/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
                  </svg>
                </a>
              </div>
            </div>
          </nav>

          <a href={href('contact')} className="navbar__cta">Démarrer un projet</a>

          {/* Burger animé */}
          <button
            className={`navbar__burger ${open ? 'navbar__burger--open' : ''}`}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="navbar__burger-bar" />
            <span className="navbar__burger-bar" />
            <span className="navbar__burger-bar" />
          </button>
        </div>
      </header>

      {/* Overlay — désactivé (menu plein écran) */}
      <div
        className={`navbar__overlay ${open ? 'navbar__overlay--visible' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}