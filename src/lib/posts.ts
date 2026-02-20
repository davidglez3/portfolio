import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Directory where blog MDX files are stored
const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

export interface PostFrontmatter {
  title: string;
  date: string;
  summary: string;
  coverImage?: string;
  tags?: string[];
  draft?: boolean;
}

export interface Post extends PostFrontmatter {
  slug: string;
  /** Raw MDX string (without frontmatter) */
  content: string;
}

/**
 * Returns all posts sorted by date (newest first).
 * Filters out drafts in production.
 */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, '');
    return getPostBySlug(slug);
  }).filter((p): p is Post => p !== null);

  // Filter drafts in production
  const filtered = posts.filter((p) => process.env.NODE_ENV !== 'production' || !p.draft);

  // Sort by date descending
  return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Returns a single post by its slug, or null if not found.
 */
export function getPostBySlug(slug: string): Post | null {
  const possiblePaths = [
    path.join(POSTS_DIR, `${slug}.mdx`),
    path.join(POSTS_DIR, `${slug}.md`),
  ];

  const filePath = possiblePaths.find((p) => fs.existsSync(p));
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug,
    content,
    title: data.title ?? 'Sin título',
    date: data.date ?? new Date().toISOString(),
    summary: data.summary ?? '',
    coverImage: data.coverImage,
    tags: data.tags ?? [],
    draft: data.draft ?? false,
  };
}

/**
 * Returns slugs for all posts — used for generateStaticParams.
 */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => f.replace(/\.mdx?$/, ''));
}
