import './Services.scss';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const services = [
  {
    title: 'Conception UI/UX',
    description: 'Wireframes, prototypes et interfaces intuitives pensées pour convertir vos visiteurs en clients.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80&auto=format&fit=crop',
    tag: 'Design', featured: true,
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>),
  },
  {
    title: 'Développement Web',
    description: 'Sites vitrine, e-commerce et dashboards sur mesure, en React et performants.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80&auto=format&fit=crop',
    tag: 'Dev', featured: false,
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>),
  },
  {
    title: 'Référencement SEO',
    description: 'Audit, optimisation technique et stratégie de contenu pour gagner en visibilité.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80&auto=format&fit=crop',
    tag: 'SEO', featured: false,
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>),
  },
  {
    title: 'Marketing Digital',
    description: 'Création de contenu, branding, réseaux sociaux et stratégie digitale complète.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80&auto=format&fit=crop',
    tag: 'Marketing', featured: false,
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>),
  },
];

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

export default function Services() {
  const headerRef  = useScrollReveal();
  const featuredRef = useScrollReveal({ threshold: 0.1 });
  const card1Ref   = useScrollReveal({ threshold: 0.1 });
  const card2Ref   = useScrollReveal({ threshold: 0.1 });
  const card3Ref   = useScrollReveal({ threshold: 0.1 });

  const featured = services.find((s) => s.featured);
  const rest = services.filter((s) => !s.featured);
  const cardRefs = [card1Ref, card2Ref, card3Ref];

  return (
    <section className="services" id="services">
      <div className="services__inner">
        <header className="services__header reveal-up" ref={headerRef}>
          <span className="services__eyebrow">
            <span className="services__eyebrow-line" />
            Nos services
            <span className="services__eyebrow-line" />
          </span>
          <h2 className="services__title">
            Tout ce qu'il faut pour <em>exister en ligne</em>
          </h2>
          <p className="services__subtitle">
            De la conception au lancement, on couvre chaque étape de votre présence digitale.
          </p>
        </header>

        <div className="services__layout">
          <article className="service-card service-card--featured reveal-left" ref={featuredRef}>
            <div className="service-card__visual">
              <img src={featured.image} alt={featured.title} loading="lazy" className="service-card__img" />
              <div className="service-card__overlay" />
            </div>
            <div className="service-card__body">
              <div className="service-card__top">
                <span className="service-card__tag">{featured.tag}</span>
                <div className="service-card__icon">{featured.icon}</div>
              </div>
              <h3 className="service-card__title">{featured.title}</h3>
              <p className="service-card__desc">{featured.description}</p>
              <a href="#contact" className="service-card__link">En savoir plus <ArrowIcon /></a>
            </div>
          </article>

          <div className="services__secondary">
            {rest.map((s, i) => (
              <article
                className={`service-card service-card--small reveal-right delay-${i + 1}`}
                ref={cardRefs[i]}
                key={s.title}
              >
                <div className="service-card__visual">
                  <img src={s.image} alt={s.title} loading="lazy" className="service-card__img" />
                  <div className="service-card__overlay" />
                </div>
                <div className="service-card__body">
                  <div className="service-card__top">
                    <span className="service-card__tag">{s.tag}</span>
                    <div className="service-card__icon">{s.icon}</div>
                  </div>
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__desc">{s.description}</p>
                  <a href="#contact" className="service-card__link">En savoir plus <ArrowIcon /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
