import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['fr', 'nl'] as const;
export const defaultLocale = 'fr';
export const localePrefix = 'as-needed';

export const pathnames = {
  '/': '/',
  '/contact': {
    fr: '/contact',
    nl: '/nl/contact'
  },
  '/services': {
    fr: '/services',
    nl: '/nl/diensten'
  },
  '/realisations': {
    fr: '/realisations',
    nl: '/nl/realisaties'
  },
  '/realisations/[id]': {
    fr: '/realisations/[id]',
    nl: '/nl/realisaties/[id]'
  }
} as const;

export const routing = {
  locales,
  defaultLocale,
  localePrefix,
  pathnames,
  ...createLocalizedPathnamesNavigation({locales, localePrefix, pathnames})
};

export type AppLocale = (typeof locales)[number];
