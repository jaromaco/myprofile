import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Tools.css';

export default function Tools() {
  const { t } = useLanguage();
  const { tools } = t;

  return (
    <section className="section tools" id={tools.id}>
      <div className="section__inner">
        <header className="section__header">
          <h2>{tools.title}</h2>
          <p>{tools.intro}</p>
        </header>
        <div className="tools__grid">
          {tools.groups.map((group) => (
            <div key={group.label} className="tools__group">
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
