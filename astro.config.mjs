import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vibely.example',
  // One-Pager: CSS direkt ins HTML, spart eine Anfrage.
  build: { inlineStylesheets: 'always' },
  // Skripte ebenfalls inline: Jede Seite ist eine eigenstaendige Datei.
  vite: { build: { assetsInlineLimit: 100000 } },
});
