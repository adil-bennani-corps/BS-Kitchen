'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import type { Dictionary } from '../lib/content';
import type { Locale } from '../lib/i18n';
import { buildRoute } from '../lib/routes';
import LocaleSwitcher from './LocaleSwitcher';

interface HeaderProps {
  locale: Locale;
  dictionary: Dictionary;
}

export default function Header({ locale, dictionary }: HeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { navigation } = dictionary;

  const navItems = [
    { label: navigation.services, route: 'services' as const },
    { label: navigation.realisations, route: 'realisations' as const },
    { label: navigation.about, route: 'about' as const },
    { label: navigation.contact, route: 'contact' as const }
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        backdropFilter: 'blur(12px)',
        background: 'rgba(245, 241, 236, 0.85)',
        borderBottom: '1px solid rgba(35,32,28,0.08)'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1.5rem'
        }}
      >
        <Link href={buildRoute(locale, 'home')} aria-label="B&S Kitchen" style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.35rem', fontWeight: 600 }}>
          B&S Kitchen
        </Link>
        <nav aria-label="Primary" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="visually-hidden"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
          >
            Menu
          </button>
          <ul
            id="primary-navigation"
            data-open={isOpen}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              listStyle: 'none',
              margin: 0,
              padding: 0
            }}
          >
            {navItems.map((item) => {
              const href = buildRoute(locale, item.route);
              const isActive = pathname.startsWith(href);
              return (
                <li key={item.route}>
                  <Link
                    href={href}
                    style={{
                      position: 'relative',
                      fontSize: '0.95rem',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? 'var(--color-dark)' : 'var(--color-muted)'
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href={buildRoute(locale, 'contact')} className="button-primary">
                {navigation.cta}
              </Link>
            </li>
            <li>
              <LocaleSwitcher locale={locale} />
            </li>
          </ul>
        </nav>
      </div>
      <style jsx>{`
        @media (max-width: 900px) {
          header div.container {
            flex-wrap: wrap;
          }

          #primary-navigation {
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 1rem;
            display: none;
          }

          #primary-navigation[data-open='true'] {
            display: flex;
          }

          #primary-navigation li {
            width: 100%;
          }

          #primary-navigation li a.button-primary {
            width: 100%;
            justify-content: center;
          }

          button.visually-hidden {
            position: static;
            width: auto;
            height: auto;
            margin-left: auto;
            clip: auto;
            padding: 0.5rem 0.75rem;
            border-radius: 999px;
            background: rgba(35, 32, 28, 0.08);
            font-size: 0.9rem;
            font-weight: 600;
          }
        }
      `}</style>
    </header>
  );
}
