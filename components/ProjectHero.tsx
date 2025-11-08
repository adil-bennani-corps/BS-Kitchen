'use client';

import Image from 'next/image';
import {motion} from 'framer-motion';
import {useState} from 'react';

import {Project} from '@/types/projects';

export type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({project}: ProjectHeroProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const heroImage = project.images[0];

  return (
    <section className="space-y-8">
      <motion.div
        className="overflow-hidden rounded-3xl border border-charcoal/10 bg-off-white shadow-soft"
        initial={{opacity: 0, y: 24}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5, ease: 'easeOut'}}
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          {heroImage && !hasImageError ? (
            <Image
              src={heroImage}
              alt={`${project.title} à ${project.city}`}
              fill
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="h-full w-full object-cover"
              priority
              onError={() => setHasImageError(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-charcoal/5 text-base font-medium text-charcoal/60">
              Image principale indisponible
            </div>
          )}
        </div>
        <div className="space-y-3 px-6 pb-10 pt-8 sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brass">
            {project.city} · {project.year} · {project.style.charAt(0).toUpperCase() + project.style.slice(1)}
          </p>
          <h1 className="text-3xl font-semibold text-charcoal sm:text-4xl md:text-5xl">{project.title}</h1>
        </div>
      </motion.div>
    </section>
  );
}
