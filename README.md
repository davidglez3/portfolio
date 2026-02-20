# 🚀 Portfolio — Next.js 14 + TypeScript + Tailwind CSS

Portfolio profesional construido con Next.js 14 App Router, TypeScript, Tailwind CSS y MDX.  
Desplegable automáticamente en GitHub Pages vía GitHub Actions.

---

## 📋 Stack tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS + @tailwindcss/typography
- **Contenido**: MDX (gray-matter + next-mdx-remote)
- **Animaciones**: Framer Motion
- **Iconos**: react-icons
- **Deploy**: GitHub Pages (static export)

---

## 🚀 Inicio rápido

### Prerrequisitos
- Node.js 18+
- npm / yarn / pnpm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 📁 Estructura del proyecto

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD para GitHub Pages
├── content/
│   ├── posts/                # Posts del blog en MDX
│   │   ├── mi-primer-post.mdx
│   │   └── otro-post.mdx
│   └── projects/             # Proyectos en MDX
│       ├── mi-proyecto.mdx
│       └── otro-proyecto.mdx
├── public/
│   └── cv.pdf                # Tu CV (opcional)
├── src/
│   ├── app/                  # App Router de Next.js
│   │   ├── layout.tsx
│   │   ├── page.tsx          # Home
│   │   ├── about/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   └── projects/
│   │       ├── page.tsx
│   │       └── [slug]/page.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Card.tsx
│   │   ├── MDXContent.tsx
│   │   ├── AnimatedSection.tsx
│   │   └── ThemeProvider.tsx
│   └── lib/
│       ├── posts.ts
│       └── projects.ts
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## ✍️ Añadir contenido

### Nuevo post de blog

Crea `content/posts/mi-post.mdx`:

```mdx
---
title: "Título del Post"
date: "2024-07-01"
summary: "Resumen breve del artículo."
coverImage: "https://example.com/imagen.jpg"
tags: ["React", "TypeScript"]
---

## Mi contenido

Escribe aquí el contenido en **Markdown** con soporte para JSX.
```

### Nuevo proyecto

Crea `content/projects/mi-proyecto.mdx`:

```mdx
---
title: "Nombre del Proyecto"
date: "2024-07-01"
summary: "Descripción breve del proyecto."
coverImage: "https://example.com/screenshot.jpg"
technologies: ["Next.js", "TypeScript", "PostgreSQL"]
liveUrl: "https://mi-proyecto.com"
repoUrl: "https://github.com/usuario/proyecto"
---

## Sobre el proyecto

Descripción detallada del proyecto...
```

---

## 🚀 Despliegue en GitHub Pages

### 1. Configurar el repositorio

En `next.config.js`, cambia `portfolio` por el nombre de tu repositorio:

```js
basePath: process.env.NODE_ENV === 'production' ? '/nombre-de-tu-repo' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/nombre-de-tu-repo/' : '',
```

### 2. Configurar GitHub Pages

1. Ve a **Settings → Pages**
2. Source: **GitHub Actions**

### 3. Push al main branch

El workflow de GitHub Actions se encargará del build y deploy automáticamente.

---

## 🎨 Personalización

### Cambiar información personal

Edita `src/app/about/page.tsx` para cambiar:
- Nombre y bio
- Habilidades técnicas
- Timeline de experiencia
- Links sociales

Edita `src/components/Navbar.tsx` y `src/components/Footer.tsx` para actualizar los links sociales.

### Cambiar colores

El tema está en `tailwind.config.ts`. El color primario es `#3b82f6` (blue-500). Cambia los valores de `primary` para personalizar la paleta.

---

## 📄 Licencia

MIT — siéntete libre de usar este template como base para tu propio portfolio.
