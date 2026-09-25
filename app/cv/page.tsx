import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CVContent } from "@/app/cv/cv-content";

export const metadata: Metadata = {
  title: "CV",
  description:
    "CV de Maxime BENE, développeur fullstack en reconversion vers la cybersécurité (SOC N1 / DevSecOps).",
};

export default function CVPage() {
  return (
    <div className="py-20 md:py-24 print:py-0">
      <div className="container mx-auto max-w-5xl px-4 print:max-w-none print:px-0">
        {/* Barre d'actions (cachée à l'impression) */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l&apos;accueil
          </Link>

          <div className="flex flex-wrap gap-2">
            <a
              href="/cv.pdf"
              download="CV-Maxime_BENE.pdf"
              className={cn(buttonVariants({ size: "sm" }))}
            >
              <Download className="mr-2 h-4 w-4" />
              Télécharger en PDF
            </a>
            <a
              href="mailto:bene.max31@gmail.com"
              className={cn(buttonVariants({ size: "sm", variant: "outline" }))}
            >
              <Mail className="mr-2 h-4 w-4" />
              Me contacter
            </a>
          </div>
        </div>

        {/* CV */}
        <div className="overflow-hidden rounded-lg border border-border/60 shadow-2xl print:rounded-none print:border-0 print:shadow-none">
          <CVContent />
        </div>

        {/* Aide (cachée à l'impression) */}
        <p className="mt-6 text-center text-xs text-muted-foreground print:hidden">
          Pour imprimer ce CV en PDF :{" "}
          <kbd className="rounded border border-border/60 bg-muted px-1.5 py-0.5 font-mono text-xs">
            Ctrl+P
          </kbd>{" "}
          (ou{" "}
          <kbd className="rounded border border-border/60 bg-muted px-1.5 py-0.5 font-mono text-xs">
            Cmd+P
          </kbd>{" "}
          sur Mac) → Enregistrer au format PDF.
        </p>
      </div>
    </div>
  );
}