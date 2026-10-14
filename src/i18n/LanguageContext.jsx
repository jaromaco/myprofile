import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import es from '../content/es';
import en from '../content/en';
import { applyHead } from '../seo/applyHead';
import { langFromPath } from '../seo/site';

const catalogs = { es, en };

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [pathname, setPathname] = useState(() => window.location.pathname);
  const lang = langFromPath(pathname);
  const t = catalogs[lang] || catalogs.es;

  useEffect(() => {
    const sync = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  const setLang = useCallback((next) => {
    if (next !== 'es' && next !== 'en') return;
    const path = next === 'en' ? '/en/' : '/';
    if (window.location.pathname === path) return;
    window.history.pushState({}, '', `${path}${window.location.hash}`);
    setPathname(path);
  }, []);

  useEffect(() => {
    if (lang === 'en' && window.location.pathname !== '/en/') {
      window.history.replaceState({}, '', `/en/${window.location.hash}`);
      setPathname('/en/');
    }
  }, [lang]);

  useEffect(() => {
    applyHead(t, lang);
  }, [lang, t]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}
