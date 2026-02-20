import Link from 'next/link';
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import { getAllPosts } from '@/lib/posts';
import { getAllProjects } from '@/lib/projects';
import Card from '@/components/Card';
import AnimatedSection from '@/components/AnimatedSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alex Martínez — Portfolio',
  description: 'Software Engineer & Full-Stack Developer especializado en React, Next.js y TypeScript.',
};

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);
  const latestProjects = getAllProjects().slice(0, 3);

  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden noise-overlay"
        aria-label="Presentación"
      >
        {/* Background mesh */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-300/30 dark:bg-primary-800/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-300/20 dark:bg-indigo-800/20 rounded-full blur-3xl" />
        </div>

        <div className="section-container py-24">
          <AnimatedSection>
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-800 mb-6">
              🚀 Disponible para proyectos
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-slate-900 dark:text-white leading-tight max-w-3xl">
              Hola, soy{' '}
              <span className="gradient-text">Alex</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              Software Engineer & Full-Stack Developer. Construyo productos digitales
              rápidos, accesibles y con excelente experiencia de usuario.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href="/projects" className="btn-primary">
                Ver proyectos
                <FiArrowRight aria-hidden="true" />
              </Link>
              <Link href="/about" className="btn-ghost">
                Sobre mí
              </Link>
              <div className="flex items-center gap-2 ml-2">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-xl text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <FiGithub className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-xl text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <FiLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Tech stack pills */}
          <AnimatedSection delay={0.45} className="mt-14">
            <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Stack tecnológico</p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'].map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── LATEST PROJECTS ─────────────────────────────────────────── */}
      {latestProjects.length > 0 && (
        <section className="py-20" aria-labelledby="projects-heading">
          <div className="section-container">
            <AnimatedSection>
              <div className="flex items-end justify-between mb-10">
                <div>
                  <h2 id="projects-heading" className="font-display font-bold text-3xl text-slate-900 dark:text-white">
                    Proyectos recientes
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 mt-2">Cosas que he construido últimamente</p>
                </div>
                <Link href="/projects" className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 hover:gap-3 transition-all">
                  Ver todos <FiArrowRight />
                </Link>
              </div>
            </AnimatedSection>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {latestProjects.map((project, i) => (
                <Card
                  key={project.slug}
                  title={project.title}
                  summary={project.summary}
                  slug={project.slug}
                  date={project.date}
                  coverImage={project.coverImage}
                  basePath="projects"
                  technologies={project.technologies}
                  index={i}
                />
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link href="/projects" className="btn-ghost">Ver todos los proyectos <FiArrowRight /></Link>
            </div>
          </div>
        </section>
      )}

      {/* ── LATEST POSTS ────────────────────────────────────────────── */}
      {latestPosts.length > 0 && (
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50" aria-labelledby="blog-heading">
          <div className="section-container">
            <AnimatedSection>
              <div className="flex items-end justify-between mb-10">
                <div>
                  <h2 id="blog-heading" className="font-display font-bold text-3xl text-slate-900 dark:text-white">
                    Blog reciente
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 mt-2">Artículos y reflexiones</p>
                </div>
                <Link href="/blog" className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 hover:gap-3 transition-all">
                  Ver todos <FiArrowRight />
                </Link>
              </div>
            </AnimatedSection>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {latestPosts.map((post, i) => (
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

            <div className="mt-8 text-center sm:hidden">
              <Link href="/blog" className="btn-ghost">Ver todos los posts <FiArrowRight /></Link>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-24" aria-labelledby="cta-heading">
        <div className="section-container text-center max-w-2xl">
          <AnimatedSection>
            <h2 id="cta-heading" className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="mt-4 text-slate-500 dark:text-slate-400">
              Estoy disponible para proyectos freelance y colaboraciones. ¡Hablemos!
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="mailto:hello@example.com" className="btn-primary">
                Escríbeme un email
                <FiArrowRight aria-hidden="true" />
              </a>
              <Link href="/about" className="btn-ghost">Más sobre mí</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
