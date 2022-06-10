import { createApp } from 'vue'

// 状态管理器
import { createPinia } from 'pinia';
const pinia = createPinia()

import router from "./router/index";

import App from './App.vue'
createApp(App).use(pinia).use(router).mount('#app')
