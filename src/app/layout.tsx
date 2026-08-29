'use client';

import type { Metadata } from 'next';
import { Providers } from '@/app/providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'FS Softwares - Business Management Systems | Philippines',
  description: 'Stop running your business from spreadsheets. FS Softwares builds business management systems for Philippine companies across NCR, Cebu, and Davao.',
  keywords: ['business software', 'Philippines', 'POS system', 'property management', 'healthcare management', 'fleet management'],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/logos/fs-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: 'https://fssoftwares.ph',
    siteName: 'FS Softwares',
    images: [{
      url: 'https://fssoftwares.ph/og-image.png',
      width: 1200,
      height: 630,
    }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#10B981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-dark-bg text-text-primary antialiased">
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
