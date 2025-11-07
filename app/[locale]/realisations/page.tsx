import { getDictionary } from '../../../lib/content';
import type { Locale } from '../../../lib/i18n';
import ProjectCard from '../../../components/ProjectCard';

export const dynamicParams = false;

export default function RealisationsPage({ params }: { params: { locale: Locale } }) {
  const dictionary = getDictionary(params.locale);

  return (
    <section>
      <div className="container" style={{ display: 'grid', gap: '3rem' }}>
        <div style={{ maxWidth: '720px' }}>
          <span className="badge">{dictionary.realisationsIntro.title}</span>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2.5rem', margin: '1rem 0' }}>{dictionary.realisationsIntro.title}</h1>
          <p style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>{dictionary.realisationsIntro.subtitle}</p>
        </div>
        <div className="grid grid-3">
          {dictionary.projects.map((project) => (
            <ProjectCard key={project.slug} locale={params.locale} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
