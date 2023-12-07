import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/entrenadorpersonal2/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    },
    chunkSizeWarningLimit: 1000, 
    minify: 'esbuild',
})
