import app from '@/config/app';
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: app.url,
      lastModified: '2024-08-02',
    },
  ];
}