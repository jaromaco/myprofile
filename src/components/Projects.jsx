import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Projects.css';

export default function Projects() {
  const { t } = useLanguage();
  const { projects } = t;

  return (
    <section className="section projects" id={projects.id}>
      <div className="section__inner">
        <header className="section__header">
          <h2>{projects.title}</h2>
        </header>
        <article className="projects__card">
          <div className="projects__body">
            <h3>{projects.name}</h3>
            <p>{projects.text}</p>
            <p className="projects__facts">{projects.facts}</p>
            <a
              className="btn btn--ghost"
              href={projects.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {projects.linkLabel}
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
