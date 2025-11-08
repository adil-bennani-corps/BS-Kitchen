'use client';

import {useEffect, useMemo, useRef, useState} from 'react';
import {motion} from 'framer-motion';

import {Project} from '@/types/projects';
import {ProjectCard} from '@/components/ProjectCard';
import {cn} from '@/lib/utils';

export type LazyPagerProps = {
  projects: Project[];
  pageSize?: number;
  className?: string;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: {opacity: 0, y: 24},
  visible: {opacity: 1, y: 0}
};

export function LazyPager({projects, pageSize = 9, className}: LazyPagerProps) {
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const loadMoreRef = useRef<HTMLButtonElement | null>(null);
  const hasMore = visibleCount < projects.length;

  useEffect(() => {
    setVisibleCount(pageSize);
  }, [projects, pageSize]);

  useEffect(() => {
    if (!hasMore) {
      return;
    }

    if (!loadMoreRef.current) return;
    if (typeof IntersectionObserver === 'undefined') return;

    const target = loadMoreRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCount((prev) => Math.min(projects.length, prev + pageSize));
          }
        });
      },
      {rootMargin: '0px 0px 200px 0px'}
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, projects.length, pageSize]);

  const visibleProjects = useMemo(
    () => projects.slice(0, Math.min(visibleCount, projects.length)),
    [projects, visibleCount]
  );

  const remaining = Math.max(projects.length - visibleCount, 0);

  return (
    <div className={cn('space-y-8', className)}>
      <motion.ul
        role="list"
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {visibleProjects.map((project, index) => (
          <motion.li key={project.id} variants={itemVariants} className="list-none">
            <ProjectCard project={project} index={index} />
          </motion.li>
        ))}
      </motion.ul>
      {hasMore ? (
        <div className="flex justify-center">
          <button
            ref={loadMoreRef}
            type="button"
            onClick={() => setVisibleCount((prev) => Math.min(projects.length, prev + pageSize))}
            className="rounded-full border border-charcoal/20 px-6 py-3 text-sm font-semibold text-charcoal transition hover:border-charcoal/40 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
            aria-label={`Charger plus de réalisations, ${remaining} restantes`}
          >
            Charger plus ({remaining} restants)
          </button>
        </div>
      ) : (
        <p className="text-center text-sm text-charcoal/60">Toutes les réalisations sont affichées.</p>
      )}
    </div>
  );
}
