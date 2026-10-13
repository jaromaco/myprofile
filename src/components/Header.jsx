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
          {t.brand}
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
