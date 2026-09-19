"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Shield, Code2 } from "lucide-react";

type TimelineItem = {
  period: string;
  title: string;
  company: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  type: "work" | "education" | "transition";
};

const timeline: TimelineItem[] = [
  {
    period: "Janv. 2021 — Sept. 2021",
    title: "Développeur Web et Web Mobile",
    company: "ADRAR Formation",
    description:
      "Première formation technique. Découverte du développement front-end et back-end, des bases de données et des fondamentaux du web.",
    icon: <GraduationCap className="h-5 w-5" />,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    type: "education",
  },
  {
    period: "Fév. 2023 — Mai 2024",
    title: "Concepteur Développeur d'Applications",
    company: "ISCOD — Alternance chez MCCLOYD, Paris",
    description:
      "Développement d'une plateforme sportive complète (React, Node.js, PostgreSQL). Première exposition à la sécurité applicative : gestion des rôles, sessions, validation des entrées.",
    icon: <GraduationCap className="h-5 w-5" />,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    type: "education",
  },
  {
    period: "Sept. 2024 — Sept. 2025",
    title: "Développeur Web Fullstack",
    company: "maximebene — Intérim",
    description:
      "Sécurisation back-end (JWT, protection XSS/injections SQL), développement d'interfaces React et d'API Node.js. Déploiement cloud (Vercel, Render, GCP).",
    icon: <Briefcase className="h-5 w-5" />,
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
    type: "work",
  },
  {
    period: "Déc. 2025 — Mars 2026",
    title: "Développeur Web — Sécurité applicative",
    company: "PitchTrack — Freelance",
    description:
      "Implémentation d'OAuth 2.0, sécurisation des échanges API, gestion des tokens et des droits utilisateurs. Veille active sur les bonnes pratiques OWASP.",
    icon: <Briefcase className="h-5 w-5" />,
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
    type: "work",
  },
  {
    period: "2025 — Aujourd'hui",
    title: "Reconversion vers la Cybersécurité",
    company: "Autoformation + Projets personnels",
    description:
      "Formation SOC N1 : analyse réseau (Wireshark, Scapy), détection d'intrusions, Linux, scripting Python. Développement du Network Packet Analyzer, un mini-IDS open-source.",
    icon: <Shield className="h-5 w-5" />,
    iconBg: "bg-red-500/10",
    iconColor: "text-red-500",
    type: "transition",
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-20 md:py-32">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">Parcours</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Du développement web à la cybersécurité : une transition logique.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex gap-6 md:gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Contenu */}
                <div className="flex-1 pl-16 md:pl-0">
                  <div
                    className={`rounded-lg border border-border/60 bg-card p-6 transition-colors hover:border-primary/40 ${
                      i % 2 === 0 ? "md:mr-12 md:text-right" : "md:ml-12"
                    }`}
                  >
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {item.period}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-primary">{item.company}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Point central */}
                <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background md:left-1/2 md:-translate-x-1/2">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${item.iconBg} ${item.iconColor}`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Espace vide pour l'autre côté (desktop) */}
                <div className="hidden md:block md:flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}