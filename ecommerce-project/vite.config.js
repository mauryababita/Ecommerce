import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.ViTE_BASE_PATH || "/Ecommerce",
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      },
      '/images': {
        target: 'http://localhost:3000'
      }
    }
  }
})