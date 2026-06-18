import { useState } from 'react';
import './Contact.scss';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const subjects = ['Site web', 'Application', 'Design UI/UX', 'Autre'];

const details = [
  { label:'Email',   value:'hello@kreaweb.com', icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg> },
  { label:'Studio',  value:'Lomé, Togo',         icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> },
  { label:'Réponse', value:'Sous 24 heures',      icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
];

export default function Contact() {
  const [subject, setSubject] = useState('Site web');
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nom:'', email:'', message:'' });

  const infoRef = useScrollReveal({ threshold: 0.1 });
  const cardRef = useScrollReveal({ threshold: 0.1 });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nom || !form.email || !form.message) return;
    setSent(true);
    setForm({ nom:'', email:'', message:'' });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__info reveal-left" ref={infoRef}>
          <span className="contact__eyebrow"><span className="contact__eyebrow-line" />Contact</span>
          <h2 className="contact__title">Démarrons votre <em>projet</em>.</h2>
          <p className="contact__text">Décrivez votre idée en quelques lignes. On revient vers vous avec une première piste — sans engagement.</p>
          <ul className="contact__details">
            {details.map((d) => (
              <li key={d.label} className="contact__detail">
                <span className="contact__detail-icon">{d.icon}</span>
                <div>
                  <span className="contact__detail-label">{d.label}</span>
                  <span className="contact__detail-value">{d.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="contact__card reveal-right" ref={cardRef}>
          {sent ? (
            <div className="contact__success">
              <div className="contact__success-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 className="contact__success-title">Message envoyé !</h3>
              <p className="contact__success-text">On vous répond sous 24 heures.</p>
              <button className="contact__btn-secondary" onClick={() => setSent(false)}>Envoyer un autre</button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__row">
                <div className="contact__field"><label htmlFor="nom">Nom</label><input id="nom" name="nom" type="text" value={form.nom} onChange={handleChange} placeholder="Votre nom" required /></div>
                <div className="contact__field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="hello@kreaweb.com" required /></div>
              </div>
              <div className="contact__field">
                <span className="contact__field-mono">Type de projet</span>
                <div className="contact__subjects">
                  {subjects.map((s) => (
                    <button type="button" key={s} className={`contact__subject ${subject === s ? 'contact__subject--active' : ''}`} onClick={() => setSubject(s)}>{s}</button>
                  ))}
                </div>
              </div>
              <div className="contact__field">
                <label className="contact__field-mono" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Parlez-nous de votre projet…" required />
              </div>
              <button type="submit" className="contact__submit">
                Envoyer le message
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
