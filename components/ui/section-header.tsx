import {ReactNode} from 'react';

import {Badge} from '@/components/ui/badge';
import {cn} from '@/lib/utils';

type SectionHeaderProps = {
  align?: 'left' | 'center';
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
};

export function SectionHeader({align = 'left', eyebrow, title, description, actions}: SectionHeaderProps) {
  return (
    <div
      className={cn('flex flex-col gap-4', {
        'items-center text-center': align === 'center',
        'items-start text-left': align === 'left'
      })}
    >
      {eyebrow ? <Badge variant="neutral">{eyebrow}</Badge> : null}
      <div className="flex flex-col gap-3">
        <h2 className="text-display text-charcoal">{title}</h2>
        {description ? <p className="max-w-2xl text-lg text-stone">{description}</p> : null}
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-3">{actions}</div> : null}
    </div>
  );
}
