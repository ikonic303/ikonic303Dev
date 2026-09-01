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
      // ikonic303.dev — the forward deployed engineering practice. Physical signage and
      // window-film routes live on ikonic303.com and are not part of this sitemap.
      // Keep in sync with src/content/index.ts (PAGE_ROUTES) and the prerender script.
      dynamicRoutes: [
        '/',
        '/forward-deployed-engineering',
        '/forward-deployed-engineer-vs-consultant',
        '/forward-deployed-engineer-vs-hiring',
        '/fractional-forward-deployed-engineer',
        '/how-we-work',
        '/what-it-costs',
        '/who-we-work-with',
        '/industries/construction-and-trades',
        '/industries/distribution-and-wholesale',
        '/industries/field-service',
        '/industries/professional-services',
        '/services',
        '/services/ai-agents-and-automation',
        '/services/crm-and-sales-systems',
        '/services/internal-tools-and-dashboards',
        '/services/marketing-systems',
        '/about',
        '/contact',
        '/guides',
        '/guides/cost-of-a-manual-workflow',
        '/guides/which-workflow-to-automate-first',
        '/guides/you-cannot-automate-a-mess',
        '/guides/agency-vs-consultant-vs-fde',
        '/guides/twelve-questions-before-you-sign',
        '/guides/who-owns-the-system',
        '/guides/build-vs-buy-internal-tools',
        '/guides/what-ten-weeks-looks-like',
        '/guides/why-ai-pilots-die',
        '/guides/ai-agents-that-do-work',
        '/guides/measuring-automation-roi',
        '/guides/speed-to-quote',
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
