import type {Metadata} from 'next';
import Link from 'next/link';
import Script from 'next/script';
import {getTranslations} from 'next-intl/server';

import {FAQ} from '@/components/FAQ';
import {ServiceCard, type Service} from '@/components/ServiceCard';
import {Button} from '@/components/ui/button';
import servicesData from '@/data/services.json';

export const metadata: Metadata = {
  title: 'Services d’installation et de rénovation de cuisines | B&S Kitchen',
  description:
    'Installation, ajustements et finitions de cuisines à Ternat, Bruxelles et dans le Brabant. Pose précise, raccords coordonnés et suivi personnalisé.'
};

const services = servicesData as Service[];

export default async function ServicesPage() {
  const t = await getTranslations('services');

  const faqItems = Array.from({length: 5}, (_, index) => ({
    question: t(`faq.${index}.question`),
    answer: t(`faq.${index}.answer`)
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      ...services.map((service) => ({
        '@type': service.schemaType,
        '@id': `https://www.bskitchen.be/fr/services#${service.slug}`,
        name: service.title,
        description: service.short
      })),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: t('breadcrumb.home'),
            item: 'https://www.bskitchen.be/fr'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: t('breadcrumb.current'),
            item: 'https://www.bskitchen.be/fr/services'
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="services-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />
      <div className="bg-off-white">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-stone">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link
                  href="/fr"
                  className="transition-colors hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-off-white"
                >
                  {t('breadcrumb.home')}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-charcoal">{t('breadcrumb.current')}</li>
            </ol>
          </nav>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl">
              {t('title')}
            </h1>
            <div className="space-y-4 text-lg text-stone">
              <p>{t('intro.0')}</p>
              <p>{t('intro.1')}</p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-8">
            <h2 className="text-3xl font-semibold text-charcoal sm:text-4xl">{t('faqTitle')}</h2>
            <FAQ items={faqItems} />
          </div>
        </section>
        <section className="bg-charcoal py-14">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 text-off-white sm:px-6 lg:flex-row lg:items-center lg:px-8">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">{t('cta.title')}</h2>
              <p className="mt-2 text-base text-off-white/80">{t('cta.blurb')}</p>
            </div>
            <Button asChild size="lg" variant="secondary" className="bg-off-white text-charcoal hover:bg-brass hover:text-charcoal">
              <Link href="/fr/contact">{t('cta.button')}</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
