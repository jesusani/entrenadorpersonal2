import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/entrenadorpersonal1/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    },
    chunkSizeWarningLimit: 1000, 
    minify: 'esbuild',
})
