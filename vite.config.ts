import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // IMPORTANTE: cambia 'portafolio-smelendez' si tu repo tiene otro nombre
  base: '/portafolio-smelendez/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/app'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
