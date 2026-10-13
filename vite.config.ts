import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { seo } from './seo.plugin.ts'

// https://vite.dev/config/
// For GitHub Pages, add: base: '/Portfolio-/'
export default defineConfig({
  plugins: [react(), tailwindcss(), seo()],
})
