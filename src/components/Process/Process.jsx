import './Process.scss';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const tracks = [
  {
    id: 'web', label: 'Création Web & Design',
    tagline: 'Du wireframe au site live, on pilote chaque étape.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80&auto=format&fit=crop',
    steps: [
      { number:'01', title:'Découverte',    description:'Analyse de vos besoins et objectifs',                 last:false, icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg> },
      { number:'02', title:'Stratégie',     description:"Définition de la solution et plan d'action",          last:false, icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg> },
      { number:'03', title:'Design',        description:"Création de l'interface et identité visuelle",        last:false, icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"/><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"/><circle cx="11" cy="11" r="2"/></svg> },
      { number:'04', title:'Développement', description:'Intégration et code sur mesure',                      last:false, icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg> },
      { number:'05', title:'Lancement',     description:'Déploiement, tests et accompagnement',                last:true,  icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg> },
    ],
  },
  {
    id: 'marketing', label: 'Marketing Digital & Branding',
    tagline: 'On construit votre présence, on amplifie votre impact.',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80&auto=format&fit=crop',
    steps: [
      { number:'01', title:'Audit',           description:'Analyse de votre présence digitale actuelle',       last:false, icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg> },
      { number:'02', title:'Positionnement',  description:'Définition de votre identité de marque',            last:false, icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> },
      { number:'03', title:'Création',        description:'Production de contenus visuels et rédactionnels',   last:false, icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg> },
      { number:'04', title:'Diffusion',       description:'Publication et gestion sur les bons canaux',        last:false, icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg> },
      { number:'05', title:'Optimisation',    description:'Suivi des performances et ajustements',             last:true,  icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg> },
    ],
  },
];

export default function Process() {
  const headerRef = useScrollReveal();
  const track1Ref = useScrollReveal({ threshold: 0.08 });
  const track2Ref = useScrollReveal({ threshold: 0.08 });

  const trackRefs = [track1Ref, track2Ref];

  return (
    <section className="process" id="process">
      <div className="process__inner">
        <header className="process__header reveal-up" ref={headerRef}>
          <span className="process__eyebrow">
            <span className="process__eyebrow-line" />Notre process<span className="process__eyebrow-line" />
          </span>
          <h2 className="process__title">Comment on <em>travaille</em></h2>
          <p className="process__subtitle">Une méthode rodée, deux expertises complémentaires.</p>
        </header>

        <div className="process__tracks">
          {tracks.map((track, ti) => (
            <div
              className={`process-track reveal-up delay-${ti + 1}`}
              ref={trackRefs[ti]}
              key={track.id}
            >
              <div className="process-track__hero">
                <img src={track.image} alt={track.label} className="process-track__img" loading="lazy" />
                <div className="process-track__overlay">
                  <span className="process-track__label">
                    <span className="process-track__dot" />
                    {track.label}
                  </span>
                  <p className="process-track__tagline">{track.tagline}</p>
                </div>
              </div>
              <div className="process-track__steps">
                <div className="process-track__connector" aria-hidden="true" />
                {track.steps.map((step) => (
                  <div className="process-step" key={step.number}>
                    <div className={`process-step__circle ${step.last ? 'process-step__circle--last' : ''}`}>{step.number}</div>
                    <div className="process-step__icon">{step.icon}</div>
                    <h3 className="process-step__title">{step.title}</h3>
                    <p className="process-step__desc">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
