import {getTranslations} from 'next-intl/server';

import {HeroSection} from '@/components/sections/HeroSection';

export default async function HomePageNl() {
  const t = await getTranslations('home');

  return <HeroSection title={t('title')} description={t('description')} ctaLabel={t('cta')} />;
}
