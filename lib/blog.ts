import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  published: boolean;
};

export type Post = PostMeta & {
  content: string;
};

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(fullPath, "utf-8");
      const { data, content } = matter(fileContent);

      // Calcule le temps de lecture (~200 mots/minute)
      const words = content.split(/\s+/).length;
      const readingTime = `${Math.ceil(words / 200)} min`;

      return {
        slug,
        title: data.title ?? "Sans titre",
        description: data.description ?? "",
        date: data.date ?? "",
        tags: data.tags ?? [],
        readingTime,
        published: data.published ?? true,
      };
    })
    .filter((p) => p.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContent);

  const words = content.split(/\s+/).length;
  const readingTime = `${Math.ceil(words / 200)} min`;

  return {
    slug,
    title: data.title ?? "Sans titre",
    description: data.description ?? "",
    date: data.date ?? "",
    tags: data.tags ?? [],
    readingTime,
    published: data.published ?? true,
    content,
  };
}