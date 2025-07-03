import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ecoclimatic.fr/',
      lastModified: new Date(),
    },
    {
      url: 'https://ecoclimatic.fr/installation',
      lastModified: new Date(),
    },
    {
      url: 'https://ecoclimatic.fr/maintenance',
      lastModified: new Date(),
    },
    {
      url: 'https://ecoclimatic.fr/depannage',
      lastModified: new Date(),
    },
    {
      url: 'https://ecoclimatic.fr/solutions',
      lastModified: new Date(),
    },
    // Ajoute d'autres pages si besoin
  ]
} 