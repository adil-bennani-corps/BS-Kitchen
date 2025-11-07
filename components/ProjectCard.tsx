import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '../lib/i18n';
import type { Dictionary } from '../lib/content';
import { buildRoute } from '../lib/routes';

interface ProjectCardProps {
  locale: Locale;
  project: Dictionary['projects'][number];
}

export default function ProjectCard({ locale, project }: ProjectCardProps) {
  return (
    <article className="card" style={{ padding: 0, overflow: 'hidden' }}>
      <Link href={buildRoute(locale, 'realisations', project.slug)} style={{ color: 'inherit' }}>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3' }}>
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: 'cover' }}
            priority={false}
          />
        </div>
        <div style={{ padding: '1.75rem' }}>
          <p className="badge" style={{ marginBottom: '1rem' }}>
            {project.location} · {project.year}
          </p>
          <h3 style={{ margin: '0 0 0.75rem', fontSize: '1.25rem', fontFamily: 'var(--font-playfair)' }}>{project.title}</h3>
          <p style={{ margin: 0, color: 'var(--color-muted)', lineHeight: 1.6 }}>{project.summary}</p>
        </div>
      </Link>
    </article>
  );
}
