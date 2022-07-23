import { createApp } from 'vue';

// 状态管理器
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';
const pinia = createPinia();
pinia.use(piniaPersist);

import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import router from './routers/index';

import App from './App.vue';

// 引入公共样式文件
import '@/styles/reset.scss';
import '@/styles/element.scss';
import '@/styles/element-dark.scss';
import '@/styles/common.scss';
import '@/assets/iconfont/iconfont.scss';

// main.ts是我这个项目的入口文件，相关代码会在客户端执行，在这里打印一下变量
// vite并非将你写在配置文件中的所有变量（或者说参数）都会透传给客户端，在我们没有特殊配置的时候，它只会识别VITE_开头的参数，我们可以在入口文件中打印一下

/**
 * import.meta.env.MODE: {string}       应用运行模式
 * import.meta.env.BASE_URL: {string}   部署应用时的基本 URL，它由 base 配置决定。
 * import.meta.env.PROD: {boolean}      应用是否运行在生产环境
 * import.meta.env.DEV: {boolean}       应用是否运行在开发环境
 */

// 那么我们有没有什么办法能指定读取到哪些参数呢 ？？
// VITE_ 开头的规则是否能够修改呢 ？？
// 实际上是可以修改的，我们需要在 vite.config.ts 文件中加入一个参数 envPrefix:
// envPrefix: ["VITE", "VENUS"], //这个时候，我们可以将VITE_、VENUS_开头的变量统统透传给客户端

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}
app.use(pinia).use(router).mount('#app');
