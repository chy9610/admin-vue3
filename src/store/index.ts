import { createPinia, defineStore } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';
import piniaPersistConfig from '@/config/piniaPersist';
import { GlobalState, UserInfoProp, ThemeConfigProp } from './interface';

export const GlobalStore = defineStore({
	id: 'GlobalState',
	state: (): GlobalState => {
		return {
			token: '',
			userInfo: {
				name: '',
			},
			// element组件大小
			assemblySize: 'default',
			language: 'zh',
			themeConfig: {
				// 默认 primary 主题颜色
				primary: '#409EFF',
				// 深色模式
				isDark: false,
				// 灰色模式
				isGrey: false,
				// 色弱模式
				isWeak: false,
			},
		};
	},
	actions: {
		setToken(token: string) {
			this.token = token;
		},
		setUserInfo(userInfo: UserInfoProp) {
			Object.assign(this.userInfo, userInfo);
		},
		setAssemblySize(size: string) {
			this.assemblySize = size;
		},
		setLanguage(language: string) {
			this.language = language;
		},
		setThemeConfig(themeConfig: ThemeConfigProp) {
			this.themeConfig = themeConfig;
		},
	},
	persist: {
		enabled: true,
		strategies: [piniaPersistConfig('GlobalState')],
	},
});

// pinia 持久化
const pinia = createPinia();
pinia.use(piniaPersist);

export default pinia;
