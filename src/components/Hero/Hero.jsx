import './Hero.scss';
import GridDark from '../../assets/grid-dark.svg';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Hero() {
  const contentRef = useScrollReveal({ threshold: 0.1 });
  const visualRef  = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="hero" id="accueil">
      <div className="hero__inner">

        <div className="hero__content reveal-left" ref={contentRef}>
          {/* <span className="hero__eyebrow">
            <span className="hero__eyebrow-line" />
            Agence Digitale · Lomé
          </span> */}

          <h1 className="hero__title">
            Nous <span>construisons</span>{' '}
            votre web.
          </h1>

          <p className="hero__text">
            Une idée, une interface qui fonctionne. Kreaweb conçoit
            et assemble des produits digitaux, du premier wireframe
            à la dernière ligne de code.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="hero__btn-primary">Démarrer un projet</a>
            <a href="#projets" className="hero__btn-ghost">Voir les projets</a>
          </div>
        </div>

        <div className="hero__visual reveal-right" ref={visualRef} aria-hidden="true">
          <img src={GridDark} alt="" className="hero__grid" />
        </div>

      </div>
    </section>
  );
}