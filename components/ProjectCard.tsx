'use client';

import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {useState} from 'react';

import {Project} from '@/types/projects';
import {cn} from '@/lib/utils';

export type ProjectCardProps = {
  project: Project;
  index?: number;
  className?: string;
};

export function ProjectCard({project, index = 0, className}: ProjectCardProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const primaryImage = project.images[0];

  return (
    <Link
      href={`/fr/realisations/${project.id}`}
      aria-label={`${project.title} — ${project.city}`}
      className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
    >
      <motion.article
        className={cn(
          'flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal/10 bg-white shadow-soft transition-transform duration-200',
          className
        )}
        initial={{opacity: 0, y: 24}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.2}}
        transition={{duration: 0.4, delay: index * 0.06, ease: 'easeOut'}}
        whileHover={{scale: 1.01}}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          {primaryImage && !hasImageError ? (
            <Image
              src={primaryImage}
              alt={`${project.title} à ${project.city}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setHasImageError(true)}
              priority={index < 3}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-charcoal/5 text-sm font-medium text-charcoal/60 animate-pulse">
              Image indisponible
            </div>
          )}
          <div className="pointer-events-none absolute left-4 top-4 flex flex-wrap gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-charcoal/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-off-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-6">
          <header className="space-y-2">
            <h3 className="text-lg font-semibold text-charcoal">{project.title}</h3>
            <p className="text-sm text-charcoal/70">
              {project.city} · {project.style.charAt(0).toUpperCase() + project.style.slice(1)}
            </p>
          </header>
          <div className="mt-auto flex items-center justify-between text-sm text-stone">
            <span className="font-medium text-charcoal">Plan de travail</span>
            <span>{project.worktop}</span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
