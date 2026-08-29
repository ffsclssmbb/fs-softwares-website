import { SEOData } from '@/types';

export const DEFAULT_SEO: SEOData = {
  title: 'FS Softwares - Business Management Systems | Philippines',
  description: 'Stop running your business from spreadsheets. FS Softwares builds business management systems for Philippine companies across NCR, Cebu, and Davao.',
  keywords: [
    'business software',
    'Philippines',
    'POS system',
    'property management',
    'healthcare management',
    'fleet management',
    'multi-branch software',
  ],
  ogImage: 'https://fssoftwares.ph/og-image.png',
  ogUrl: 'https://fssoftwares.ph',
  canonical: 'https://fssoftwares.ph',
};

export function generateSEO(overrides: Partial<SEOData>): SEOData {
  return { ...DEFAULT_SEO, ...overrides };
}

export function generateJsonLd(data: any) {
  return JSON.stringify(data);
}
