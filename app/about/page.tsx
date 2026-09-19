import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Briefcase,
  Shield,
  Code2,
  Target,
  Sparkles,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GithubIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Parcours, motivations et objectifs de Maxime BENE, développeur web en reconversion vers la cybersécurité (SOC N1).",
};

const values = [
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Rigueur",
    description:
      "En sécurité, une erreur de configuration peut coûter cher. Je documente, je teste, je vérifie — systématiquement.",
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Curiosité technique",
    description:
      "Je ne me contente pas d'utiliser un outil : je cherche à comprendre comment il fonctionne, puis je code le mien.",
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "Orientation résultats",
    description:
      "Un scan, une capture, un log — chaque action doit produire un résultat exploitable et mesurable.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Apprentissage continu",
    description:
      "La cybersécurité évolue tous les jours. Je maintiens une veille active et je pratique en lab régulièrement.",
  },
];

const journey = [
  {
    period: "2021",
    title: "Premiers pas dans le code",
    description:
      "Formation Développeur Web et Web Mobile. Découverte du front-end, du back-end et des bases de données.",
  },
  {
    period: "2023 — 2024",
    title: "Concepteur Développeur d'Applications",
    description:
      "Alternance chez MCCLOYD. Première exposition concrète à la sécurité applicative : gestion des rôles, sessions, validation des entrées.",
  },
  {
    period: "2024 — 2025",
    title: "Développeur Fullstack",
    description:
      "Missions freelance et intérim. Sécurisation back-end (JWT, OWASP), déploiement cloud, CI/CD.",
  },
  {
    period: "2025",
    title: "Reconversion Cybersécurité",
    description:
      "Formation SOC N1, lab réseau virtualisé, développement d'outils Python d'analyse réseau. Objectif : analyste SOC.",
  },
];

const skillsHighlights = [
  "Analyse réseau (Wireshark, Scapy, Nmap)",
  "Détection d'intrusions (scan, brute-force)",
  "Scripting Python pour la sécurité",
  "Sécurité applicative (OWASP Top 10)",
  "Linux / Bash",
  "Développement web fullstack",
];

export default function AboutPage() {
  return (
    <>
      {/* Header de la page */}
      <section className="border-b border-border/40 bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
            À propos
          </Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Du code à la défense
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Développeur web fullstack en reconversion vers la cybersécurité.
            Je combine mes années de pratique du code avec une passion nouvelle
            pour la défense réseau et la détection d&apos;intrusions.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        {/* Intro */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold">Pourquoi la cybersécurité ?</h2>
          <p className="mt-4 text-muted-foreground">
            Après plusieurs années à développer des applications web, j&apos;ai réalisé
            que ce qui me passionnait le plus n&apos;était pas <em>construire</em> — c&apos;était{" "}
            <strong className="text-foreground">comprendre comment casser</strong>, puis empêcher.
          </p>
          <p className="mt-4 text-muted-foreground">
            Chaque faille OWASP que je corrigeais en production me poussait à creuser :
            pourquoi cette injection SQL était-elle possible ? Comment un attaquant
            découvre-t-il ces ports ouverts ? Que se passe-t-il réellement sur le réseau
            pendant un scan ?
          </p>
          <p className="mt-4 text-muted-foreground">
            La cybersécurité, c&apos;est la réponse logique à ces questions. Et parce que
            je sais coder, je ne me contente pas d&apos;utiliser Wireshark — je développe
            mes propres outils d&apos;analyse.
          </p>
        </div>

        <Separator className="my-16" />

        {/* Valeurs */}
        <div>
          <h2 className="text-2xl font-bold">Ce qui me définit</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg border border-border/60 bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {value.icon}
                </div>
                <h3 className="mt-4 font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-16" />

        {/* Parcours */}
        <div>
          <h2 className="text-2xl font-bold">Parcours en quelques dates</h2>
          <div className="mt-8 space-y-6">
            {journey.map((step, i) => (
              <div key={step.title} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/60 bg-background text-xs font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {i < journey.length - 1 && (
                    <div className="mt-2 w-px flex-1 bg-border" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {step.period}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-16" />

        {/* Ce que je maîtrise */}
        <div>
          <h2 className="text-2xl font-bold">Compétences clés</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {skillsHighlights.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-sm text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
          <Link
            href="/#skills"
            className="mt-6 inline-flex items-center gap-1 text-sm text-primary transition-colors hover:text-primary/80"
          >
            Voir le détail des compétences
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <Separator className="my-16" />

        {/* Ce que je cherche */}
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-8">
          <div className="flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold">Ce que je recherche</h2>
          </div>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Un poste d&apos;<strong className="text-foreground">analyste SOC Niveau 1</strong>{" "}
            (ou une alternance / POE) où je pourrai mettre à profit ma double compétence :
            la maîtrise du code et la compréhension des protocoles réseau.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Surveillance et analyse de logs (SIEM)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Détection et qualification d&apos;incidents</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Analyse de trafic réseau (Wireshark, tcpdump)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Développement d&apos;outils internes de détection</span>
            </li>
          </ul>
        </div>

        <Separator className="my-16" />

        {/* CTA final */}
        <div className="text-center">
          <h2 className="text-2xl font-bold">Discutons</h2>
          <p className="mt-3 text-muted-foreground">
            Une opportunité à me proposer, une question sur mon parcours ?
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:bene.max31@gmail.com"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              <Mail className="mr-2 h-4 w-4" />
              bene.max31@gmail.com
            </a>
            <a
              href="https://github.com/MaximeBENE"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              <GithubIcon className="mr-2 h-4 w-4" />
              GitHub
            </a>
            <a
              href="/cv.pdf"
              download
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              Télécharger mon CV
            </a>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            Paris, France
          </div>
        </div>
      </section>
    </>
  );
}