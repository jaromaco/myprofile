import React, { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Header.css';

export default function Header() {
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
    { href: `#${t.projects.id}`, label: t.nav.projects },
    { href: `#${t.process.id}`, label: t.nav.process },
    { href: `#${t.tools.id}`, label: t.nav.tools },
    { href: `#${t.path.id}`, label: t.nav.path },
    { href: `#${t.contact.id}`, label: t.nav.contact },
  ];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#inicio" aria-label={t.nav.home}>
        <a className="site-header__brand" href="#inicio">
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
          <span className="visually-hidden">{t.nav.menu}</span>
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
            <a
              href="/"
              hrefLang="es"
              lang="es"
              className={lang === 'es' ? 'is-active' : ''}
              aria-current={lang === 'es' ? 'true' : undefined}
              onClick={(event) => {
                event.preventDefault();
                setLang('es');
                setMenuOpen(false);
              }}
            >
              {t.lang.es}
            </a>
            <span aria-hidden="true">|</span>
            <a
              href="/en/"
              hrefLang="en"
              lang="en"
              className={lang === 'en' ? 'is-active' : ''}
              aria-current={lang === 'en' ? 'true' : undefined}
              onClick={(event) => {
                event.preventDefault();
                setLang('en');
                setMenuOpen(false);
              }}
            >
              {t.lang.en}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
