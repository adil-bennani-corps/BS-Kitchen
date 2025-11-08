'use client';

import {motion} from 'framer-motion';

const values = [
  {
    title: 'Expérience éprouvée',
    description: 'Deux décennies de chantiers réussis en Flandre et à Bruxelles.'
  },
  {
    title: 'Précision millimétrée',
    description: 'Alignements parfaits, finitions soignées, ajustements invisibles.'
  },
  {
    title: 'Suivi de proximité',
    description: 'Un seul interlocuteur du démontage à la dernière vis.'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardVariants = {
  hidden: {opacity: 0, y: 24},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.4, ease: 'easeOut'}
  }
};

export function Values() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-headline text-charcoal">Ce qui nous distingue</h2>
          <p className="mt-4 text-lg text-stone">
            Notre équipe accompagne les projets de cuisine avec une exigence constante, de la préparation du chantier jusqu’au
            contrôle final.
          </p>
        </div>
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={cardVariants}
              whileHover={{scale: 1.01}}
              transition={{type: 'spring', stiffness: 200, damping: 20}}
              className="group rounded-lg bg-off-white p-8 shadow-soft ring-1 ring-charcoal/5 transition-transform"
            >
              <h3 className="text-xl font-semibold text-charcoal">{value.title}</h3>
              <p className="mt-3 text-base text-stone">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
