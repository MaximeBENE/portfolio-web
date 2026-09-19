# 🌐 Portfolio — Maxime BENE

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

Portfolio personnel de **Maxime BENE**, développeur web fullstack en reconversion vers la **cybersécurité** (spécialisation SOC N1).

Site one-page + blog technique, construit avec Next.js 15 (App Router), Tailwind CSS et shadcn/ui.

🔗 **Site en ligne :** [maximebene.fr](https://maximebene.fr) *(à venir)*

---

## 🎯 Objectif du projet

Ce portfolio a trois rôles :

1. **Vitrine professionnelle** — présenter mon parcours, mes compétences et mes projets
2. **Preuve technique** — coder le site moi-même (pas un template) démontre ma maîtrise de la stack moderne
3. **Support de mes projets cyber** — chaque outil que je développe (ex : Network Packet Analyzer) a sa page dédiée

---

## 🛠️ Stack technique

| Composant | Rôle |
|:---|:---|
| **Next.js 15** | Framework React avec App Router, SSG/SSR, SEO |
| **TypeScript** | Typage statique |
| **Tailwind CSS** | Styling utilitaire |
| **shadcn/ui** (Base UI) | Composants accessibles et personnalisables |
| **Framer Motion** | Animations et micro-interactions |
| **Lucide React** | Icônes |
| **Vercel** | Hébergement et déploiement continu |

---

## 📁 Structure du projet

portfolio-web/
├── app/ # App Router (pages)
│ ├── layout.tsx # Layout racine + SEO
│ ├── page.tsx # Landing page
│ ├── projects/ # Pages projet détaillées
│ │ └── network-analyzer/
│ ├── blog/ # Blog technique
│ └── about/ # À propos
├── components/
│ ├── sections/ # Sections de la landing
│ │ ├── Header.tsx
│ │ ├── Maxime.tsx # Hero
│ │ ├── Skills.tsx
│ │ ├── Projects.tsx
│ │ ├── Timeline.tsx
│ │ └── Footer.tsx
│ └── ui/ # Composants shadcn/ui
├── lib/ # Utilitaires (cn, config)
├── content/blog/ # Articles Markdown
├── public/ # Assets statiques (images, CV PDF)
└── package.json

---

## 🚀 Installation locale

### Pré-requis
- **Node.js** ≥ 20 (LTS recommandée)
- **npm** ≥ 10

### Étapes

```bash
# Cloner le repo
git clone https://github.com/MaximeBENE/portfolio-web.git
cd portfolio-web

# Installer les dépendances
npm install

# Lancer le serveur de dev
npm run dev

Ouvre http://localhost:3000.

📜 Scripts disponibles
Commande	Description
npm run dev	Serveur de développement (Turbopack)
npm run build	Build de production
npm run start	Serveur de production local
npm run lint	Vérification ESLint
🎨 Sections de la landing
Hero — accroche + faux terminal montrant une analyse réseau

Skills — 3 colonnes (Développement / Cybersécurité / BDD-Cloud) avec barres de progression animées

Projects — cartes de projets avec badges de techno et liens GitHub

Timeline — parcours de reconversion (à venir)

Footer — contact + réseaux (à venir)

🗺️ Roadmap
☑ Setup Next.js + Tailwind + shadcn/ui
☑ Header + Hero + Skills + Projects
□ Timeline (parcours)
□ Footer (contact)
□ Page projet détaillée network-analyzer
□ Blog technique (MDX)
□ Page À propos
□ Déploiement Vercel + domaine maximebene.fr
□ Dark mode toggle
□ Version anglaise (i18n)
📝 Licence
MIT — voir LICENSE.

👤 Auteur
Maxime BENE

GitHub : @MaximeBENE

Email : bene.max31@gmail.com

Localisation : Paris (75017)

"Je code les outils que j'utilise pour défendre le réseau."