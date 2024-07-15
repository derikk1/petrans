<template>
    <div class="bg-red-800 p-10 flex justify-between rounded-br-xl">
      <div>
        <h1 class="text-white text-3xl font-bold">Username</h1>
        <p class="text-gray-300">Plant</p>
        <p class="text-gray-400 text-sm italic">(Based On Login)</p>
      </div>
      <div class="relative flex p-1" ref="dropdownContainer">
        <!-- Profile Icon -->
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          class="w-5 h-5 text-white cursor-pointer mt-1"
        >
          <path 
            fill-rule="evenodd" 
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" 
            clip-rule="evenodd" 
          />
        </svg>
  
        <!-- Dropdown Toggle Icon -->
        <svg 
          @click="toggleDropdown" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          class="w-5 h-5 text-white cursor-pointer ml-2 mt-1"
        >
          <path 
            fill-rule="evenodd" 
            d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" 
            clip-rule="evenodd" 
          />
        </svg>
  
        <!-- Dropdown Content -->
        <div 
          v-if="dropdownOpen" 
          class="absolute right-0 mt-8 w-24 bg-white rounded-lg shadow-lg py-2"
        >
          <a 
            href="#" 
            class="flex items-center px-2 py-1 text-red-800 hover:bg-gray-200"
          >
            <!-- Account Icon -->
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              class="w-4 h-4 mr-2"
            >
              <path 
                fill-rule="evenodd" 
                d="M12 2a5 5 0 0 0-5 5v1a5 5 0 1 0 10 0V7a5 5 0 0 0-5-5Zm-8 17a8 8 0 1 1 16 0H4Z" 
                clip-rule="evenodd" 
              />
            </svg>
            Account
          </a>
          <a 
            href="#" 
            class="flex items-center px-2 py-1 text-red-800 hover:bg-gray-200"
          >
            <!-- Logout Icon -->
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              class="w-4 h-4 mr-2"
            >
              <path 
                fill-rule="evenodd" 
                d="M10.293 15.707a1 1 0 0 1 0-1.414L13.586 11H3a1 1 0 1 1 0-2h10.586l-3.293-3.293a1 1 0 1 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0Z" 
                clip-rule="evenodd" 
              />
            </svg>
            Logout
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Header',
    data() {
      return {
        dropdownOpen: false,
      };
    },
    methods: {
      toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
      },
      closeDropdown(event) {
        if (!this.$refs.dropdownContainer.contains(event.target)) {
          this.dropdownOpen = false;
        }
      }
    },
    mounted() {
      document.addEventListener('click', this.closeDropdown);
    },
    beforeDestroy() {
      document.removeEventListener('click', this.closeDropdown);
    }
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  