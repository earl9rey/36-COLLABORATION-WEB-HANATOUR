import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '@pages', replacement: resolve(__dirname, 'src/pages') },
      { find: '@shared', replacement: resolve(__dirname, 'src/shared') },
      { find: '@routes', replacement: resolve(__dirname, 'src/routes') },
    ],
  },
});
