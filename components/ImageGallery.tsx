'use client';

import Image from 'next/image';
import {motion} from 'framer-motion';
import {useState} from 'react';

export type ImageGalleryProps = {
  images: string[];
  title: string;
  city: string | null;
};

export function ImageGallery({images, title, city}: ImageGalleryProps) {
  const [errors, setErrors] = useState<Record<number, boolean>>({});
  const galleryImages = images.slice(1);

  if (galleryImages.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-charcoal">Galerie du projet</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((src, index) => (
          <motion.figure
            key={`${src}-${index}`}
            className="relative overflow-hidden rounded-3xl border border-charcoal/10 bg-white shadow-soft"
            initial={{opacity: 0, y: 24}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.4, delay: index * 0.05, ease: 'easeOut'}}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              {!errors[index] ? (
                <Image
                  src={src}
                  alt={`Vue détaillée ${index + 1} du projet ${title}${city ? ` à ${city}` : ''}`}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={() => setErrors((prev) => ({...prev, [index]: true}))}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-charcoal/5 text-sm font-medium text-charcoal/60">
                  Image indisponible
                </div>
              )}
            </div>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
