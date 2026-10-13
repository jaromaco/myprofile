import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const copy = t.footer.copy.replace('{year}', String(year));

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>{copy}</p>
        <p>{t.footer.location}</p>
      </div>
    </footer>
  );
}
