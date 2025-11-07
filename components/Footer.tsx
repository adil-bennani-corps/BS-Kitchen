import Link from 'next/link';
import type { Dictionary } from '../lib/content';
import type { Locale } from '../lib/i18n';
import { company } from '../lib/company';
import { buildRoute } from '../lib/routes';

interface FooterProps {
  locale: Locale;
  dictionary: Dictionary;
}

export default function Footer({ locale, dictionary }: FooterProps) {
  const { navigation, footer, contact } = dictionary;
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: '#111',
        color: '#f5f1ec',
        padding: '4rem 1.5rem 2.5rem'
      }}
    >
      <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.5rem', margin: 0 }}>B&S Kitchen</p>
          <p style={{ marginTop: '0.75rem', maxWidth: 420, lineHeight: 1.6 }}>{footer.baseline}</p>
          <address style={{ fontStyle: 'normal', marginTop: '1.25rem', lineHeight: 1.7 }}>
            {contact.address}
            <br />
            <a href={`tel:${company.phone}`} style={{ color: '#f5f1ec' }}>
              {contact.phone}
            </a>
            <br />
            <a href={`mailto:${company.email}`} style={{ color: '#f5f1ec' }}>
              {contact.email}
            </a>
          </address>
        </div>
        <div>
          <p style={{ fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Menu</p>
          <ul style={{ listStyle: 'none', margin: '1rem 0 0', padding: 0, display: 'grid', gap: '0.75rem' }}>
            <li>
              <Link href={buildRoute(locale, 'home')} style={{ color: '#f5f1ec' }}>
                {navigation.home}
              </Link>
            </li>
            <li>
              <Link href={buildRoute(locale, 'services')} style={{ color: '#f5f1ec' }}>
                {navigation.services}
              </Link>
            </li>
            <li>
              <Link href={buildRoute(locale, 'realisations')} style={{ color: '#f5f1ec' }}>
                {navigation.realisations}
              </Link>
            </li>
            <li>
              <Link href={buildRoute(locale, 'about')} style={{ color: '#f5f1ec' }}>
                {navigation.about}
              </Link>
            </li>
            <li>
              <Link href={buildRoute(locale, 'contact')} style={{ color: '#f5f1ec' }}>
                {navigation.contact}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p style={{ fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{navigation.cta}</p>
          <p style={{ marginTop: '1rem', lineHeight: 1.6 }}>{dictionary.cta.subtitle}</p>
          <Link href={buildRoute(locale, 'contact')} className="button-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
            {dictionary.cta.button}
          </Link>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(245,241,236,0.2)', marginTop: '2.5rem', paddingTop: '1.5rem', fontSize: '0.85rem', color: 'rgba(245,241,236,0.7)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between' }}>
          <span>
            {footer.copyright}
            {year} {company.name}
          </span>
          <span>{company.legalName} · TVA BE0123.456.789</span>
        </div>
      </div>
    </footer>
  );
}
