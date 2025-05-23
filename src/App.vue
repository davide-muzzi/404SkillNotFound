<script setup>
import { ref, onMounted } from "vue";
import HomeView from "./components/HomeView.vue";

const message = ref("");

onMounted(async () => {
  const res = await fetch("/api/hello");
  const data = await res.json();
  message.value = data.message;
});
</script>

<template class="h-max w-full">
  <div class="origin-top-left-5">logos</div>
  <HomeView class="h-full w-full"></HomeView>
</template>
