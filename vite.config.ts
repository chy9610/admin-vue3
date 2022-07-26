import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { wrapperEnv } from './src/utils/getEnv';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import vueJSX from '@vitejs/plugin-vue-jsx';
import importToCDN from 'vite-plugin-cdn-import';
// import AutoImport from 'unplugin-auto-import/vite';
// import Components from 'unplugin-vue-components/vite';
// import ElementPlus from 'unplugin-element-plus/vite';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	const env = loadEnv(mode, process.cwd());
	const viteEnv = wrapperEnv(env);
	return {
		envDir: './viteEnv', // 加载环境配置指定目录，绝对路径及相对路径都可以
		envPrefix: ['VITE', 'VENUS'], //这个时候，我们可以将VITE_、VENUS_开头的变量统统透传给客户端
		plugins: [
			vue(),
			createHtmlPlugin({
				inject: {
					data: {
						title: viteEnv.VITE_GLOB_APP_TITLE,
					},
				},
			}),
			// * vite 可以使用 jsx/tsx 语法
			vueJSX(),
			// * name 可以写在 script 标签上
			VueSetupExtend(),
			// 按需引入组件时，自定义主题
			// ElementPlus({ useSource: true }),
			// AutoImport({ resolvers: [ElementPlusResolver()] }),
			// Components({ resolvers: [ElementPlusResolver()] }),
			// * cdn 引入（vue、element-plus）
			importToCDN({
				modules: [
					// vue按需引入会导致依赖vue的插件出现问题(列如:pinia/vuex)
					// {
					// 	name: "vue",
					// 	var: "Vue",
					// 	path: "https://unpkg.com/vue@next"
					// },
					// 使用cdn引入element-plus时,开发环境还是需要在main.js中引入element-plus,可以不用引入css
					// {
					// 	name: "element-plus",
					// 	var: "ElementPlus",
					// 	path: "https://unpkg.com/element-plus",
					// 	css: "https://unpkg.com/element-plus/dist/index.css"
					// }
				],
			}),
			// * 是否生成包预览
			viteEnv.VITE_REPORT && visualizer(),
			// * gzip compress
			viteEnv.VITE_BUILD_GZIP &&
				viteCompression({
					verbose: true,
					disable: false,
					threshold: 10240,
					algorithm: 'gzip',
					ext: '.gz',
				}),
		], // 插件
		esbuild: {
			pure: viteEnv.VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : [],
		},
		resolve: {
			// 文件路径映射
			alias: {
				'@': resolve(__dirname, 'src'),
				'@views': resolve(__dirname, 'src/views'),
				'@utils': resolve(__dirname, 'src/utils'),
				'@store': resolve(__dirname, 'src/store'),
				'@assets': resolve(__dirname, 'src/assets'),
				'@components': resolve(__dirname, 'src/components'),
				'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
			},
		},
		build: {
			outDir: 'dist', // 指定打包后的资源路径
			assetsDir: 'assets', //指定静态资源存放路径
			minify: 'esbuild', //  esbuild 打包更快，但是不能去除 console.log
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use 'src/styles/var.scss' as *;`, // 引入全局 scss 样式变量文件，文件路径不能使用 @
				},
			},
		},
		server: {
			host: '0.0.0.0', // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
			port: viteEnv.VITE_PORT,
			open: viteEnv.VITE_OPEN,
			cors: true,
			// https: false,
			// 代理跨域（mock 不需要配置，这里只是个事列）
			proxy: {
				'/api': {
					// target: "https://www.fastmock.site/mock/f81e8333c1a9276214bcdbc170d9e0a0", // fastmock
					target: 'https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e', // easymock
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, ''),
				},
			},
		},
	};
});
