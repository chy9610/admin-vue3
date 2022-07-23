import { defineStore } from 'pinia';
import { MenuState } from '../interface';

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
});
