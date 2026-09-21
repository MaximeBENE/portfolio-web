import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Terminal, Zap, FileJson, Lock, Bug } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Network Packet Analyzer — Mini-IDS en Python",
  description:
    "Outil Python de capture et d'analyse réseau : détection de scans de ports, brute-force et floods. Projet portfolio SOC N1.",
};

const features = [
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Détection de scan de ports",
    description:
      "Identifie les scans Nmap (SYN, Connect) en comptant les ports distincts sollicités par IP source. Sévérité graduée : MOYEN / ÉLEVÉ / CRITIQUE.",
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Détection de brute-force",
    description:
      "Détecte les tentatives répétées de SYN sur des ports sensibles (SSH, RDP, MySQL…). Whitelist intégrée pour ignorer le DNS, HTTP et NTP.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Distinction interne / externe",
    description:
      "Utilise ipaddress pour identifier les IPs RFC1918. Une alerte provenant d'une IP publique est marquée comme externe et priorisée.",
  },
  {
    icon: <FileJson className="h-5 w-5" />,
    title: "Export JSON structuré",
    description:
      "Chaque rapport est exporté dans un format JSON compatible avec Wazuh, Elasticsearch ou tout SIEM. Prêt pour l'automatisation.",
  },
  {
    icon: <Terminal className="h-5 w-5" />,
    title: "Deux modes d'analyse",
    description:
      "Lecture de fichiers .pcap/.pcapng (analyse offline) ou capture live sur une interface réseau (nécessite libpcap).",
  },
  {
    icon: <Bug className="h-5 w-5" />,
    title: "Architecture modulaire",
    description:
      "Code séparé en sniffer, detector et utils. Chaque détection est indépendante et peut être étendue (ARP spoofing, ICMP flood…) sans toucher au reste.",
  },
];

const stack = [
  { name: "Python 3.12", role: "Langage principal" },
  { name: "Scapy", role: "Capture & dissection" },
  { name: "Colorama", role: "Interface terminal" },
  { name: "Git / GitHub", role: "Versioning" },
];

const detections = [
  {
    type: "Scan de ports",
    severity: "CRITIQUE",
    color: "text-red-500 bg-red-500/10 border-red-500/20",
    example: "🚨 CRITIQUE — SCAN DE PORTS (interne) depuis 192.168.244.131 — 1000 ports distincts",
  },
  {
    type: "Brute-force",
    severity: "MOYEN",
    color: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
    example: "🔒 BRUTE-FORCE potentiel (interne) : 192.168.1.100 → port 22 (SSH) — 45 tentatives SYN",
  },
  {
    type: "Trafic normal",
    severity: "AUCUNE",
    color: "text-green-500 bg-green-500/10 border-green-500/20",
    example: "✅ Aucun événement suspect détecté",
  },
];

