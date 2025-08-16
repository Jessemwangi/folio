import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
    resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Match your components.json aliases exactly
      '@/components': path.resolve(__dirname, './src/components'),
      '@/Utils': path.resolve(__dirname, './src/Utils'),
      '@/Interface': path.resolve(__dirname, './src/Interface'),
        '@/Data': path.resolve(__dirname, './src/Data'),
        '@/Services': path.resolve(__dirname, './src/Services'),      

    },
  },
})