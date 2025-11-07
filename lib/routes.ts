import type { Locale } from './i18n';

export type AppRoute = 'home' | 'services' | 'realisations' | 'about' | 'contact';

export function buildRoute(locale: Locale, route: AppRoute, slug?: string) {
  const base = `/${locale}`;

  switch (route) {
    case 'home':
      return base;
    case 'services':
      return `${base}/services`;
    case 'realisations':
      return slug ? `${base}/realisations/${slug}` : `${base}/realisations`;
    case 'about':
      return `${base}/a-propos`;
    case 'contact':
      return `${base}/contact`;
    default:
      return base;
  }
}
