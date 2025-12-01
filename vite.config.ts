import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // IMPORTANT: Make sure `alias` matches `paths` in `tsconfig.json`.
      // Alias allows you to use `@/components` etc.
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
  },
});
