<template>
    <div class="flex">
      <Sidebar />
      <div class="flex-1 flex flex-col">
        <Header />
        <main class="flex-1 bg-gray-100 p-4">
          <PartnerBusiness />
        </main>
        <Footer />
      </div>
    </div>
  </template>
    
    <script>
    import Sidebar from '@/components/Sidebar/Sidebar.vue';
    import Header from '@/components/Headers/HeaderAdmin.vue';
    import Footer from '@/components/Footers/FooterAdmin.vue';
    import PartnerBusiness from '@/components/Cards/PartnerBusiness.vue';
    
    export default {
      name: 'Admin',
      components: {
        Sidebar,
        Header,
        PartnerBusiness,
        Footer,
      },
    };
    </script>
    
    <style scoped>
    /* Tambahkan styling tambahan jika diperlukan */
    </style>
    