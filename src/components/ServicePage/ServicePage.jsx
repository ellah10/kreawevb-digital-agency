import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getServiceById, services } from '../../data/services';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './ServicePage.scss';

// Hook timeline : apparition au scroll bas, disparition au scroll haut
function useTimelineAnimation(serviceId) {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefsRef = useRef([]);
  const observersRef = useRef([]);

  // Cleanup + reset à chaque changement de service
  useEffect(() => {
    observersRef.current.forEach((obs) => obs?.disconnect());
    observersRef.current = [];
    itemRefsRef.current = [];
    setVisibleItems([]);
  }, [serviceId]);

  const setRef = (el, index) => {
    if (!el || itemRefsRef.current[index] === el) return;
    itemRefsRef.current[index] = el;

    // Déconnecter l'observer précédent sur cet index
    observersRef.current[index]?.disconnect();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apparition : délai staggeré
          setTimeout(() => {
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }, index * 150);
        } else {
          // Disparition : retirer immédiatement
          setVisibleItems((prev) => prev.filter((i) => i !== index));
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -30px 0px' }
    );

    observersRef.current[index] = observer;
    observer.observe(el);
  };

  return { visibleItems, setRef };
}

export default function ServicePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = getServiceById(id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);
  useEffect(() => {
    if (!service) navigate('/');
  }, [service, navigate]);

  const heroRef     = useScrollReveal({ threshold: 0.05 });
  const featuresRef = useScrollReveal({ threshold: 0.1 });
  const processRef  = useScrollReveal({ threshold: 0.05 });
  const delivRef    = useScrollReveal({ threshold: 0.1 });
  const otherRef    = useScrollReveal({ threshold: 0.1 });

  const { visibleItems, setRef } = useTimelineAnimation(id);

  if (!service) return null;

  const otherServices = services.filter((s) => s.id !== service.id);

  return (
    <>
      <Navbar />
      <main className="service-page">

        {/* ── Hero ── */}
        <section className="sp-hero" style={{ '--service-color': service.color }}>
          <div className="sp-hero__inner reveal-up" ref={heroRef}>
            <div className="sp-hero__meta">
              <Link to="/#services" className="sp-hero__back">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
                </svg>
                Retour aux services
              </Link>
              <span className="sp-hero__tag">{service.tag}</span>
            </div>
            <h1 className="sp-hero__title">{service.title}</h1>
            <p className="sp-hero__tagline">{service.tagline}</p>
            <p className="sp-hero__desc">{service.description}</p>
            <a href="/#contact" className="sp-hero__cta">{service.cta}</a>
          </div>
          <div className="sp-hero__image-wrap">
            <img src={service.image} alt={service.title} className="sp-hero__image" />
            <div className="sp-hero__image-overlay" />
          </div>
        </section>

        {/* ── Features ── */}
        <section className="sp-features" style={{ '--service-color': service.color }}>
          <div className="sp-features__inner reveal-up" ref={featuresRef}>
            <h2 className="sp-section-title sp-section-title--light">Ce qu'on vous apporte</h2>
            <div className="sp-features__grid">
              {service.features.map((f, i) => (
                <div className="sp-feature-card" key={f.title}>
                  <div className="sp-feature-card__header">
                    <div className="sp-feature-card__icon-wrap">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        {f.icon || <polyline points="20 6 9 17 4 12"/>}
                      </svg>
                    </div>
                    <div>
                      <div className="sp-feature-card__num">0{i + 1}</div>
                      <h3 className="sp-feature-card__title">{f.title}</h3>
                    </div>
                  </div>
                  <p className="sp-feature-card__desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="sp-process">
          <div className="sp-process__inner reveal-up" ref={processRef}>
            <div className="sp-process__header">
              <h2 className="sp-section-title sp-section-title--dark">Notre approche</h2>
              <p className="sp-process__subtitle">
                Une méthode claire, étape par étape.
              </p>
            </div>

            <div className="sp-process__timeline">
              {service.process.map((p, i) => {
                const isVisible = visibleItems.includes(i);
                const isLast = i === service.process.length - 1;
                return (
                  <div
                    className={`sp-process-item ${isVisible ? 'sp-process-item--visible' : ''}`}
                    key={p.step}
                    ref={(el) => setRef(el, i)}
                  >
                    <div className="sp-process-item__dot-wrap">
                      <div className={`sp-process-item__dot ${isVisible ? 'sp-process-item__dot--active' : ''}`}>
                        <span className="sp-process-item__dot-num">{p.step}</span>
                        <svg className="sp-process-item__dot-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      {!isLast && (
                        <div className={`sp-process-item__line ${isVisible ? 'sp-process-item__line--filled' : ''}`} />
                      )}
                    </div>

                    <div className="sp-process-item__content">
                      <div className="sp-process-item__step-tag">Étape {p.step}</div>
                      <h3 className="sp-process-item__title">{p.title}</h3>
                      <p className="sp-process-item__desc">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Livrables ── */}
        <section className="sp-deliverables" style={{ '--service-color': service.color }}>
          <div className="sp-deliverables__inner reveal-up" ref={delivRef}>
            <h2 className="sp-section-title sp-section-title--light">Ce que vous recevez</h2>
            <div className="sp-deliverables__grid">
              {service.deliverables.map((d) => (
                <div className="sp-deliverable" key={d}>
                  <div className="sp-deliverable__icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div className="sp-deliverable__text">
                    <span className="sp-deliverable__name">{d}</span>
                    <span className="sp-deliverable__sub">Inclus dans la prestation</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="sp-deliverables__cta">
              <a href="/#contact" className="sp-cta-btn">{service.cta}</a>
            </div>
          </div>
        </section>

        {/* ── Autres services ── */}
        <section className="sp-others">
          <div className="sp-others__inner reveal-up" ref={otherRef}>
            <h2 className="sp-others__title">Nos autres services</h2>
            <div className="sp-others__grid">
              {otherServices.map((s) => (
                <Link to={`/services/${s.id}`} className="sp-other-card" key={s.id}>
                  <img src={s.image} alt={s.title} className="sp-other-card__img" loading="lazy" />
                  <div className="sp-other-card__overlay" />
                  <span className="sp-other-card__tag" style={{ color: s.color }}>{s.tag}</span>
                  <div className="sp-other-card__body">
                    <h3 className="sp-other-card__title">{s.title}</h3>
                    <span className="sp-other-card__link">
                      Découvrir
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}