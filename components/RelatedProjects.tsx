'use client';

import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {useState} from 'react';

import {Project} from '@/types/projects';

export type RelatedProjectsProps = {
  projects: Project[];
};

export function RelatedProjects({projects}: RelatedProjectsProps) {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-charcoal">Projets liés</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <RelatedProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function RelatedProjectCard({project, index}: {project: Project; index: number}) {
  const [hasImageError, setHasImageError] = useState(false);
  const image = project.images[0];

  return (
    <motion.article
      initial={{opacity: 0, y: 24}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.2}}
      transition={{duration: 0.4, delay: index * 0.05, ease: 'easeOut'}}
      className="overflow-hidden rounded-3xl border border-charcoal/10 bg-white shadow-soft"
    >
      <Link
        href={`/fr/realisations/${project.id}`}
        className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
      >
        <div className="relative aspect-video w-full overflow-hidden">
          {image && !hasImageError ? (
            <Image
              src={image}
              alt={`${project.title} à ${project.city}`}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setHasImageError(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-charcoal/5 text-sm font-medium text-charcoal/60">
              Image indisponible
            </div>
          )}
        </div>
        <div className="space-y-2 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/60">
            {project.city} · {project.year}
          </p>
          <h3 className="text-lg font-semibold text-charcoal">{project.title}</h3>
          <p className="text-sm text-charcoal/70">{project.style.charAt(0).toUpperCase() + project.style.slice(1)} · Plan de travail {project.worktop}</p>
        </div>
      </Link>
    </motion.article>
  );
}
