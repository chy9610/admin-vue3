import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/routers/constant';

const homeRouter: Array<RouteRecordRaw> = [
	{
		path: '/home',
		component: Layout,
		redirect: '/home/index',
		children: [
			{
				path: '/home/index ',
				name: 'home',
				component: () => import('@/views/home/index.vue'),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: '首页',
					key: 'home',
				},
			},
		],
	},
];

export default homeRouter;
