import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products.html'),
        process: resolve(__dirname, 'process.html'),
        customers: resolve(__dirname, 'customers.html'),
        contact: resolve(__dirname, 'contact.html'),
        enMain: resolve(__dirname, 'en/index.html')
      },
      output: {
        manualChunks: {
          vendor: ['vue'],
        },
      },
    },
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 500,
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 4173,
  },
});
