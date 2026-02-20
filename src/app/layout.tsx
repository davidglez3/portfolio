import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: {
    default: 'David González — Portfolio',
    template: '%s | David González',
  },
  description: 'Administrador de sistemas informáticos en red con pasión por la programación y la ciberseguridad.',
  keywords: ['portfolio', 'developer', 'systems administrator', 'cybersecurity'],
  authors: [{ name: 'David González Lombraña' }],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://davidglez3.github.io/portfolio',
    siteName: 'David González Portfolio',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
