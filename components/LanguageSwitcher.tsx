'use client';

import {useLocale, useTranslations} from 'next-intl';

import {routing} from '@/i18n/routing';
import {Button} from '@/components/ui/button';
import {cn} from '@/lib/utils';

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations('language');
  const pathname = routing.usePathname();

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="hidden text-stone sm:inline">{t('label')}</span>
      <div className="flex items-center gap-1 rounded-pill border border-charcoal/15 bg-white/70 p-1 backdrop-blur">
        {routing.locales.map((value) => {
          const isActive = value === locale;
          return (
            <Button
              key={value}
              size="sm"
              variant="ghost"
              className={cn(
                'rounded-pill px-4 py-2 text-xs font-semibold tracking-[0.25em]',
                isActive
                  ? 'bg-charcoal text-off-white shadow-soft hover:bg-charcoal hover:text-off-white'
                  : 'text-charcoal hover:text-brass'
              )}
              asChild
            >
              <routing.Link href={pathname} locale={value}>
                {value.toUpperCase()}
              </routing.Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
