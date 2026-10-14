export const ORIGIN = 'https://oikosgis.com';

export const PAGE_URL = {
  es: `${ORIGIN}/`,
  en: `${ORIGIN}/en/`,
};

export const SOCIAL_IMAGE = {
  url: `${ORIGIN}/gis-spatial-data.jpg`,
  width: 1470,
  height: 980,
  alt: {
    es: 'Cartel de OikosGIS con un mapa, una cuadrícula, curvas de nivel y el texto GIS & Spatial Data.',
    en: 'OikosGIS banner with a map, a grid, contour lines and the text GIS & Spatial Data.',
  },
};

export const PROFILE_URLS = [
  'https://www.linkedin.com/in/javier-roma-geospatial-engineer',
  'https://github.com/jaromaco',
];

export function pageUrl(lang) {
  return lang === 'en' ? PAGE_URL.en : PAGE_URL.es;
}

export function langFromPath(pathname = '') {
  const path = pathname.replace(/\/+$/, '') || '/';
  return path === '/en' || path.startsWith('/en/') ? 'en' : 'es';
}
