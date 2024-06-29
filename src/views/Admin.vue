<!-- src/views/Admin.vue -->
<template>
    <div class="flex">
      <Sidebar />
      <div class="flex flex-col w-full">
        <Header />
        <MainContent />
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '@/components/Admin/Sidebar.vue';
  import Header from '@/components/Admin/Header.vue';
  import MainContent from '@/components/Admin/MainContent.vue';
  
  export default {
    name: 'Admin',
    components: {
      Sidebar,
      Header,
      MainContent,
    },
  };
  </script>
  
  <style scoped>
  /* Tambahkan styling tambahan jika diperlukan */
  </style>
  