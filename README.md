# B&S Kitchen

Site vitrine multilingue (FR/NL) pour B&S Kitchen, cuisiniste premium basé à Ternat, Belgique. Projet construit avec Next.js 14 (App Router) pour un déploiement sur Vercel.

## Fonctionnalités

- **Pages clés** : Accueil, Services, Réalisations (liste + détail), À propos, Contact.
- **Contenu dynamique** : textes et projets centralisés dans des fichiers JSON (`content/site.fr.json`, `content/site.nl.json`) pour une mise à jour rapide.
- **SEO avancé** : métadonnées Open Graph/Twitter, balisage Schema.org (Organization, LocalBusiness, Breadcrumb), sitemap et robots.txt générés automatiquement.
- **Internationalisation** : gestion des locales `fr` et `nl` avec détection automatique via middleware.
- **Accessibilité & UX** : navigation clavier, lien d’accès rapide, contraste élevé, mise en page responsive.
- **Performance** : images optimisées via `next/image`, typographie Google Fonts auto-hébergée.

## Démarrage

```bash
npm install
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000). Les locales sont servies sous `/fr` (par défaut) et `/nl`.

## Structure principale

```
app/
  [locale]/
    page.tsx             # Accueil
    services/page.tsx    # Services
    realisations/
      page.tsx           # Liste des réalisations
      [slug]/page.tsx    # Détail d’une réalisation
    a-propos/page.tsx    # À propos
    contact/page.tsx     # Contact
  sitemap.ts             # Sitemap XML
  robots.txt/route.ts    # robots.txt
content/                  # Contenus localisés
components/               # En-tête, pied de page, cartes…
lib/                      # i18n, configuration société
```

## Personnalisation contenu

Modifier les fichiers `content/site.fr.json` et `content/site.nl.json` pour ajuster textes, services, réalisations, témoignages et CTA. Les images utilisent des URLs `https://images.unsplash.com` et peuvent être remplacées par des médias hébergés.

## Déploiement

Configurer les variables de build standards Vercel (`npm run build`). Aucune variable d’environnement n’est requise. Pensez à autoriser le domaine des images distantes si vous modifiez les sources.
