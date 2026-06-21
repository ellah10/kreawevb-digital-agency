import './Process.scss';
import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const tracks = [
  {
    id: 'web',
    label: 'Création Web & Design',
    tagline: 'Du wireframe au site live, on pilote chaque étape.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80&auto=format&fit=crop',
    steps: [
      {
        number: '01', title: 'Découverte & Stratégie',
        description: "On analyse vos besoins, vos objectifs et votre marché. Ensemble on définit la solution et le plan d'action adapté.",
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
      },
      {
        number: '02', title: 'Design UI/UX',
        description: "On crée les maquettes, l'identité visuelle et les prototypes interactifs. Vous validez avant qu'on code.",
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
      },
      {
        number: '03', title: 'Développement',
        description: 'On intègre chaque fonctionnalité avec soin. Code propre, performant et optimisé pour le référencement.',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>,
      },
      {
        number: '04', title: 'Lancement & Suivi',
        description: 'On déploie, on teste sur tous les appareils et on vous accompagne après la mise en ligne.',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>,
      },
    ],
  },
  {
    id: 'marketing',
    label: 'Marketing Digital & Branding',
    tagline: 'On construit votre présence, on amplifie votre impact.',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80&auto=format&fit=crop',
    steps: [
      {
        number: '01', title: 'Audit & Positionnement',
        description: "On analyse votre présence digitale actuelle et définissons votre identité de marque et votre différenciation.",
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
      },
      {
        number: '02', title: 'Création de contenu',
        description: 'On produit vos visuels, vos textes et vos supports de communication adaptés à chaque canal.',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>,
      },
      {
        number: '03', title: 'Diffusion & Gestion',
        description: 'On publie et gérons vos contenus sur les bons canaux pour toucher votre audience cible au bon moment.',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>,
      },
      {
        number: '04', title: 'Optimisation & ROI',
        description: 'On analyse les performances chaque mois et ajustons la stratégie pour maximiser votre retour sur investissement.',
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
      },
    ],
  },
];

// Hook pour animer les items de la timeline avec délai staggeré
function useTimelineReveal(activeTrack) {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setVisibleItems([]); // reset à chaque changement de track
    const track = tracks.find((t) => t.id === activeTrack);
    track.steps.forEach((_, i) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, i]);
      }, i * 150); // 150ms entre chaque item
    });
  }, [activeTrack]);

  return visibleItems;
}

export default function Process() {
  const [activeTrack, setActiveTrack] = useState('web');
  const headerRef  = useScrollReveal();
  const tabsRef    = useScrollReveal({ threshold: 0.1 });
  const bodyRef    = useScrollReveal({ threshold: 0.05 });
  const visibleItems = useTimelineReveal(activeTrack);

  const current = tracks.find((t) => t.id === activeTrack);

  const handleTabChange = (id) => {
    setActiveTrack(id);
  };

  return (
    <section className="process" id="process">
      <div className="process__inner">

        <header className="process__header reveal-up" ref={headerRef}>
          <span className="process__eyebrow">
            <span className="process__eyebrow-line" />
            Notre process
            <span className="process__eyebrow-line" />
          </span>
          <h2 className="process__title">Comment on <em>travaille</em></h2>
          <p className="process__subtitle">Une méthode rodée, deux expertises complémentaires.</p>
        </header>

        {/* Tabs */}
        <div className="process__tabs reveal-up" ref={tabsRef}>
          {tracks.map((t) => (
            <button
              key={t.id}
              className={`process__tab ${activeTrack === t.id ? 'process__tab--active' : ''}`}
              onClick={() => handleTabChange(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Layout : image gauche + timeline droite */}
        <div className="process__body reveal-up" ref={bodyRef}>

          {/* Image */}
          <div className="process__image-wrap">
            <img
              src={current.image}
              alt={current.label}
              className="process__image"
              loading="lazy"
              key={`img-${activeTrack}`}
            />
            <div className="process__image-overlay">
              <p className="process__tagline">{current.tagline}</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="process__timeline">
            {current.steps.map((step, i) => (
              <div
                className={`timeline-item ${visibleItems.includes(i) ? 'timeline-item--visible' : ''}`}
                key={`${activeTrack}-${step.number}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                {i < current.steps.length - 1 && (
                  <div className={`timeline-item__line ${visibleItems.includes(i) ? 'timeline-item__line--filled' : ''}`} />
                )}

                <div className={`timeline-item__dot ${i === current.steps.length - 1 ? 'timeline-item__dot--last' : ''}`}>
                  {step.icon}
                </div>

                <div className="timeline-item__content">
                  <div className="timeline-item__meta">
                    <span className="timeline-item__number">{step.number}</span>
                    <h3 className="timeline-item__title">{step.title}</h3>
                  </div>
                  <p className="timeline-item__desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}