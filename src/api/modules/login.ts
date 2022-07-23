import { Login } from '@/api/interface/index';
import { PORT1 } from '@/api/config/servicePort';

import http from '@/api';

/**
 * @name 登录模块儿
 */
// 登录
export const loginApi = (params: Login.ReqLoginForm) => {
	return http.post<Login.ResLogin>(PORT1 + `/login`, params);
};
// 获取菜单列表
export const getMenuList = () => {
	return http.get<Menu.MenuOptions[]>(PORT1 + `/menu/list`);
};
// 获取权限按钮列表
export const getAuthButtons = () => {
	return http.get<Login.ResAuthButtons>(PORT1 + `/auth/buttons`);
};
