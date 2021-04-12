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
    proxy: {
      '/api': {
        target: 'http://10.40.149.12:5000/',
        changeOrigin: true,
        ws: false
      }
    },
    cors: true
  }
})
