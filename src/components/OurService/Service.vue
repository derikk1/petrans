<template>
    <Modal @toggleModal="toggleModal" :detailData="modalProps" v-if="isModalOpen"/>

    <div class="w-full flex flex-col items-center">
        <div class="our-service mb-6">
            <h3 class="text-[#00000] text-3xl font-montserrat-bold font-bold">OUR SERVICE</h3>
        </div>

        <div class="mx-auto">
            <div class="grid grid-cols-2 gap-12">
                <div @click="toggleModal(
                    '../../assets/img/warehouse.svg', 'Warehouse and Distribution', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel sem leo. Pellentesque risus nisi, tempus ac urna quis, condimentum rhoncus sapien. Suspendisse condimentum porta volutpat. Duis mattis nec ligula et facilisis. Donec non congue elit. Nullam purus purus, lobortis gravida luctus at, lobortis consequat mi. Pellentesque consequat sem sem, eu porttitor metus tristique ut. Donec aliquam eget neque a convallis. Nunc tristique rhoncus velit, tincidunt aliquam lorem mollis ut. Duis venenatis justo eget odio vestibulum, id blandit lorem malesuada. Proin ut malesuada metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec scelerisque felis et enim viverra, vitae pretium dolor scelerisque. Pellentesque gravida efficitur ornare.')" 
                class="cursor-pointer flex flex-col items-center">
                    <img class="mb-6" src="../../assets/img/warehouse.svg" alt="image-1">
                    <label class="text-[#00000] text-lg font-montserrat-bold font-bold">Warehouse and Distribution</label>
                </div>
                <div @click="toggleModal(
                    '../../assets/img/customs.svg', 'Customs Brokerage', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel sem leo. Pellentesque risus nisi, tempus ac urna quis, condimentum rhoncus sapien. Suspendisse condimentum porta volutpat. Duis mattis nec ligula et facilisis. Donec non congue elit. Nullam purus purus, lobortis gravida luctus at, lobortis consequat mi. Pellentesque consequat sem sem, eu porttitor metus tristique ut. Donec aliquam eget neque a convallis. Nunc tristique rhoncus velit, tincidunt aliquam lorem mollis ut. Duis venenatis justo eget odio vestibulum, id blandit lorem malesuada. Proin ut malesuada metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec scelerisque felis et enim viverra, vitae pretium dolor scelerisque. Pellentesque gravida efficitur ornare.')" 
                class="cursor-pointer flex flex-col items-center">
                    <img class="mb-6" src="../../assets/img/customs.svg" alt="image-2">
                    <label class="text-[#00000] text-lg font-montserrat-bold font-bold">Customs Brokerage</label>
                </div>
                <div @click="toggleModal(
                    '../../assets/img/air freight.svg', 'Air Freight', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel sem leo. Pellentesque risus nisi, tempus ac urna quis, condimentum rhoncus sapien. Suspendisse condimentum porta volutpat. Duis mattis nec ligula et facilisis. Donec non congue elit. Nullam purus purus, lobortis gravida luctus at, lobortis consequat mi. Pellentesque consequat sem sem, eu porttitor metus tristique ut. Donec aliquam eget neque a convallis. Nunc tristique rhoncus velit, tincidunt aliquam lorem mollis ut. Duis venenatis justo eget odio vestibulum, id blandit lorem malesuada. Proin ut malesuada metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec scelerisque felis et enim viverra, vitae pretium dolor scelerisque. Pellentesque gravida efficitur ornare.')" 
                class="cursor-pointer flex flex-col items-center">
                    <img class="mb-6" src="../../assets/img/air freight.svg" alt="image-3">
                    <label class="text-[#00000] text-lg font-montserrat-bold font-bold">Air Freight</label>
                </div>
                <div @click="toggleModal(
                    '../../assets/img/project cargo.svg', 'Project Cargo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel sem leo. Pellentesque risus nisi, tempus ac urna quis, condimentum rhoncus sapien. Suspendisse condimentum porta volutpat. Duis mattis nec ligula et facilisis. Donec non congue elit. Nullam purus purus, lobortis gravida luctus at, lobortis consequat mi. Pellentesque consequat sem sem, eu porttitor metus tristique ut. Donec aliquam eget neque a convallis. Nunc tristique rhoncus velit, tincidunt aliquam lorem mollis ut. Duis venenatis justo eget odio vestibulum, id blandit lorem malesuada. Proin ut malesuada metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec scelerisque felis et enim viverra, vitae pretium dolor scelerisque. Pellentesque gravida efficitur ornare.')" 
                class="cursor-pointer flex flex-col items-center">
                    <img class="mb-6" src="../../assets/img/project cargo.svg" alt="image-4">
                    <label class="text-[#00000] text-lg font-montserrat-bold font-bold">Project Cargo</label>
                </div>
                <div @click="toggleModal(
                    '../../assets/img/Ocean.svg', 'Ocean Freight', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel sem leo. Pellentesque risus nisi, tempus ac urna quis, condimentum rhoncus sapien. Suspendisse condimentum porta volutpat. Duis mattis nec ligula et facilisis. Donec non congue elit. Nullam purus purus, lobortis gravida luctus at, lobortis consequat mi. Pellentesque consequat sem sem, eu porttitor metus tristique ut. Donec aliquam eget neque a convallis. Nunc tristique rhoncus velit, tincidunt aliquam lorem mollis ut. Duis venenatis justo eget odio vestibulum, id blandit lorem malesuada. Proin ut malesuada metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec scelerisque felis et enim viverra, vitae pretium dolor scelerisque. Pellentesque gravida efficitur ornare.')" 
                class="cursor-pointer flex flex-col items-center">
                    <img class="mb-6" src="../../assets/img/Ocean.svg" alt="image-5">
                    <label class="text-[#00000] text-lg font-montserrat-bold font-bold">Ocean Freight</label>
                </div>
                
            </div>
        </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '../Modal/Modal.vue';

const isModalOpen = ref(false)

const modalProps = ref({
    gambar: '',
    title: '',
    detail: ''
})

const toggleModal = (gambar, title, detail) => {
    isModalOpen.value = !isModalOpen.value
    if(gambar && title && detail){
        modalProps.value.gambar = gambar
        modalProps.value.title = title
        modalProps.value.detail = detail
    }
}
</script>