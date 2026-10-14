import { PAGE_URL, SOCIAL_IMAGE, pageUrl } from './site.js';
import { jsonLdScript } from './jsonLd.js';

function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

export function renderSeoBlock(t, lang) {
  const url = pageUrl(lang);
  const locale = lang === 'en' ? 'en_GB' : 'es_ES';
  const alternate = lang === 'en' ? 'es_ES' : 'en_GB';
  const imageAlt = SOCIAL_IMAGE.alt[lang];

  return `    <meta name="description" content="${esc(t.meta.description)}" />
    <link rel="canonical" href="${url}" />
    <link rel="alternate" hreflang="es" href="${PAGE_URL.es}" />
    <link rel="alternate" hreflang="en" href="${PAGE_URL.en}" />
    <link rel="alternate" hreflang="x-default" href="${PAGE_URL.es}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${esc(t.meta.title)}" />
    <meta property="og:description" content="${esc(t.meta.description)}" />
    <meta property="og:locale" content="${locale}" />
    <meta property="og:locale:alternate" content="${alternate}" />
    <meta property="og:site_name" content="${esc(t.brand)}" />
    <meta property="og:image" content="${SOCIAL_IMAGE.url}" />
    <meta property="og:image:alt" content="${esc(imageAlt)}" />
    <meta property="og:image:width" content="${SOCIAL_IMAGE.width}" />
    <meta property="og:image:height" content="${SOCIAL_IMAGE.height}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(t.meta.title)}" />
    <meta name="twitter:description" content="${esc(t.meta.description)}" />
    <meta name="twitter:image" content="${SOCIAL_IMAGE.url}" />
    <meta name="twitter:image:alt" content="${esc(imageAlt)}" />
    <title>${esc(t.meta.title)}</title>
    ${jsonLdScript(t, lang)}`;
}

export function assertMeta(t, lang) {
  const title = t.meta.title.length;
  const description = t.meta.description.length;
  if (title < 50 || title > 60) {
    throw new Error(`${lang} title is ${title} characters; expected 50–60`);
  }
  if (description < 150 || description > 160) {
    throw new Error(`${lang} description is ${description} characters; expected 150–160`);
  }
}
