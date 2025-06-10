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
    // Используем terser для минификации
    minify: 'terser',
    terserOptions: {
      compress: {
        // Удаляем console.log в production
        drop_console: true,
        // Удаляем debugger в production
        drop_debugger: true,
        // Удаляем неиспользуемый код
        dead_code: true,
        // Удаляем неиспользуемые функции
        unused: true,
      },
    },
    rollupOptions: {
      output: {
        // Разделяем код на чанки для оптимизации загрузки
        manualChunks: {
          // Основные React библиотеки
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
        },
        // Оптимизация размера чанков
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },
})
