import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getDictionary, getProjectBySlug } from '../../../../lib/content';
import { locales, type Locale } from '../../../../lib/i18n';

interface ProjectPageProps {
  params: { locale: Locale; slug: string };
}

export async function generateStaticParams() {
  return locales.flatMap((locale) => {
    const dictionary = getDictionary(locale);
    return dictionary.projects.map((project) => ({ locale, slug: project.slug }));
  });
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.locale, params.slug);
  const dictionary = getDictionary(params.locale);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} · B&S Kitchen`,
    description: project.summary,
    openGraph: {
      title: `${project.title} · B&S Kitchen`,
      description: project.summary,
      images: project.gallery.map((image) => ({ url: image }))
    },
    alternates: {
      canonical: `/${params.locale}/realisations/${project.slug}`,
      languages: {
        fr: `/fr/realisations/${project.slug}`,
        nl: `/nl/realisations/${project.slug}`
      }
    },
    keywords: [...dictionary.meta.keywords, project.title, project.location]
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.locale, params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article>
      <section style={{ paddingBottom: '3rem' }}>
        <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
          <div>
            <span className="badge">{project.location} · {project.year}</span>
            <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2.75rem', margin: '1rem 0' }}>{project.title}</h1>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>{project.summary}</p>
          </div>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', borderRadius: '24px', overflow: 'hidden' }}>
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="grid grid-3">
            <div className="card" style={{ display: 'grid', gap: '0.5rem' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', margin: 0 }}>{params.locale === 'fr' ? 'Détails' : 'Details'}</h2>
              <dl style={{ margin: 0, display: 'grid', gap: '0.75rem' }}>
                <div>
                  <dt style={{ fontWeight: 600 }}>{params.locale === 'fr' ? 'Surface' : 'Oppervlakte'}</dt>
                  <dd style={{ margin: 0, color: 'var(--color-muted)' }}>{project.surface}</dd>
                </div>
                <div>
                  <dt style={{ fontWeight: 600 }}>{params.locale === 'fr' ? 'Matériaux' : 'Materialen'}</dt>
                  <dd style={{ margin: 0, color: 'var(--color-muted)' }}>{project.materials.join(', ')}</dd>
                </div>
              </dl>
            </div>
            <div className="card" style={{ gridColumn: 'span 2', lineHeight: 1.7, color: 'var(--color-muted)' }}>
              {project.description}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', borderTop: '1px solid rgba(35,32,28,0.05)' }}>
        <div className="container" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {project.gallery.map((image, index) => (
            <div key={image} style={{ position: 'relative', width: '100%', aspectRatio: index === 0 ? '4 / 3' : '3 / 4', borderRadius: '18px', overflow: 'hidden' }}>
              <Image src={image} alt={`${project.title} ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="container card" style={{ display: 'grid', gap: '1.25rem' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair)', margin: 0 }}>{params.locale === 'fr' ? 'Points clés' : 'Highlights'}</h2>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
