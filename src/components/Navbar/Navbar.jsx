import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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

  const location      = useLocation();
  const navigate      = useNavigate();
  const pendingAnchor = useRef(null);

  const scrollToAnchor = useCallback((anchor) => {
    const el = document.getElementById(anchor);
    if (!el) return;
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
    const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  const handleAnchorClick = useCallback((e, anchor) => {
    e.preventDefault();
    setOpen(false);
    document.body.style.overflow = '';

    if (location.pathname !== '/') {
      // Stocker l'ancre, naviguer vers /, puis scroller après mount
      pendingAnchor.current = anchor;
      navigate('/');
    } else {
      scrollToAnchor(anchor);
    }
  }, [location.pathname, navigate, scrollToAnchor]);

  // Dès qu'on est sur /, exécuter l'ancre en attente
  useEffect(() => {
    if (location.pathname === '/' && pendingAnchor.current) {
      const anchor = pendingAnchor.current;
      pendingAnchor.current = null;
      // Double rAF : garantit que React a fini de peindre le DOM
      requestAnimationFrame(() => {
        requestAnimationFrame(() => scrollToAnchor(anchor));
      });
    }
  }, [location.pathname, scrollToAnchor]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${open ? 'navbar--open' : ''}`}>
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo">
            <img src={Logo} alt="Kreaweb" />
          </Link>

          <nav
            className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}
            onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
          >
            <div className="navbar__nav-header">
              <Link to="/" className="navbar__nav-logo" onClick={() => setOpen(false)}>
                <img src={Logo} alt="Kreaweb" />
              </Link>

              <button className="navbar__close" onClick={() => setOpen(false)} aria-label="Fermer">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="navbar__nav-links">
              {links.map((link, i) => (
                <a
                  key={link.anchor}
                  href={`#${link.anchor}`}
                  className="navbar__nav-link"
                  style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
                  onClick={(e) => handleAnchorClick(e, link.anchor)}
                >
                  <span className="navbar__nav-link-num">0{i + 1}</span>
                  {link.label}
                </a>
              ))}
            </div>

            <div className="navbar__nav-footer">
              <a
                href="#contact"
                className="navbar__cta navbar__cta--mobile"
                onClick={(e) => handleAnchorClick(e, 'contact')}
              >
                Démarrer un projet
              </a>

              <div className="navbar__nav-socials">
                <a href="https://www.instagram.com/kreaweb__" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  Instagram
                </a>
                <a href="https://www.tiktok.com/@kreaweb" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  TikTok
                </a>
                <a href="https://www.linkedin.com/company/kreaweb0/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  LinkedIn
                </a>
              </div>
            </div>
          </nav>

          <a href="#contact" className="navbar__cta" onClick={(e) => handleAnchorClick(e, 'contact')}>
            Démarrer un projet
          </a>

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

      <div
        className={`navbar__overlay ${open ? 'navbar__overlay--visible' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}