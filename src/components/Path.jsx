import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Path.css';

export default function Path() {
  const { t } = useLanguage();
  const { path } = t;

  return (
    <section className="section path" id={path.id}>
      <div className="section__inner">
        <header className="section__header">
          <h2>{path.title}</h2>
          <p>{path.intro}</p>
        </header>
        <ul className="path__roles">
          {path.roles.map((item) => (
            <li key={`${item.org}-${item.role}`}>
              <div>
                <h3>{item.role}</h3>
                <p className="path__org">{item.org}</p>
              </div>
              {item.note ? <span className="path__note">{item.note}</span> : null}
            </li>
          ))}
        </ul>
        <p className="path__meta">{path.credential}</p>
        <p className="path__meta">{path.training}</p>
      </div>
    </section>
  );
}
