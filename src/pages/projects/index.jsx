import Layout from '@/components/Layout';
import Card from '@/components/Card';
import { getAllProjects } from '@/lib/projects';

export default function ProjectsPage({ projects }) {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Todos los proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <Card
            key={project.slug}
            title={project.data.title}
            summary={project.data.summary}
            coverImage={project.data.coverImage}
            slug={project.slug}
            basePath="projects"
          />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = getAllProjects();
  return { props: { projects } };
}