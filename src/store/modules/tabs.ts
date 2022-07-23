import { defineStore } from 'pinia';
import { TabPaneProps } from 'element-plus';
import { TabsState } from '../interface';
import { HOME_URL, TABS_BLACK_LIST } from '@/config/config';
import piniaPersistConfig from '@/config/piniaPersist';
import router from '@/routers/index';

export const TabsStore = defineStore({
	id: 'TabsStore',
	state: (): TabsState => ({
		tabsMenuValue: HOME_URL,
		// 默认保留首页tab,且不允许删除
		tabsMenuList: [{ title: '首页', path: HOME_URL, icon: 'home-filled', close: false }],
	}),
	actions: {
		async addTabs(tabItem: Menu.MenuOptions) {
			// 过滤黑名单
			if (TABS_BLACK_LIST.includes(tabItem.path)) {
				return;
			}
			const tabInfo: Menu.MenuOptions = {
				title: tabItem.title,
				icon: tabItem.icon,
				path: tabItem.path,
				close: tabItem.close,
			};
			// 判断列表中是否存在
			if (this.tabsMenuList.every(item => item.path !== tabItem.path)) {
				this.tabsMenuList.push(tabInfo);
			}
			// 重新定位
			this.setTabsMenuValue(tabItem.path);
			router.push(tabItem.path);
		},
		async removeTabs(tabPath: string) {
			let tabsMenuValue = this.tabsMenuValue;
			if (tabsMenuValue === tabPath) {
				this.tabsMenuList.forEach((item, index) => {
					if (item.path !== tabPath) {
						return;
					}
					const nextTab = this.tabsMenuList[index + 1] || this.tabsMenuList[index - 1];
					if (!nextTab) {
						return;
					}
					tabsMenuValue = nextTab.path;
					router.push(nextTab.path);
				});
			}
			this.tabsMenuValue = tabsMenuValue;
			// 过滤需关闭的 tab
			this.tabsMenuList.filter(item => item.path !== tabPath);
		},
		// 改变当前tab项
		async changeTabs(tabItem: TabPaneProps) {
			this.tabsMenuList.forEach(item => {
				if (item.title === tabItem.label) {
					router.push(item.path);
				}
			});
		},
		async setTabsMenuValue(path: string) {
			this.tabsMenuValue = path;
		},
		async setTabsMenuList(list: Menu.MenuOptions[]) {
			this.tabsMenuList = list;
		},
		// 关闭多个 Tab
		async closeMultipleTab(tabsMenuValue?: string) {
			this.tabsMenuList = this.tabsMenuList.filter(item => {
				return item.path === tabsMenuValue || item.path === HOME_URL;
			});
		},
		async goHome() {
			router.push(HOME_URL);
			this.setTabsMenuValue(HOME_URL);
		},
	},
	persist: {
		enabled: true,
		strategies: [piniaPersistConfig('TabState')],
	},
});
