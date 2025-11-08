'use client';

import Image from 'next/image';
import {motion} from 'framer-motion';
import {useId, useMemo, useState} from 'react';

import {BeforeAfter as BeforeAfterType, Project} from '@/types/projects';

export type BeforeAfterProps = {
  beforeAfter: BeforeAfterType | null | undefined;
  project: Project;
};

export function BeforeAfter({beforeAfter, project}: BeforeAfterProps) {
  const [value, setValue] = useState(50);
  const [beforeError, setBeforeError] = useState(false);
  const [afterError, setAfterError] = useState(false);
  const sliderId = useId();

  const hasContent = beforeAfter?.before && beforeAfter?.after;
  const ariaValueText = useMemo(() => `Révélation à ${value} pour cent`, [value]);

  if (!hasContent) {
    return null;
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-charcoal">Avant / Après</h2>
        <label htmlFor={sliderId} className="text-sm font-medium text-charcoal/70">
          Faites glisser pour comparer
        </label>
      </div>
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-charcoal/10 bg-off-white shadow-soft"
        initial={{opacity: 0, y: 24}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.2}}
        transition={{duration: 0.5, ease: 'easeOut'}}
      >
        <div className="relative aspect-video w-full">
          {beforeAfter.before && !beforeError ? (
            <Image
              src={beforeAfter.before}
              alt={`Vue avant du projet ${project.title}`}
              fill
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="h-full w-full object-cover"
              onError={() => setBeforeError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-charcoal/5 text-sm font-medium text-charcoal/60">
              Image avant indisponible
            </div>
          )}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{clipPath: `inset(0 ${100 - value}% 0 0)`}}
          >
            {beforeAfter.after && !afterError ? (
              <Image
                src={beforeAfter.after}
                alt={`Vue après du projet ${project.title}`}
                fill
                sizes="(min-width: 1024px) 70vw, 100vw"
                className="h-full w-full object-cover"
                onError={() => setAfterError(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-charcoal/10 text-sm font-medium text-charcoal/70">
                Image après indisponible
              </div>
            )}
          </div>
          <div
            className="pointer-events-none absolute inset-y-0 w-0.5 bg-white/70 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
            style={{left: `${value}%`}}
            aria-hidden="true"
          />
        </div>
        <div className="flex items-center gap-4 px-6 py-4">
          <input
            id={sliderId}
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={value}
            aria-valuetext={ariaValueText}
            aria-label="Comparaison avant après"
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-charcoal/10 accent-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
          />
        </div>
      </motion.div>
    </section>
  );
}
