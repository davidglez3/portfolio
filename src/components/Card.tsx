'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';

interface CardProps {
  title: string;
  summary: string;
  slug: string;
  date: string;
  coverImage?: string;
  basePath: 'blog' | 'projects';
  /** Optional technology tags displayed as badges */
  technologies?: string[];
  /** Stagger delay for animation */
  index?: number;
}

export default function Card({
  title,
  summary,
  slug,
  date,
  coverImage,
  basePath,
  technologies,
  index = 0,
}: CardProps) {
  const formattedDate = new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="card-base group flex flex-col h-full"
    >
      {/* Cover image */}
      <div className="relative overflow-hidden aspect-[16/9] bg-slate-100 dark:bg-slate-800">
        {coverImage ? (
          <Image
            src={coverImage}
            alt={`Imagen de portada para ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Placeholder gradient when no image */
          <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-indigo-500 opacity-80" />
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Date */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
          <FiCalendar className="w-3.5 h-3.5" aria-hidden="true" />
          <time dateTime={date}>{formattedDate}</time>
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 flex-1">
          {summary}
        </p>

        {/* Tech badges for projects */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
            {technologies.length > 4 && (
              <span className="tech-badge">+{technologies.length - 4}</span>
            )}
          </div>
        )}

        {/* CTA */}
        <Link
          href={`/${basePath}/${slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 hover:gap-2.5 transition-all mt-1"
          aria-label={`Leer más sobre ${title}`}
        >
          Leer más
          <FiArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}
