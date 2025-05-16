<script setup>
import { ref, onMounted } from "vue";

const message = ref("");

onMounted(async () => {
  const res = await fetch("/api/hello");
  const data = await res.json();
  message.value = data.message;
});
</script>

<template>
  
  <div class="p-4"><!-- NAVBAR COMES HERE AND SOME OTHER STUFF FOR EVERY PAGE-->
    <nav class="space-x-4">
      <router-link to="/" class="text-blue-500" >Home</router-link> 
      <router-link to="/login" class="text-blue-500">Login</router-link>
    </nav>
    <router-view />
  </div>

</template>
