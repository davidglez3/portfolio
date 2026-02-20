import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload } from 'react-icons/fi';
import AnimatedSection from '@/components/AnimatedSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'Conóceme — Software Engineer apasionado por el desarrollo web moderno.',
};

const skills: Record<string, string[]> = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vue.js'],
  Backend: ['Node.js', 'Express', 'Python', 'FastAPI', 'GraphQL', 'REST APIs'],
  'Bases de datos': ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM'],
  DevOps: ['Docker', 'GitHub Actions', 'AWS', 'Vercel', 'Nginx'],
  Herramientas: ['Git', 'VS Code', 'Figma', 'Postman', 'Jira'],
};

const socials = [
  { href: 'https://github.com/yourusername',   label: 'GitHub',   Icon: FiGithub },
  { href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn', Icon: FiLinkedin },
  { href: 'https://twitter.com/yourusername', label: 'Twitter', Icon: FiTwitter },
  { href: 'mailto:hello@example.com',          label: 'Email',    Icon: FiMail },
];

const timeline = [
  { year: '2023–Hoy', role: 'Senior Frontend Developer', company: 'Tech Startup XYZ', desc: 'Liderando el desarrollo del producto principal con Next.js y TypeScript.' },
  { year: '2021–2023', role: 'Full-Stack Developer',     company: 'Agencia Digital ABC', desc: 'Desarrollo de aplicaciones web para clientes internacionales.' },
  { year: '2020–2021', role: 'Junior Developer',          company: 'Freelance',          desc: 'Primeros pasos profesionales construyendo sitios y apps para clientes.' },
  { year: '2016–2020', role: 'Grado en Informática',     company: 'Universidad XYZ',    desc: 'Especialización en desarrollo de software e ingeniería del software.' },
];

export default function AboutPage() {
  return (
    <div className="section-container py-16 max-w-4xl">
      {/* ── INTRO ───────────────────────────────────────────────────── */}
      <AnimatedSection>
        <div className="flex flex-col sm:flex-row gap-8 items-start mb-16">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden shadow-lg ring-4 ring-primary-100 dark:ring-primary-900/50">
              {/* Replace with your actual photo */}
              <div className="w-full h-full bg-gradient-to-br from-primary-400 to-indigo-500 flex items-center justify-center text-white text-5xl font-bold font-display select-none">
                A
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1">
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white mb-2">
              Alex Martínez
            </h1>
            <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
              Software Engineer & Full-Stack Developer
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Apasionado por crear experiencias digitales excepcionales. Con más de 4 años de experiencia
              construyendo aplicaciones web escalables, me especializo en el ecosistema React/Next.js
              y en diseño de APIs robustas.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-3">
              Cuando no estoy programando, me encontrarás leyendo sobre arquitectura de software,
              contribuyendo a proyectos open source o haciendo senderismo.
            </p>

            {/* Social links */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  {label}
                </a>
              ))}
              {/* CV download */}
              <a
                href="/cv.pdf"
                download
                className="btn-primary"
                aria-label="Descargar CV en PDF"
              >
                <FiDownload aria-hidden="true" />
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── SKILLS ──────────────────────────────────────────────────── */}
      <AnimatedSection delay={0.2}>
        <section aria-labelledby="skills-heading" className="mb-16">
          <h2 id="skills-heading" className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-6">
            Habilidades técnicas
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="card-base p-5"
              >
                <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ── TIMELINE ────────────────────────────────────────────────── */}
      <AnimatedSection delay={0.35}>
        <section aria-labelledby="timeline-heading">
          <h2 id="timeline-heading" className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-8">
            Experiencia & Formación
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" aria-hidden="true" />

            <ol className="flex flex-col gap-8 pl-10">
              {timeline.map(({ year, role, company, desc }) => (
                <li key={`${year}-${role}`} className="relative">
                  {/* Dot */}
                  <div className="absolute -left-7 top-1 w-3 h-3 rounded-full bg-primary-500 ring-4 ring-white dark:ring-surface-dark" aria-hidden="true" />

                  <div>
                    <span className="text-xs text-primary-600 dark:text-primary-400 font-mono font-medium">{year}</span>
                    <h3 className="font-display font-semibold text-slate-900 dark:text-white mt-0.5">{role}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{company}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
