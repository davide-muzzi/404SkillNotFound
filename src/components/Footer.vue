<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
  <footer class="pt-[40px] bottom-0 mt-10"> 
    <p class="text-white flex justify-center font-extrabold text-xl font-rajdhani">404SkillNotFound</p>
    <div class="flex justify-between p-8 text-white">
      <router-link to="/contact" class="text-m font-rajdhani">Contact</router-link>
      <router-link to="/terms" class="text-m font-rajdhani">Terms</router-link >
      <router-link to="/privacy" class="text-m font-rajdhani">Privacy</router-link>
    </div>
  </footer>
</template>