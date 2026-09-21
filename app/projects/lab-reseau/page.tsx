import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Network,
  Terminal,
  Shield,
  Wifi,
  Eye,
  Settings,
  AlertTriangle,
  BookOpen,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Lab Réseau — Kali Linux, Ubuntu, Nmap et Wireshark",
  description:
    "Laboratoire virtualisé pour l'apprentissage de l'analyse réseau : découverte Nmap, capture Wireshark, analyse de paquets TCP et détection de scans.",
};

const features = [
  {
    icon: <Network className="h-5 w-5" />,
    title: "Réseau Host-Only isolé",
    description:
      "Deux VMs (Kali + Ubuntu) sur un réseau privé VirtualBox. Aucune exposition à Internet, aucune exposition externe. Environnement 100% sûr pour l'expérimentation.",
  },
  {
    icon: <Terminal className="h-5 w-5" />,
    title: "Reconnaissance avec Nmap",
    description:
      "Ping sweep, scan SYN, détection de version, détection d'OS. Chaque type de scan est testé et analysé au niveau paquet.",
  },
  {
    icon: <Eye className="h-5 w-5" />,
    title: "Capture Wireshark",
    description:
      "Capture du trafic en temps réel pendant les scans. Analyse du three-way handshake TCP, des flags SYN/ACK/RST, et du cycle complet d'une connexion HTTP.",
  },
  {
    icon: <Settings className="h-5 w-5" />,
    title: "Services réels déployés",
    description:
      "Apache installé sur Ubuntu (port 80), SSH activé (port 22). Les scans détectent de vrais services, pas des simulations.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Analyse défensive",
    description:
      "Chaque scan est observé côté défense : comment détecter un scan Nmap dans les logs ? Quels signaux dans Wireshark ? C'est le pont vers le SOC.",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Documentation complète",
    description:
      "Fiches de synthèse, tableaux de commandes, interprétation des résultats. Le lab sert de base à plusieurs articles de blog.",
  },
];

const stack = [
  { name: "VirtualBox", role: "Hyperviseur" },
  { name: "Kali Linux", role: "Poste d'attaque / analyse" },
  { name: "Ubuntu Server", role: "Cible / serveur" },
  { name: "Nmap", role: "Reconnaissance réseau" },
  { name: "Wireshark", role: "Analyse de paquets" },
  { name: "Apache2", role: "Service HTTP cible" },
  { name: "Linux / Bash", role: "Administration" },
];

const scenarios = [
  {
    title: "Découverte d'hôtes",
    command: "sudo nmap -sn 192.168.244.0/24",
    result: "Identification des machines actives sur le réseau",
    icon: <Network className="h-4 w-4" />,
  },
  {
    title: "Scan de ports SYN",
    command: "sudo nmap -sS 192.168.244.128",
    result: "1000 ports scannés, détection des services ouverts",
    icon: <Terminal className="h-4 w-4" />,
  },
  {
    title: "Détection de versions",
    command: "sudo nmap -sV 192.168.244.128",
    result: "OpenSSH 8.9p1, Apache httpd 2.4.52 identifiés",
    icon: <Eye className="h-4 w-4" />,
  },
  {
    title: "Capture Wireshark",
    command: "tcp.flags.syn == 1 && tcp.flags.ack == 0",
    result: "Visualisation des 3000+ paquets SYN du scan",
    icon: <Eye className="h-4 w-4" />,
  },
];

const learnings = [
  {
    title: "Maîtrise des protocoles réseau",
    description:
      "TCP, UDP, ICMP, ARP, DNS, DHCP. Chaque protocole est observé au niveau paquet, pas juste théorisé.",
  },
  {
    title: "Différence entre scan et trafic légitime",
    description:
      "Un scan SYN génère un pattern reconnaissable : SYN → SYN-ACK → RST. Une connexion normale fait SYN → SYN-ACK → ACK.",
  },
  {
    title: "Démarche SOC concrète",
    description:
      "Chaque outil offensif est analysé côté défense : comment un analyste SOC verrait-il ce trafic dans ses logs ?",
  },
  {
    title: "Méthodologie de test",
    description:
      "Toujours lancer la capture avant de générer le trafic. Toujours filtrer sur les IPs concernées. Toujours sauvegarder les captures.",
  },
];

