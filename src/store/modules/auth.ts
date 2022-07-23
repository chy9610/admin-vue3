import { defineStore } from 'pinia';
import { AuthState } from '../interface';

export const AuthStore = defineStore({
	id: 'AuthStore',
	state: (): AuthState => ({
		// 用户权限按钮集合
		authButtons: {},
		// 路由权限集合
		authRouter: [],
	}),
	getters: {
		// 处理权限路由数据，用于方便控制按钮
		authButtonObj: state => {
			return state.authButtons;
		},
		// 后台返回的菜单数据，用于方便控制路由跳转时的权限（一维数组）
		dynamicRouter: state => {
			return state.authRouter;
		},
	},
	actions: {
		async setAuthButtons(authButtonList: { [key: string]: any }) {
			this.authButtons = authButtonList;
		},
		async setAuthRouter(dynamicRouter: string[]) {
			this.authRouter = dynamicRouter;
		},
	},
});
