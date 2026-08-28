import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import Sitemap from "vite-plugin-sitemap"

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://ikonic303.dev',
      // Serve public/robots.txt verbatim; don't let the plugin overwrite it with its
      // minimal auto-generated robots.txt.
      generateRobotsTxt: false,
      // ikonic303.dev — the technology / growth-systems site. Physical signage and
      // window-film routes live on ikonic303.com and are not part of this sitemap.
      dynamicRoutes: [
        '/',
        '/services',
        '/services/forward-deployed-engineering',
        '/services/ai-automation',
        '/services/crm-sales-systems',
        '/services/digital-marketing',
        '/how-we-work',
        '/about',
        '/contact',
        '/careers',
        '/blogs',
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'gsap-vendor': ['gsap'],
          'ui-vendor': ['lucide-react'],
        },
      },
    },
  },
  server: {
    // proxy not needed when using vercel dev (handles /api internally)
  },
});
