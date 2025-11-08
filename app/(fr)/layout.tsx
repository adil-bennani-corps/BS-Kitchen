import {ReactNode} from 'react';
import {unstable_setRequestLocale} from 'next-intl/server';

export default function FrLayout({children}: {children: ReactNode}) {
  unstable_setRequestLocale('fr');
  return children;
}
