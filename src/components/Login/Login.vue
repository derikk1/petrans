<template>
  <div class="flex items-center justify-center min-h-screen bg-white">
    <div class="flex items-center space-x-8">
      <div class="flex-shrink-0">
        <img src="@/assets/img/logo_petrans_1.png" alt="Petrans Logo" class="h-40 w-auto">
      </div>
      <div class="bg-gray-100 w-[550px] h-[250px] p-8 rounded-lg shadow-md flex items-center justify-center">
        <form @submit.prevent="loginFormSubmit" class="w-[413px]">
          <div class="mb-4 flex items-center">
            <label for="username" class="block text-gray-700 text-sm font-montserrat-bold mb-2 w-[125px]">Username</label>
            <input v-model="username" type="text" id="username" placeholder="Input text..." class="shadow appearance-none border rounded flex-grow py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[288px] h-[43px]">
          </div>
          <div class="mb-4 flex items-center">
            <label for="password" class="block text-gray-700 text-sm font-montserrat-bold mb-2 w-[125px]">Password</label>
            <input v-model="password" type="password" id="password" placeholder="Input text..." class="shadow appearance-none border rounded flex-grow py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[288px] h-[43px]">
          </div>
          <div class="flex items-center justify-center">
            <button type="submit" class="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();

const loginFormSubmit = async () => {
  try {
    const response = await axios.post('http://localhost/petrans_api/auth/login', {
      username: username.value,
      password: password.value
    });

    if (response.data.status) {
      alert('Login successful');
      router.push('/Admin');  // Arahkan ke halaman admin setelah login berhasil
    } else {
      alert('Login failed: ' + response.data.message);
    }
  } catch (error) {
    alert('An error occurred: ' + error.message);
  }
};
</script>

<style scoped>
/* Tambahkan styling jika diperlukan */
</style>
