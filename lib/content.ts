import fr from '../content/site.fr.json';
import nl from '../content/site.nl.json';
import type { Locale } from './i18n';

export const dictionaries = {
  fr,
  nl
};

export type Dictionary = typeof fr;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getProjectBySlug(locale: Locale, slug: string) {
  return getDictionary(locale).projects.find((project) => project.slug === slug);
}
