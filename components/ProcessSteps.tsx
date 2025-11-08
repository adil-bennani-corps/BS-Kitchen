'use client';

import {motion} from 'framer-motion';

const steps = [
  {
    title: 'Évaluation à domicile',
    description: 'Nous inspectons votre cuisine et définissons les ajustements nécessaires.'
  },
  {
    title: 'Préparation & adaptation',
    description: 'Organisation du chantier, adaptations techniques et logistiques sur mesure.'
  },
  {
    title: 'Installation complète',
    description: 'Pose et assemblage précis de vos meubles, plans de travail et électroménagers.'
  },
  {
    title: 'Finition & contrôle',
    description: 'Vérifications finales, réglages fins et remise d’un espace prêt à vivre.'
  }
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const stepVariants = {
  hidden: {opacity: 0, y: 32},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.5, ease: 'easeOut'}
  }
};

export function ProcessSteps() {
  return (
    <motion.section
      className="bg-[#FAFAF9] py-20 sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}}
      variants={sectionVariants}
    >
      <div className="container">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-headline text-charcoal">Notre méthode en 4 étapes</h2>
          <p className="max-w-xl text-base text-stone">
            Un parcours transparent qui assure une exécution sans surprise et une finition irréprochable.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <motion.div
              key={step.title}
              className="flex h-full flex-col gap-4 rounded-xl border border-charcoal/10 bg-white p-6 shadow-soft"
              variants={stepVariants}
            >
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/10 text-lg font-semibold text-sage"
              >
                ★
              </span>
              <h3 className="text-lg font-semibold text-charcoal">{step.title}</h3>
              <p className="text-sm text-stone">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
