'use client';

import {motion} from 'framer-motion';
import {ReactNode} from 'react';

import {cn} from '@/lib/utils';

export type Service = {
  slug: string;
  title: string;
  short: string;
  bullets: string[];
  icon: string;
  schemaType: 'Service';
};

const iconGlyphs: Record<string, ReactNode> = {
  wrench: (
    <path
      d="M6 4.5a2.5 2.5 0 0 1 4.3-1.8l2 2a2.5 2.5 0 0 1-.43 3.82l-2.14 1.43a1 1 0 0 0-.36.4L8.2 13a1 1 0 0 1-1.8 0L5.5 9.35a1 1 0 0 0-.4-.36L3.65 8.05a2.5 2.5 0 0 1 1.82-4.3L6 4.5z"
      fill="currentColor"
    />
  ),
  adjustments: (
    <>
      <path d="M6 4h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 16h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="4" r="1.5" fill="currentColor" />
      <circle cx="14" cy="10" r="1.5" fill="currentColor" />
      <circle cx="9" cy="16" r="1.5" fill="currentColor" />
    </>
  ),
  countertop: (
    <>
      <rect x="4" y="5" width="16" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 9v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 9v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="m9 15 2-6 6-2-2 6-6 2z" fill="currentColor" />
    </>
  ),
  toolbox: (
    <>
      <rect x="4" y="8" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  )
};

function PlaceholderIcon({name}: {name: string}) {
  return (
    <div
      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-charcoal/5 text-charcoal"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" role="presentation">
        {iconGlyphs[name] ?? (
          <circle cx="12" cy="12" r="8" fill="currentColor" className="text-charcoal/40" />
        )}
      </svg>
    </div>
  );
}

export type ServiceCardProps = {
  service: Service;
  index?: number;
  className?: string;
};

export function ServiceCard({service, index = 0, className}: ServiceCardProps) {
  return (
    <motion.article
      className={cn(
        'flex h-full flex-col gap-6 rounded-3xl border border-charcoal/10 bg-white p-8 shadow-soft transition-transform duration-200 hover:scale-[1.01] hover:shadow-lg focus-within:shadow-lg',
        className
      )}
      initial={{opacity: 0, y: 24}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.2}}
      transition={{duration: 0.4, delay: index * 0.08, ease: 'easeOut'}}
    >
      <PlaceholderIcon name={service.icon} />
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-charcoal">{service.title}</h3>
        <p className="text-base text-stone">{service.short}</p>
      </div>
      <ul className="mt-auto space-y-2">
        {service.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3 text-sm text-charcoal/80">
            <span className="mt-2 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brass" aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
