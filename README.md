# Portfolio — Sarah Danaé FANOU

Portfolio personnel de **Sarah Danaé FANOU** : développeuse web, designer graphique,
administratrice réseaux et fondatrice de **Danae's Creations**.

Site multi-pages sombre et moderne, construit avec Next.js (App Router),
TypeScript et Tailwind CSS. Prêt à être déployé sur Vercel.

---

## Stack

| Élément | Choix |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Langage | TypeScript |
| Style | Tailwind CSS v4 |
| Polices | Sora, Inter, Playfair Display (auto-hébergées via `@fontsource`) |
| Images | `next/image` (optimisation automatique) |
| Déploiement | Vercel |

## Pages

| Route | Contenu |
| --- | --- |
| `/` | Accueil : hero, services, projets sélectionnés, Danae's Creations, parcours, valeurs, CTA |
| `/projets` | Tous les projets avec filtres par catégorie |
| `/projets/[slug]` | Étude de cas : contexte, rôle, technologies, galerie avec lightbox |
| `/creations` | Boutique Danae's Creations + commande WhatsApp |
| `/a-propos` | Bio, expériences, formation, compétences, langues, CV |
| `/contact` | Formulaire (mailto) + coordonnées |
| `/sitemap.xml`, `/robots.txt` | SEO |

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

Autres commandes :

```bash
npm run build    # build de production
npm run start    # servir le build
npm run lint     # ESLint
```

## Modifier le contenu

Tout le contenu textuel est centralisé dans **`src/lib/data.ts`** :

- `site` : nom, email, téléphones, WhatsApp, GitHub, URL, disponibilité.
- `projects` : projets (titre, description, technologies, images, liens).
- `services`, `skillGroups`, `timeline`, `education`, `languages`.
- `creations` : produits Danae's Creations.
- `values`, `stats`, `navigation`.

Les images sont dans `public/images/` :

```text
public/
├── cv-sarah-danae-fanou.pdf
└── images/
    ├── profile/      # portrait, bannière, logo Danae's Creations
    ├── projects/     # captures des projets
    ├── creations/    # photos produits
    └── gallery/      # photos personnelles
```

Le script `scripts/prepare-assets.py` documente comment les images ont été
préparées (recadrage, redimensionnement, compression) depuis le dossier source.

## Déployer sur Vercel

### Option A — via GitHub (recommandé, déploiement continu)

1. Créer un dépôt GitHub (par exemple `danae-portfolio`).
2. Pousser le projet :

```bash
git add .
git commit -m "Portfolio Sarah Danaé Fanou"
git branch -M main
git remote add origin https://github.com/DSsarahfanou/danae-portfolio.git
git push -u origin main
```

3. Sur [vercel.com](https://vercel.com) : **Add New → Project → Import Git Repository**.
4. Vercel détecte Next.js automatiquement. Cliquer sur **Deploy**.
5. Chaque `git push` redéploie le site. Les Pull Requests génèrent des previews.

### Option B — via la CLI Vercel

```bash
npx vercel        # preview
npx vercel --prod # production
```

### Nom de domaine

Dans Vercel : **Settings → Domains → Add**. Ajouter `danae-portfolio.vercel.app`
est automatique ; un domaine personnalisé (ex. `danaefanou.com`) peut être relié
en suivant les instructions DNS affichées.

> Après le déploiement, mettre à jour `site.url` dans `src/lib/data.ts` avec
> l'URL finale (utilisée par le SEO, le sitemap et les métadonnées Open Graph).

## À vérifier / personnaliser

- [ ] Remplacer `site.url` par l'URL de production.
- [ ] Créer le profil LinkedIn et l'ajouter dans `site`.
- [ ] Vérifier les liens GitHub des projets (certains dépôts peuvent être privés).
- [ ] Ajouter un nom de domaine si souhaité.
- [ ] Remplacer le CV dans `public/cv-sarah-danae-fanou.pdf` à chaque mise à jour.
- [ ] Ajouter les captures manquantes (Jaspe Library : une seule capture disponible).

## Structure

```text
src/
├── app/
│   ├── layout.tsx          # métadonnées, polices, header/footer
│   ├── page.tsx            # accueil
│   ├── projets/            # liste + détail dynamique
│   ├── creations/          # Danae's Creations
│   ├── a-propos/
│   ├── contact/
│   ├── sitemap.ts / robots.ts
│   └── not-found.tsx
├── components/             # header, footer, cartes, galerie, formulaires…
└── lib/
    ├── data.ts             # tout le contenu
    └── utils.ts
```

---

Conçu, designé et développé avec Next.js & Tailwind CSS.
