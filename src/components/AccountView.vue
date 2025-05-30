<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function handleLogout() {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  router.push("/login");
}
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B0449] to-[#620F5D]"
  >
    <div class="bg-white p-6 rounded-md text-center shadow-md">
      <h1 class="text-xl font-bold mb-4">Welcome to your Account</h1>
      <button
        @click="handleLogout"
        class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  </div>
</template>
