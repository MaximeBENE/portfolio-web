"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siGithub } from "simple-icons/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Maxime() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Disponible pour une alternance / un poste SOC N1
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Je code les outils que{" "}
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                j&apos;utilise
              </span>{" "}
              pour défendre le réseau.
            </h1>

            <p className="max-w-xl text-lg text-muted-foreground">
              Développeur web en reconversion vers la cybersécurité.
              Spécialisation <strong className="text-foreground">SOC N1</strong>,
              analyse réseau et détection d&apos;intrusions.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#projects"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Voir mes projets
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <a
                href="https://github.com/MaximeBENE"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              >
                <svg
                  className="mr-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={siGithub.path} />
                </svg>
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-lg border border-border/60 bg-card shadow-2xl">
              <div className="flex items-center gap-2 border-b border-border/60 px-4 py-2.5">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-2 text-xs text-muted-foreground">
                  network-analyzer — bash
                </span>
              </div>

              <div className="space-y-1 p-4 font-mono text-xs md:text-sm">
                <div className="text-muted-foreground">
                  <span className="text-green-500">$</span> python main.py --file
                  capture.pcapng
                </div>
                <div className="text-muted-foreground">📂 Lecture du fichier...</div>
                <div className="text-muted-foreground">🔍 Analyse en cours...</div>
                <div className="text-red-500">
                  🚨 CRITIQUE — SCAN DE PORTS (interne)
                </div>
                <div className="text-yellow-500">
                  🔒 BRUTE-FORCE potentiel : 192.168.1.100 → port 22
                </div>
                <div className="text-green-500">
                  ✅ Rapport exporté (2140 paquets analysés)
                </div>
                <div className="text-muted-foreground">
                  <span className="text-green-500">$</span>{" "}
                  <span className="inline-block h-4 w-2 animate-pulse bg-foreground" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}