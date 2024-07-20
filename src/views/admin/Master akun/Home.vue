<template>
  <div class="flex">
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <Header />
      <main class="flex-1 bg-gray-100 p-4">
        <component :is="currentComponent" @ubah="exitEditMode" />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import Header from '@/components/Headers/HeaderAdmin.vue';
import Footer from '@/components/Footers/FooterAdmin.vue';
import HomeCard from '@/components/Cards/Home.vue';
import HomeCardUbah from '@/components/Cards/HomeUbah.vue';

const isEditMode = ref(false);

const currentComponent = computed(() => {
  return isEditMode.value ? HomeCardUbah : HomeCard;
});

const toggleEditMode = () => {
  isEditMode.value = !isEditMode.value;
};

const exitEditMode = () => {
  isEditMode.value = false;
};
</script>

<style scoped>
/* Tambahkan styling tambahan jika diperlukan */
</style>
