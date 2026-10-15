import { ORIGIN, PAGE_URL, PROFILE_URLS, pageUrl } from './site.js';

const CREDENTIALS = {
  es: [
    {
      name: 'Máster en SIG',
      category: 'degree',
      org: 'UNIGIS',
    },
    {
      name: 'Experto en Desarrollo GIS',
      category: 'certificate',
      org: 'Esri España',
    },
    {
      name: 'Colegiado nº 7126',
      category: 'ProfessionalLicense',
      org: 'Colegio Oficial de Graduados en Ingeniería Forestal',
    },
  ],
  en: [
    {
      name: 'Master’s in GIS',
      category: 'degree',
      org: 'UNIGIS',
    },
    {
      name: 'GIS Development Expert',
      category: 'certificate',
      org: 'Esri Spain',
    },
    {
      name: 'Registered professional no. 7126',
      category: 'ProfessionalLicense',
      org: 'Official College of Graduates in Forestry Engineering',
    },
  ],
};

export function buildJsonLd(t, lang) {
  const url = pageUrl(lang);
  const knowsAbout = [
    lang === 'en' ? 'Geospatial ETL' : 'ETL espacial',
    ...t.tools.groups.flatMap((group) => group.items),
  ];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${ORIGIN}/#javier-roma`,
        name: t.hero.name,
        jobTitle: t.hero.eyebrow,
        url: PAGE_URL.es,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Madrid',
          addressCountry: 'ES',
        },
        sameAs: PROFILE_URLS,
        knowsLanguage: ['es', 'en'],
        knowsAbout,
        worksFor: {
          '@type': 'Organization',
          name: 'Grupo EULEN',
        },
        hasCredential: CREDENTIALS[lang].map((item) => ({
          '@type': 'EducationalOccupationalCredential',
          name: item.name,
          credentialCategory: item.category,
          recognizedBy: {
            '@type': 'Organization',
            name: item.org,
          },
        })),
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${url}#service`,
        name: t.brand,
        url,
        description: t.meta.description,
        provider: { '@id': `${ORIGIN}/#javier-roma` },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Madrid',
          addressCountry: 'ES',
        },
        areaServed: {
          '@type': 'Country',
          name: lang === 'en' ? 'Spain' : 'España',
        },
        availableLanguage: ['es', 'en'],
        serviceType: t.services.items.map((item) => item.title),
      },
    ],
  };
}

export function jsonLdScript(t, lang) {
  const json = JSON.stringify(buildJsonLd(t, lang), null, 2).replace(/</g, '\\u003c');
  return `<script type="application/ld+json" id="seo-jsonld">\n${json}\n    </script>`;
}
