import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products.html'),
        process: resolve(__dirname, 'process.html'),
        customers: resolve(__dirname, 'customers.html'),
        contact: resolve(__dirname, 'contact.html'),
        enMain: resolve(__dirname, 'en/index.html')
      }
    }
  }
});
