'use client';

import {motion} from 'framer-motion';
import Link from 'next/link';
import {PropsWithChildren} from 'react';

import {LanguageSwitcher} from '@/components/LanguageSwitcher';
import {Button} from '@/components/ui/button';

export function SiteShell({children}: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col bg-off-white">
      <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-white/80 backdrop-blur">
        <div className="container flex items-center justify-between gap-6 py-4">
          <div className="flex flex-col gap-1">
            <span className="text-eyebrow text-stone">B&S Kitchen</span>
            <span className="text-lg font-semibold text-charcoal">Installation &amp; rénovation de cuisines</span>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-charcoal" aria-label="Navigation principale">
            <Link
              href="/fr"
              className="transition-colors hover:text-brass focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-off-white"
            >
              Accueil
            </Link>
            <Link
              href="/fr/services"
              className="transition-colors hover:text-brass focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-off-white"
            >
              Services
            </Link>
            <Link
              href="/fr/realisations"
              className="transition-colors hover:text-brass focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-off-white"
            >
              Réalisations
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button asChild size="sm" variant="secondary">
              <Link href="/fr/contact">Demander un devis</Link>
            </Button>
          </div>
        </div>
      </header>
      <motion.main
        className="flex-1"
        initial={{opacity: 0, y: 16}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.4, ease: 'easeOut'}}
      >
        {children}
      </motion.main>
      <footer className="border-t border-charcoal/10 bg-charcoal py-8 text-off-white">
        <div className="container flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>B&S Kitchen · Ternat, Belgique</p>
          <p className="text-stone">© {new Date().getFullYear()} B&S Kitchen. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
