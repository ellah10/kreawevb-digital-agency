import './About.scss';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const stats = [
  { value: '15+', label: 'Projets livrés' },
  { value: '100%', label: 'Clients satisfaits' },
  { value: 'Lomé', label: 'Basés au Togo' },
];

export default function About() {
  const visualRef  = useScrollReveal({ threshold: 0.1 });
  const contentRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="about" id="apropos">
      <div className="about__inner">
        <div className="about__visual reveal-left" ref={visualRef} aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=720&q=80&auto=format&fit=crop"
            alt="Équipe Kreaweb au travail"
            className="about__img"
            loading="lazy"
          />
        </div>

        <div className="about__content reveal-right" ref={contentRef}>
          <span className="about__eyebrow">Qui sommes-nous</span>
          <h2 className="about__title">
            Une agence digitale née à Lomé, pensée pour l'Afrique
          </h2>
          <p className="about__text">
            Kreaweb conçoit des expériences digitales modernes pour les entreprises
            qui veulent se démarquer. Basés à Lomé, nous comprenons le marché local
            et nous parlons le langage du web international.
          </p>

          <div className="about__stats">
            {stats.map((s) => (
              <div className="about__stat" key={s.label}>
                <span className="about__stat-value">{s.value}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <a href="#" className="about__btn">Notre histoire</a>
        </div>
      </div>
    </section>
  );
}