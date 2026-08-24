import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/build/',
  publicDir: 'static',
  build: {
    outDir: 'public/build',
    emptyOutDir: true,
  },
  plugins: [react()],
})
