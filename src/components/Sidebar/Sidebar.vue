<template>
  <nav class="bg-white text-gray-500 w-[250px] h-full flex flex-col border-r border-gray-200">
    <!-- Brand -->
    <div class="p-4 flex items-center justify-center border-b border-gray-200">
      <img class="w-[150px] h-[100px]" src="@/assets/img/logo_petrans_1.png" alt="logo" />
    </div>

    <!-- Collapse -->
    <div class="flex-1 mt-4 overflow-y-auto">
      <!-- Navigation -->
      <ul>
        <li>
          <button
            :class="['p-4 w-full text-left flex items-center hover:bg-red-700 rounded', { 'bg-red-700 text-white': menus.masterAkun }]"
            @click="toggleMenu('masterAkun')"
          >
            <img src="@/assets/icon-sidebar.svg" class="mr-2 w-4 h-4" alt="icon" />
            <span>Master Akun</span>
            <svg
              :class="{ 'rotate-180': menus.masterAkun }"
              class="ml-auto w-4 h-4 transform transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <ul v-if="menus.masterAkun" class="ml-4">
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/admin/master-akun/setting-menu">Setting Menu</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/user-list">User List</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/user-access">User Access</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/user-limit">User Limit</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/perusahaan">Perusahaan</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/department">Department</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/bagian">Bagian</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/posisi">Posisi</router-link>
            </li>
          </ul>
        </li>
        <li>
          <button
            :class="['p-4 w-full text-left flex items-center hover:bg-red-700 rounded', { 'bg-red-700 text-white': menus.masterWebsite }]"
            @click="toggleMenu('masterWebsite')"
          >
            <img src="@/assets/icon-sidebar.svg" class="mr-2 w-4 h-4" alt="icon" />
            <span>Master Website</span>
            <svg
              :class="{ 'rotate-180': menus.masterWebsite }"
              class="ml-auto w-4 h-4 transform transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <ul v-if="menus.masterWebsite" class="ml-4">
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/admin/master-website/home">Home</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/admin/master-website/our-service">Our Service</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/admin/master-website/partner-business">Partner Business</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/admin/master-website/contact-us">Contact US</router-link>
            </li>
          </ul>
        </li>
        <li>
          <button
            :class="['p-4 w-full text-left flex items-center hover:bg-red-700 rounded', { 'bg-red-700 text-white': menus.modulTransaction }]"
            @click="toggleMenu('modulTransaction')"
          >
            <img src="@/assets/icon-sidebar.svg" class="mr-2 w-4 h-4" alt="icon" />
            <span>Modul Transaction</span>
            <svg
              :class="{ 'rotate-180': menus.modulTransaction }"
              class="ml-auto w-4 h-4 transform transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <ul v-if="menus.modulTransaction" class="ml-4">
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/shipper">Shipper</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/shipper-methode">Shipper Methode</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/cargo-type">Cargo Type</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/consignee">Consignee</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/delivery">Delivery</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/status">Status</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/port">Port</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/detail-shipment">Detail Shipment</router-link>
            </li>
          </ul>
        </li>
        <li>
          <button
            :class="['p-4 w-full text-left flex items-center hover:bg-red-700 rounded', { 'bg-red-700 text-white': menus.transaction }]"
            @click="toggleMenu('transaction')"
          >
            <img src="@/assets/icon-sidebar.svg" class="mr-2 w-4 h-4" alt="icon" />
            <span>Transaction</span>
            <svg
              :class="{ 'rotate-180': menus.transaction }"
              class="ml-auto w-4 h-4 transform transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <ul v-if="menus.transaction" class="ml-4">
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/shipper">Shipper</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/shipper-methode">Shipper Methode</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/cargo-type">Cargo Type</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/consignee">Consignee</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/delivery">Delivery</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/status">Status</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/port">Port</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/detail-shipment">Detail Shipment</router-link>
            </li>
          </ul>
        </li>
        <li>
          <button
            :class="['p-4 w-full text-left flex items-center hover:bg-red-700 rounded', { 'bg-red-700 text-white': menus.reports }]"
            @click="toggleMenu('reports')"
          >
            <img src="@/assets/icon-sidebar.svg" class="mr-2 w-4 h-4" alt="icon" />
            <span>Reports</span>
            <svg
              :class="{ 'rotate-180': menus.reports }"
              class="ml-auto w-4 h-4 transform transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <ul v-if="menus.reports" class="ml-4">
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/status">Status</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/port">Port</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/cargo-type">Cargo Type</router-link>
            </li>
            <li class="p-2 hover:bg-gray-200 flex items-center rounded">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <router-link to="/consignee">Consignee</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menus: {
        masterAkun: false,
        masterWebsite: false,
        modulTransaction: false,
        transaction: false,
        reports: false,
      },
    };
  },
  methods: {
    toggleMenu(menu) {
      this.menus[menu] = !this.menus[menu];
    },
  },
};
</script>

<style scoped>
</style>
