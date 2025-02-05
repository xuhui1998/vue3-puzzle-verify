import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "lib", //输出文件名称
    // 库编译模式配置
    lib: {
      entry: path.resolve(__dirname, "./src/components/index.ts"), // 指定组件编译入口文件
      name: "Vue3PuzzleVerify",
      cssFileName: "style",
      fileName: (format) => `vue3-puzzle-verify.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些
      // 你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        // 提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  }
})
