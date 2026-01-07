import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '../components/Providers';
import LayoutContent from '../components/LayoutContent';

export const metadata: Metadata = {
  title: {
    default: 'UNF Global Tourism - Premium Dubai Travel Agency & Visa Services',
    template: '%s | UNF Global Tourism - Dubai Travel Experts'
  },
  description: 'UNF Global Tourism - Leading Dubai-based travel agency offering luxury tours, visa consultancy, and personalized travel experiences worldwide. Expert travel planning in Dubai, UAE.',
  keywords: [
    'Dubai travel agency',
    'UAE tourism',
    'visa consultancy Dubai',
    'luxury travel Dubai',
    'tourism in Dubai',
    'travel packages UAE',
    'Dubai visa services',
    'luxury travel experiences',
    'worldwide travel assistance',
    'Dubai travel experts',
    'tourism services Dubai',
    'international travel Dubai',
    'premium travel agency',
    'Dubai travel planning'
  ],
  authors: [{ name: 'UNF Global Tourism' }],
  creator: 'UNF Global Tourism',
  publisher: 'UNF Global Tourism',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    title: 'UNF Global Tourism - Premium Dubai Travel Agency & Visa Services',
    description: 'UNF Global Tourism - Leading Dubai-based travel agency offering luxury tours, visa consultancy, and personalized travel experiences worldwide. Expert travel planning in Dubai, UAE.',
    siteName: 'UNF Global Tourism',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UNF Global Tourism - Premium Dubai Travel Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UNF Global Tourism - Premium Dubai Travel Agency & Visa Services',
    description: 'UNF Global Tourism - Leading Dubai-based travel agency offering luxury tours, visa consultancy, and personalized travel experiences worldwide. Expert travel planning in Dubai, UAE.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'I9F04fEi5UdTqzPoLBV9yt92nCHnDlR5FZq8peTU6qk',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background-light dark:bg-background-dark font-display antialiased overflow-x-hidden selection:bg-brand-blue selection:text-white scroll-smooth transition-colors duration-500">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
        <Providers>
          <LayoutContent>
            {children}
          </LayoutContent>
        </Providers>
      </body>
    </html>
  );
}