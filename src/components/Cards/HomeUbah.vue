<template>
    <div class="bg-white shadow-lg p-6 -mt-8 relative z-20">
        <div class="flex justify-between items-center mb-4">
            <h1 class="text-3xl font-bold">PERSADA TES</h1>
            <img src="@/assets/img/logo_petrans_1.png" alt="Petrans Logo" class="h-12">
        </div>

        <section class="mb-8">
            <h2 class="text-xl font-semibold">Banner</h2>
            <div class="flex justify-center items-center space-x-3 mt-2 px-16 py-3 bg-[#D9D9D9] shadow-md">
                <i class="fa-solid fa-angle-left text-3xl text-white"></i>
                <img src="@/assets/img/bg_carousel.png" alt="Banner 1" class="w-[205px] h-[120px] border border-black"
                    :contenteditable="editMode">
                <img src="@/assets/img/bg_carousel.png" alt="Banner 2" class="w-[205px] h-[120px] border border-black"
                    :contenteditable="editMode">
                <img src="@/assets/img/bg_carousel.png" alt="Banner 3" class="w-[205px] h-[120px] border border-black"
                    :contenteditable="editMode">
                <img src="@/assets/img/bg_carousel.png" alt="Banner 4" class="w-[205px] h-[120px] border border-black"
                    :contenteditable="editMode">
                <img src="@/assets/img/bg_carousel.png" alt="Banner 5" class="w-[205px] h-[120px] border border-black"
                    :contenteditable="editMode">
                <i class="fa-solid fa-angle-right text-3xl text-white"></i>
            </div>
        </section>

        <section class="mb-8">
            <h2 class="text-xl font-semibold">Core Value</h2>
            <p class="mt-2 font-semibold text-md" :contenteditable="editMode">Persada Transportasi</p>
            <p class="mt-2" :contenteditable="editMode">The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced
                below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
                are also
                reproduced in their exact original form, accompanied by English versions from the 1914 translation by H.
                Rackham.</p>

            <div class="flex justify-center items-center space-x-5 mt-4 px-16 py-1 bg-[#D9D9D9] shadow-md">
                <i class="fa-solid fa-angle-left text-3xl text-white"></i>
                <div class="w-1/7 text-center">
                    <img src="@/assets/img/home-body/HB-1.svg" alt="Icon 1" class="mx-auto w-[205px] h-[120px]"
                        :contenteditable="editMode">
                </div>
                <div class="w-1/7 text-center">
                    <img src="@/assets/img/home-body/HB-2.svg" alt="Icon 2" class="mx-auto w-[205px] h-[120px]"
                        :contenteditable="editMode">
                </div>
                <div class="w-1/7 text-center">
                    <img src="@/assets/img/home-body/HB-3.svg" alt="Icon 3" class="mx-auto w-[205px] h-[120px]"
                        :contenteditable="editMode">
                </div>
                <div class="w-1/7 text-center">
                    <img src="@/assets/img/home-body/HB-4.svg" alt="Icon 4" class="mx-auto w-[205px] h-[120px]"
                        :contenteditable="editMode">
                </div>
                <div class="w-1/7 text-center">
                    <img src="@/assets/img/home-body/HB-5.svg" alt="Icon 5" class="mx-auto w-[205px] h-[120px]"
                        :contenteditable="editMode">
                </div>
                <i class="fa-solid fa-angle-right text-3xl text-white"></i>
            </div>
        </section>

        <footer class="flex justify-between items-center">
            <div class="flex items-center">
                <button @click="publish" class="bg-gray-500 text-white px-7 py-1 rounded-md">Publish</button>
                <div v-if="isPublished !== null" class="flex items-center justify-center w-6 h-6 mx-3 mt-1 rounded-full"
                    :class="isPublished ? 'bg-[#9FB807]' : 'bg-red-500'">
                    <i v-if="isPublished" class="fa-solid fa-check text-white text-sm mt-1"></i>
                    <i v-else class="fa-solid fa-times text-white text-sm mt-1"></i>
                </div>
                <div v-else class="w-6 h-6 mx-3"></div>
            </div>
            <button class="bg-yellow-500 text-white px-7 py-1 rounded-md">Preview</button>
            <button @click="toggleEditMode" class="bg-red-500 text-white px-7 py-1 rounded-md">Ubah</button>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isPublished = ref(false);

const publish = async () => {
    try {
        // const success = await fakeApiCall();
        isPublished.value = success;
    } catch (error) {
        isPublished.value = false;
    }
    setTimeout(() => {
        isPublished.value = null;
    }, 2000);
};

// // Simulated API call
// const fakeApiCall = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isSuccess = Math.random() > 0.5; // Simulate a random success/failure response
//       if (isSuccess) {
//         resolve(true);
//       } else {
//         reject(false);
//       }
//     }, 1000);
//   });
// };
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>