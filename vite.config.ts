import { ConfigEnv, defineConfig, loadEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJSX from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import ElementPlus from "unplugin-element-plus/vite";
import { wrapperEnv } from "./src/utils/getEnv";

import path from "path";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  const viteEnv = wrapperEnv(env);
  return {
    envDir: "./viteEnv", // 加载环境配置指定目录，绝对路径及相对路径都可以
    envPrefix: ["VITE", "VENUS"], //这个时候，我们可以将VITE_、VENUS_开头的变量统统透传给客户端
    plugins: [
      vue(),
      vueJSX(),
      ElementPlus({ useSource: true }), // 按需引入组件时，自定义主题
      AutoImport({ resolvers: [ElementPlusResolver()] }),
      Components({ resolvers: [ElementPlusResolver()] }),
    ], // 插件
    resolve: {
      // 配置别名
      alias: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "src"),
        },
        {
          find: "@assets",
          replacement: path.resolve(__dirname, "src/assets"),
        },
        {
          find: "@views",
          replacement: path.resolve(__dirname, "src/views"),
        },
        {
          find: "@components",
          replacement: path.resolve(__dirname, "src/components"),
        },
        {
          find: "@store",
          replacement: path.resolve(__dirname, "src/store"),
        },
        {
          find: "@utils",
          replacement: path.resolve(__dirname, "src/utils"),
        },
      ],
    },
    build: {
      assetsDir: "assets", //指定静态资源存放路径
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use 'src/assets/css/reset.scss' as *;`, // 引入全局 scss 样式变量文件，文件路径不能使用 @
        },
      },
    },
    server: {
      host: "0.0.0.0", // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      cors: true,
      // https: false,
      // 代理跨域（mock 不需要配置，这里只是个事列）
      proxy: {
        "/api": {
          // target: "https://www.fastmock.site/mock/f81e8333c1a9276214bcdbc170d9e0a0", // fastmock
          target: "https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e", // easymock
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
