export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Miguel Casares',
    jobTitle: 'Business Analyst & Data Analytics Specialist',
    description: 'Especialista en análisis de datos, Power BI y Business Intelligence en Granada. Transformo datos en estrategias empresariales.',
    url: 'https://portfolio-miguel.vercel.app',
    image: 'https://portfolio-miguel.vercel.app/miguelCasaresProfile.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Granada',
      addressRegion: 'Andalucía',
      addressCountry: 'ES',
    },
    sameAs: [
      'mailto:miguelcasares01@gmail.com',
    ],
    knowsAbout: [
      'Power BI',
      'Business Intelligence',
      'Data Analytics',
      'SQL',
      'DAX',
      'ETL',
      'Dashboard Development',
      'KPIs',
    ],
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Miguel Casares Portfolio',
    description: 'Portfolio profesional de Miguel Casares, especialista en Business Intelligence y análisis de datos.',
    url: 'https://portfolio-miguel.vercel.app',
    author: {
      '@type': 'Person',
      name: 'Miguel Casares',
    },
    inLanguage: 'es-ES',
  }
}

export function generateBlogSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog de Power BI y Analytics - Miguel Casares',
    description: 'Blog especializado en Power BI, Business Intelligence y análisis de datos.',
    url: 'https://portfolio-miguel.vercel.app/blog',
    author: {
      '@type': 'Person',
      name: 'Miguel Casares',
    },
    inLanguage: 'es-ES',
  }
}
