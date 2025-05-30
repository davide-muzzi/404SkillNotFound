<script setup>
import { ref } from 'vue';

const searchQuery = ref('');

function search() {
  console.log('Searching for:', searchQuery.value);
  // later: router.push(`/search?query=${searchQuery.value}`) or emit, etc.
}
</script>

<template>
  <div
    class="min-h-screen w-full bg-gradient-to-br from-[#0B0449] to-[#620F5D]"
  >
    <!-- ✅ Navbar -->
    <nav class="p-4 space-x-4 border-b flex items-center justify-between">
      <img src="..\src\assets\Homepage_Logo.png" alt="Logo" class="w-[60px] h-[60px]"></img>
      <router-link to="/" class="text-white">Home</router-link>
      <router-link to="/games" class="text-white">Games</router-link>
      <router-link to="/about" class="text-white">About</router-link>
      <div class="flex items-center gap-2">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search..."
          class="rounded px-3 py-1 text-black placeholder-gray-500"
        />
        <button
          @click="search"
          class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded"
        >
          Search
        </button>
      </div>
      <router-link to="/login" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded px-5 py-1">Login</router-link>
    </nav>
    <RouterView />
  </div>
</template>
