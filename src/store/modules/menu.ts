import { defineStore } from 'pinia';
import { MenuState } from '../interface';
import piniaPersistConfig from '@/config/piniaPersist';

export const MenuStore = defineStore({
	id: 'MenuStore',
	state: (): MenuState => ({
		isCollapse: false,
		menuList: [],
	}),
	actions: {
		async setMenuList(menuList: Menu.MenuOptions[]) {
			this.menuList = menuList;
		},
		async setCollapse() {
			this.isCollapse = !this.isCollapse;
		},
	},
	persist: {
		enabled: true,
		strategies: [piniaPersistConfig('MenuStore')],
	},
});
