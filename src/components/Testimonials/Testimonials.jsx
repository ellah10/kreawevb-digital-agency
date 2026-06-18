import './Testimonials.scss';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const testimonials = [
  {
    quote: "Kreaweb a transformé notre vision en un site qui nous ressemble vraiment. Professionnels, à l'écoute et toujours dans les délais.",
    name: 'Aïcha Fofana',
    role: 'Fondatrice, Maison Lumé',
    initials: 'AF',
    gradient: 'linear-gradient(150deg,#8B82EC,#6A61C9)',
  },
  {
    quote: "Une équipe qui comprend le marché local tout en livrant un produit aux standards internationaux. Notre trafic a doublé en trois mois.",
    name: 'Kossi Mensah',
    role: 'CEO, Atlas Finance',
    initials: 'KM',
    gradient: 'linear-gradient(150deg,#6A61C9,#241A47)',
  },
  {
    quote: "Du wireframe au lancement, chaque étape était claire. Kreaweb est devenu un vrai partenaire de notre croissance digitale.",
    name: 'Nadia Agbeko',
    role: 'Directrice marketing, Orbit Studio',
    initials: 'NA',
    gradient: 'linear-gradient(150deg,#AFA6E7,#7B6FE8)',
  },
];

const clients = [
  {
    name: 'Lumé',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18"/>
      </svg>
    ),
  },
  {
    name: 'Atlas',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
  {
    name: 'Orbit',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/>
        <path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/>
        <path d="M2 12h2"/><path d="M20 12h2"/>
      </svg>
    ),
  },
  {
    name: 'Nimbus',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/>
      </svg>
    ),
  },
  {
    name: 'Verda',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 2v2"/><path d="M5 2v2"/>
        <path d="M5 3h9a1 1 0 0 1 1 1v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a1 1 0 0 1 1-1z"/>
        <path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>
      </svg>
    ),
  },
];

function Stars() {
  return (
    <div className="testimonial-card__stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#E8C97B" stroke="none">
          <path d="M11.5 1.5 14.6 8l7.1.8-5.3 4.8 1.5 7-6.4-3.6L6.6 20.6l1.5-7L2.8 8.8 9.9 8z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const headerRef = useScrollReveal();
  const c1Ref     = useScrollReveal({ threshold: 0.1 });
  const c2Ref     = useScrollReveal({ threshold: 0.1 });
  const c3Ref     = useScrollReveal({ threshold: 0.1 });
  const logosRef  = useScrollReveal();
  const cardRefs  = [c1Ref, c2Ref, c3Ref];

  return (
    <section className="testimonials" id="temoignages">
      <div className="testimonials__inner">

        <header className="testimonials__header reveal-up" ref={headerRef}>
          <span className="testimonials__eyebrow">
            <span className="testimonials__eyebrow-line" />
            Témoignages
            <span className="testimonials__eyebrow-line" />
          </span>
          <h2 className="testimonials__title">
            Ce que disent nos <em>clients</em>
          </h2>
        </header>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <article
              className={`testimonial-card reveal-up delay-${i + 1}`}
              ref={cardRefs[i]}
              key={t.name}
            >
              <span className="testimonial-card__quote-mark" aria-hidden="true">&ldquo;</span>
              <Stars />
              <p className="testimonial-card__text">{t.quote}</p>
              <div className="testimonial-card__author">
                <div
                  className="testimonial-card__avatar"
                  style={{ background: t.gradient }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="testimonials__clients reveal-up" ref={logosRef}>
          <p className="testimonials__clients-label">Ils nous ont fait confiance</p>
          <div className="testimonials__logos">
            {clients.map((c) => (
              <div className="testimonials__logo" key={c.name}>
                {c.icon}
                <span>{c.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}