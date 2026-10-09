import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
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

/**
 * The installed app works offline (big-picture plan, step 8): the app shell is
 * kept on the phone, the shared catalog's last answers are kept for a week so
 * a night read on the train is still there in the tunnel, and map tiles and
 * fonts are kept once seen. Accounts and writes always go to the network.
 */
function offlineShell(): Plugin[] {
  return VitePWA({
    registerType: 'autoUpdate',
    injectRegister: 'auto',
    manifest: false, // appIdentity() writes the manifest from the one app config
    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico,webmanifest,woff2}'],
      maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
      navigateFallback: '/index.html',
      navigateFallbackDenylist: [/^\/api\//],
      runtimeCaching: [
        {
          // The shared catalog only: the network when it answers, the last copy when it doesn't.
          // Account tables (entries, notes, plans, settings, profiles, follows) are never cached (C116).
          urlPattern: ({ url, request }) =>
            request.method === 'GET' &&
            url.hostname.endsWith('.supabase.co') &&
            /^\/rest\/v1\/(events|event_results|weather_hours|weather_days|schedule_snapshots|expected_draws|attendance|team_schedules)(\/|\?|$)/.test(url.pathname),
          handler: 'NetworkFirst',
          options: { cacheName: 'catalog-public', networkTimeoutSeconds: 6, expiration: { maxEntries: 300, maxAgeSeconds: 7 * 86400 } },
        },
        {
          urlPattern: ({ url }) => url.hostname === 'tiles.openfreemap.org',
          handler: 'CacheFirst',
          options: { cacheName: 'map-tiles', expiration: { maxEntries: 400, maxAgeSeconds: 30 * 86400 } },
        },
        {
          urlPattern: ({ url }) => url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com',
          handler: 'StaleWhileRevalidate',
          options: { cacheName: 'fonts', expiration: { maxEntries: 30, maxAgeSeconds: 365 * 86400 } },
        },
      ],
    },
  });
}

export default defineConfig({
  plugins: [react(), appIdentity(), ...offlineShell()],
  worker: { format: 'es' },
});
