import { RouteRecordRaw } from 'vue-router';

const errorRouter: Array<RouteRecordRaw> = [
	{
		path: '/403',
		name: 'name',
		component: () => import('@/components/ErrorMessage/403.vue'),
		meta: {
			requiresAuth: true,
			title: '403页面',
			key: '403',
		},
	},
	{
		path: '/404',
		name: 'name',
		component: () => import('@/components/ErrorMessage/404.vue'),
		meta: {
			requiresAuth: false,
			title: '404页面',
			key: '404',
		},
	},
	{
		path: '/500',
		name: 'name',
		component: () => import('@/components/ErrorMessage/500.vue'),
		meta: {
			requiresAuth: false,
			title: '500页面',
			key: '500',
		},
	},
];

export default errorRouter;
