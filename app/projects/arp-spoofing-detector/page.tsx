import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  AlertTriangle,
  Network,
  Terminal,
  Zap,
  Eye,
  Lock,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Détecteur ARP Spoofing — Détection de Man-in-the-Middle en Python",
  description:
    "Extension du Network Packet Analyzer : détection en temps réel des attaques ARP Spoofing, avec gradation de sévérité et identification des cibles visées.",
};

const features = [
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Détection en temps réel",
    description:
      "Capture les paquets ARP en direct via Scapy et surveille les réponses ARP pour repérer les changements de MAC suspects.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Gradation de sévérité",
    description:
      "Une attaque ciblant la passerelle est marquée CRITIQUE (Man-in-the-Middle probable). Une attaque vers une autre IP est ÉLEVÉ.",
  },
  {
    icon: <Eye className="h-5 w-5" />,
    title: "Identification des cibles",
    description:
      "Le détecteur indique quelle machine est visée (cible IP) et quelle MAC usurpe l'identité de la passerelle.",
  },
  {
    icon: <Network className="h-5 w-5" />,
    title: "Détection intelligente de la passerelle",
    description:
      "Lit la route par défaut via `ip route` pour identifier la vraie passerelle, plutôt qu'une heuristique sur les IPs en .1 ou .254.",
  },
  {
    icon: <Terminal className="h-5 w-5" />,
    title: "Interface CLI simple",
    description:
      "Une seule commande : `python main.py --arp --interface eth1`. Le rapport s'affiche dans le terminal et est exporté en JSON.",
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Export JSON exploitable",
    description:
      "Chaque alerte est enregistrée avec la MAC usurpée, la cible visée et le timestamp. Prêt pour intégration dans un SIEM.",
  },
];

const stack = [
  { name: "Python 3.12", role: "Langage principal" },
  { name: "Scapy", role: "Capture ARP" },
  { name: "Colorama", role: "Interface terminal" },
  { name: "Kali Linux", role: "Attaquant (arpspoof)" },
  { name: "Ubuntu Server", role: "Cible / victime" },
  { name: "VirtualBox", role: "Lab isolé" },
];

const learnings = [
  {
    title: "Comprendre l'ARP Spoofing",
    description:
      "ARP n'a aucune authentification. Un attaquant peut se faire passer pour la passerelle en envoyant de fausses réponses ARP. C'est la base du Man-in-the-Middle sur réseau local.",
  },
  {
    title: "Détecter par changement de MAC",
    description:
      "La signature d'une attaque ARP Spoofing est simple : une IP change de MAC. Le détecteur garde une table ARP légitime et alerte dès qu'une MAC change pour une IP connue.",
  },
  {
    title: "Prioriser selon le contexte",
    description:
      "Un spoofing de passerelle (routeur) est critique — tout le trafic peut être intercepté. Un spoofing d'une machine standard est élevé mais moins grave.",
  },
  {
    title: "Test en environnement isolé",
    description:
      "Toute attaque réseau doit être testée dans un lab. Le lab Host-Only VirtualBox permet de simuler une attaque réelle sans impact sur le réseau de production.",
  },
];

