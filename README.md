# 🌐 Portfolio — Maxime BENE

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-lightgrey)
![Status](https://img.shields.io/badge/status-live-success)

Portfolio personnel de **Maxime BENE**, développeur web fullstack en reconversion vers la **cybersécurité** (spécialisation SOC N1).

Site one-page + blog technique, construit avec Next.js (App Router), Tailwind CSS et shadcn/ui.

🔗 **Site en ligne :** [maximebene.com](https://www.maximebene.com)

---

## 🎯 Objectif du projet

Ce portfolio a trois rôles :

1. **Vitrine professionnelle** — présenter mon parcours, mes compétences et mes projets
2. **Preuve technique** — coder le site moi-même (pas un template) démontre ma maîtrise de la stack moderne
3. **Support de mes projets cyber** — chaque outil que je développe a sa page dédiée et son article de blog

---

## 🛠️ Stack technique

| Composant | Rôle |
|:---|:---|
| **Next.js 16** | Framework React avec App Router, SSG/SSR, SEO |
| **TypeScript** | Typage statique |
| **Tailwind CSS 4** | Styling utilitaire |
| **shadcn/ui** (Base UI) | Composants accessibles et personnalisables |
| **Framer Motion** | Animations et micro-interactions |
| **next-themes** | Dark mode persistant |
| **MDX** (next-mdx-remote) | Blog technique |
| **Lucide React** | Icônes |
| **Vercel** | Hébergement et déploiement continu |

---

## 📁 Structure du projet

```text
portfolio-web/
├── app/                        # App Router (pages)
│   ├── layout.tsx              # Layout racine + SEO + ThemeProvider
│   ├── page.tsx                # Landing page
│   ├── sitemap.ts              # Sitemap dynamique
│   ├── robots.ts               # Robots.txt
│   ├── projects/               # Pages projet détaillées
│   │   ├── network-analyzer/
│   │   └── lab-reseau/
│   ├── blog/                   # Blog technique (MDX)
│   │   ├── page.tsx            # Liste des articles
│   │   └── [slug]/             # Article individuel
│   └── about/                  # À propos
├── components/
│   ├── sections/               # Sections de la landing
│   │   ├── Header.tsx
│   │   ├── Maxime.tsx          # Hero
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Timeline.tsx
│   │   └── Footer.tsx
│   ├── ui/                     # Composants shadcn/ui
│   ├── icons.tsx               # Icônes custom (GitHub, etc.)
│   ├── scroll-reveal.tsx       # Animation au scroll
│   ├── theme-provider.tsx      # Provider dark mode
│   └── theme-toggle.tsx        # Bouton dark/light
├── content/blog/               # Articles MDX
├── lib/
│   ├── utils.ts                # Helper cn()
│   └── blog.ts                 # Lecture des articles MDX
├── public/                     # Assets statiques
│   ├── cv.pdf                  # CV téléchargeable
│   └── og-image.png            # Image Open Graph
├── mdx-components.tsx          # Composants MDX custom
└── package.json
```

---

## 🚀 Installation locale

### Pré-requis

- **Node.js** ≥ 20 (LTS recommandée)
- **npm** ≥ 10

### Étapes

```bash
# 1. Cloner le repo
git clone https://github.com/MaximeBENE/portfolio-web.git
cd portfolio-web

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de dev
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

---

## 📜 Scripts disponibles

| Commande | Description |
|:---|:---|
| `npm run dev` | Serveur de développement (Turbopack) |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production local |
| `npm run lint` | Vérification ESLint |

---

## 🎨 Sections de la landing

- **Header** — navigation fixe, dark mode toggle, bouton CV
- **Hero** — accroche + faux terminal montrant une analyse réseau
- **Skills** — 3 colonnes (Développement / Cybersécurité / BDD-Cloud) avec barres animées
- **Projects** — cartes de projets avec badges de techno et liens GitHub
- **Timeline** — parcours de reconversion (alternance dev ↔ cyber)
- **Footer** — 4 colonnes : branding, navigation, projets/blog, réseaux

---

## 📝 Articles de blog

Le blog utilise **MDX** (Markdown + composants React). Chaque article est un fichier `.mdx` dans `content/blog/`.

### Articles publiés

| Titre | Sujet | Date |
|:---|:---|:---|
| Lab réseau isolé (VirtualBox + Nmap + Wireshark) | Lab pratique | 2025-09-20 |
| Nmap : guide complet des options | Reconnaissance | 2025-09-21 |
| Analyser un scan Nmap avec Wireshark | Analyse paquet | 2025-09-22 |
| OWASP Top 10 expliqué simplement | Sécurité applicative | 2025-09-23 |
| Le voyage d'un paquet | Réseau / DNS / NAT | 2025-09-24 |
| Le modèle OSI : dépannage réseau | Méthodologie | 2025-09-26 |

### Créer un nouvel article

Crée un fichier `content/blog/mon-article.mdx` avec ce frontmatter :

```markdown
---
title: "Titre de l'article"
description: "Résumé en une phrase pour le SEO et les partages."
date: "2025-09-27"
tags: ["Réseau", "Sécurité", "Python"]
published: true
---

## Contenu en Markdown

Ton article ici...
```

---

## 🔧 Projets présentés

| Projet | Description | Lien |
|:---|:---|:---|
| **Network Packet Analyzer** | Mini-IDS Python (scan de ports, brute-force, ARP spoofing) | [/projects/network-analyzer](/projects/network-analyzer) |
| **Lab Réseau Virtualisé** | Lab Kali + Ubuntu pour l'analyse réseau | [/projects/lab-reseau](/projects/lab-reseau) |

---

## 🗺️ Roadmap

- [x] Setup Next.js + Tailwind + shadcn/ui
- [x] Header + Hero + Skills + Projects + Timeline + Footer
- [x] Blog MDX avec 6 articles
- [x] Page projet `network-analyzer`
- [x] Page projet `lab-reseau`
- [x] Page À propos
- [x] Dark mode toggle
- [x] Animations au scroll (Framer Motion)
- [x] SEO (sitemap, robots.txt, Open Graph image)
- [x] Déploiement Vercel + domaine `maximebene.com`
- [ ] Page projet `arp-spoofing-detector`
- [ ] Formulaire de contact
- [ ] Images Open Graph dynamiques (par article)
- [ ] Version anglaise (i18n)
- [ ] Tests E2E (Playwright)

---

## 🎓 Contexte

Projet développé dans le cadre d'une **reconversion vers la cybersécurité** (SOC N1 / Administration réseau), après plusieurs années en développement web.

L'objectif est de démontrer une double compétence :

- **Dev** : coder un site propre, moderne, optimisé, accessible
- **Cyber** : y présenter mes outils d'analyse réseau et mes write-ups techniques

---

## 📜 Licence

MIT — voir [LICENSE](./LICENSE).

---

## 👤 Auteur

**Maxime BENE**

- Portfolio : [maximebene.com](https://www.maximebene.com)
- GitHub : [@MaximeBENE](https://github.com/MaximeBENE)
- Email : bene.max31@gmail.com
- Localisation : Paris (75017)

---

> *"Je code les outils que j'utilise pour défendre le réseau."*