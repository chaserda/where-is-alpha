import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [svelte()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('globe.gl') || id.includes('node_modules/three')) {
            return 'globe-vendor';
          }
        }
      }
    }
  }
})
