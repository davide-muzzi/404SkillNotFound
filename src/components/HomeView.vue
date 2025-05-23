<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <p>This is the home view</p>
  <nav class="space-x-4">
    <router-link to="/" class="text-blue-500">Home</router-link>
    <router-link to="/login" class="text-blue-500">Login</router-link>
  </nav>
  <RouterView></RouterView>
</template>
