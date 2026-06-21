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

  // Sur une sous-route (/services/:id) les ancres doivent pointer vers /#anchor
  const isSubRoute = location.pathname !== '/';
  const href = (anchor) => isSubRoute ? `/#${anchor}` : `#${anchor}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="/" className="navbar__logo">
          <img src={Logo} alt="Kreaweb" />
        </a>

        <nav className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}>
          {links.map((l) => (
            <a key={l.anchor} href={href(l.anchor)} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={href('contact')} className="navbar__cta navbar__cta--mobile" onClick={() => setOpen(false)}>
            Démarrer un projet
          </a>
        </nav>

        <a href={href('contact')} className="navbar__cta">Démarrer un projet</a>

        <button
          className="navbar__burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}