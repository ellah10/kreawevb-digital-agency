import { Link } from 'react-router-dom';
import './Services.scss';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { services } from '../../data/services';

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

export default function Services() {
  const headerRef   = useScrollReveal();
  const featuredRef = useScrollReveal({ threshold: 0.1 });
  const card1Ref    = useScrollReveal({ threshold: 0.1 });
  const card2Ref    = useScrollReveal({ threshold: 0.1 });
  const card3Ref    = useScrollReveal({ threshold: 0.1 });
  const cardRefs    = [card1Ref, card2Ref, card3Ref];

  const featured = services[0];
  const rest     = services.slice(1);

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
          {/* Card featured */}
          <article className="service-card service-card--featured reveal-left" ref={featuredRef}>
            <div className="service-card__visual">
              <img src={featured.image} alt={featured.title} loading="lazy" className="service-card__img" />
              <div className="service-card__overlay" />
            </div>
            <div className="service-card__body">
              <div className="service-card__top">
                <span className="service-card__tag">{featured.tag}</span>
              </div>
              <h3 className="service-card__title">{featured.title}</h3>
              <p className="service-card__desc">{featured.tagline}</p>
              <Link to={`/services/${featured.id}`} className="service-card__link">
                En savoir plus <ArrowIcon />
              </Link>
            </div>
          </article>

          {/* 3 cards secondaires */}
          <div className="services__secondary">
            {rest.map((s, i) => (
              <article
                className={`service-card service-card--small reveal-right delay-${i + 1}`}
                ref={cardRefs[i]}
                key={s.id}
              >
                <div className="service-card__visual">
                  <img src={s.image} alt={s.title} loading="lazy" className="service-card__img" />
                  <div className="service-card__overlay" />
                </div>
                <div className="service-card__body">
                  <div className="service-card__top">
                    <span className="service-card__tag">{s.tag}</span>
                  </div>
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__desc">{s.tagline}</p>
                  <Link to={`/services/${s.id}`} className="service-card__link">
                    En savoir plus <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
