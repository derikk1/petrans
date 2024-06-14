import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'views.home',
        component: () => import('@/views/Home.vue')
    },
    // {
    //     path: '/bussiness-process',
    //     name: 'views.home',
    //     component: () => import('@/views/Home.vue')
    // },
]

const router =  createRouter({
    history: createWebHistory(),
    routes
})

export default router