export default function ARPSpoofingPage() {
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
            <Badge variant="outline" className="border-green-500/20 bg-green-500/10 text-green-500">
              Projet actif
            </Badge>
            <Badge variant="outline" className="border-border/60">
              Python
            </Badge>
            <Badge variant="outline" className="border-border/60">
              Scapy
            </Badge>
            <Badge variant="outline" className="border-border/60">
              Sécurité réseau
            </Badge>
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Détecteur ARP Spoofing
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Détection en temps réel des attaques Man-in-the-Middle sur réseau local.
            Surveille les réponses ARP, alerte sur les changements de MAC suspects,
            et identifie la cible visée.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/MaximeBENE/network-analyzer"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              <GithubIcon className="mr-2 h-4 w-4" />
              Voir le code
            </a>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        {/* Contexte */}
        <div>
          <h2 className="text-2xl font-bold">L'attaque : ARP Spoofing</h2>
          <p className="mt-4 text-muted-foreground">
            ARP (Address Resolution Protocol) associe une <strong className="text-foreground">adresse IP</strong>{" "}
            à une <strong className="text-foreground">adresse MAC</strong> sur un réseau local.
            Quand ton PC veut parler à la passerelle, il demande : <em>&quot;Qui a l&apos;IP 192.168.244.2 ?&quot;</em>{" "}
            et le routeur répond : <em>&quot;C&apos;est moi, voici ma MAC.&quot;</em>
          </p>
          <p className="mt-4 text-muted-foreground">
            <strong className="text-foreground">Le problème :</strong> ARP n&apos;a aucune
            authentification. N&apos;importe qui sur le réseau peut répondre à cette requête
            et prétendre être la passerelle.
          </p>
          <p className="mt-4 text-muted-foreground">
            C&apos;est ce que fait <code>arpspoof</code> : il envoie en boucle des réponses ARP
            qui disent à la victime <em>&quot;La passerelle, c&apos;est moi.&quot;</em>. Résultat :
            tout le trafic de la victime passe par l&apos;attaquant. C&apos;est le
            <strong className="text-foreground"> Man-in-the-Middle</strong>.
          </p>
        </div>

        <Separator className="my-16" />

        {/* Comment ça marche */}
        <div>
          <h2 className="text-2xl font-bold">Comment le détecteur fonctionne</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">1. Construction d&apos;une table ARP légitime</strong> —
              Le détecteur observe les réponses ARP et mémorise la première MAC associée à chaque IP.
            </p>
            <p>
              <strong className="text-foreground">2. Surveillance des changements</strong> —
              Si une IP change de MAC, c&apos;est suspect. Un changement de MAC sur une IP déjà
              connue signifie qu&apos;une autre machine usurpe son identité.
            </p>
            <p>
              <strong className="text-foreground">3. Gradation par sévérité</strong> —
              On lit <code>ip route show default</code> pour identifier la vraie passerelle.
              Si l&apos;IP usurpée est la passerelle → alerte <strong className="text-foreground">CRITIQUE</strong>.
              Sinon → <strong className="text-foreground">ÉLEVÉ</strong>.
            </p>
            <p>
              <strong className="text-foreground">4. Identification de la cible</strong> —
              Chaque paquet ARP contient une IP de destination (<code>pdst</code>).
              On sait donc quelle machine est visée par l&apos;attaque.
            </p>
          </div>
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

        {/* Démo */}
        <div>
          <h2 className="text-2xl font-bold">Démonstration dans le lab</h2>
          <p className="mt-3 text-muted-foreground">
            Environnement : Kali Linux (détecteur) + Ubuntu Server (attaquant via
            <code> arpspoof</code>), sur réseau Host-Only VirtualBox.
          </p>

          {/* Screenshot 1 */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold">1. Lancement du détecteur</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Sur Kali : <code>sudo python main.py --arp --interface eth1</code>
            </p>
            <div className="mt-4 overflow-hidden rounded-lg border border-border/60">
              <Image
                src="/images/projects/arp-spoofing/detection-alerte.png"
                alt="Détection ARP Spoofing sur Kali"
                width={1200}
                height={800}
                className="w-full"
              />
            </div>
          </div>

          {/* Screenshot 2 */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold">2. Lancement de l&apos;attaque</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Sur Ubuntu : <code>sudo arpspoof -i ens33 -t 192.168.244.131 192.168.244.2</code>
            </p>
            <div className="mt-4 overflow-hidden rounded-lg border border-border/60">
              <Image
                src="/images/projects/arp-spoofing/attaque-arpspoof.png"
                alt="Attaque ARP Spoofing sur Ubuntu"
                width={1200}
                height={800}
                className="w-full"
              />
            </div>
          </div>

          {/* Résultat */}
          <div className="mt-8 rounded-lg border border-red-500/30 bg-red-500/5 p-6">
            <h3 className="font-semibold text-red-500">Résultat : alerte CRITIQUE</h3>
            <pre className="mt-4 overflow-x-auto font-mono text-xs leading-relaxed text-muted-foreground">
{`🚨 CRITIQUE - ARP SPOOFING potentiel :
   l'IP 192.168.244.2 a changé de MAC
   (00:0c:29:5a:f2:c6 → 00:50:56:ed:cd:e9)
   La cible 192.168.244.131 est visée.
   Possible Man-in-the-Middle.`}
            </pre>
            <p className="mt-4 text-sm text-muted-foreground">
              Décodage : la passerelle <code>192.168.244.2</code> a changé de MAC pour
              celle d&apos;Ubuntu (<code>00:50:56:ed:cd:e9</code>). La cible est Kali
              (<code>192.168.244.131</code>). L&apos;attaque est confirmée.
            </p>
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

        {/* Ce que ça démontre */}
        <div>
          <h2 className="text-2xl font-bold">Ce que ce projet démontre</h2>
          <div className="mt-6 space-y-6">
            {learnings.map((l, i) => (
              <div key={l.title} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-sm font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </div>
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

        {/* Avertissement */}
        <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-yellow-500" />
            <div>
              <h3 className="font-semibold">Test uniquement en lab</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Toutes les attaques ARP Spoofing ont été réalisées dans un{" "}
                <strong className="text-foreground">réseau Host-Only VirtualBox isolé</strong>,
                sans impact sur un réseau de production. Utiliser <code>arpspoof</code> sur un
                réseau sans autorisation est <strong className="text-foreground">illégal</strong>.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-16" />

        {/* CTA final */}
        <div className="rounded-lg border border-border/60 bg-muted/30 p-8 text-center">
          <h3 className="text-xl font-semibold">Voir le code sur GitHub</h3>
          <p className="mt-2 text-muted-foreground">
            L&apos;intégralité du détecteur est open-source, avec le reste du Network Packet Analyzer.
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