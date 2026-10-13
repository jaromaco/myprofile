import React, { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Projects.css';

export default function Projects({ onProjectsChange }) {
  const { t } = useLanguage();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let cancelled = false;
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to load projects');
        return response.json();
      })
      .then((data) => {
        if (cancelled) return;
        const list = Array.isArray(data) ? data : [];
        setProjects(list);
        if (onProjectsChange) onProjectsChange(list.length > 0);
      })
      .catch(() => {
        if (cancelled) return;
        setProjects([]);
        if (onProjectsChange) onProjectsChange(false);
      });
    return () => {
      cancelled = true;
    };
  }, [onProjectsChange]);

  if (!projects.length) return null;

  return (
    <section className="section projects" id={t.projects.id}>
      <div className="section__inner">
        <header className="section__header">
          <h2>{t.projects.title}</h2>
          <p>{t.projects.intro}</p>
        </header>
        <ul className="projects__grid">
          {projects.map((item) => (
            <li key={`${item.title}-${item.link?.url || ''}`} className="projects__card">
              {item.icon ? (
                <img src={item.icon} alt="" className="projects__img" />
              ) : null}
              <div className="projects__body">
                <h3>{item.title}</h3>
                {item.text ? <p>{item.text}</p> : null}
                {Array.isArray(item.listgroup) && item.listgroup.length > 0 ? (
                  <ul className="projects__tags">
                    {item.listgroup.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                ) : null}
                {item.link?.url && item.link?.title ? (
                  <a
                    className="btn btn--ghost"
                    href={item.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.link.title || t.projects.openLink}
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
