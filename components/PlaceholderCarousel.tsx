'use client';

import {AnimatePresence, motion} from 'framer-motion';
import Image from 'next/image';
import {useCallback, useMemo, useState, type TouchEvent} from 'react';

const IMAGES = Array.from({length: 6}, (_, index) => ({
  src: `/placeholders/renov-${index + 1}.jpg`,
  alt: `Projet de rénovation de cuisine ${index + 1}`
}));

export function PlaceholderCarousel() {
  const [current, setCurrent] = useState(0);
  const [errorMap, setErrorMap] = useState<Record<number, boolean>>({});
  const imageCount = IMAGES.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % imageCount) + imageCount) % imageCount);
    },
    [imageCount]
  );

  const goNext = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    goTo(current - 1);
  }, [current, goTo]);

  const handleImageError = useCallback((index: number) => {
    setErrorMap((prev) => ({...prev, [index]: true}));
  }, []);

  const bullets = useMemo(() => IMAGES.map((_, index) => index), []);

  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStart(event.changedTouches[0].clientX);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStart === null) return;
    const touchEnd = event.changedTouches[0].clientX;
    const delta = touchEnd - touchStart;
    if (Math.abs(delta) > 40) {
      if (delta < 0) {
        goNext();
      } else {
        goPrev();
      }
    }
    setTouchStart(null);
  };

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-headline text-charcoal">Des projets qui inspirent</h2>
            <p className="mt-4 max-w-2xl text-base text-stone">
              Découvrez un aperçu des cuisines transformées par nos équipes — une sélection d’exemples à remplacer par vos
              propres réalisations.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Voir l’image précédente"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/10 bg-white text-charcoal shadow-soft transition hover:bg-off-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-off-white"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Voir l’image suivante"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/10 bg-white text-charcoal shadow-soft transition hover:bg-off-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-off-white"
            >
              ›
            </button>
          </div>
        </div>
        <div
          className="relative overflow-hidden rounded-2xl bg-off-white"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              initial={{opacity: 0.2, scale: 0.98}}
              animate={{opacity: 1, scale: 1}}
              exit={{opacity: 0.2, scale: 0.98}}
              transition={{duration: 0.45, ease: 'easeOut'}}
              className="relative aspect-[16/10] w-full"
            >
              {errorMap[current] ? (
                <div className="flex h-full w-full items-center justify-center bg-stone/20 text-stone">
                  Image de remplacement indisponible
                </div>
              ) : (
                <Image
                  src={IMAGES[current].src}
                  alt={IMAGES[current].alt}
                  fill
                  sizes="(min-width: 1024px) 960px, 100vw"
                  className="object-cover"
                  onError={() => handleImageError(current)}
                  priority
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center gap-2" role="group" aria-label="Sélection d’image de rénovation">
          {bullets.map((index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Afficher l’image ${index + 1}`}
              aria-pressed={current === index}
              className={`h-3 w-3 rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-off-white ${
                current === index ? 'bg-charcoal' : 'bg-stone/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
