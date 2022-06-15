import { createApp } from 'vue'

// 状态管理器
import { createPinia } from 'pinia';
const pinia = createPinia()

import i18n from '@/locales/index';

import router from "./router/index";

import App from './App.vue'
createApp(App).use(pinia).use(router).use(i18n).mount('#app')
