import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiCalendar, FiClock } from 'react-icons/fi';
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';
import MDXContent from '@/components/MDXContent';
import type { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
}

// Pre-generate all post pages at build time
export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Rough reading time estimate
  const wordCount = post.content.split(/\s+/).length;
  const readTime = Math.max(1, Math.round(wordCount / 200));

  return (
    <article className="section-container py-12 max-w-3xl">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-8"
      >
        <FiArrowLeft aria-hidden="true" /> Volver al blog
      </Link>

      {/* Header */}
      <header className="mb-10">
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="skill-tag">{tag}</span>
            ))}
          </div>
        )}

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white leading-tight">
          {post.title}
        </h1>

        <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">{post.summary}</p>

        <div className="mt-6 flex items-center gap-4 text-sm text-slate-400 dark:text-slate-500">
          <span className="flex items-center gap-1.5">
            <FiCalendar aria-hidden="true" />
            <time dateTime={post.date}>{formattedDate}</time>
          </span>
          <span className="flex items-center gap-1.5">
            <FiClock aria-hidden="true" />
            {readTime} min de lectura
          </span>
        </div>
      </header>

      {/* Cover image */}
      {post.coverImage && (
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 shadow-md">
          <Image
            src={post.coverImage}
            alt={`Imagen de portada para ${post.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* MDX Content */}
      <MDXContent source={post.content} />

      {/* Footer navigation */}
      <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 hover:gap-3 transition-all"
        >
          <FiArrowLeft aria-hidden="true" /> Ver todos los posts
        </Link>
      </div>
    </article>
  );
}
