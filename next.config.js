/** @type {import('next').NextConfig} */
const nextConfig = {
  // Genera archivos estáticos para GitHub Pages
  output: 'export',

  // ⚠️ Cambia 'portfolio' por el nombre exacto de tu repositorio en GitHub
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',

  // GitHub Pages no soporta optimización de imágenes de Next.js
  images: {
    unoptimized: true,
  },

  // Extensiones de archivo que Next.js reconoce como páginas
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  // Necesario para que las rutas funcionen bien en GitHub Pages
  trailingSlash: true,
};

module.exports = nextConfig;