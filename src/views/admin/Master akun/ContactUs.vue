<template>
    <div class="flex">
      <Sidebar />
      <div class="flex-1 flex flex-col">
        <Header />
        <main class="flex-1 bg-gray-100 p-4">
          <ContactUs />
        </main>
        <Footer />
      </div>
    </div>
  </template>
    
    <script>
    import Sidebar from '@/components/Sidebar/Sidebar.vue';
    import Header from '@/components/Headers/HeaderAdmin.vue';
    import Footer from '@/components/Footers/FooterAdmin.vue';
    import ContactUs from '@/components/Cards/ContactUs.vue';
    
    export default {
      name: 'Admin',
      components: {
        Sidebar,
        Header,
        ContactUs,
        Footer,
      },
    };
    </script>
    
    <style scoped>
    /* Tambahkan styling tambahan jika diperlukan */
    </style>
    