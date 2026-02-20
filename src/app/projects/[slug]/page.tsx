import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiExternalLink, FiGithub, FiCalendar } from 'react-icons/fi';
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/projects';
import MDXContent from '@/components/MDXContent';
import type { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: project.coverImage ? [project.coverImage] : [],
    },
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const formattedDate = new Date(project.date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="section-container py-12 max-w-3xl">
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-8"
      >
        <FiArrowLeft aria-hidden="true" /> Volver a proyectos
      </Link>

      {/* Header */}
      <header className="mb-10">
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white leading-tight">
          {project.title}
        </h1>

        <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">{project.summary}</p>

        <div className="mt-6 flex items-center gap-4 text-sm text-slate-400 dark:text-slate-500">
          <span className="flex items-center gap-1.5">
            <FiCalendar aria-hidden="true" />
            <time dateTime={project.date}>{formattedDate}</time>
          </span>
        </div>

        {/* Action links */}
        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FiExternalLink aria-hidden="true" />
              Ver en vivo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <FiGithub aria-hidden="true" />
              Código fuente
            </a>
          )}
        </div>

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-6">
            <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Tecnologías</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="skill-tag">{tech}</span>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Cover image */}
      {project.coverImage && (
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 shadow-md">
          <Image
            src={project.coverImage}
            alt={`Captura de pantalla de ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* MDX Content */}
      <MDXContent source={project.content} />

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 hover:gap-3 transition-all"
        >
          <FiArrowLeft aria-hidden="true" /> Ver todos los proyectos
        </Link>
      </div>
    </article>
  );
}
