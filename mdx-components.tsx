import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1 className="mt-8 mb-4 text-3xl font-bold tracking-tight">{children}</h1>
    ),
    h2: ({ children, id }) => (
      <h2 id={id} className="mt-10 mb-4 scroll-mt-24 text-2xl font-bold tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children, id }) => (
      <h3 id={id} className="mt-8 mb-3 scroll-mt-24 text-xl font-semibold">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="my-4 leading-relaxed text-muted-foreground">{children}</p>
    ),
    a: ({ href, children }) => (
      <Link
        href={href ?? "#"}
        className="text-primary underline underline-offset-4 hover:text-primary/80"
      >
        {children}
      </Link>
    ),
    ul: ({ children }) => (
      <ul className="my-4 ml-6 list-disc space-y-1 text-muted-foreground">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="my-4 ml-6 list-decimal space-y-1 text-muted-foreground">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-primary/40 bg-muted/30 py-2 pl-4 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="my-6 overflow-x-auto rounded-lg border border-border/60 bg-card p-4 font-mono text-sm">
        {children}
      </pre>
    ),
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-border/60 bg-muted/40 px-3 py-2 text-left font-semibold">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-border/60 px-3 py-2 text-muted-foreground">{children}</td>
    ),
    hr: () => <hr className="my-8 border-border/60" />,
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
  };
}