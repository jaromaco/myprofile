import React, { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Header.css';

export default function Header({ hasProjects }) {
  const { t, lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  const brand = t.brand;
  const craft = 'GIS';
  const hasCraft = brand.endsWith(craft);
  const name = hasCraft ? brand.slice(0, -craft.length) : brand;

  const links = [
    { href: `#${t.services.id}`, label: t.nav.services },
    { href: `#${t.process.id}`, label: t.nav.process },
    { href: `#${t.tools.id}`, label: t.nav.tools },
    { href: `#${t.path.id}`, label: t.nav.path },
    ...(hasProjects ? [{ href: `#${t.projects.id}`, label: t.nav.projects }] : []),
    { href: `#${t.contact.id}`, label: t.nav.contact },
  ];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#inicio">
          <svg className="site-header__mark" viewBox="0 0 32 32" aria-hidden="true">
            <ellipse cx="15" cy="18.4" rx="12" ry="8.4" />
            <ellipse cx="16.4" cy="16.8" rx="7.3" ry="5" />
            <ellipse cx="17.6" cy="15.4" rx="3.1" ry="2.15" />
            <circle className="site-header__mark-point" cx="18.1" cy="14.8" r="1.35" />
          </svg>
          <span className="site-header__word">
            <span className="site-header__name">{name}</span>{hasCraft ? <span className="site-header__craft">{craft}</span> : null}
          </span>
        </a>

        <button
          type="button"
          className="site-header__menu-btn"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="visually-hidden">Menu</span>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <nav id="site-nav" className={`site-nav${menuOpen ? ' is-open' : ''}`}>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === 'es' ? 'is-active' : ''}
              onClick={() => setLang('es')}
              aria-pressed={lang === 'es'}
            >
              {t.lang.es}
            </button>
            <span aria-hidden="true">|</span>
            <button
              type="button"
              className={lang === 'en' ? 'is-active' : ''}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              {t.lang.en}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
