import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles techniques sur la cybersécurité, l'analyse réseau, Nmap, Wireshark et le scripting Python.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="pb-20 md:pb-32">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Blog</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Write-ups de lab, notes techniques et analyses réseau.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="rounded-lg border border-border/60 bg-muted/30 p-12 text-center">
            <p className="text-muted-foreground">
              Aucun article pour l&apos;instant. Reviens bientôt !
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-lg border border-border/60 bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readingTime}
                  </span>
                </div>
                <h2 className="mt-3 text-xl font-semibold group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  <span className="ml-auto inline-flex items-center gap-1 text-sm text-primary">
                    Lire
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}