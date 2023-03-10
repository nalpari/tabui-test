import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@/pages', replacement: '/src/pages' },
      { find: '@/util', replacement: '/src/util' },
      { find: '@', replacement: '/src' },
    ],
  },
})
