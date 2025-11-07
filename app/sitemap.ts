import type { MetadataRoute } from 'next';
import { company } from '../lib/company';
import { getDictionary } from '../lib/content';
import { locales } from '../lib/i18n';
import { buildRoute } from '../lib/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = company.url;

  const staticRoutes = locales.flatMap((locale) => {
    const dictionary = getDictionary(locale);
    return [
      buildRoute(locale, 'home'),
      buildRoute(locale, 'services'),
      buildRoute(locale, 'realisations'),
      buildRoute(locale, 'about'),
      buildRoute(locale, 'contact')
    ].map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date()
    }));
  });

  const projectRoutes = locales.flatMap((locale) => {
    const dictionary = getDictionary(locale);
    return dictionary.projects.map((project) => ({
      url: `${baseUrl}${buildRoute(locale, 'realisations', project.slug)}`,
      lastModified: new Date()
    }));
  });

  return [...staticRoutes, ...projectRoutes];
}
