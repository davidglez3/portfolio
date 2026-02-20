import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => fileName.replace(/\.mdx$/, ''));
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { data, content, slug };
}

export function getAllPosts() {
  const slugs = getAllPostSlugs();
  const posts = slugs.map(slug => getPostBySlug(slug));
  // Ordenar por fecha descendente (asumiendo que data.date existe)
  return posts.sort((a, b) => (a.data.date > b.data.date ? -1 : 1));
}