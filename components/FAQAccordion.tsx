'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="card cursor-pointer"
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold text-anthracite pr-8 flex-1">
              {item.question}
            </h3>
            <svg
              className={`w-6 h-6 text-anthracite flex-shrink-0 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {openIndex === index && (
            <p className="mt-4 text-muted leading-relaxed">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
