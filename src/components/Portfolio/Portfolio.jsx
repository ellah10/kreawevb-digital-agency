import './Portfolio.scss';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const projects = [
  { name:'Savana Market', category:'E-commerce', description:'Marketplace de produits artisanaux africains avec paiement mobile intégré.', color:'#7B6FE8', image:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop' },
  { name:'FlowDesk',      category:'Dashboard',  description:"Outil de gestion de tâches et de suivi de projets pour les équipes remote.", color:'#9D94F2', image:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop' },
  { name:'Clinique Espoir',category:'Site vitrine',description:'Site moderne pour un centre médical avec prise de rendez-vous en ligne.',  color:'#6B5FD8', image:'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&q=80&auto=format&fit=crop' },
];

export default function Portfolio() {
  const headerRef = useScrollReveal();
  const card1Ref  = useScrollReveal({ threshold: 0.1 });
  const card2Ref  = useScrollReveal({ threshold: 0.1 });
  const card3Ref  = useScrollReveal({ threshold: 0.1 });
  const cardRefs  = [card1Ref, card2Ref, card3Ref];

  return (
    <section className="portfolio" id="projets">
      <div className="portfolio__inner">
        <header className="portfolio__header reveal-up" ref={headerRef}>
          <span className="portfolio__eyebrow">Nos projets</span>
          <h2 className="portfolio__title">Des réalisations qui <span>parlent</span></h2>
        </header>
        <div className="portfolio__grid">
          {projects.map((p, i) => (
            <article
              className={`project-card reveal-up delay-${i + 1}`}
              ref={cardRefs[i]}
              key={p.name}
            >
              <div className="project-card__visual" style={{ '--accent': p.color }}>
                {p.image && <img src={p.image} alt={p.name} className="project-card__img" loading="lazy" />}
                <span className="project-card__tag">{p.category}</span>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__name">{p.name}</h3>
                <p className="project-card__desc">{p.description}</p>
                <a href="#contact" className="project-card__link">
                  Voir le projet
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
