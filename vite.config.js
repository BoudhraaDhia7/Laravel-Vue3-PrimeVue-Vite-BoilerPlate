// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';


export default defineConfig({
  plugins: [
    vue(),
    laravel({
      input: ['resources/js/app.ts'],
      refresh: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './resources/js'), 
    },
  },
  server: {
    strictPort: true,
    proxy: {
      '/api': 'http://localhost:8000',  
    }
  },
  build: {
    outDir: 'public/build',
    rollupOptions: {
      input: resolve(__dirname, 'resources/js/app.ts'),  
    }
  }
});
