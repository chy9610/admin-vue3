import { computed, onBeforeMount } from 'vue';
import { getLightColor, getDarkColor } from '@/utils/theme/tool';
import { GlobalStore } from '@/store';
import { ElMessage } from 'element-plus';

export const useTheme = () => {
	const globalStore = GlobalStore();
	const themeConfig = computed(() => globalStore.themeConfig);

	// 切换主题色
	const changePrimary = (val: any) => {
		if (!val) {
			val = '#409FF';
			ElMessage({
				type: 'success',
				message: '主题色已重置为 #409FF',
			});
		}
		globalStore.setThemeConfig({ ...themeConfig.value, primary: val });
		document.documentElement.style.setProperty(
			'--el-color-primary-dark-2',
			`${getDarkColor(themeConfig.value.primary, 0.1)}`
		);
		document.documentElement.style.setProperty('--el-color-primary', themeConfig.value.primary);
		// 颜色变浅
		for (let i = 1; i <= 9; i++) {
			document.documentElement.style.setProperty(
				`--el-color-primary-light-${i}`,
				`${getLightColor(themeConfig.value.primary, i / 10)}`
			);
		}
	};

	// 切换暗黑模式
	const switchDark = () => {
		const body = document.documentElement as HTMLElement;
		if (themeConfig.value.isDark) body.setAttribute('class', 'dark');
		else body.setAttribute('class', '');
	};

	// 切换灰色模式与弱色模式（特殊日期所需，类似国家公祭日）
	const changeGreyOrWeak = (value: boolean, type: string) => {
		const body = document.body as HTMLElement;
		if (!value) return body.setAttribute('style', '');
		if (type === 'grey') body.setAttribute('style', 'filter: grayscale(1)');
		if (type === 'weak') body.setAttribute('style', 'filter: invert(80%)');
		let propName = type === 'grey' ? 'isWeak' : 'isGrey';
		globalStore.setThemeConfig({ ...themeConfig.value, [propName]: false });
	};

	onBeforeMount(() => {
		switchDark();
		changePrimary(themeConfig.value.primary);
		if (themeConfig.value.isGrey) changeGreyOrWeak(true, 'grey');
		if (themeConfig.value.isWeak) changeGreyOrWeak(true, 'weak');
	});

	return {
		switchDark,
		changePrimary,
		changeGreyOrWeak,
	};
};
