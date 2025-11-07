import { getDictionary } from '../../../lib/content';
import type { Locale } from '../../../lib/i18n';
import { buildRoute } from '../../../lib/routes';
import Link from 'next/link';

export const dynamicParams = false;

export default function ServicesPage({ params }: { params: { locale: Locale } }) {
  const dictionary = getDictionary(params.locale);

  return (
    <section>
      <div className="container" style={{ display: 'grid', gap: '3rem', maxWidth: '960px' }}>
        <div>
          <span className="badge">{dictionary.servicesIntro.title}</span>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2.5rem', marginBottom: '1.5rem', marginTop: '1rem' }}>
            {dictionary.servicesIntro.title}
          </h1>
          <p style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>{dictionary.servicesIntro.subtitle}</p>
        </div>
        <div className="grid" style={{ gap: '2.5rem' }}>
          {dictionary.services.map((service) => (
            <article key={service.title} className="card" style={{ display: 'grid', gap: '1rem' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', margin: 0 }}>{service.title}</h2>
              <p style={{ margin: 0, color: 'var(--color-muted)', lineHeight: 1.6 }}>{service.description}</p>
            </article>
          ))}
        </div>
        <div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', marginBottom: '1rem' }}>{dictionary.process.title}</h2>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1.5rem' }}>
            {dictionary.process.steps.map((step, index) => (
              <li key={step.title} style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: 'auto 1fr' }}>
                <span className="badge" style={{ justifyContent: 'center', minWidth: '3rem' }}>
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', margin: '0 0 0.5rem' }}>{step.title}</h3>
                  <p style={{ margin: 0, color: 'var(--color-muted)', lineHeight: 1.6 }}>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '2.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', marginBottom: '1rem' }}>{dictionary.cta.title}</h2>
          <p style={{ color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>{dictionary.cta.subtitle}</p>
          <Link href={buildRoute(params.locale, 'contact')} className="button-primary">
            {dictionary.cta.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
