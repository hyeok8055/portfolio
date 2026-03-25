import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') ||
                id.includes('react/') ||
                id.includes('react-router') ||
                id.includes('scheduler')) {
              return 'vendor-react';
            }
            return 'vendor-lib';
          }
        },
      },
    },
  },
})
