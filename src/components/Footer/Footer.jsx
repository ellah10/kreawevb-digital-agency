import './Footer.scss';
import Logo from '../../assets/Frame 2.png';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const cols = [
  {
    heading: 'Agence',
    items: [
      { label: 'À propos', href: '#apropos' },
      { label: 'Services', href: '#services' },
      { label: 'Projets', href: '#projets' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    heading: 'Services',
    items: [
      { label: 'Sites web', href: '#services' },
      { label: 'Applications', href: '#services' },
      { label: 'Design UI/UX', href: '#services' },
      { label: 'SEO', href: '#services' },
      { label: 'Marketing digital', href: '#services' },
    ],
  },
  {
    heading: 'Contact',
    items: [
      { label: 'kreaweb0@gmail.com', href: 'mailto:kreaweb0@gmail.com' },
      { label: 'Lomé, Togo', href: '#' },
      { label: '+228 90 32 65 95', href: 'tel:+22890326595' },
    ],
  },
];

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/kreaweb0/',
    icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/kreaweb__?igsh=MXNuaTJpaWg0bjNl',
    icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/14enpJQdkQ4/',
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@kreaweb?_r=1&_t=ZN-97GVI2qYtkc',
    icon: <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />,
  },
];

export default function Footer() {
  const gridRef = useScrollReveal({ threshold: 0.05 });

  return (
    <footer className="footer">

      {/* ── Grille principale ── */}
      <div className="footer__grid reveal-up" ref={gridRef}>
        <div className="footer__brand">
          <a href="#" className="footer__logo">
            <img src={Logo} alt="Kreaweb" />
          </a>
          <p className="footer__tagline">
            Nous concevons et assemblons des produits digitaux — du premier wireframe au déploiement.
          </p>
          <div className="footer__socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="footer__social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.heading} className="footer__col">
            <span className="footer__col-heading">{col.heading}</span>
            <ul className="footer__col-list">
              {col.items.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer__col-link">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Bottom bar — EN DEHORS de footer__grid ── */}
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Kreaweb. Tous droits réservés.</span>
      </div>

    </footer>
  );
}