import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

// 同步组装
const constantFiles = require.context('./constantModules', true, /\.ts$/)
let constantModules: Array<RouteRecordRaw> = []
constantFiles.keys().forEach((key: string) => {
    if (key === './index.ts') return
    constantModules = constantModules.concat(constantFiles(key).default)
})

// 异步组装
const asyncFiles = require.context('./permissionModules', true, /\.ts$/)
let permissionModules: Array<RouteRecordRaw> = [];
asyncFiles.keys().forEach((key: string) => {
    if (key === './index.ts') return
    permissionModules = permissionModules.concat(constantFiles(key).default)
})

export const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/redirect', // 重定向中转页
        component: Layout,
        meta: { hidden: true },
        children: [
            {
                path: '/redirect/:path(.*)',
                component: () => import('@/views/redirect/Index.vue')
            }
        ]
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            component: () => import('@/views/dashboard/index.vue'),
            name: 'Dashboard',
            meta: {
                title: 'dashboard',
                icon: '#dashboard',
                affix: true
            }
        }]
    },
    ...constantModules
]

// 异步组装路由
export const asyncRoutes: Array<RouteRecordRaw> = [...permissionModules ]

// 路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes
})

export default router;