import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/clinique/', // ✅ Hardcoded for GitHub Pages
  plugins: [react()],
})

