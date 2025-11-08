import {Metadata} from 'next';
import Link from 'next/link';

import projectsData from '@/data/projects.json';
import {LazyPager} from '@/components/LazyPager';
import {ProjectFilters} from '@/components/ProjectFilters';
import {Material, Project, Style} from '@/types/projects';

const allProjects = projectsData as Project[];

const styleOrder: Style[] = ['moderne', 'classique', 'bois', 'mixte'];
const materialOrder: Material[] = ['bois', 'laque', 'inox', 'pierre', 'mélaminé'];

export const metadata: Metadata = {
  title: 'Réalisations — B&S Kitchen',
  description:
    'Découvrez une sélection de projets d’installation et de rénovation de cuisines B&S Kitchen autour de Ternat, Bruxelles et le Brabant.'
};

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

function parseList(value: string | string[] | undefined) {
  if (!value) return [];
  const list = Array.isArray(value) ? value : value.split(',');
  return list
    .map((item) => item.trim())
    .filter(Boolean)
    .filter((item, index, array) => array.indexOf(item) === index);
}

export default function RealisationsPage({searchParams}: PageProps) {
  const availableStyles = styleOrder.filter((style) =>
    allProjects.some((project) => project.style === style)
  );
  const availableMaterials = materialOrder.filter((material) =>
    allProjects.some((project) => project.materials.includes(material))
  );
  const availableCities = Array.from(
    new Set(allProjects.map((project) => project.city))
  )
    .map((city) => city.toString())
    .sort((a, b) => a.localeCompare(b));

  const styleFilters = parseList(searchParams?.style).filter((item): item is Style =>
    availableStyles.includes(item as Style)
  );
  const rawCityFilter = Array.isArray(searchParams?.city)
    ? searchParams?.city[0]
    : searchParams?.city || undefined;
  const cityFilter = rawCityFilter && availableCities.includes(rawCityFilter) ? rawCityFilter : undefined;
  const materialFilters = parseList(searchParams?.mat).filter((item): item is Material =>
    availableMaterials.includes(item as Material)
  );
  const rawSort = Array.isArray(searchParams?.sort)
    ? (searchParams?.sort[0] as string)
    : (searchParams?.sort as string | undefined);
  const sortParam: 'recents' | 'anciens' = rawSort === 'anciens' ? 'anciens' : 'recents';

  const filteredProjects = allProjects
    .filter((project) => {
      if (styleFilters.length > 0 && !styleFilters.includes(project.style)) {
        return false;
      }

      if (cityFilter && project.city !== cityFilter) {
        return false;
      }

      if (
        materialFilters.length > 0 &&
        !materialFilters.every((material) => project.materials.includes(material))
      ) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (sortParam === 'anciens') {
        return a.year - b.year;
      }

      return b.year - a.year;
    });

  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bskitchen.be').replace(/\/$/, '');
  const pageUrl = `${baseUrl}/fr/realisations`;

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Réalisations — B&S Kitchen',
    description:
      'Projets d’installation et de rénovation de cuisines réalisés par B&S Kitchen à Ternat, Bruxelles et dans le Brabant.',
    url: pageUrl,
    hasPart: filteredProjects.map((project) => ({
      '@type': 'CreativeWork',
      name: project.title,
      url: `${baseUrl}/fr/realisations/${project.id}`,
      image: project.images[0] ?? undefined
    }))
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: `${baseUrl}/fr`
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Réalisations',
        item: pageUrl
      }
    ]
  };

  const resultsCount = filteredProjects.length;

  return (
    <div className="space-y-12 py-16">
      <section className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          Nos réalisations
        </h1>
        <p className="max-w-3xl text-base text-charcoal/80">
          Une sélection de projets récents menés en Région de Bruxelles-Capitale, à Ternat, Dilbeek,
          Asse et dans le Brabant. Chaque chantier est préparé, ajusté et contrôlé avec le même
          souci du détail.
        </p>
      </section>

      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <ProjectFilters
          availableStyles={availableStyles}
          availableCities={availableCities}
          availableMaterials={availableMaterials}
          selectedStyles={styleFilters}
          selectedCity={cityFilter}
          selectedMaterials={materialFilters}
          selectedSort={sortParam ?? 'recents'}
          resultsCount={resultsCount}
        />

        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-charcoal">{resultsCount} réalisations</h2>
          <span className="text-sm text-charcoal/60">Tri : {sortParam === 'anciens' ? 'Anciens' : 'Récents'}</span>
        </div>

        {resultsCount > 0 ? (
          <LazyPager projects={filteredProjects} pageSize={9} />
        ) : (
          <div className="rounded-3xl border border-dashed border-charcoal/20 bg-off-white/60 p-10 text-center shadow-soft">
            <p className="text-base font-medium text-charcoal">
              Aucune réalisation ne correspond à ces filtres.
            </p>
            <Link
              href="/fr/realisations"
              className="mt-4 inline-flex rounded-full bg-charcoal px-6 py-2 text-sm font-semibold text-off-white transition hover:bg-charcoal/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
            >
              Réinitialiser
            </Link>
          </div>
        )}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(collectionJsonLd)}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd)}}
      />
    </div>
  );
}
