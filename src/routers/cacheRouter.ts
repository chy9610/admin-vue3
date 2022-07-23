import { RouteRecordName, RouteRecordRaw } from 'vue-router';
import { routeArray } from '@/routers/router';

let cacheRouter: any[] = [];
/**
 * @description 使用递归，过滤需要缓存的路由
 * @param {Array} _route 所有路由列表
 * @param {Array} _cahe  缓存的路由表
 */
const filterKeepAlive = (_route: RouteRecordRaw[], _cahe: RouteRecordName[]) => {
	_route.forEach(item => {
		// 是否缓存
		item.meta?.keepAlive && item.name && _cahe.push(item.name);
		// 如果存在子集，则继续递归
		item.children && item.children.length !== 0 && filterKeepAlive(item.children, _cahe);
	});
};

filterKeepAlive(routeArray, cacheRouter);

export default cacheRouter;
