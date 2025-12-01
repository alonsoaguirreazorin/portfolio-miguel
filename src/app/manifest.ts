import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Miguel Casares - Business Analyst & Data Analytics',
    short_name: 'Miguel Casares',
    description: 'Portfolio profesional de Miguel Casares, especialista en Power BI y Business Intelligence',
    start_url: '/',
    display: 'standalone',
    background_color: '#1e293b',
    theme_color: '#1e293b',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/miguelCasaresProfile.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/miguelCasaresProfile.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
