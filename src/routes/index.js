import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'views.home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/admin',
        name: 'views.admin',
        component: () => import('@/views/Admin.vue')
    },
    {
        path: '/login',
        name: 'views.login',
        component: () => import('@/views/Login.vue')
    },
]

const router =  createRouter({
    history: createWebHistory(),
    routes
})

export default router
