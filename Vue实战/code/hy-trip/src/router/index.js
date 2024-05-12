import {createWebHashHistory, createRouter} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/Home/home.vue')
        },
        {
            path: '/favor',
            name: 'favor',
            component: () => import('@/views/Favor/favor.vue')
        },
        {
            path:'/message',
            name:'message',
            component:()=>import('@/views/Message/message.vue')
        },
        {
            path: '/order',
            name: 'order',
            component: () => import('@/views/Order/order.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('@/views/Profile/profile.vue')
        },
        {
            path: '/city',
            name: 'city',
            component: () => import('@/views/city/city.vue'),
            meta:{
                hideTabBar: true
            }
        }
    ]
})

export default router