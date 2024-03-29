import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/routers/constant';

const formRouter: Array<RouteRecordRaw> = [
	{
		path: '/form',
		component: Layout,
		redirect: '/form/proForm',
		meta: {
			title: '表单 Form',
		},
		children: [
			{
				path: '/form/proForm',
				name: 'proForm',
				component: () => import('@/views/form/proForm/index.vue'),
				meta: {
					keepAlive: true,
					requireAuth: true,
					title: '超级 Form',
					key: 'proForm',
				},
			},
			{
				path: '/form/basicForm',
				name: 'basicForm',
				component: () => import('@/views/form/basicForm/index.vue'),
				meta: {
					keepAlive: true,
					requireAuth: true,
					title: '基础 Form',
					key: 'basicForm',
				},
			},
			{
				path: '/form/validateForm',
				name: 'validateForm',
				component: () => import('@/views/form/validateForm/index.vue'),
				meta: {
					keepAlive: true,
					requireAuth: true,
					title: '校验 Form',
					key: 'validateForm',
				},
			},
			{
				path: '/form/dynamicForm',
				name: 'dynamicForm',
				component: () => import('@/views/form/dynamicForm/index.vue'),
				meta: {
					keepAlive: true,
					requireAuth: true,
					title: '动态 Form',
					key: 'dynamicForm',
				},
			},
		],
	},
];

export default formRouter;
