import * as React from 'react';
import {cva, type VariantProps} from 'class-variance-authority';

import {cn} from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-pill border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-off-white',
  {
    variants: {
      variant: {
        neutral: 'border-charcoal/10 bg-charcoal/5 text-stone',
        highlight: 'border-transparent bg-brass text-charcoal shadow-soft',
        contrast: 'border-transparent bg-charcoal text-off-white'
      }
    },
    defaultVariants: {
      variant: 'neutral'
    }
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({className, variant, ...props}, ref) => (
  <span ref={ref} className={cn(badgeVariants({variant, className}))} {...props} />
));
Badge.displayName = 'Badge';

export {Badge, badgeVariants};
