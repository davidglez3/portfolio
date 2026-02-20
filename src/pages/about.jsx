import Layout from '@/components/Layout';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function About() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/images/profile.jpg" // Coloca tu foto en public/images/
              alt="Tu Nombre"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Tu Nombre</h1>
            <p className="text-gray-600 mb-4">Desarrollador Web Full Stack</p>
            <div className="flex space-x-4">
              <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="prose prose-lg">
          <p>
            Aquí puedes escribir una biografía profesional: tu experiencia, tecnologías que dominas, proyectos destacados, filosofía de trabajo, etc.
          </p>
          <h2>Habilidades</h2>
          <ul>
            <li>JavaScript / TypeScript</li>
            <li>React & Next.js</li>
            <li>Node.js / Express</li>
            <li>Tailwind CSS / CSS Modules</li>
            <li>Bases de datos (MongoDB, PostgreSQL)</li>
            <li>Control de versiones con Git</li>
          </ul>
          <p>
            Si quieres, puedes añadir un enlace para descargar tu CV en PDF.
          </p>
          <a
            href="/files/cv.pdf"
            download
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </Layout>
  );
}