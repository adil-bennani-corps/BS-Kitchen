import * as React from 'react';

import {cn} from '@/lib/utils';

type CardElement = React.HTMLAttributes<HTMLDivElement>;

const Card = React.forwardRef<HTMLDivElement, CardElement>(({className, ...props}, ref) => (
  <div
    ref={ref}
    className={cn(
      'group relative transform rounded-lg border border-charcoal/10 bg-white/90 shadow-soft backdrop-blur transition-all hover:-translate-y-1 hover:shadow-soft',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, CardElement>(({className, ...props}, ref) => (
  <div ref={ref} className={cn('flex flex-col gap-2 p-8 pb-0', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

const CardContent = React.forwardRef<HTMLDivElement, CardElement>(({className, ...props}, ref) => (
  <div ref={ref} className={cn('flex flex-col gap-4 p-8', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, CardElement>(({className, ...props}, ref) => (
  <div ref={ref} className={cn('flex items-center gap-3 px-8 pb-8 pt-0', className)} {...props} />
));
CardFooter.displayName = 'CardFooter';

type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

type CardParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(({className, ...props}, ref) => (
  <h3 ref={ref} className={cn('text-headline font-semibold text-charcoal', className)} {...props} />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, CardParagraphProps>(({className, ...props}, ref) => (
  <p ref={ref} className={cn('text-base text-stone', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

export {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle};
