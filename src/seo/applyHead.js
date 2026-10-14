import { PAGE_URL, SOCIAL_IMAGE, pageUrl } from './site.js';
import { buildJsonLd } from './jsonLd.js';

function setMeta(selector, attribute, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    const match = selector.match(/\[(name|property)="([^"]+)"\]/);
    if (match) el.setAttribute(match[1], match[2]);
    document.head.appendChild(el);
  }
  el.setAttribute(attribute, value);
}

function setLink(selector, href) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('link');
    const rel = selector.match(/\[rel="([^"]+)"\]/);
    const lang = selector.match(/\[hreflang="([^"]+)"\]/);
    if (rel) el.setAttribute('rel', rel[1]);
    if (lang) el.setAttribute('hreflang', lang[1]);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function applyHead(t, lang) {
  const url = pageUrl(lang);
  document.documentElement.lang = lang;
  document.title = t.meta.title;
  setMeta('meta[name="description"]', 'content', t.meta.description);
  setLink('link[rel="canonical"]', url);
  setLink('link[rel="alternate"][hreflang="es"]', PAGE_URL.es);
  setLink('link[rel="alternate"][hreflang="en"]', PAGE_URL.en);
  setLink('link[rel="alternate"][hreflang="x-default"]', PAGE_URL.es);
  setMeta('meta[property="og:url"]', 'content', url);
  setMeta('meta[property="og:title"]', 'content', t.meta.title);
  setMeta('meta[property="og:description"]', 'content', t.meta.description);
  setMeta('meta[property="og:locale"]', 'content', lang === 'en' ? 'en_GB' : 'es_ES');
  setMeta('meta[property="og:locale:alternate"]', 'content', lang === 'en' ? 'es_ES' : 'en_GB');
  setMeta('meta[property="og:image"]', 'content', SOCIAL_IMAGE.url);
  setMeta('meta[property="og:image:alt"]', 'content', SOCIAL_IMAGE.alt[lang]);
  setMeta('meta[name="twitter:title"]', 'content', t.meta.title);
  setMeta('meta[name="twitter:description"]', 'content', t.meta.description);
  setMeta('meta[name="twitter:image"]', 'content', SOCIAL_IMAGE.url);
  setMeta('meta[name="twitter:image:alt"]', 'content', SOCIAL_IMAGE.alt[lang]);

  let script = document.getElementById('seo-jsonld');
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'seo-jsonld';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(buildJsonLd(t, lang));
}
