<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import { isLoggedIn } from "../stores/auth"; // use global reactive state

const searchQuery = ref('');
const router = useRouter();

function search() {
  if (searchQuery.value.trim() !== '') {
    router.push({ path: "/search", query: { q: searchQuery.value } });
  }
}
</script>

<template>
  <nav class="p-4 space-x-4 flex items-center justify-between">
    <img src="../assets/images/nav_logo.png" alt="Logo" class="w-[60px] h-[60px]" />
    <router-link to="/" class="text-white text-xl font-rajdhani font-medium">Home</router-link>
    <router-link to="/games" class="text-white text-xl font-rajdhani font-medium">Games</router-link>
    <router-link to="/about" class="text-white text-xl font-rajdhani font-medium">About</router-link>
    
    <div class="flex items-center gap-2">
      <input
        v-model="searchQuery"
        @keyup.enter="search"
        type="text"
        placeholder="Search..."
        class="px-3 py-1 text-black placeholder-gray-500 rounded-[2vw] text-xl font-rajdhani font-medium"
      />
      <button @click="search" class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-[2vw] text-xl font-rajdhani font-medium">Search</button>
    </div>

    <router-link :to="isLoggedIn ? '/account' : '/login'" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-[2vw] px-5 py-1 text-xl font-rajdhani font-medium">
      {{ isLoggedIn ? 'Account' : 'Login' }}
    </router-link>
  </nav>
</template>