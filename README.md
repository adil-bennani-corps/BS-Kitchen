# B&S Kitchen – Next.js Scaffold

Projet Next.js App Router en TypeScript pour le site vitrine B&S Kitchen avec localisation français/néerlandais.

## Stack & Outils

- [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com/) avec thème personnalisé (charcoal, off-white, stone, brass, sage)
- [shadcn/ui](https://ui.shadcn.com/) préconfiguré (exemple `Button`)
- [Framer Motion](https://www.framer.com/motion/) pour les animations
- [next-intl](https://next-intl-docs.vercel.app/) avec français par défaut et néerlandais secondaire
- Qualité de code : ESLint, Prettier, Husky (pre-commit)

## Scripts

```bash
npm install       # installe les dépendances
npm run dev       # lance le serveur de développement
npm run build     # build de production
npm run start     # démarre le serveur de production
npm run lint      # vérifie le linting ESLint
npm run format    # formate les fichiers avec Prettier
npm run format:check # vérifie le formatage
npm run prepare   # installe Husky (hooks Git)
```

## Structure

```
app/
  (fr)/           # pages par défaut (français)
  (nl)/nl/        # équivalent néerlandais sous /nl
  layout.tsx      # layout racine avec NextIntlClientProvider
components/
  LanguageSwitcher.tsx
  layout/SiteShell.tsx
  sections/HeroSection.tsx
  ui/button.tsx   # composant shadcn/ui
messages/
  fr.json, nl.json
```

`LanguageSwitcher` s'appuie sur `next-intl` et la configuration `i18n/routing.ts` pour générer les liens localisés. Tailwind est configuré via `tailwind.config.ts` avec palette personnalisée et plugin `tailwindcss-animate` pour la compatibilité shadcn/ui.

## Hooks Git

Pour activer Husky après l'installation :

```bash
npm run prepare
```

Cela crée les hooks Git, dont un pre-commit qui lance `npm run lint` et `npm run format:check`.
