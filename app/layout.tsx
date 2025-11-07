import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

const siteName = 'B&S Kitchen';
const baseUrl = 'https://www.bskitchen.be';
const heroImageUrl =
  'https://images.unsplash.com/photo-1616628182501-0f3c7e4c48eb?auto=format&fit=crop&w=1200&q=80';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteName} · Cuisines sur mesure à Ternat`,
    template: `%s · ${siteName}`
  },
  description:
    'Conception et installation de cuisines premium à Ternat. Bois, pierre et métal pour des intérieurs raffinés adaptés à votre quotidien.',
  keywords: [
    'cuisine sur mesure',
    'agencement cuisine',
    'cuisiniste Ternat',
    'B&S Kitchen',
    'Belgique'
  ],
  creator: siteName,
  publisher: siteName,
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    alternateLocale: ['nl_BE'],
    siteName,
    title: `${siteName} · Cuisines sur mesure à Ternat`,
    description:
      'B&S Kitchen conçoit et installe des cuisines haut de gamme en Belgique. Découvrez nos réalisations et demandez votre devis personnalisé.',
    url: baseUrl,
    images: [
      {
        url: heroImageUrl,
        width: 1200,
        height: 630,
        alt: 'Cuisine B&S Kitchen avec finition bois et pierre naturelle'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} · Cuisines sur mesure à Ternat`,
    description:
      'Cuisine haut de gamme, matériaux nobles et accompagnement complet pour votre projet à Ternat et en Belgique.',
    images: [heroImageUrl]
  },
  alternates: {
    canonical: '/',
    languages: {
      fr: '/',
      nl: '/nl'
    }
  }
};

export const viewport: Viewport = {
  themeColor: '#f5f1ec'
};

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale?: string };
}) {
  const locale = params?.locale ?? 'fr';
  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
