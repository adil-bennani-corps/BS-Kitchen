'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, type Locale } from '../lib/i18n';

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const currentLocale = segments[1] || locale;

  return (
    <div
      role="group"
      aria-label="Langues"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.25rem',
        borderRadius: 999,
        padding: '0.25rem',
        background: 'rgba(35,32,28,0.08)'
      }}
    >
      {locales.map((loc) => {
        const isActive = currentLocale === loc;
        const newPath = [''].concat([loc], segments.slice(2)).join('/');
        return (
          <Link
            key={loc}
            href={newPath || `/${loc}`}
            aria-current={isActive ? 'true' : undefined}
            style={{
              padding: '0.4rem 0.75rem',
              borderRadius: 999,
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              background: isActive ? 'var(--color-dark)' : 'transparent',
              color: isActive ? '#fff' : 'var(--color-dark)'
            }}
          >
            {loc}
          </Link>
        );
      })}
    </div>
  );
}
