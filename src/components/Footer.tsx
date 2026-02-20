import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const socials = [
  { href: 'https://github.com/yourusername', label: 'GitHub',   Icon: FiGithub },
  { href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn', Icon: FiLinkedin },
  { href: 'https://twitter.com/yourusername', label: 'Twitter', Icon: FiTwitter },
  { href: 'mailto:hello@example.com', label: 'Email', Icon: FiMail },
];

const footerLinks = [
  { href: '/',         label: 'Inicio' },
  { href: '/blog',     label: 'Blog' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/about',    label: 'Sobre mí' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-16">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="font-display font-bold text-xl text-slate-900 dark:text-white">
              Alex<span className="gradient-text">.</span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Adminsitrador de sistemas infomráticos.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                <Icon className="w-4.5 h-4.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} David González Lombraña. Hecho con{' '}
            <span aria-label="amor" role="img">♥</span>{' '}
            usando Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
