import { companyInfo } from './company';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${companyInfo.baseUrl}/#organization`,
    name: companyInfo.name,
    legalName: companyInfo.legalName,
    url: companyInfo.baseUrl,
    logo: `${companyInfo.baseUrl}/logo.png`,
    description:
      'Installateur professionnel de cuisines et aménagements intérieurs avec plus de 20 ans d\'expérience en Belgique.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address.street,
      postalCode: companyInfo.address.postalCode,
      addressLocality: companyInfo.address.city,
      addressCountry: 'BE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: companyInfo.contact.phone,
      email: companyInfo.contact.email,
      contactType: 'customer service',
      availableLanguage: ['French', 'Dutch'],
      areaServed: 'BE',
    },
    vatID: companyInfo.vat,
    areaServed: {
      '@type': 'Country',
      name: 'Belgium',
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${companyInfo.baseUrl}/#localbusiness`,
    name: companyInfo.name,
    image: `${companyInfo.baseUrl}/og-image.jpg`,
    url: companyInfo.baseUrl,
    telephone: companyInfo.contact.phone,
    email: companyInfo.contact.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address.street,
      postalCode: companyInfo.address.postalCode,
      addressLocality: companyInfo.address.city,
      addressCountry: 'BE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.8667,
      longitude: 4.1833,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    areaServed: companyInfo.serviceArea.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services d\'installation de cuisines',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Installation de cuisines',
            description:
              'Installation professionnelle de cuisines pour particuliers et enseignes partenaires',
            provider: {
              '@id': `${companyInfo.baseUrl}/#organization`,
            },
            areaServed: 'BE',
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceUrl: `${companyInfo.baseUrl}/services`,
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Rénovation d\'intérieur',
            description:
              'Rénovation de cuisines, dressings, buanderies et placards sur mesure',
            provider: {
              '@id': `${companyInfo.baseUrl}/#organization`,
            },
            areaServed: 'BE',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Réparation et SAV',
            description:
              'Service après-vente, ajustements et réparations de cuisines',
            provider: {
              '@id': `${companyInfo.baseUrl}/#organization`,
            },
            areaServed: 'BE',
          },
        },
      ],
    },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
