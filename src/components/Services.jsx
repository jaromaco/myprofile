import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Services.css';

export default function Services() {
  const { t } = useLanguage();
  const { services } = t;

  return (
    <section className="section services" id={services.id}>
      <div className="section__inner">
        <header className="section__header">
          <h2>{services.title}</h2>
          <p>{services.intro}</p>
        </header>
        <ul className="services__list">
          {services.items.map((item) => (
            <li key={item.title} className="services__card">
              <h3>{item.title}</h3>
              <p>{item.forWhom}</p>
              <p className="services__deliverable">{item.deliverable}</p>
              <p className="services__tools">{item.tools}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
