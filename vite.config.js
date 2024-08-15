import { defineConfig } from 'vite'
import { dependencies } from './package.json'
import react from '@vitejs/plugin-react'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

function renderChunks(deps) {
  let chunks = {}
  Object.keys(deps).forEach((key) => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) return
    chunks[key] = [key]
  })
  return chunks
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteMinifyPlugin({})],
  base: '/cargo-table/',
  server: {
    port: 3006,
  },
  build: {
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
          ...renderChunks(dependencies),
        },
      },
    },
  },
  define: {
    "process.env.IS_PREACT": JSON.stringify("true"),
  },
})
