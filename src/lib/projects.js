import Layout from '@/components/Layout';
import Card from '@/components/Card';
import { getAllPosts } from '@/lib/posts';
import { getAllProjects } from '@/lib/projects';

export default function Home({ recentPosts, recentProjects }) {
  return (
    <Layout>
      {/* Hero */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hola, soy [Tu Nombre]
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Desarrollador web apasionado por crear experiencias digitales únicas.
          Bienvenido a mi portfolio.
        </p>
      </section>

      {/* Proyectos recientes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Proyectos recientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentProjects.map(project => (
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
      </section>

      {/* Últimos posts */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Últimos del blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map(post => (
            <Card
              key={post.slug}
              title={post.data.title}
              summary={post.data.summary}
              coverImage={post.data.coverImage}
              slug={post.slug}
              basePath="blog"
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  const allProjects = getAllProjects();
  // Tomar solo los 3 más recientes
  const recentPosts = allPosts.slice(0, 3);
  const recentProjects = allProjects.slice(0, 3);
  return {
    props: {
      recentPosts,
      recentProjects,
    },
  };
}