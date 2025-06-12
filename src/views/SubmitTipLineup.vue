<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const title = ref("");
const description = ref("");
const file = ref(null);
const type = ref("tip");
const router = useRouter();

const handleFile = (event) => {
  file.value = event.target.files[0];
};

async function submit() {
  const formData = new FormData();
  formData.append("title", title.value);
  formData.append("description", description.value);
  formData.append("type", type.value);
  formData.append("file", file.value);

  const res = await fetch("http://localhost:3000/api/submit", {
    method: "POST",
    body: formData,
  });

  if (res.ok) {
    alert("Submitted for review!");
    router.push("/");
  }
  
}
</script>

<template>
  <div class="min-h-screen pt-24 px-6 text-white max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Submit a Tip or Lineup</h1>
    <div class="space-y-4">
      <input v-model="title" placeholder="Title" class="w-full px-3 py-2 rounded text-black" />
      <textarea v-model="description" placeholder="Description" class="w-full px-3 py-2 rounded text-black"></textarea>

      <select v-model="type" class="px-3 py-2 rounded text-black">
        <option value="tip">Tip</option>
        <option value="lineup">Lineup</option>
      </select>

      <input type="file" @change="handleFile" class="text-white" />

      <button @click="submit" class="bg-purple-600 px-6 py-2 rounded">Submit</button>
    </div>
  </div>
</template>