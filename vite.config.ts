const path = require('path');
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { useI18n } from 'vue-i18n';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  resolve: {
    // 配置别名
    alias: [{
      find: '@',
      replacement: path.resolve(__dirname, 'src')
    }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use 'src/assets/css/reset.scss' as *;` // 引入全局 scss 样式变量文件，文件路径不能使用 @
      }
    }
  },
  plugins: [
    vue(),
    useI18n({
      include: path.resolve(__dirname, './src/locales/**')
    }),
    ElementPlus({ useSource: true }), // 按需引入组件时，自定义主题
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] })
  ],
  server: {
    proxy: {
      // // 字符串简写写法
      // '/foo': 'http://localhost:4567',
      // // 选项写法
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // },
      // // 正则表达式写法
      // '^/fallback/.*': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/fallback/, '')
      // }
    }
  }
})