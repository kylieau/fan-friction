import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { APP } from './src/config/app.ts';
import { THEME } from './src/config/theme.ts';

// Builds the home-screen settings (web app manifest) from the one app config,
// and fills %APP_NAME% into index.html, so the name lives in one place.
function appIdentity(): Plugin {
  const manifest = JSON.stringify(
    {
      name: APP.name,
      short_name: APP.name,
      description: APP.tagline,
      start_url: '/',
      display: 'standalone',
      orientation: 'portrait',
      background_color: THEME.bg,
      theme_color: THEME.bg,
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
        { src: '/icon-maskable-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
        { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      ],
    },
    null,
    2,
  );
  return {
    name: 'app-identity',
    transformIndexHtml: (html) => html.replaceAll('%APP_NAME%', APP.name),
    configureServer(server) {
      server.middlewares.use('/manifest.webmanifest', (_req, res) => {
        res.setHeader('Content-Type', 'application/manifest+json');
        res.end(manifest);
      });
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'manifest.webmanifest', source: manifest });
    },
  };
}

export default defineConfig({
  plugins: [react(), appIdentity()],
  worker: { format: 'es' },
});
