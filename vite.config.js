import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  logLevel: 'error',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),      // <-- main src alias
      'components': path.resolve(__dirname, './src/components'),
      'utils': path.resolve(__dirname, './src/lib/utils'),
      'ui': path.resolve(__dirname, './src/components/ui'),
      'lib': path.resolve(__dirname, './src/lib'),
      'hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
  server: {
    port: 5173,
  },
});