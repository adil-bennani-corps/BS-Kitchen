import type { Metadata } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { company } from '../../lib/company';
import { getDictionary } from '../../lib/content';
import { isLocale, locales, type Locale } from '../../lib/i18n';
import { buildRoute } from '../../lib/routes';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LayoutParams {
  locale: Locale;
}

export function generateMetadata({ params }: { params: LayoutParams }): Metadata {
  const locale = params.locale;
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    keywords: dictionary.meta.keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: '/fr',
        nl: '/nl'
      }
    },
    openGraph: {
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      locale: locale === 'fr' ? 'fr_BE' : 'nl_BE'
    }
  };
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale;
  const dictionary = getDictionary(locale);

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: company.name,
    legalName: company.legalName,
    url: company.url,
    logo: company.logo,
    image: dictionary.projects[0]?.heroImage,
    description: dictionary.meta.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.streetAddress,
      postalCode: company.address.postalCode,
      addressLocality: company.address.addressLocality,
      addressCountry: company.address.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.866,
      longitude: 4.166
    },
    areaServed: 'Belgique',
    telephone: company.phone,
    email: company.email,
    openingHours: company.openingHours,
    sameAs: []
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: dictionary.navigation.home,
        item: buildRoute(locale, 'home')
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: dictionary.navigation.services,
        item: buildRoute(locale, 'services')
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: dictionary.navigation.realisations,
        item: buildRoute(locale, 'realisations')
      }
    ]
  };

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    telephone: company.phone,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.streetAddress,
      postalCode: company.address.postalCode,
      addressLocality: company.address.addressLocality,
      addressCountry: company.address.addressCountry
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: company.phone,
      contactType: locale === 'fr' ? 'Service client' : 'Klantendienst',
      availableLanguage: locales
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <a href="#main" className="visually-hidden">
        {locale === 'fr' ? 'Aller au contenu principal' : 'Ga naar hoofdinhoud'}
      </a>
      <Header locale={locale} dictionary={dictionary} />
      <main id="main" style={{ flex: 1 }}>{children}</main>
      <Footer locale={locale} dictionary={dictionary} />
      <Script id="schema-organization" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(organizationJsonLd)}
      </Script>
      <Script id="schema-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbJsonLd)}
      </Script>
      <Script id="schema-localbusiness" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(localBusinessJsonLd)}
      </Script>
    </div>
  );
}
