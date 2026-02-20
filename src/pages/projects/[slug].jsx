import Layout from '@/components/Layout';
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/projects';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';

export default function ProjectPage({ source, frontMatter }) {
  return (
    <Layout>
      <article className="prose lg:prose-xl mx-auto">
        {frontMatter.coverImage && (
          <div className="relative h-96 w-full mb-8">
            <Image
              src={frontMatter.coverImage}
              alt={frontMatter.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        <h1>{frontMatter.title}</h1>
        <div className="text-gray-600 mb-4">
          {new Date(frontMatter.date).toLocaleDateString('es')}
        </div>
        <MDXRemote {...source} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const slugs = getAllProjectSlugs();
  const paths = slugs.map(slug => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data, content } = getProjectBySlug(params.slug);
  const mdxSource = await serialize(content, { scope: data });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}