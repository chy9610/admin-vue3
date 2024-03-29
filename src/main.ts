import { createApp } from 'vue';
import App from './App.vue';
// reset style sheet
import '@/styles/reset.scss';
// CSS common style sheet
import '@/styles/common.scss';
// iconfont css
import '@/assets/iconfont/iconfont.scss';
// element plus
import ElementPlus from 'element-plus';
// element plus Icons
import * as Icons from '@element-plus/icons-vue';
// element css
import 'element-plus/dist/index.css';
// element dark(内置暗黑模式)
import 'element-plus/theme-chalk/dark/css-vars.css';
// custom element dark(自定义暗黑模式)
import '@/styles/element-dark.scss';
// custom element css
import '@/styles/element.scss';
// custom directives
import directives from '@/directives/index';
// Vue Router
import router from './routers/index';
// Vue I18n
import I18n from '@/language/index';
// pinia store
import pinia from '@/store';

const app = createApp(App);

// 全局注册element Icons组件
Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons]);
});

app.use(router).use(I18n).use(pinia).use(directives).use(ElementPlus).mount('#app');
