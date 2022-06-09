import { createApp } from 'vue'

// 状态管理器
import { createPinia } from 'pinia';
const pinia = createPinia()

import App from './App.vue'
createApp(App).use(pinia).mount('#app')
