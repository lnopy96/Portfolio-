import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// For GitHub Pages, add: base: '/portfolio/'
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
