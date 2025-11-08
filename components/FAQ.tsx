'use client';

import {AnimatePresence, motion} from 'framer-motion';
import {useState} from 'react';

import {cn} from '@/lib/utils';

type FAQItem = {
  question: string;
  answer: string;
};

export type FAQProps = {
  items: FAQItem[];
  className?: string;
};

export function FAQ({items, className}: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        const contentId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <motion.div
            key={item.question}
            className="rounded-2xl border border-charcoal/10 bg-white p-6 shadow-soft"
            initial={{opacity: 0, y: 16}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.35, delay: index * 0.05, ease: 'easeOut'}}
          >
            <h3>
              <button
                id={buttonId}
                className="flex w-full items-center justify-between gap-4 text-left text-lg font-medium text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-off-white"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => setActiveIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span
                  className={cn(
                    'inline-flex h-8 w-8 flex-none items-center justify-center rounded-full border border-charcoal/10 bg-off-white text-sm transition-transform',
                    isOpen ? 'rotate-45' : ''
                  )}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="content"
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{height: 0, opacity: 0}}
                  animate={{height: 'auto', opacity: 1}}
                  exit={{height: 0, opacity: 0}}
                  transition={{duration: 0.25, ease: 'easeOut'}}
                  className="overflow-hidden"
                >
                  <div className="pt-4 text-base text-stone">{item.answer}</div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
