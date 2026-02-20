import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const PROJECTS_DIR = path.join(process.cwd(), 'content', 'projects');

export interface ProjectFrontmatter {
  title: string;
  date: string;
  summary: string;
  coverImage?: string;
  technologies?: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface Project extends ProjectFrontmatter {
  slug: string;
  content: string;
}

/**
 * Returns all projects sorted by date (newest first).
 */
export function getAllProjects(): Project[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];

  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));

  const projects = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx?$/, '');
      return getProjectBySlug(slug);
    })
    .filter((p): p is Project => p !== null);

  return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Returns a single project by slug, or null if not found.
 */
export function getProjectBySlug(slug: string): Project | null {
  const possiblePaths = [
    path.join(PROJECTS_DIR, `${slug}.mdx`),
    path.join(PROJECTS_DIR, `${slug}.md`),
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
    technologies: data.technologies ?? [],
    liveUrl: data.liveUrl,
    repoUrl: data.repoUrl,
    featured: data.featured ?? false,
  };
}

/**
 * Returns all project slugs for generateStaticParams.
 */
export function getAllProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => f.replace(/\.mdx?$/, ''));
}