export default function NetworkAnalyzerPage() {
  return (
    <article className="pb-20">
      {/* Header de la page */}
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
            <Badge variant="outline" className="border-green-500/20 bg-green-500/10 text-green-500">
              Projet actif
            </Badge>
            <Badge variant="outline" className="border-border/60">
              Python 3.12+
            </Badge>
            <Badge variant="outline" className="border-border/60">
              Scapy
            </Badge>
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Network Packet Analyzer
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Un mini-IDS en Python qui capture, analyse et détecte les comportements
            suspects sur un réseau — pensé pour un analyste SOC Niveau 1.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/MaximeBENE/network-analyzer"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              <GithubIcon className="mr-2 h-4 w-4" />
              Voir le code sur GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        {/* Contexte */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold">Contexte du projet</h2>
          <p className="mt-4 text-muted-foreground">
            Dans un SOC N1, l&apos;analyste doit savoir lire un flux réseau, détecter les
            attaques classiques et prioriser les alertes. Wireshark est l&apos;outil de
            référence, mais il reste manuel.
          </p>
          <p className="mt-4 text-muted-foreground">
            J&apos;ai voulu construire <strong className="text-foreground">l&apos;équivalent automatisé</strong> :
            un script Python qui prend un fichier <code>.pcap</code> ou capture en live,
            détecte les menaces connues et sort un rapport exploitable. Le but n&apos;est pas
            de remplacer un SIEM, mais de comprendre <strong className="text-foreground">ce qui se passe sous le capot</strong>.
          </p>
        </div>

        <Separator className="my-16" />

        {/* Fonctionnalités */}
        <div>
          <h2 className="text-2xl font-bold">Fonctionnalités clés</h2>
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

        {/* Exemple de sortie */}
        <div>
          <h2 className="text-2xl font-bold">Exemple de rapport</h2>
          <p className="mt-3 text-muted-foreground">
            Sortie réelle sur un fichier capturé dans mon lab (Kali → Ubuntu avec scan Nmap) :
          </p>

          <div className="mt-6 overflow-hidden rounded-lg border border-border/60 bg-card">
            <div className="flex items-center gap-2 border-b border-border/60 bg-muted/40 px-4 py-2.5">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-2 text-xs text-muted-foreground">
                terminal — python main.py --file captures/test.pcapng
              </span>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-xs leading-relaxed md:text-sm">
              <code>
{`📂 Lecture du fichier captures/test.pcapng...

🔍 Exécution des analyses de sécurité...
🚨 CRITIQUE - SCAN DE PORTS (interne) depuis 192.168.244.131 - 1000 ports distincts

============================================================
📊 RAPPORT D'ANALYSE RÉSEAU
============================================================

⏱️  Durée: 0.09 secondes
📦 Paquets capturés: 2140

📈 Répartition des protocoles:
  TCP: 2058 (96.2%) ███████████████████
  UDP: 68 (3.2%)
  Other: 14 (0.7%)

🌐 Top 5 IPs les plus actives:
  192.168.244.128 → 1107 paquets
  192.168.244.131 → 1003 paquets
  192.168.244.2 → 15 paquets

🔌 Top 5 ports les plus sollicités:
  Port 53 (DNS) → 59 connexions
  Port 8888 (Unknown) → 1 connexions
  Port 110 (POP3) → 1 connexions

⚠️  ÉVÉNEMENTS SUSPECTS DÉTECTÉS:
  • 🚨 CRITIQUE - SCAN DE PORTS (interne) depuis 192.168.244.131 - 1000 ports distincts

============================================================
✅ Exporté vers capture_report.json`}
              </code>
            </pre>
          </div>
        </div>

        <Separator className="my-16" />

        {/* Types d'alertes */}
        <div>
          <h2 className="text-2xl font-bold">Types d&apos;alertes détectées</h2>
          <div className="mt-6 space-y-3">
            {detections.map((d) => (
              <div
                key={d.type}
                className="rounded-lg border border-border/60 bg-card p-4"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-semibold">{d.type}</span>
                  <Badge variant="outline" className={d.color}>
                    {d.severity}
                  </Badge>
                </div>
                <p className="mt-3 font-mono text-xs text-muted-foreground">
                  {d.example}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-16" />

        {/* Ce que ça démontre */}
        <div>
          <h2 className="text-2xl font-bold">Ce que ce projet démontre</h2>
          <ul className="mt-6 space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary">✓</span>
              <span>
                <strong className="text-foreground">Maîtrise des protocoles réseau</strong> — TCP, UDP, ICMP, flags SYN/ACK, ports, adressage RFC1918.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">✓</span>
              <span>
                <strong className="text-foreground">Compréhension des attaques</strong> — scan de ports, brute-force, floods, et comment les détecter.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">✓</span>
              <span>
                <strong className="text-foreground">Capacité à coder des outils</strong> — Python, Scapy, architecture modulaire, gestion d&apos;erreurs.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">✓</span>
              <span>
                <strong className="text-foreground">Démarche SOC</strong> — priorisation des alertes (sévérité, interne/externe), export exploitable par un SIEM.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">✓</span>
              <span>
                <strong className="text-foreground">Méthodologie lab</strong> — tests en environnement virtualisé (Kali → Ubuntu), génération de captures réelles.
              </span>
            </li>
          </ul>
        </div>

        <Separator className="my-16" />

        {/* Roadmap */}
        <div>
          <h2 className="text-2xl font-bold">Prochaines étapes</h2>
          <ul className="mt-6 space-y-2 text-muted-foreground">
            <li>• Détection d&apos;ARP spoofing et d&apos;ICMP flood</li>
            <li>• Export vers format Wazuh / Elasticsearch</li>
            <li>• Dashboard web (Flask + Chart.js)</li>
            <li>• Tests unitaires avec pytest</li>
            <li>• Fichier de configuration YAML pour les seuils</li>
          </ul>
        </div>

        <Separator className="my-16" />

        {/* CTA final */}
        <div className="rounded-lg border border-border/60 bg-muted/30 p-8 text-center">
          <h3 className="text-xl font-semibold">Envie de voir le code ?</h3>
          <p className="mt-2 text-muted-foreground">
            Le projet est open-source sur GitHub, avec README détaillé et exemples.
          </p>
          <a
            href="https://github.com/MaximeBENE/network-analyzer"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "mt-6")}
          >
            <GithubIcon className="mr-2 h-4 w-4" />
            Voir sur GitHub
          </a>
        </div>
      </section>
    </article>
  );
}