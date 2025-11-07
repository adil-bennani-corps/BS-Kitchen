import Image from 'next/image';
import { getDictionary } from '../../../lib/content';
import type { Locale } from '../../../lib/i18n';

export const dynamicParams = false;

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const dictionary = getDictionary(params.locale);
  const about = dictionary.about;

  return (
    <section>
      <div className="container" style={{ display: 'grid', gap: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', alignItems: 'start' }}>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <span className="badge">B&S Kitchen</span>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2.5rem', margin: 0 }}>{about.title}</h1>
          <p style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>{about.introduction}</p>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>{paragraph}</p>
          ))}
        </div>
        <div className="card" style={{ display: 'grid', gap: '1.5rem' }}>
          <Image
            src="https://images.unsplash.com/photo-1616627458537-5b3f095df163?auto=format&fit=crop&w=1200&q=80"
            alt="Atelier de fabrication de cuisines sur mesure"
            width={720}
            height={540}
            style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          />
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '1rem' }}>
            {about.highlights.map((highlight) => (
              <li key={highlight.label} style={{ display: 'grid', gap: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.5rem', fontWeight: 600 }}>{highlight.label}</span>
                <p style={{ margin: 0, color: 'var(--color-muted)' }}>{highlight.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
