import * as React from 'react';
import {Slot} from '@radix-ui/react-slot';
import {cva, type VariantProps} from 'class-variance-authority';

import {cn} from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-off-white disabled:pointer-events-none disabled:opacity-60 transform',
  {
    variants: {
      variant: {
        default: 'bg-charcoal text-off-white shadow-soft hover:-translate-y-0.5 hover:bg-brass hover:text-charcoal',
        secondary: 'border border-charcoal/20 bg-off-white text-charcoal hover:border-charcoal/40 hover:bg-brass/10',
        ghost: 'text-sage hover:text-brass hover:bg-sage/10',
        outline: 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-off-white'
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm: 'h-9 px-4 text-xs uppercase tracking-[0.3em]',
        lg: 'h-12 px-7 text-base',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({className, variant, size, asChild = false, ...props}, ref) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={cn(buttonVariants({variant, size, className}))} ref={ref} {...props} />
  );
});
Button.displayName = 'Button';

export {Button, buttonVariants};
