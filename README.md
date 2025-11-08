# B&S Kitchen

Site vitrine multilingue (FR/NL) pour B&S Kitchen, cuisiniste premium basé à Ternat, Belgique. Projet construit avec Next.js 14 (App Router) et optimisé pour un déploiement sur Vercel.

## Fonctionnalités

- **Pages clés** : Accueil, Services, Réalisations (liste + détail), À propos, Contact.
- **Contenu dynamique** : textes et projets gérés via fichiers JSON (`messages/*.json`, `data/services.json`, `data/projects.json`). Les visuels de démonstration se trouvent sous `public/placeholders/` et peuvent être remplacés facilement.
- **SEO avancé** : métadonnées Open Graph/Twitter, balisage Schema.org (services, FAQ, projets), sitemap XML et robots.txt.
- **Performance & accessibilité** : animations Framer Motion maîtrisées, composants accessibles (accordéons, carrousels), typographie optimisée via `next/font`.
- **UI/UX** : navigation claire, CTA “Demander un devis”, design premium (charcoal, off-white, stone, brass, sauge).

## Démarrage

```bash
npm install
npm run dev
```

Le site est accessible sur http://localhost:3000. Les locales sont servies sous `/fr` (par défaut) et `/nl`.

## Structure principale

```
app/
  (fr)/
    page.tsx            # Accueil
    services/page.tsx   # Services
    realisations/
      page.tsx          # Liste des réalisations
      [id]/page.tsx     # Détail d'une réalisation
  (nl)/nl/              # Pages NL (structure miroir)
components/
  ui/                   # Boutons, cartes, badges, headers
  Project*.tsx          # Composants projets (liste + détail)
data/
  services.json, projects.json
messages/
  fr.json, nl.json      # Contenus localisés
public/placeholders/    # Images de démonstration (à remplacer)
```

## Personnalisation du contenu

- Les textes marketing et labels d'interface se trouvent dans `messages/fr.json` et `messages/nl.json`.
- Les services affichés sur la page dédiée sont définis dans `data/services.json`.
- Les réalisations et leurs détails (contraintes, solutions, témoignages) sont décrits dans `data/projects.json`.
- Remplacez les images sous `public/placeholders/` par vos propres visuels en conservant les noms de fichiers.

## Qualité & outillage

- **Linting** : `npm run lint`
- **Formatage** : `npm run format` / `npm run format:check`
- **Husky** : `npm run prepare` pour installer les hooks Git (pre-commit).

## Déploiement

Configurer les variables de build standards Vercel puis exécuter `npm run build`. Aucune variable d'environnement obligatoire n'est requise. Pensez à fournir de vraies images optimisées (Next.js `Image`) avant la mise en production.
