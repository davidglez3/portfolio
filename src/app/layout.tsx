import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: {
    default: 'Alex Martínez — Portfolio',
    template: '%s | Alex Martínez',
  },
  description: 'Software Engineer & Full-Stack Developer especializado en React, Next.js y TypeScript.',
  keywords: ['portfolio', 'developer', 'software engineer', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Alex Martínez' }],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://yourusername.github.io/portfolio',
    siteName: 'Alex Martínez Portfolio',
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
