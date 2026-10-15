import { render, screen } from '@testing-library/react';
import App from './App';
import es from './content/es';
import en from './content/en';
import { renderStatic } from './seo/renderStatic';
import { buildJsonLd } from './seo/jsonLd';

function renderAt(path) {
  window.history.pushState({}, '', path);
  return render(<App />);
}

afterEach(() => {
  window.history.pushState({}, '', '/');
});

test('renders the Spanish page with one h1', () => {
  renderAt('/');
  const headings = screen.getAllByRole('heading', { level: 1 });
  expect(headings).toHaveLength(1);
  expect(headings[0]).toHaveTextContent('Automatizo y ordeno tus datos geoespaciales');
  expect(screen.getByText('Javier Roma Corrales')).toBeInTheDocument();
  expect(document.querySelector('.hero__role')).toHaveTextContent('Data Engineer geoespacial');
  expect(document.querySelector('.site-header__brand')).toHaveTextContent('OikosGIS');
  expect(screen.getByRole('heading', { name: /spain-flood-exposure/i })).toBeInTheDocument();
  expect(document.documentElement.lang).toBe('es');
  expect(document.title).toBe(es.meta.title);
});

test('renders the English page from /en/', () => {
  renderAt('/en/');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'I automate and organise your geospatial data'
  );
  expect(screen.getByRole('heading', { name: 'What I do' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Project' })).toBeInTheDocument();
  expect(document.documentElement.lang).toBe('en');
  expect(document.title).toBe(en.meta.title);
  expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://oikosgis.com/en/'
  );
  expect(document.querySelector('link[hreflang="x-default"]')).toHaveAttribute(
    'href',
    'https://oikosgis.com/'
  );
});

test('keeps titles and descriptions inside the SEO length range', () => {
  expect(es.meta.title.length).toBeGreaterThanOrEqual(50);
  expect(es.meta.title.length).toBeLessThanOrEqual(60);
  expect(en.meta.title.length).toBeGreaterThanOrEqual(50);
  expect(en.meta.title.length).toBeLessThanOrEqual(60);
  expect(es.meta.description.length).toBeGreaterThanOrEqual(150);
  expect(es.meta.description.length).toBeLessThanOrEqual(160);
  expect(en.meta.description.length).toBeGreaterThanOrEqual(150);
  expect(en.meta.description.length).toBeLessThanOrEqual(160);
  expect(es.meta.description).toContain('Data Engineer geoespacial');
  expect(es.meta.description).toContain('ETL FME');
  expect(es.meta.description).toContain('PostGIS');
  expect(es.meta.description).toContain('GIS Madrid');
  expect(es.meta.description).toContain('remoto');
  expect(en.meta.description).toContain('Geospatial Data Engineer');
  expect(en.meta.description).toContain('FME');
  expect(en.meta.description).toContain('PostGIS');
  expect(en.meta.description).toContain('AWS');
});

test('static fallback contains the full copy once per language', () => {
  const spanish = renderStatic(es, 'es');
  const english = renderStatic(en, 'en');
  expect(spanish.match(/<h1/g)).toHaveLength(1);
  expect(english.match(/<h1/g)).toHaveLength(1);
  expect(spanish).toContain('Automatización y ETL espacial');
  expect(spanish).toContain('Bases de datos espaciales y nube');
  expect(spanish).toContain('Datos de campo conectados');
  expect(spanish).toContain('spain-flood-exposure: exposición a inundaciones en Valencia');
  expect(spanish).toContain('Cómo trabajo');
  expect(spanish).toContain('Me adapto a las herramientas que ya usas.');
  expect(spanish).toContain('En GIS desde 2010');
  expect(spanish).toContain('Cuéntame qué datos tienes');
  expect(spanish).toContain('contact__icon');
  expect(spanish).toContain('LinkedIn de Javier Roma Corrales');
  expect(spanish).toContain('GitHub de jaromaco');
  expect(english).toContain('Javier Roma Corrales on LinkedIn');
  expect(english).toContain('jaromaco on GitHub');
  expect(spanish).not.toContain('I automate and organise');
  expect(english).toContain('Spatial ETL and automation');
  expect(english).toContain('Spatial databases and cloud');
  expect(english).toContain('Connected field data');
  expect(english).toContain('flood exposure in Valencia');
  expect(english).toContain('How I work');
  expect(english).toContain('I adapt to the tools you already use.');
  expect(english).toContain('In GIS since 2010');
  expect(english).toContain('Tell me what data you have');
  expect(english).not.toContain('Automatizo y ordeno');
});

test('JSON-LD describes the person and the professional service', () => {
  const data = buildJsonLd(es, 'es');
  const person = data['@graph'].find((node) => node['@type'] === 'Person');
  const service = data['@graph'].find((node) => node['@type'] === 'ProfessionalService');
  expect(person.name).toBe('Javier Roma Corrales');
  expect(person.jobTitle).toBe('Data Engineer geoespacial');
  expect(person.address.addressLocality).toBe('Madrid');
  expect(person.address.addressCountry).toBe('ES');
  expect(person.sameAs).toEqual([
    'https://www.linkedin.com/in/javier-roma-geospatial-engineer',
    'https://github.com/jaromaco',
  ]);
  expect(person.knowsAbout).toEqual(expect.arrayContaining(['FME', 'PostGIS', 'GeoPandas']));
  expect(service.serviceType).toHaveLength(3);
  expect(service.address.addressCountry).toBe('ES');
  expect(buildJsonLd(en, 'en')['@graph'][0].jobTitle).toBe('Geospatial Data Engineer');
});
