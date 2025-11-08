import {ReactNode} from 'react';
import {unstable_setRequestLocale} from 'next-intl/server';

export default function NlLayout({children}: {children: ReactNode}) {
  unstable_setRequestLocale('nl');
  return children;
}
