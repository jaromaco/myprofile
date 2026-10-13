import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();
  const showFiverr = Boolean(t.fiverrUrl);

  return (
    <section className="hero" id="inicio">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__content">
        <p className="hero__coords">{t.hero.coords}</p>
        <p className="hero__role">{t.hero.role}</p>
        <h1 className="hero__name">{t.hero.name}</h1>
        <p className="hero__lead">{t.hero.lead}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href={`#${t.contact.id}`}>
            {t.hero.cta}
          </a>
          {showFiverr && (
            <a
              className="btn btn--ghost"
              href={t.fiverrUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.fiverrCta}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
