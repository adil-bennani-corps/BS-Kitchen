'use client';

import {motion} from 'framer-motion';
import Link from 'next/link';

import {Button} from '@/components/ui/button';

export function Hero() {
  return (
    <section className="bg-off-white">
      <div className="container mx-auto max-w-7xl py-24 md:py-32">
        <motion.div
          className="max-w-3xl space-y-8"
          initial={{opacity: 0, y: 24}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, ease: 'easeOut'}}
        >
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-brass">
            B&S Kitchen
          </p>
          <h1 className="text-display text-charcoal">
            Installation &amp; rénovation de cuisines avec savoir-faire.
          </h1>
          <p className="text-lg text-stone">
            Plus de 20 ans d’expérience dans la pose, l’ajustement et la finition de cuisines de toutes marques.
            Chez B&S Kitchen, chaque détail compte — du plan de travail à la dernière charnière.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/#contact-strip">Demander un devis</Link>
            </Button>
            <Link
              href="/realisations"
              className="inline-flex items-center justify-center text-base font-semibold text-charcoal underline-offset-4 transition-colors hover:text-brass focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-off-white"
            >
              Voir nos réalisations
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
