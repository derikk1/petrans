<template>
    <div class="bg-white shadow-lg p-6 -mt-8 relative z-20">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-3xl font-bold">PERSADA TRANSPORT INDONESIA</h1>
        <img src="@/assets/img/logo_petrans_1.png" alt="Petrans Logo" class="h-12">
      </div>
  
      <section class="mb-8">
        <h2 class="text-xl font-semibold">Banner</h2>
        <div class="flex space-x-2 mt-2">
          <img src="@/assets/img/bg_carousel.png" alt="Banner 1" class="w-1/6">
          <img src="@/assets/img/bg_carousel.png" alt="Banner 2" class="w-1/6">
          <img src="@/assets/img/bg_carousel.png" alt="Banner 3" class="w-1/6">
          <img src="@/assets/img/bg_carousel.png" alt="Banner 4" class="w-1/6">
          <img src="@/assets/img/bg_carousel.png" alt="Banner 5" class="w-1/6">
          <img src="@/assets/img/bg_carousel.png" alt="Banner 6" class="w-1/6">
        </div>
      </section>
  
      <section class="mb-8">
        <h2 class="text-xl font-semibold">Core Value</h2>
        <p class="mt-2">Persada Transportasi</p>
        <p class="mt-2">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        
        <div class="flex space-x-2 mt-4">
          <div class="bp-4 w-1/6">
            <img src="@/assets/img/home-body/HB-1.svg" alt="Icon 1" class="mx-auto mb-2">
          </div>
          <div class="bp-4 w-1/6">
            <img src="@/assets/img/home-body/HB-2.svg" alt="Icon 2" class="mx-auto mb-2">
          </div>
          <div class="bp-4 w-1/6">
            <img src="@/assets/img/home-body/HB-3.svg" alt="Icon 3" class="mx-auto mb-2">
          </div>
          <div class="bp-4 w-1/6">
            <img src="@/assets/img/home-body/HB-4.svg" alt="Icon 4" class="mx-auto mb-2">
          </div>
          <div class="bp-4 w-1/6">
            <img src="@/assets/img/home-body/HB-5.svg" alt="Icon 5" class="mx-auto mb-2">
          </div>
        </div>
      </section>
  
      <footer class="flex justify-between items-center">
        <button class="bg-gray-500 text-white px-4 py-2">Publish</button>
        <button class="bg-yellow-500 text-white px-4 py-2">Preview</button>
        <button class="bg-red-500 text-white px-4 py-2">Ubah</button>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>
  /* Tambahkan gaya khusus di sini jika diperlukan */
  </style>
  