import { createI18n } from 'vue-i18n';
import zh from './modules/zh';
import en from './modules/en';

const i18n = createI18n({
	locale: 'zh',
	messages: {
		zh,
		en,
	},
	legacy: false,
	globalInjection: true,
});

export default i18n;
