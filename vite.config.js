import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Custom plugin to ensure multi-page routes serve their corresponding HTML in dev server
const multiPageDevPlugin = () => ({
  name: 'multi-page-dev-plugin',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const pathname = req.url ? req.url.split('?')[0] : '';
      const query = req.url.includes('?') ? '?' + req.url.split('?')[1] : '';

      if (pathname === '/contact' || pathname === '/contact/') {
        req.url = '/contact/index.html' + query;
      } else if (pathname === '/industry' || pathname === '/industry/') {
        req.url = '/industry/index.html' + query;
      } else if (pathname === '/about' || pathname === '/about/') {
        req.url = '/about/index.html' + query;
      } else if (pathname === '/services' || pathname === '/services/') {
        req.url = '/services/index.html' + query;
      }
      next();
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), multiPageDevPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        industry: resolve(__dirname, 'industry/index.html'),
        about: resolve(__dirname, 'about/index.html'),
        services: resolve(__dirname, 'services/index.html'),
      },
    },
  },
})
