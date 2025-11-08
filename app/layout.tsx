import './globals.css';

import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {headers} from 'next/headers';
import type {Metadata} from 'next';
import {ReactNode} from 'react';

import {SiteShell} from '@/components/layout/SiteShell';
import {routing} from '@/i18n/routing';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bskitchen.be'),
  title: {
    default: 'B&S Kitchen',
    template: '%s | B&S Kitchen'
  },
  description:
    'Installateur de cuisines premium à Ternat, Belgique. Conception, fabrication et pose sur-mesure pour les particuliers exigeants.',
  alternates: {
    canonical: '/',
    languages: {
      fr: '/',
      nl: '/nl'
    }
  },
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    alternateLocale: ['nl_BE'],
    siteName: 'B&S Kitchen',
    title: 'B&S Kitchen',
    description:
      'Installateur de cuisines premium à Ternat, Belgique. Conception, fabrication et pose sur-mesure pour les particuliers exigeants.'
  }
};

async function getMessages(locale: string) {
  try {
    const messages = (await import(`../messages/${locale}.json`)).default;
    return messages;
  } catch (error) {
    console.error(`Missing messages for locale "${locale}"`, error);
    return (await import('../messages/fr.json')).default;
  }
}

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  const locale = headers().get('x-next-intl-locale') ?? routing.defaultLocale;
  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen bg-off-white font-sans text-charcoal`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SiteShell>{children}</SiteShell>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
