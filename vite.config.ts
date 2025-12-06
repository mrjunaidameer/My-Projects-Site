import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,      // Force port 5173
    strictPort: true, // Don't allow it to switch if 5173 is busy
  }
})