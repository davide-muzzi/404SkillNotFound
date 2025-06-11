<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import { isLoggedIn } from "../stores/auth"; // use global reactive state

const searchQuery = ref('');
const router = useRouter();

function search() {
  console.log('Searching for:', searchQuery.value);
}
</script>

<template>
  <nav class="p-4 space-x-4 flex items-center justify-between">
    <img src="../assets/images/nav_logo.png" alt="Logo" class="w-[60px] h-[60px]" />
    <router-link to="/" class="text-white">Home</router-link>
    <router-link to="/games" class="text-white">Games</router-link>
    <router-link to="/about" class="text-white">About</router-link>
    
    <div class="flex items-center gap-2">
      <input v-model="searchQuery" type="text" placeholder="Search..." class="px-3 py-1 text-black placeholder-gray-500 rounded-[2vw]" />
      <button @click="search" class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-[2vw]">Search</button>
    </div>

    <router-link :to="isLoggedIn ? '/account' : '/login'" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-[2vw] px-5 py-1">
      {{ isLoggedIn ? 'Account' : 'Login' }}
    </router-link>
  </nav>
</template>