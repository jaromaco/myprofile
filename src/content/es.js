const es = {
  meta: {
    title: 'Experto GIS en Madrid — Javier Roma Corrales | OikosGIS',
    description:
      'Experto GIS en Madrid desde 2010. QGIS, ArcGIS, PostGIS y FME: cartografía, datos de campo, ETL, visores y LiDAR. Encargos freelance.',
  },
  brand: 'OikosGIS',
  nav: {
    services: 'Encargos',
    process: 'Cómo trabajo',
    tools: 'Herramientas',
    path: 'Trayectoria',
    projects: 'Trabajos',
    contact: 'Contacto',
  },
  lang: {
    es: 'ES',
    en: 'EN',
    switchTo: 'English',
  },
  hero: {
    name: 'Javier Roma Corrales',
    role: 'Experto GIS',
    lead:
      'Cartografía, análisis espacial, datos de campo, ETL y visores. Trabajo con QGIS, PostGIS y Python, y con imagen, fotointerpretación y LiDAR. Desde Madrid, en GIS desde 2010.',
    cta: 'Cuéntame el encargo',
    fiverrCta: 'Perfil en Fiverr',
    coords: '40°25′N  3°42′W  ·  Madrid',
  },
  /** Paste a real Fiverr profile URL when ready. Empty = CTA hidden. */
  fiverrUrl: '',
  services: {
    id: 'encargos',
    title: 'Encargos',
    intro:
      'Cinco tipos de trabajo que puedo asumir. Di qué tienes y qué necesitas entregar; ajustamos alcance y herramientas.',
    items: [
      {
        title: 'Análisis espacial y cartografía',
        forWhom: 'Para equipos que necesitan mapas y análisis espaciales listos para decidir u operar.',
        deliverable: 'Capas, mapas y análisis (incluida red) en formato acordado.',
        tools: 'QGIS, ArcGIS Pro, Network Analyst',
      },
      {
        title: 'Datos de campo',
        forWhom: 'Para quien recoge información en terreno y la necesita limpia en el sistema.',
        deliverable: 'Formularios, capas de campo y flujos de sincronización.',
        tools: 'Survey123, Field Maps, QField',
      },
      {
        title: 'Automatización y ETL',
        forWhom: 'Para quien repite cargas o une fuentes espaciales a mano.',
        deliverable: 'Pipelines que transforman, validan y cargan datos espaciales.',
        tools: 'FME, Python, PostGIS',
      },
      {
        title: 'Visores y cuadros de mando',
        forWhom: 'Para quien necesita consultar el dato sin abrir un escritorio GIS.',
        deliverable: 'Apps web, paneles y visualizaciones interactivas.',
        tools: 'Experience Builder, Dashboards, Maps SDK for JavaScript',
      },
      {
        title: 'Fotointerpretación, fotogrametría y LiDAR',
        forWhom: 'Para proyectos que parten de satélite, fotogrametría o nube de puntos.',
        deliverable: 'Tratamiento, derivados y capas listas para análisis.',
        tools: 'Teledetección, fotogrametría, LiDAR, Python espacial',
      },
    ],
  },
  process: {
    id: 'como-trabajo',
    title: 'Cómo trabajo un encargo',
    steps: [
      {
        title: 'Alcance',
        text: 'Me cuentas el problema, los datos de partida y el formato de entrega. Ajustamos qué entra y qué no.',
      },
      {
        title: 'Ejecución',
        text: 'Trabajo con las herramientas que encajen (Esri, QGIS, FME, PostGIS, Python). Te voy mostrando avances cuando haga falta.',
      },
      {
        title: 'Entrega',
        text: 'Recibes capas, mapas, scripts o apps según lo acordado, con lo mínimo necesario para usarlos o mantenerlos.',
      },
    ],
  },
  tools: {
    id: 'herramientas',
    title: 'Herramientas',
    intro: 'Las que uso a diario. Elijo según el entorno del cliente, no según una moda.',
    groups: [
      {
        label: 'Escritorio',
        items: ['QGIS', 'ArcGIS Pro', 'Network Analyst'],
      },
      {
        label: 'Campo',
        items: ['Survey123', 'Field Maps', 'QField'],
      },
      {
        label: 'Datos y automatización',
        items: ['PostGIS', 'FME', 'Python', 'ArcPy', 'PyQGIS', 'ArcGIS API for Python'],
      },
      {
        label: 'Web e imagen',
        items: [
          'Experience Builder',
          'Dashboards',
          'Maps SDK for JavaScript',
          'Teledetección',
          'Fotogrametría',
          'LiDAR',
        ],
      },
    ],
  },
  path: {
    id: 'trayectoria',
    title: 'Trayectoria',
    intro:
      'Empecé en 2010 con ArcMap, en un inventario de especies invasoras en las Azores. Después hice cursos de ArcMap y, en la carrera, usé QGIS en varios trabajos.',
    credential:
      'Colegiado nº 7126 · Colegio oficial de Graduados en Ingeniería Forestal',
    training: 'Experto en Desarrollo GIS · Esri España',
    master:
      'Máster en Sistemas de Información Geográfica, especializado en análisis · UNIGIS',
    roles: [
      { role: 'Experto GIS', org: 'Grupo EULEN', note: 'Actual' },
      { role: 'Analista GIS', org: 'DOTGIS', note: '' },
      { role: 'Operador fotointérprete', org: 'Tragsatec', note: '' },
      { role: 'Técnico de sistemas de información geográfica', org: 'TECNIGRAL', note: '' },
    ],
  },
  projects: {
    id: 'trabajos',
    title: 'Trabajos',
    intro: 'Piezas que puedo mostrar en público.',
    openLink: 'Abrir',
  },
  contact: {
    id: 'contacto',
    title: 'Contacto',
    intro:
      'Describe el encargo: qué datos tienes, qué quieres entregar y para cuándo. Respondo por correo.',
    name: 'Nombre',
    email: 'Correo',
    subject: 'Asunto',
    message: 'Mensaje',
    submit: 'Enviar',
    sending: 'Enviando…',
    errors: {
      name: 'El nombre es obligatorio.',
      email: 'El correo es obligatorio.',
      subject: 'El asunto es obligatorio.',
      message: 'El mensaje es obligatorio.',
    },
    successTitle: 'Mensaje recibido',
    successBody: 'Te responderé con la mayor brevedad posible.',
    errorSend: 'No se pudo enviar. Inténtalo de nuevo o escribe directamente por correo.',
    close: 'Cerrar',
  },
  footer: {
    copy: '© {year} Javier Roma Corrales · OikosGIS',
    location: 'Madrid',
  },
};

export default es;
