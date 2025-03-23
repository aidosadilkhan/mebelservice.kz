import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/mebelservice.kz/',  // Путь до вашего репозитория
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
