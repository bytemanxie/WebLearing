import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/info',
        name: 'Info',
        component: () => import('../views/info.vue')
    },
    {
        path: '/user/:userId', // :userId 是动态部分
        name: 'User',
        component: () => import('../views/User.vue')
    },
    {
        path: '/:catchAll(.*)', // 捕获所有未匹配的路由
        name: 'NotFound',
        component: () => import('../views/NotFound.vue')
    },
    {
        path: '/dashboard',
        component: () => import('../views/Dashboard.vue'),
        children: [
            {
                path: 'profile', // 注意这里没有斜杠，它是相对路径
                component: () => import('../views/Profile.vue')
            },
            {
                path: 'settings',
                component: () => import('../views/Settings.vue')
            }
        ]
    },
    { path: '/protected', component: () => import('../views/ProtectedComponent.vue'), meta: { requiresAuth: true } },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    // 获取token
    const token = localStorage.getItem('token');

    // 检查这个路由是否需要被保护
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // 需要认证的路由
        if (!token) {
            // 用户未认证，重定向到登录页面
            next('/');
        } else {
            // 用户已认证，允许访问
            next();
        }
    } else {
        // 不需要认证的路由，正常访问
        next();
    }
});

export default router
