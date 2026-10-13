import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Process.css';

export default function Process() {
  const { t } = useLanguage();
  const { process } = t;

  return (
    <section className="section process" id={process.id}>
      <div className="section__inner">
        <header className="section__header">
          <h2>{process.title}</h2>
        </header>
        <ol className="process__steps">
          {process.steps.map((step, index) => (
            <li key={step.title}>
              <span className="process__num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
