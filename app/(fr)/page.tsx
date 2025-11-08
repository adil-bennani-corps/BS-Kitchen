import type {Metadata} from 'next';

import {ContactStrip} from '@/components/ContactStrip';
import {Hero} from '@/components/Hero';
import {PlaceholderCarousel} from '@/components/PlaceholderCarousel';
import {ProcessSteps} from '@/components/ProcessSteps';
import {Values} from '@/components/Values';

export const metadata: Metadata = {
  title: 'Installation et rénovation de cuisines à Ternat | B&S Kitchen',
  description:
    'B&S Kitchen installe, adapte et finalise vos cuisines en Flandre et à Bruxelles avec précision millimétrée et suivi de proximité.'
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Values />
      <ProcessSteps />
      <PlaceholderCarousel />
      <ContactStrip />
    </>
  );
}
