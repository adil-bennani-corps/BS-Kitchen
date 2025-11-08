'use client';

import {motion} from 'framer-motion';

import {Button} from '@/components/ui/button';
import {SectionHeader} from '@/components/ui/section-header';

type HeroSectionProps = {
  title: string;
  description: string;
  ctaLabel: string;
};

export function HeroSection({title, description, ctaLabel}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-off-white">
      <div className="container grid gap-12 py-24 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          className="flex flex-col justify-center"
          initial={{opacity: 0, y: 24}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, ease: 'easeOut'}}
        >
          <SectionHeader
            eyebrow="B&S Kitchen"
            title={title}
            description={description}
            actions={
              <Button asChild size="lg">
                <a href="#contact">{ctaLabel}</a>
              </Button>
            }
          />
        </motion.div>
        <motion.div
          className="relative"
          initial={{opacity: 0, scale: 0.96}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.6, delay: 0.1, ease: 'easeOut'}}
        >
          <div className="relative h-full min-h-[360px] overflow-hidden rounded-lg border border-brass/20 bg-charcoal shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(176,141,87,0.35),_transparent_55%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(124,143,122,0.2),_transparent_65%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-4 rounded-pill bg-white/10 px-8 py-6 backdrop-blur">
                <span className="text-eyebrow text-off-white">Matériaux signature</span>
                <span className="text-lg font-semibold uppercase tracking-[0.4em] text-off-white">
                  Bois · Pierre · Métal
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
