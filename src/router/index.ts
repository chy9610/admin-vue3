import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

// 常态页面
const constantFiles = import.meta.globEager('./constantModules/*.ts');
let constantModules: Array<RouteRecordRaw> = []
for (const path in constantFiles) {
    constantModules = constantModules.concat(constantFiles[path].default);
}

// 权限页面
const permissionFiles = import.meta.globEager('./permissionModules/*.ts');
let permissionModules: Array<RouteRecordRaw> = []
for (const path in permissionFiles) {
    permissionModules = constantModules.concat(permissionFiles[path].default);
}


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
];

// 访问权限路由
export const asyncRoutes: Array<RouteRecordRaw> = [...permissionModules]

// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes
})

// 重置路由
export function resetRouter() {
    const newRouter = router;
    (router as any).matcher = (newRouter as any).matcher
}

export default router;