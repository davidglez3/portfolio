import { getAllPosts } from '@/lib/posts';
import Card from '@/components/Card';
import AnimatedSection from '@/components/AnimatedSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artículos sobre desarrollo web, software y tecnología.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="section-container py-16">
      <AnimatedSection>
        <div className="mb-12">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white">
            Blog
          </h1>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg max-w-xl">
            Escribo sobre desarrollo web, patrones de diseño, experiencias aprendidas y tecnología en general.
          </p>
          <p className="mt-2 text-sm text-slate-400 dark:text-slate-500">
            {posts.length} artículo{posts.length !== 1 ? 's' : ''} publicado{posts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </AnimatedSection>

      {posts.length === 0 ? (
        <AnimatedSection delay={0.2}>
          <div className="text-center py-24 text-slate-400 dark:text-slate-500">
            <p className="text-5xl mb-4">✍️</p>
            <p className="font-medium">Aún no hay posts. ¡Próximamente!</p>
          </div>
        </AnimatedSection>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Card
              key={post.slug}
              title={post.title}
              summary={post.summary}
              slug={post.slug}
              date={post.date}
              coverImage={post.coverImage}
              basePath="blog"
              index={i}
            />
          ))}
        </div>
      )}
    </div>
  );
}
