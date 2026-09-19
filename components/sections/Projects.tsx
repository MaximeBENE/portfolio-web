"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Shield, Terminal, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/icons";
import { ScrollReveal } from "@/components/scroll-reveal";

type Project = {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  github?: string;
  detail?: string;
  status: "live" | "in-progress" | "planned";
};

const projects: Project[] = [
  {
    title: "Network Packet Analyzer",
    description:
      "Mini-IDS en Python : capture et analyse de trafic réseau, détection de scans de ports et de tentatives de brute-force. Export JSON compatible SIEM.",
    tags: ["Python", "Scapy", "Sécurité", "Réseau"],
    icon: <Shield className="h-5 w-5" />,
    iconBg: "bg-red-500/10",
    iconColor: "text-red-500",
    github: "https://github.com/MaximeBENE/network-analyzer",
    detail: "/projects/network-analyzer",
    status: "live",
  },
  {
    title: "Lab Réseau Virtualisé",
    description:
      "Laboratoire isolé Kali + Ubuntu pour l'analyse réseau : scans Nmap, captures Wireshark, analyse de paquets TCP et démarche SOC.",
    tags: ["VirtualBox", "Kali", "Nmap", "Wireshark"],
    icon: <Terminal className="h-5 w-5" />,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    detail: "/projects/lab-reseau",
    status: "live",
  },
  {
    title: "Détection ARP Spoofing",
    description:
      "Extension du Network Analyzer pour détecter les empoisonnements ARP en temps réel. En cours de développement.",
    tags: ["Python", "Scapy", "ARP", "IDS"],
    icon: <Lock className="h-5 w-5" />,
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-500",
    status: "planned",
  },
];

const statusLabels = {
  live: { label: "Disponible", className: "bg-green-500/10 text-green-500 border-green-500/20" },
  "in-progress": { label: "En cours", className: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
  planned: { label: "À venir", className: "bg-muted text-muted-foreground border-border" },
};

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">Projets</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Des outils concrets, du code réel, des résultats vérifiables.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <Card className="group flex h-full flex-col border-border/60 transition-all hover:border-primary/40 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${project.iconBg} ${project.iconColor}`}
                    >
                      {project.icon}
                    </div>
                    <Badge
                      variant="outline"
                      className={`text-xs ${statusLabels[project.status].className}`}
                    >
                      {statusLabels[project.status].label}
                    </Badge>
                  </div>
                  <CardTitle className="mt-4 text-lg">{project.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-auto flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <GithubIcon className="h-4 w-4" />
                        Code
                      </a>
                    )}
                    {project.detail && (
                      <Link
                        href={project.detail}
                        className="inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
                      >
                        Détails
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}