<script setup>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
const searchQuery = ref('');
const isLoggedIn = ref(false);
const router = useRouter();

onMounted(() => {
  isLoggedIn.value = !!localStorage.getItem("token");
});
function search() {
  console.log('Searching for:', searchQuery.value);
  // later: router.push(`/search?query=${searchQuery.value}`) or emit, etc.
}
</script>

<template>
  <div class="min-h-screen w-full bg-gradient-to-br from-[#0B0449] to-[#620F5D] flex flex-col justify-between">
    <Navigation />
    <RouterView />
    <Footer />
  </div>
</template>
