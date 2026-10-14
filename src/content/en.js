const en = {
  meta: {
    title: 'Geospatial Data Engineer — Javier Roma Corrales | OikosGIS',
    description:
      'Geospatial Data Engineer. I automate, clean and load your geospatial data with FME, PostGIS and AWS. I work remotely from Madrid, Spain, in GIS since 2010.',
  },
  brand: 'OikosGIS',
  nav: {
    services: 'What I do',
    projects: 'Project',
    process: 'How I work',
    tools: 'Tools',
    path: 'Background',
    contact: 'Contact',
    home: 'OikosGIS, home',
    menu: 'Menu',
  },
  lang: {
    es: 'ES',
    en: 'EN',
    switchTo: 'Español',
  },
  hero: {
    eyebrow: 'Geospatial Data Engineer',
    title: 'I automate and organise your geospatial data',
    lead:
      'ETL pipelines with FME and Python, PostGIS databases and data in the cloud (AWS). For teams that currently load, convert or clean data by hand. Remote from Madrid, in GIS since 2010.',
    name: 'Javier Roma Corrales',
    cta: 'Tell me about your case',
    projectCta: 'See project',
  },
  services: {
    id: 'encargos',
    title: 'What I do',
    items: [
      {
        title: 'Spatial ETL and automation',
        forWhom: 'For anyone repeating loads or joining sources by hand.',
        deliverable:
          'Pipelines that download, transform, validate and load spatial data, in formats such as shapefile, GML, CAD, GeoJSON, GeoPackage and GeoParquet.',
        tools: 'Tools: FME, Python, SQL.',
      },
      {
        title: 'Spatial databases and cloud',
        forWhom: 'For anyone who needs a single reliable data source.',
        deliverable:
          'PostGIS design and loading, with schemas, indexes and quality control, and data in S3 ready to query.',
        tools: 'Tools: PostGIS, AWS (S3, Lambda), GeoParquet.',
      },
      {
        title: 'Connected field data',
        forWhom: 'For anyone collecting data in the field and needing it clean in the system.',
        deliverable:
          'QField and Survey123 projects connected to the database, with forms, validation and synchronisation.',
        tools: 'Tools: QField, QGIS, Survey123, Field Maps.',
      },
    ],
    note: 'I also do cartography, web viewers and imagery and LiDAR processing when they are part of a data project.',
  },
  projects: {
    id: 'proyecto',
    title: 'Project',
    name: 'spain-flood-exposure: flood exposure in Valencia',
    text:
      'A Python and AWS pipeline that downloads public data from the Cadastre and the INE, stores it in a data lake on S3 and converts it to GeoParquet to cross-reference buildings and population with flood zones.',
    facts:
      'Ingestion Lambdas with least-privilege permissions and tests · 266 municipalities · 1,830 census sections.',
    linkLabel: 'See spain-flood-exposure on GitHub',
    linkUrl: 'https://github.com/jaromaco/spain-flood-exposure',
  },
  process: {
    id: 'como-trabajo',
    title: 'How I work',
    steps: [
      {
        title: 'Scope',
        text: 'You tell me what data you have and what you need to deliver. We put it in writing: what is in, what is out, and the deadline.',
      },
      {
        title: 'Execution',
        text: 'I use the tools that fit your environment. I show you progress at the points we agree.',
      },
      {
        title: 'Delivery',
        text: 'You receive the data, and also the documented scripts or FME workspaces, so the process can be repeated without me.',
      },
    ],
  },
  tools: {
    id: 'herramientas',
    title: 'Tools',
    intro: 'I adapt to the tools you already use.',
    groups: [
      {
        label: 'Data and automation',
        items: ['FME', 'Python', 'SQL', 'PostGIS', 'GeoPandas'],
      },
      {
        label: 'Cloud',
        items: ['AWS (S3, Lambda, Glue, Athena)', 'GeoParquet'],
      },
      {
        label: 'Desktop and field',
        items: ['QGIS', 'ArcGIS Pro', 'QField', 'Survey123', 'Field Maps'],
      },
      {
        label: 'Web and imagery',
        items: ['Experience Builder', 'Dashboards', 'Remote sensing', 'LiDAR'],
      },
    ],
  },
  path: {
    id: 'trayectoria',
    title: 'Background',
    intro:
      'In GIS since 2010, when I started with an invasive species inventory in the Azores. Since then I have moved from making maps to automating the data behind them.',
    roles: [
      { role: 'GIS expert', org: 'Grupo EULEN', note: 'Current' },
      { role: 'GIS analyst', org: 'DOTGIS', note: '' },
      { role: 'Photointerpretation operator', org: 'Tragsatec', note: '' },
      { role: 'GIS technician', org: 'TECNIGRAL', note: '' },
    ],
    education:
      'Master’s in GIS (UNIGIS) · GIS Development Expert (Esri Spain) · AWS Certified Data Engineer (in progress) · Registered professional no. 7126, Official College of Graduates in Forestry Engineering.',
  },
  contact: {
    id: 'contacto',
    title: 'Contact',
    intro:
      'Tell me what data you have, what you want to achieve and by when. I work remotely and reply in writing.',
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    submit: 'Send',
    sending: 'Sending…',
    errors: {
      name: 'Name is required.',
      email: 'Email is required.',
      subject: 'Subject is required.',
      message: 'Message is required.',
    },
    successTitle: 'Message received',
    successBody: 'I will get back to you as soon as I can.',
    errorSend: 'Could not send. Try again or email me directly.',
    close: 'Close',
    formNote: 'JavaScript is required to use the contact form on this site.',
    links: [
      {
        label: 'Javier Roma Corrales on LinkedIn',
        url: 'https://www.linkedin.com/in/javier-roma-geospatial-engineer',
        rel: 'me noreferrer',
      },
      {
        label: 'jaromaco on GitHub',
        url: 'https://github.com/jaromaco',
        rel: 'me noreferrer',
      },
    ],
  },
  footer: {
    copy: '© {year} Javier Roma Corrales · OikosGIS',
    location: 'Madrid',
  },
};

export default en;
