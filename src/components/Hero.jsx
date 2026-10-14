import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="inicio">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__content">
        <p className="hero__role">{t.hero.eyebrow}</p>
        <h1 className="hero__heading">{t.hero.title}</h1>
        <p className="hero__lead">{t.hero.lead}</p>
        <p className="hero__person">{t.hero.name}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href={`#${t.contact.id}`}>
            {t.hero.cta}
          </a>
          <a className="btn btn--ghost" href={`#${t.projects.id}`}>
            {t.hero.projectCta}
          </a>
        </div>
      </div>
    </section>
  );
}