export default function LabReseauPage() {
  return (
    <article className="pb-20">
      {/* Header */}
      <section className="border-b border-border/40 bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux projets
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="border-blue-500/20 bg-blue-500/10 text-blue-500">
              Lab actif
            </Badge>
            <Badge variant="outline" className="border-border/60">
              VirtualBox
            </Badge>
            <Badge variant="outline" className="border-border/60">
              Kali + Ubuntu
            </Badge>
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Lab Réseau Virtualisé
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Un laboratoire isolé pour apprendre l&apos;analyse réseau en pratiquant :
            Nmap pour la reconnaissance, Wireshark pour l&apos;analyse de paquets,
            et une démarche SOC pour chaque test.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/blog/lab-reseau-virtualbox-nmap-wireshark"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Lire l&apos;article détaillé
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        {/* Contexte */}
        <div>
          <h2 className="text-2xl font-bold">Contexte du projet</h2>
          <p className="mt-4 text-muted-foreground">
            En cybersécurité, on ne peut pas apprendre seulement en théorie. Il faut
            un <strong className="text-foreground">environnement de test</strong> où on peut :
          </p>
          <ul className="mt-4 ml-6 list-disc space-y-2 text-muted-foreground">
            <li>Scanner sans risquer d&apos;attaquer un vrai réseau</li>
            <li>Capturer du trafic sans violer la vie privée de quiconque</li>
            <li>Casser et réparer, sans conséquence</li>
            <li>Analyser chaque paquet, comprendre chaque réponse</li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            J&apos;ai donc construit ce lab : <strong className="text-foreground">deux VMs VirtualBox</strong>{" "}
            (Kali Linux pour l&apos;attaque/l&apos;analyse, Ubuntu Server pour la cible),
            connectées sur un réseau <strong className="text-foreground">Host-Only</strong>{" "}
            totalement isolé d&apos;Internet.
          </p>
        </div>

        <Separator className="my-16" />

        {/* Architecture */}
        <div>
          <h2 className="text-2xl font-bold">Architecture du lab</h2>
          <div className="mt-6 rounded-lg border border-border/60 bg-card p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-red-500">Kali Linux</h3>
                <p className="mt-1 text-sm text-muted-foreground">Poste d&apos;attaque / Analyse</p>
                <div className="mt-3 space-y-1 font-mono text-xs">
                  <p>IP : 192.168.244.131</p>
                  <p>Interface : eth1</p>
                  <p>Rôle : Nmap, Wireshark, curl</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-emerald-500">Ubuntu Server</h3>
                <p className="mt-1 text-sm text-muted-foreground">Cible / Serveur</p>
                <div className="mt-3 space-y-1 font-mono text-xs">
                  <p>IP : 192.168.244.128</p>
                  <p>Interface : ens33</p>
                  <p>Services : Apache (80), SSH (22)</p>
                </div>
              </div>
            </div>
            <div className="mt-6 border-t border-border/40 pt-4">
              <p className="text-xs text-muted-foreground">
                <strong className="text-foreground">Réseau :</strong> Host-Only VirtualBox
                — isolé d&apos;Internet, isolé du réseau physique, isolé de tout sauf du lab.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-16" />

        {/* Fonctionnalités */}
        <div>
          <h2 className="text-2xl font-bold">Ce que fait ce lab</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-border/60 bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-16" />

        {/* Stack */}
        <div>
          <h2 className="text-2xl font-bold">Stack technique</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {stack.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/30 px-4 py-3"
              >
                <span className="font-medium">{item.name}</span>
                <span className="text-sm text-muted-foreground">{item.role}</span>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-16" />

        {/* Scénarios */}
        <div>
          <h2 className="text-2xl font-bold">Scénarios testés</h2>
          <div className="mt-6 space-y-3">
            {scenarios.map((s) => (
              <div
                key={s.title}
                className="rounded-lg border border-border/60 bg-card p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {s.icon}
                  </div>
                  <h3 className="font-semibold">{s.title}</h3>
                </div>
                <div className="mt-3 rounded-md bg-zinc-950 p-3">
                  <code className="font-mono text-xs text-green-400">
                    $ {s.command}
                  </code>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{s.result}</p>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-16" />

        {/* Ce que ça démontre */}
        <div>
          <h2 className="text-2xl font-bold">Ce que ce lab démontre</h2>
          <div className="mt-6 space-y-4">
            {learnings.map((l) => (
              <div key={l.title} className="flex gap-3">
                <span className="text-primary">✓</span>
                <div>
                  <h3 className="font-semibold">{l.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {l.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-16" />

        {/* Avertissement sécurité */}
        <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-yellow-500" />
            <div>
              <h3 className="font-semibold">Règle fondamentale</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                On ne scanne <strong className="text-foreground">jamais</strong> un réseau
                sans autorisation écrite. Ce lab existe précisément pour éviter ça :
                un environnement isolé où l&apos;on peut tout tester sans conséquence légale
                ni éthique.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-16" />

        {/* Articles liés */}
        <div>
          <h2 className="text-2xl font-bold">Articles liés</h2>
          <div className="mt-6 space-y-3">
            <Link
              href="/blog/lab-reseau-virtualbox-nmap-wireshark"
              className="group flex items-center justify-between rounded-lg border border-border/60 bg-card p-4 transition-colors hover:border-primary/40"
            >
              <div>
                <h3 className="font-semibold group-hover:text-primary">
                  Mettre en place un lab réseau isolé
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Configuration VirtualBox, adressage IP, premiers scans
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
            <Link
              href="/blog/analyser-scan-nmap-wireshark"
              className="group flex items-center justify-between rounded-lg border border-border/60 bg-card p-4 transition-colors hover:border-primary/40"
            >
              <div>
                <h3 className="font-semibold group-hover:text-primary">
                  Analyser un scan Nmap avec Wireshark
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Lecture des flags TCP, three-way handshake, détection de scan
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
            <Link
              href="/blog/nmap-guide-complet-options"
              className="group flex items-center justify-between rounded-lg border border-border/60 bg-card p-4 transition-colors hover:border-primary/40"
            >
              <div>
                <h3 className="font-semibold group-hover:text-primary">
                  Nmap : le guide complet des options
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Toutes les commandes Nmap essentielles avec exemples
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          </div>
        </div>

        <Separator className="my-16" />

        {/* CTA final */}
        <div className="rounded-lg border border-border/60 bg-muted/30 p-8 text-center">
          <h3 className="text-xl font-semibold">Envie de voir les détails techniques ?</h3>
          <p className="mt-2 text-muted-foreground">
            L&apos;article complet déroule la construction du lab, les commandes utilisées
            et l&apos;analyse paquet par paquet.
          </p>
          <Link
            href="/blog/lab-reseau-virtualbox-nmap-wireshark"
            className={cn(buttonVariants({ size: "lg" }), "mt-6")}
          >
            Lire l&apos;article complet
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </article>
  );
}