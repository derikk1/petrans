import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Dashboard from '@/views/admin/Dashboard.vue';
import Login from '@/views/auth/Login.vue';
import CardChart from '@/views/admin/CardChart.vue';
import SettingMenu from '@/views/admin/Master akun/SettingMenu.vue';
import HomeCard from '@/views/admin/Master akun/Home.vue';
import OurService from '@/views/admin/Master akun/OurService.vue';
import PartnerBusiness from '@/views/admin/Master akun/PartnerBusiness.vue';
import ContactUs from '@/views/admin/Master akun/ContactUs.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Dashboard,
        meta: { requiresAuth: true } // Tambahkan meta untuk menandai rute yang memerlukan autentikasi
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/admin/card-chart',
        name: 'CardChart',
        component: CardChart,
        meta: { requiresAuth: true } // Jika diperlukan autentikasi untuk rute ini juga
    },
    {
        path: '/admin/master-akun/setting-menu',
        name: 'SettingMenu',
        component: SettingMenu,
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/master-website/home',
        name: 'HomeCard',
        component: HomeCard,
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/master-website/our-service',
        name: 'OurService',
        component: OurService,
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/master-website/partner-business',
        name: 'PartnerBusiness',
        component: PartnerBusiness,
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/master-website/contact-us',
        name: 'ContactUs',
        component: ContactUs,
        meta: { requiresAuth: true }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Guard untuk memeriksa autentikasi sebelum navigasi ke rute yang memerlukan auth
router.beforeEach((to, from, next) => {
    // Periksa jika rute memerlukan autentikasi (gunakan meta)
    if (to.meta.requiresAuth && !localStorage.getItem('token')) {
        next('/login'); // Redirect ke halaman login jika tidak ada token
    } else {
        next(); // Lanjutkan navigasi ke rute yang dituju
    }
});

export default router;
