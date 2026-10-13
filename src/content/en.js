const en = {
  meta: {
    title: 'OikosGIS — Javier Roma Corrales, GIS expert',
    description:
      'GIS expert in Madrid. Cartography, field data, ETL automation, viewers, imagery, photogrammetry and LiDAR. Freelance commissions.',
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
      'Spatial data commissions: cartography, field capture, ETL and viewers. Based in Madrid with more than twenty years in GIS.',
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
        title: 'Analysis and cartography',
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
        title: 'Imagery, photogrammetry and LiDAR',
        forWhom: 'For projects that start from satellite, photogrammetry or point clouds.',
        deliverable: 'Processing, derivatives and layers ready for analysis.',
        tools: 'Remote sensing, photogrammetry, LiDAR, spatial Python',
      },
    ],
  },
  process: {
    id: 'como-trabajo',
    title: 'How I work a commission',
    steps: [
      {
        title: 'Scope',
        text: 'You describe the problem, source data and delivery format. We agree what is in and what is out.',
      },
      {
        title: 'Delivery work',
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
      'Public roles only. No project metrics or confidential cases. More than twenty years working with geographic information.',
    credential:
      'Registered professional no. 7126 · Official College of Graduates in Forestry Engineering',
    training: 'GIS Development Expert · Esri Spain',
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
