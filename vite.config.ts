import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        content: path.resolve(__dirname, 'src/app/content.ts'),
        background: path.resolve(__dirname, 'src/app/background.ts')
      },
      output: {
        entryFileNames: '[name].js'
      }
    },
  },
  plugins: [
    react(),
    crx({ manifest })
  ]
})
