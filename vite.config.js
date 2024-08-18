import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  devServer: {
    'https': true
  },
  publicPath: process.env.PUBLIC_PATH || '/',
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: '.data/**/*',
          dest: 'dist/.data'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "Public": fileURLToPath(new URL('./public', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "Components": fileURLToPath(new URL('./src/components', import.meta.url)),
      "Assets": fileURLToPath(new URL('./src/assets', import.meta.url)),
      "Images": fileURLToPath(new URL('./src/assets/images', import.meta.url)),
      "Pages": fileURLToPath(new URL('./src/pages', import.meta.url)),
      "Data": fileURLToPath(new URL('./src/data', import.meta.url)),
      "Router": fileURLToPath(new URL('./src/router', import.meta.url)),
      "Helpers": fileURLToPath(new URL('./src/helpers', import.meta.url)),
    }
  }
})
