This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# 📱 ITX - Prueba Técnica Frontend

Mini-aplicación desarrollada como solución para la prueba técnica de ITX, donde se implementa un sistema SPA para la compra de dispositivos móviles utilizando React 19 y Next.js 15.

---

## 🚀 Tecnologías utilizadas

- **React 19**
- **Next.js 15.3 (App Router)**
- **Tailwind CSS 4**
- **Jest** y **Testing Library** para pruebas unitarias
- **JavaScript (ES6+)**
- **SPA sin SSR** (Single Page Application)
- **React Context API** para la gestión del carrito

---

## 🧱 Estructura del proyecto

src/ ├── hook/ # Custom Hooks (useCachedFetch, useDebounce) ├── services/ # Funciones de integración con la API ├── store/ # Contexto y proveedor del carrito ├── view/ │ └── pages/ │ └── home/ # Vista principal y componentes │ └── detail/ # Vista de detalle del producto ├── styles/ # Estilos globales public/ # Archivos estáticos

🛠️ Scripts disponibles
npm run dev     # Desarrollo con Turbopack
npm run build   # Build para producción
npm run start   # Servidor de producción
npm run lint    # Linter
npm run test    # Tests unitarios con Jest


📦 Cómo ejecutar el proyecto
Clona el repositorio:
https://github.com/Nau-c/tech_test_frontend.git

✍️ Autor
Nauzet López Mendoza