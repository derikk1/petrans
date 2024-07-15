<!-- src/views/Admin.vue -->
<template>
    <div class="flex">
      <Sidebar />
      <div class="flex-1 flex flex-col">
        <Header />
        <main class="flex-1 bg-gray-100 p-4">
          <Settingmenu />
        </main>
        <Footer />
      </div>
    </div>
  </template>
    
    <script>
    import Sidebar from '@/components/Sidebar/Sidebar.vue';
    import Header from '@/components/Headers/HeaderAdmin.vue';
    import Settingmenu from '@/components/Cards/SettingMenu.vue';
    import Footer from '@/components/Footers/FooterAdmin.vue';
    
    export default {
      name: 'Admin',
      components: {
        Sidebar,
        Header,
        Settingmenu,
        Footer,
      },
    };
    </script>
    
    <style scoped>
    /* Tambahkan styling tambahan jika diperlukan */
    </style>
    