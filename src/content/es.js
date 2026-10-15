const es = {
  meta: {
    title: 'Data Engineer geoespacial — Javier Roma Corrales | OikosGIS',
    description:
      'Data Engineer geoespacial, GIS Madrid. Automatizo, limpio y cargo tus datos GIS con ETL FME y Python, PostGIS y AWS. Trabajo en remoto, en GIS desde 2010.',
  },
  brand: 'OikosGIS',
  nav: {
    services: 'Qué hago',
    projects: 'Proyecto',
    process: 'Cómo trabajo',
    tools: 'Herramientas',
    path: 'Trayectoria',
    contact: 'Contacto',
    home: 'OikosGIS, inicio',
    menu: 'Menú',
  },
  lang: {
    es: 'ES',
    en: 'EN',
    switchTo: 'English',
  },
  hero: {
    eyebrow: 'Data Engineer geoespacial',
    title: 'Automatizo y ordeno tus datos geoespaciales',
    lead:
      'Pipelines ETL con FME y Python, bases de datos PostGIS y datos en la nube (AWS). Para equipos que hoy cargan, convierten o limpian datos a mano. En remoto desde Madrid, en GIS desde 2010.',
    name: 'Javier Roma Corrales',
    cta: 'Cuéntame tu caso',
    projectCta: 'Ver proyecto',
  },
  services: {
    id: 'encargos',
    title: 'Qué hago',
    items: [
      {
        title: 'Automatización y ETL espacial',
        forWhom: 'Para quien repite cargas o une fuentes a mano.',
        deliverable:
          'Pipelines que descargan, transforman, validan y cargan datos espaciales, con formatos como shapefile, GML, CAD, GeoJSON, GeoPackage y GeoParquet.',
        tools: 'Herramientas: FME, Python, SQL.',
      },
      {
        title: 'Bases de datos espaciales y nube',
        forWhom: 'Para quien necesita una única fuente de datos fiable.',
        deliverable:
          'Diseño y carga de PostGIS con esquemas, índices y control de calidad, y datos en S3 listos para consultar.',
        tools: 'Herramientas: PostGIS, AWS (S3, Lambda), GeoParquet.',
      },
      {
        title: 'Datos de campo conectados',
        forWhom: 'Para quien recoge datos en terreno y los necesita limpios en el sistema.',
        deliverable:
          'Proyectos de QField y Survey123 conectados a la base de datos, con formularios, validaciones y sincronización.',
        tools: 'Herramientas: QField, QGIS, Survey123, Field Maps.',
      },
    ],
    note: 'También hago cartografía, visores web y tratamiento de imagen y LiDAR cuando forman parte de un proyecto de datos.',
  },
  projects: {
    id: 'proyecto',
    title: 'Proyecto',
    name: 'spain-flood-exposure: exposición a inundaciones en Valencia',
    text:
      'Pipeline en Python y AWS que descarga datos públicos del Catastro y del INE, los guarda en un data lake en S3 y los convierte a GeoParquet para cruzar edificios y población con zonas inundables.',
    facts:
      'Lambdas de ingesta con permisos mínimos y tests · 266 municipios · 1.830 secciones censales.',
    linkLabel: 'Ver spain-flood-exposure en GitHub',
    linkUrl: 'https://github.com/jaromaco/spain-flood-exposure',
  },
  process: {
    id: 'como-trabajo',
    title: 'Cómo trabajo',
    steps: [
      {
        title: 'Alcance',
        text: 'Me cuentas qué datos tienes y qué necesitas entregar. Lo dejamos por escrito: qué entra, qué no y el plazo.',
      },
      {
        title: 'Ejecución',
        text: 'Uso las herramientas que encajen con tu entorno. Te enseño avances en los puntos acordados.',
      },
      {
        title: 'Entrega',
        text: 'Recibes los datos, y también los scripts o workspaces de FME documentados, para que el proceso se pueda repetir sin mí.',
      },
    ],
  },
  tools: {
    id: 'herramientas',
    title: 'Herramientas',
    intro: 'Me adapto a las herramientas que ya usas.',
    groups: [
      {
        label: 'Datos y automatización',
        items: ['FME', 'Python', 'SQL', 'PostGIS', 'GeoPandas'],
      },
      {
        label: 'Nube',
        items: ['AWS (S3, Lambda, Glue, Athena)', 'GeoParquet'],
      },
      {
        label: 'Escritorio y campo',
        items: ['QGIS', 'ArcGIS Pro', 'QField', 'Survey123', 'Field Maps'],
      },
      {
        label: 'Web e imagen',
        items: ['Experience Builder', 'Dashboards', 'teledetección', 'LiDAR'],
      },
    ],
  },
  path: {
    id: 'trayectoria',
    title: 'Trayectoria',
    intro:
      'En GIS desde 2010, cuando empecé con un inventario de especies invasoras en las Azores. Desde entonces he pasado de hacer mapas a automatizar los datos que hay detrás.',
    roles: [
      { role: 'Experto GIS', org: 'Grupo EULEN', note: 'Actualidad' },
      { role: 'Analista GIS', org: 'DOTGIS', note: '' },
      { role: 'Operador fotointérprete', org: 'Tragsatec', note: '' },
      { role: 'Técnico SIG', org: 'TECNIGRAL', note: '' },
    ],
    education:
      'Máster en SIG (UNIGIS) · Experto en Desarrollo GIS (Esri España) · AWS Certified Data Engineer (en curso) · Colegiado nº 7126, Colegio Oficial de Graduados en Ingeniería Forestal.',
  },
  contact: {
    id: 'contacto',
    title: 'Contacto',
    intro:
      'Cuéntame qué datos tienes, qué quieres conseguir y para cuándo. Trabajo en remoto y respondo por escrito.',
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
    formNote: 'Necesitas JavaScript para usar el formulario de contacto en este sitio.',
    links: [
      {
        icon: 'linkedin',
        label: 'LinkedIn de Javier Roma Corrales',
        url: 'https://www.linkedin.com/in/javier-roma-geospatial-engineer',
        rel: 'me noreferrer',
      },
      {
        icon: 'github',
        label: 'GitHub de jaromaco',
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

export default es;
