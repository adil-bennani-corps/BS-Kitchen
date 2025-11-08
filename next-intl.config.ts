import {getRequestConfig} from 'next-intl/server';

import {locales} from './i18n/routing';

export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as (typeof locales)[number])) {
    throw new Error(`Locale ${locale} not supported`);
  }

  const messages = (await import(`./messages/${locale}.json`)).default;

  return {
    messages
  };
});
