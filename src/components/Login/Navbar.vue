<template>
    <header class="bg-secondary p-4">
        <div class="flex justify-between items-center">
            <a href="#">
                <img class="w-[97px] h-[67px]" src="@/assets/img/logo_petrans_1.png" alt="logo">
            </a>

            <button class="block md:hidden text-white" @click="toggleMenu">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>

            <ul :class="['flex items-center gap-4', { 'hidden': !menuOpen, 'flex-col': menuOpen, 'md:flex': !menuOpen }]">
                <li v-for="(menu, index) in menus" :key="menu.id" class="md:my-0 my-2">
                    <a @click="setActiveMenu(menu.id)" :href="menu.link" :class="{'font-bold text-black': menu.id === activeMenu}" class="uppercase cursor-pointer font-montserrat-regular text-xs text-[#000000]">{{ menu.name }}</a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'

const menus = ref([
    { id: '1', name: 'Home', link: '#' },
    { id: '2', name: 'Business Process', link: '#business-process' },
    { id: '3', name: 'Our Service', link: '#our-service' },
    { id: '4', name: 'Partners Business', link: '#partner-business' },
    { id: '5', name: 'Contact Us', link: '#contact-us' },
    { id: '6', name: 'Track Shipment', link: '#track-shipment' },
])

const activeMenu = ref('1')

const setActiveMenu = (id) => {
    activeMenu.value = id
}

const menuOpen = ref(false)

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
.text-black {
    color: #000;
}
.font-bold {
    font-weight: bold;
}

@media (max-width: 768px) {
    .navbar-menu {
        display: none;
    }
    .navbar-menu.is-active {
        display: flex;
        flex-direction: column;
    }
}
</style>
