import { defineConfig } from 'astro/config';

// SITE und BASE setzt der Pages-Workflow (aus actions/configure-pages).
// Lokal: Wurzel, damit `npm run dev` unter http://localhost:4321/ läuft.
export default defineConfig({
  site: process.env.SITE || 'http://localhost:4321',
  base: process.env.BASE || '/',
  // One-Pager: CSS direkt ins HTML, spart eine Anfrage.
  build: { inlineStylesheets: 'always' },
  // Skripte ebenfalls inline: Jede Seite ist eine eigenstaendige Datei.
  vite: { build: { assetsInlineLimit: 100000 } },
});
