'use client';

import {useEffect, useMemo, useState} from 'react';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';

import {Material, Style} from '@/types/projects';
import {cn} from '@/lib/utils';

export type ProjectFiltersProps = {
  availableStyles: Style[];
  availableCities: string[];
  availableMaterials: Material[];
  selectedStyles: Style[];
  selectedCity?: string;
  selectedMaterials: Material[];
  selectedSort: 'recents' | 'anciens';
  resultsCount: number;
  className?: string;
};

const sortLabels: Record<'recents' | 'anciens', string> = {
  recents: 'Récents',
  anciens: 'Anciens'
};

export function ProjectFilters({
  availableStyles,
  availableCities,
  availableMaterials,
  selectedStyles,
  selectedCity,
  selectedMaterials,
  selectedSort,
  resultsCount,
  className
}: ProjectFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [styles, setStyles] = useState<string[]>(selectedStyles);
  const [city, setCity] = useState<string>(selectedCity ?? '');
  const [materials, setMaterials] = useState<string[]>(selectedMaterials);
  const [sort, setSort] = useState<'recents' | 'anciens'>(selectedSort);

  useEffect(() => {
    setStyles(selectedStyles);
  }, [selectedStyles]);

  useEffect(() => {
    setCity(selectedCity ?? '');
  }, [selectedCity]);

  useEffect(() => {
    setMaterials(selectedMaterials);
  }, [selectedMaterials]);

  useEffect(() => {
    setSort(selectedSort);
  }, [selectedSort]);

  const handleStyleToggle = (value: string) => {
    setStyles((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleMaterialToggle = (value: string) => {
    setMaterials((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const applyFilters = () => {
    const nextParams = new URLSearchParams(searchParams.toString());

    if (styles.length > 0) {
      nextParams.set('style', styles.join(','));
    } else {
      nextParams.delete('style');
    }

    if (city) {
      nextParams.set('city', city);
    } else {
      nextParams.delete('city');
    }

    if (materials.length > 0) {
      nextParams.set('mat', materials.join(','));
    } else {
      nextParams.delete('mat');
    }

    if (sort && sort !== 'recents') {
      nextParams.set('sort', sort);
    } else {
      nextParams.delete('sort');
    }

    const query = nextParams.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  };

  const resetFilters = () => {
    setStyles([]);
    setCity('');
    setMaterials([]);
    setSort('recents');
    router.push(pathname);
  };

  const resultLabel = useMemo(() => {
    if (resultsCount === 0) {
      return 'Aucune réalisation trouvée';
    }

    if (resultsCount === 1) {
      return '1 réalisation trouvée';
    }

    return `${resultsCount} réalisations trouvées`;
  }, [resultsCount]);

  return (
    <section
      className={cn(
        'rounded-3xl border border-charcoal/10 bg-off-white/60 p-6 shadow-soft backdrop-blur-sm',
        className
      )}
      aria-labelledby="filtres-realisations"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 id="filtres-realisations" className="text-lg font-semibold text-charcoal">
          Filtrer les réalisations
        </h2>
        <p className="text-sm text-charcoal/70">Affinez selon le style, la ville ou les matériaux.</p>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <fieldset className="space-y-3">
          <legend className="text-sm font-semibold uppercase tracking-wide text-charcoal">Style</legend>
          <div className="flex flex-wrap gap-3">
            {availableStyles.map((style) => (
              <label
                key={style}
                className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 bg-white px-3 py-2 text-sm text-charcoal shadow-soft transition focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brass"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-charcoal/40 text-charcoal focus:ring-brass"
                  checked={styles.includes(style)}
                  onChange={() => handleStyleToggle(style)}
                />
                <span className="capitalize">{style}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="space-y-3">
          <label htmlFor="city-select" className="block text-sm font-semibold uppercase tracking-wide text-charcoal">
            Ville
          </label>
          <select
            id="city-select"
            className="w-full rounded-2xl border border-charcoal/20 bg-white px-4 py-3 text-sm text-charcoal shadow-soft focus:border-brass focus:outline-none focus:ring-2 focus:ring-brass"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          >
            <option value="">Toutes les villes</option>
            {availableCities.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <fieldset className="space-y-3 md:col-span-2 xl:col-span-1">
          <legend className="text-sm font-semibold uppercase tracking-wide text-charcoal">Matériaux</legend>
          <div className="grid grid-cols-2 gap-3">
            {availableMaterials.map((material) => (
              <label
                key={material}
                className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 bg-white px-3 py-2 text-sm text-charcoal shadow-soft transition focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brass"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-charcoal/40 text-charcoal focus:ring-brass"
                  checked={materials.includes(material)}
                  onChange={() => handleMaterialToggle(material)}
                />
                <span className="capitalize">{material}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="space-y-3">
          <label htmlFor="sort-select" className="block text-sm font-semibold uppercase tracking-wide text-charcoal">
            Tri
          </label>
          <select
            id="sort-select"
            className="w-full rounded-2xl border border-charcoal/20 bg-white px-4 py-3 text-sm text-charcoal shadow-soft focus:border-brass focus:outline-none focus:ring-2 focus:ring-brass"
            value={sort}
            onChange={(event) => setSort(event.target.value as 'recents' | 'anciens')}
          >
            {Object.entries(sortLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div aria-live="polite" className="sr-only">
          {resultLabel}
        </div>
        <p className="text-sm text-charcoal/70">{resultLabel}</p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={resetFilters}
            className="rounded-full border border-charcoal/20 px-5 py-2 text-sm font-medium text-charcoal transition hover:border-charcoal/40 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
          >
            Réinitialiser
          </button>
          <button
            type="button"
            onClick={applyFilters}
            className="rounded-full bg-charcoal px-6 py-2 text-sm font-semibold text-off-white transition hover:bg-charcoal/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
          >
            Appliquer
          </button>
        </div>
      </div>
    </section>
  );
}
