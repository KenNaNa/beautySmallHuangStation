import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 4000,
    open: true,
    host: 'localhost',
    proxy: {
      '/api': {
        target: '/api',
        changeOrigin: true,
        ws: false,
        rewrite: path => path.replace(/^\/api/, '')
      }
    },
    cors: true
  }
})
