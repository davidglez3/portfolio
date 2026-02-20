import { getAllProjects } from '@/lib/projects';
import Card from '@/components/Card';
import AnimatedSection from '@/components/AnimatedSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Proyectos de software que he diseñado y desarrollado.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="section-container py-16">
      <AnimatedSection>
        <div className="mb-12">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white">
            Proyectos
          </h1>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg max-w-xl">
            Una selección de los proyectos en los que he trabajado: aplicaciones web, herramientas y experimentos.
          </p>
          <p className="mt-2 text-sm text-slate-400 dark:text-slate-500">
            {projects.length} proyecto{projects.length !== 1 ? 's' : ''} listado{projects.length !== 1 ? 's' : ''}
          </p>
        </div>
      </AnimatedSection>

      {projects.length === 0 ? (
        <AnimatedSection delay={0.2}>
          <div className="text-center py-24 text-slate-400 dark:text-slate-500">
            <p className="text-5xl mb-4">🛠️</p>
            <p className="font-medium">Proyectos próximamente...</p>
          </div>
        </AnimatedSection>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
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
      )}
    </div>
  );
}
