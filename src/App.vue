<script setup>
import { ref, onMounted } from 'vue';

const message = ref('');

onMounted(async () => {
  const res = await fetch('/api/hello'); 
  const data = await res.json();
  message.value = data.message;
});
</script>

<template>
  <h1 class="text-3xl font-bold text-blue-600">{{ message }}</h1>
</template>
