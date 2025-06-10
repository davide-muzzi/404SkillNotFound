<script setup>
import Navigation from './components/Navigation.vue';
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
  <div class="min-h-screen w-full bg-gradient-to-br from-[#0B0449] to-[#620F5D]">
    <Navigation />
    <RouterView />
    <footer class="pt-[40px] bottom-0"> 
      <p class="text-white flex justify-center font-extrabold">404SkillNotFound</p>
      <div class="flex  justify-between p-8 text-white">
        <div class="">Terms</div>
        <div class="">Privacy</div>
        <div class="">Contact</div>
      </div>
    </footer>
  </div>
</template>
