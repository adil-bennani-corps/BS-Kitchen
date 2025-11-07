import Image from 'next/image';
import Link from 'next/link';
import { getDictionary } from '../../lib/content';
import type { Locale } from '../../lib/i18n';
import { buildRoute } from '../../lib/routes';
import ProjectCard from '../../components/ProjectCard';

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const dictionary = getDictionary(params.locale);
  const { hero, servicesIntro, services, values, process, realisationsIntro, testimonials, cta } = dictionary;

  return (
    <>
      <section
        style={{
          paddingTop: '6rem',
          paddingBottom: '6rem'
        }}
      >
        <div className="container" style={{ display: 'grid', gap: '3rem', alignItems: 'center', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div>
            <span className="badge">{hero.badge}</span>
            <h1 style={{ fontSize: '2.75rem', lineHeight: 1.1, margin: '1.5rem 0', fontFamily: 'var(--font-playfair)' }}>{hero.title}</h1>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--color-muted)' }}>{hero.subtitle}</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <Link href={buildRoute(params.locale, 'contact')} className="button-primary">
                {hero.primaryCta}
              </Link>
              <Link
                href={`${buildRoute(params.locale, 'realisations')}`}
                style={{ fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-dark)' }}
              >
                {hero.secondaryCta}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', minHeight: '400px' }}>
            <Image
              src="https://images.unsplash.com/photo-1600585154340-0ef3c08dcdb6?auto=format&fit=crop&w=1400&q=80"
              alt={hero.backgroundAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', borderTop: '1px solid rgba(35,32,28,0.05)', borderBottom: '1px solid rgba(35,32,28,0.05)' }}>
        <div className="container" style={{ display: 'grid', gap: '2rem' }}>
          <div style={{ maxWidth: '720px' }}>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', marginBottom: '0.75rem' }}>{servicesIntro.title}</h2>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>{servicesIntro.subtitle}</p>
          </div>
          <div className="grid grid-2">
            {services.map((service) => (
              <article key={service.title} className="card" style={{ display: 'grid', gap: '1rem' }}>
                <h3 style={{ fontFamily: 'var(--font-playfair)', margin: 0 }}>{service.title}</h3>
                <p style={{ margin: 0, color: 'var(--color-muted)', lineHeight: 1.6 }}>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ display: 'grid', gap: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', marginBottom: '1rem' }}>{values.title}</h2>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>{hero.subtitle}</p>
          </div>
          {values.items.map((value) => (
            <article key={value.title} className="card" style={{ background: 'rgba(255,255,255,0.9)' }}>
              <h3 style={{ fontFamily: 'var(--font-playfair)', marginTop: 0 }}>{value.title}</h3>
              <p style={{ margin: 0, color: 'var(--color-muted)', lineHeight: 1.6 }}>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: '#fff', borderTop: '1px solid rgba(35,32,28,0.05)', borderBottom: '1px solid rgba(35,32,28,0.05)' }}>
        <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
          <div style={{ maxWidth: '680px' }}>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', marginBottom: '0.5rem' }}>{process.title}</h2>
          </div>
          <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '1.5rem' }}>
            {process.steps.map((step, index) => (
              <li key={step.title} style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: 'auto 1fr', alignItems: 'start' }}>
                <span className="badge" aria-hidden="true" style={{ minWidth: '3rem', justifyContent: 'center' }}>
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
      </section>

      <section>
        <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
          <div style={{ maxWidth: '720px' }}>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', marginBottom: '0.75rem' }}>{realisationsIntro.title}</h2>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>{realisationsIntro.subtitle}</p>
          </div>
          <div className="grid grid-3">
            {dictionary.projects.map((project) => (
              <ProjectCard key={project.slug} locale={params.locale} project={project} />
            ))}
          </div>
          <div>
            <Link href={buildRoute(params.locale, 'realisations')} className="button-primary">
              {hero.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff' }}>
        <div className="container" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.author} className="card" style={{ margin: 0, display: 'grid', gap: '1.5rem' }}>
              <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: 1.8 }}>&ldquo;{testimonial.quote}&rdquo;</p>
              <cite style={{ fontStyle: 'normal', fontWeight: 600 }}>{testimonial.author}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section>
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2.25rem', marginBottom: '1rem' }}>{cta.title}</h2>
          <p style={{ color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>{cta.subtitle}</p>
          <Link href={buildRoute(params.locale, 'contact')} className="button-primary">
            {cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
