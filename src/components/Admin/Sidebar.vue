<!-- src/components/Admin/Sidebar.vue -->
<template>
  <div class="bg-white text-black w-80 h-screen flex flex-col border-r border-gray-200">
    <div class="p-4 flex items-center justify-center border-b border-gray-200">
      <img class="w-[150px] h-[100px]" src="@/assets/img/logo_petrans_1.png" alt="logo">
    </div>
    <nav class="mt-4">
      <ul>
        <li class="p-4 hover:bg-gray-100">Master Akun</li>
        <li>
          <button
            class="p-4 w-full text-left flex justify-between items-center hover:bg-gray-100"
            @click="toggleMenu('masterWebsite')"
          >
            <span>Master Website</span>
            <svg
              :class="{'rotate-180': menus.masterWebsite}"
              class="w-4 h-4 transform transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <ul v-if="menus.masterWebsite" class="ml-4">
            <li class="p-2 hover:bg-gray-100">Home</li>
            <li class="p-2 hover:bg-gray-100">Our Service</li>
            <li class="p-2 hover:bg-gray-100">Partner Business</li>
            <li class="p-2 hover:bg-gray-100">Contact US</li>
          </ul>
        </li>
        <li class="p-4 hover:bg-gray-100">Modul Transaction</li>
        <li class="p-4 hover:bg-gray-100">Transaction</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      menus: {
        masterWebsite: false,
      },
    };
  },
  methods: {
    toggleMenu(menu) {
      this.$set(this.menus, menu, !this.menus[menu]);
    },
  },
};
</script>

<style scoped>
/* Tambahkan styling tambahan jika diperlukan */
</style>
