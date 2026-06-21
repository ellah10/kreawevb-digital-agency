import { useState } from 'react';
import './Faq.scss';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const faqs = [
  { q:'Quels types de projets réalisez-vous ?',           a:"Nous réalisons des sites vitrine, des plateformes e-commerce, des dashboards, des applications web sur mesure et des identités visuelles. Nous accompagnons aussi les entreprises dans leur stratégie de marketing digital et de référencement SEO." },
  { q:'Combien coûte un projet web avec Kreaweb ?',       a:"Chaque projet est unique. Le tarif dépend de la complexité, des fonctionnalités souhaitées et du délai. Nous proposons une première consultation gratuite pour estimer votre projet sans engagement." },
  { q:"Quels sont vos délais de livraison ?",             a:"Un site vitrine simple est livré en 2 à 3 semaines. Un projet plus complexe (e-commerce, dashboard, application) peut prendre de 4 à 8 semaines selon les spécifications. Nous vous communiquons un planning précis dès le début." },
  { q:"Travaillez-vous avec des clients hors du Togo ?",  a:"Absolument. Nous travaillons à distance avec des clients partout en Afrique francophone et au-delà. Nos outils de collaboration (Figma, Notion, WhatsApp, Zoom) nous permettent de gérer les projets efficacement à distance." },
  { q:"Que se passe-t-il après la livraison du projet ?", a:"Nous assurons une période de support post-lancement pour corriger d'éventuels bugs et vous former à la gestion de votre site. Des forfaits de maintenance mensuelle sont également disponibles." },
  { q:"Puis-je modifier mon site moi-même après livraison ?", a:"Oui. Selon la solution choisie, nous pouvons intégrer un CMS ou un panel d'administration pour que vous puissiez gérer vos contenus en autonomie. Une formation est incluse dans la livraison." },
];

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button className="faq-item__trigger" onClick={onToggle} aria-expanded={isOpen}>
        <span className="faq-item__question">{item.q}</span>
        <span className="faq-item__icon-wrap" aria-hidden="true">
          <span className="faq-item__icon">
            <span className="faq-item__icon-bar faq-item__icon-bar--horizontal" />
            <span className="faq-item__icon-bar faq-item__icon-bar--vertical" />
          </span>
        </span>
      </button>
      <div className="faq-item__body">
        <div className="faq-item__answer-wrap">
          <p className="faq-item__answer">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const headerRef = useScrollReveal();
  const listRef   = useScrollReveal({ threshold: 0.05 });
  const ctaRef    = useScrollReveal();

  return (
    <section className="faq" id="faq">
      <div className="faq__inner">
        <header className="faq__header reveal-up" ref={headerRef}>
          <span className="faq__eyebrow">
            <span className="faq__eyebrow-line" />FAQ<span className="faq__eyebrow-line" />
          </span>
          <h2 className="faq__title">Questions <em>fréquentes</em></h2>
          <p className="faq__subtitle">Tout ce que vous voulez savoir avant de démarrer un projet avec nous.</p>
        </header>
        <div className="faq__list reveal-up" ref={listRef}>
          {faqs.map((item, i) => (
            <AccordionItem key={i} item={item} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </div>
        <div className="faq__cta reveal-up" ref={ctaRef}>
          <p>Vous avez une autre question ?</p>
          <a href="#contact" className="faq__cta-btn">Contactez-nous</a>
        </div>
      </div>
    </section>
  );
}
