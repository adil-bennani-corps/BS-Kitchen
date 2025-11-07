import type { CSSProperties } from 'react';
import { getDictionary } from '../../../lib/content';
import type { Locale } from '../../../lib/i18n';
import { company } from '../../../lib/company';

export const dynamicParams = false;

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const dictionary = getDictionary(params.locale);
  const contact = dictionary.contact;

  return (
    <section>
      <div className="container" style={{ display: 'grid', gap: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <span className="badge">{contact.title}</span>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2.5rem', margin: 0 }}>{contact.title}</h1>
          <p style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>{contact.subtitle}</p>
          <div style={{ display: 'grid', gap: '0.75rem', color: 'var(--color-muted)' }}>
            <span>{contact.address}</span>
            <a href={`tel:${company.phone}`} style={{ color: 'inherit' }}>
              {contact.phone}
            </a>
            <a href={`mailto:${company.email}`} style={{ color: 'inherit' }}>
              {contact.email}
            </a>
            <span>{contact.schedule}</span>
          </div>
        </div>
        <form className="card" style={{ display: 'grid', gap: '1rem' }} aria-labelledby="contact-title">
          <h2 id="contact-title" style={{ fontFamily: 'var(--font-playfair)', margin: 0 }}>{contact.title}</h2>
          <label style={{ display: 'grid', gap: '0.4rem' }}>
            <span>{contact.form.name}</span>
            <input type="text" name="name" required style={inputStyle} autoComplete="name" />
          </label>
          <label style={{ display: 'grid', gap: '0.4rem' }}>
            <span>{contact.form.email}</span>
            <input type="email" name="email" required style={inputStyle} autoComplete="email" />
          </label>
          <label style={{ display: 'grid', gap: '0.4rem' }}>
            <span>{contact.form.phone}</span>
            <input type="tel" name="phone" style={inputStyle} autoComplete="tel" />
          </label>
          <label style={{ display: 'grid', gap: '0.4rem' }}>
            <span>{contact.form.projectType}</span>
            <input type="text" name="projectType" style={inputStyle} />
          </label>
          <label style={{ display: 'grid', gap: '0.4rem' }}>
            <span>{contact.form.message}</span>
            <textarea name="message" rows={4} required style={{ ...inputStyle, resize: 'vertical' }} />
          </label>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>{contact.notice}</p>
          <button type="submit" className="button-primary" style={{ width: 'fit-content' }}>
            {contact.form.submit}
          </button>
        </form>
      </div>
    </section>
  );
}

const inputStyle: CSSProperties = {
  padding: '0.85rem 1rem',
  borderRadius: '999px',
  border: '1px solid rgba(35,32,28,0.15)',
  background: '#fff',
  font: 'inherit'
};
