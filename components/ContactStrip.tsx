'use client';

import {motion} from 'framer-motion';
import Link from 'next/link';

import {Button} from '@/components/ui/button';

export function ContactStrip() {
  return (
    <motion.section
      id="contact-strip"
      className="sticky bottom-0 z-20 bg-charcoal py-12 text-off-white"
      initial={{opacity: 0, y: 24}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.5}}
      transition={{duration: 0.5, ease: 'easeOut'}}
    >
      <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <h2 className="text-headline text-off-white">Un projet d’installation ou de rénovation ?</h2>
        <Button asChild size="lg" variant="secondary" className="bg-off-white text-charcoal hover:bg-off-white/90">
          <Link href="/contact">Demander un devis</Link>
        </Button>
      </div>
    </motion.section>
  );
}
