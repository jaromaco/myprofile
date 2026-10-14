const en = {
  meta: {
    title: 'GIS expert in Madrid — Javier Roma Corrales | OikosGIS',
    description:
      'GIS expert in Madrid since 2010. QGIS, ArcGIS, PostGIS and FME: cartography, field data, ETL, viewers and LiDAR. Freelance commissions.',
  },
  brand: 'OikosGIS',
  nav: {
    services: 'Services',
    process: 'How I work',
    tools: 'Tools',
    path: 'Background',
    projects: 'Work',
    contact: 'Contact',
  },
  lang: {
    es: 'ES',
    en: 'EN',
    switchTo: 'Español',
  },
  hero: {
    name: 'Javier Roma Corrales',
    role: 'GIS expert',
    lead:
      'Cartography, spatial analysis, field data, ETL and viewers. I work with QGIS, PostGIS and Python, and with imagery, photointerpretation and LiDAR. Based in Madrid, in GIS since 2010.',
    cta: 'Tell me about the job',
    fiverrCta: 'Fiverr profile',
    coords: '40°25′N  3°42′W  ·  Madrid',
  },
  /** Paste a real Fiverr profile URL when ready. Empty = CTA hidden. */
  fiverrUrl: '',
  services: {
    id: 'encargos',
    title: 'Services',
    intro:
      'Five kinds of work I take on. Say what you have and what you need to deliver; we set scope and tools from there.',
    items: [
      {
        title: 'Spatial analysis and cartography',
        forWhom: 'For teams that need maps and spatial analysis ready to decide or operate.',
        deliverable: 'Layers, maps and analysis (including network) in the agreed format.',
        tools: 'QGIS, ArcGIS Pro, Network Analyst',
      },
      {
        title: 'Field data',
        forWhom: 'For anyone collecting information outdoors and needing it clean in the system.',
        deliverable: 'Forms, field layers and sync workflows.',
        tools: 'Survey123, Field Maps, QField',
      },
      {
        title: 'Automation and ETL',
        forWhom: 'For anyone still moving or joining spatial sources by hand.',
        deliverable: 'Pipelines that transform, validate and load spatial data.',
        tools: 'FME, Python, PostGIS',
      },
      {
        title: 'Viewers and dashboards',
        forWhom: 'For anyone who needs to query the data without opening a desktop GIS.',
        deliverable: 'Web apps, panels and interactive views.',
        tools: 'Experience Builder, Dashboards, Maps SDK for JavaScript',
      },
      {
        title: 'Photointerpretation, photogrammetry and LiDAR',
        forWhom: 'For projects that start from satellite, photogrammetry or point clouds.',
        deliverable: 'Processing, derivatives and layers ready for analysis.',
        tools: 'Remote sensing, photogrammetry, LiDAR, spatial Python',
      },
    ],
  },
  process: {
    id: 'como-trabajo',
    title: 'How I work',
    steps: [
      {
        title: 'Scope',
        text: 'You describe the problem, source data and delivery format. We agree what is in and what is out.',
      },
      {
        title: 'Execution',
        text: 'I use the tools that fit (Esri, QGIS, FME, PostGIS, Python). I share progress when it helps.',
      },
      {
        title: 'Handoff',
        text: 'You get layers, maps, scripts or apps as agreed, with enough notes to use or maintain them.',
      },
    ],
  },
  tools: {
    id: 'herramientas',
    title: 'Tools',
    intro: 'What I use day to day. Chosen for the client environment, not for fashion.',
    groups: [
      {
        label: 'Desktop',
        items: ['QGIS', 'ArcGIS Pro', 'Network Analyst'],
      },
      {
        label: 'Field',
        items: ['Survey123', 'Field Maps', 'QField'],
      },
      {
        label: 'Data and automation',
        items: ['PostGIS', 'FME', 'Python', 'ArcPy', 'PyQGIS', 'ArcGIS API for Python'],
      },
      {
        label: 'Web and imagery',
        items: [
          'Experience Builder',
          'Dashboards',
          'Maps SDK for JavaScript',
          'Remote sensing',
          'Photogrammetry',
          'LiDAR',
        ],
      },
    ],
  },
  path: {
    id: 'trayectoria',
    title: 'Background',
    intro:
      'I started in 2010 with ArcMap on an invasive species inventory in the Azores. I later took ArcMap courses and, during my degree, used QGIS on several assignments.',
    credential:
      'Registered professional no. 7126 · Official College of Graduates in Forestry Engineering',
    training: 'GIS Development Expert · Esri Spain',
    master:
      'Master’s in Geographic Information Systems, specialised in analysis · UNIGIS',
    roles: [
      { role: 'GIS Expert', org: 'Grupo EULEN', note: 'Current' },
      { role: 'GIS Analyst', org: 'DOTGIS', note: '' },
      { role: 'Photointerpretation operator', org: 'Tragsatec', note: '' },
      { role: 'GIS technician', org: 'TECNIGRAL', note: '' },
    ],
  },
  projects: {
    id: 'trabajos',
    title: 'Work',
    intro: 'Pieces I can show in public.',
    openLink: 'Open',
  },
  contact: {
    id: 'contacto',
    title: 'Contact',
    intro:
      'Describe the job: what data you have, what you need delivered, and any deadline. I reply by email.',
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
  },
  footer: {
    copy: '© {year} Javier Roma Corrales · OikosGIS',
    location: 'Madrid',
  },
};

export default en;
