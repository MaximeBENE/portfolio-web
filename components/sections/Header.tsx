"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "Projets", href: "/#projects" },
  { label: "Compétences", href: "/#skills" },
  { label: "Parcours", href: "/#timeline" },
  { label: "Blog", href: "/blog" },
  { label: "À propos", href: "/about" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Shield className="h-5 w-5 text-primary" />
          <span>Maxime BENE</span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
          <Button size="sm" nativeButton={false} render={<a href="/cv.pdf" download />}>
            Télécharger mon CV
          </Button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Nav mobile */}
      {isOpen && (
        <nav className="border-t border-border/40 bg-background md:hidden">
          <div className="container mx-auto flex flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-2">
              <span className="text-sm text-muted-foreground">Thème</span>
              <ThemeToggle />
            </div>
            <Button
              size="sm"
              className="mt-2"
              nativeButton={false}
              render={<a href="/cv.pdf" download />}
            >
              Télécharger mon CV
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}