import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/clinique/', // ✅ Hardcoded for GitHub Pages
})

