import router from '@/routers/router';
import NProgress from '@/config/nprogress';
import { HOME_URL } from '@/config/config';
import { GlobalStore } from '@/store';
import { AuthStore } from '@/store/modules/auth';
import { AxiosCanceler } from '@/api/helper/axiosCancel';

const axiosCanceler = new AxiosCanceler();

// 路由器前置拦截 before
router.beforeEach((to, _from, next) => {
	NProgress.start();
	// 路由跳转前清除所有请求
	axiosCanceler.removeAllPending();
	const isNeedPermission = to.matched.some(record => record.meta.requiresAuth);
	// 判断当前路由是否需要访问权限
	if (!isNeedPermission) {
		next();
		return;
	}

	//   判断是否有Token
	const globalStore = GlobalStore();
	if (!globalStore.token) {
		next({
			path: '/login',
		});
		NProgress.done();
		return;
	}

	const authStore = AuthStore();
	// 动态路由
	const dynamicRouter = authStore.dynamicRouter;
	// 静态路由
	const staticRouter = [HOME_URL, '/403'];
	// 合并路由
	const routerList = dynamicRouter.concat(staticRouter);

	// 如果访问的地址没有在路由表中，则重定向 403 页面
	if (routerList.indexOf(to.path) >= 0) {
		next();
		return;
	}
	next({
		path: '/403',
	});
});

// 路由器后置拦截 after
router.afterEach(() => {
	NProgress.done();
});

export default router;
