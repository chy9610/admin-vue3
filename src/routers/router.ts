import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router';

// 导入所有 Router
const metaRouters = import.meta.globEager('./modules/*.ts');

// 所有路由列表
export const routeArray: RouteRecordRaw[] = [];
Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item]).forEach((key: any) => {
		routeArray.push(...metaRouters[item][key]);
	});
});

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: { name: 'login' },
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login/index.vue'),
		meta: {
			// 表明该路由是否需要登录验证, 在进行全局拦截时，我们将通过该属性判断路由的跳转;
			requiresAuth: false,
			title: '登录页',
			key: 'login',
		},
	},
	...routeArray,
	{
		// 找不到路由重定向到404页面
		// 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
		path: '/:pathMath(.*)',
		redirect: { name: '404' },
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	// 严格模式
	strict: false,
	// 切换路由时，滚动到顶部
	scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
