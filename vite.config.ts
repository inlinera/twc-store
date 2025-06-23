import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  // Настройка алиасов для импортов
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Подключаем плагины
  plugins: [react()],
  // Настройки сборки
  build: {
    // Разделяем все библиотеки на отдельные чанки
    rollupOptions: {
      output: {
        // Объединяем некоторые библиотеки в общие чанки для оптимизации
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-mobx': ['mobx', 'mobx-react-lite'],
          'vendor-react-hook-form': ['react-hook-form'],
          'vendor-react-swipeable': ['react-swipeable'],
          'vendor-axios': ['axios'],
          'vendor-js-cookie': ['js-cookie'],
        },
        // Оптимизация размера чанков
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },
})
