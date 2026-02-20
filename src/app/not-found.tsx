import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="section-container py-32 text-center">
      <p className="text-8xl font-display font-extrabold gradient-text mb-4">404</p>
      <h1 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-3">
        Página no encontrada
      </h1>
      <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-sm mx-auto">
        La página que buscas no existe o ha sido movida a otra URL.
      </p>
      <Link href="/" className="btn-primary inline-flex">
        <FiArrowLeft aria-hidden="true" />
        Volver al inicio
      </Link>
    </div>
  );
}
