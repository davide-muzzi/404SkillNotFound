<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const title = ref('');
const description = ref('');
const mediaUrl = ref('');
const type = ref('tip'); // "tip" or "lineup"
const success = ref(false);
const error = ref('');
  
async function submit() {
  success.value = false;
  error.value = '';

  if (!title.value || !description.value || !mediaUrl.value || !type.value) {
    error.value = 'Please fill all fields';
    return;
  }

  try {
    await axios.post('http://localhost:3000/api/submit-url', {
      title: title.value,
      description: description.value,
      mediaUrl: mediaUrl.value,
      type: type.value,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    success.value = true;
    title.value = '';
    description.value = '';
    mediaUrl.value = '';
    type.value = 'tip';
  } catch (err) {
    error.value = 'Submission failed';
    console.error(err);
  }
}
</script>

<template>
  <div class="min-h-screen pt-24 text-white px-4 max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-6 font-rajdhani">Submit a Tip or Lineup</h1>

    <form @submit.prevent="submit" class="space-y-6">
      <div>
        <label class="block mb-1 font-semibold">Title</label>
        <input v-model="title" class="w-full p-2 rounded bg-gray-800 text-white" placeholder="Your title" />
      </div>

      <div>
        <label class="block mb-1 font-semibold">Description</label>
        <textarea v-model="description" class="w-full p-2 rounded bg-gray-800 text-white" placeholder="Your description"></textarea>
      </div>

      <div>
        <label class="block mb-1 font-semibold">Media URL</label>
        <input v-model="mediaUrl" class="w-full p-2 rounded bg-gray-800 text-white" placeholder="Paste a .mp4 or image link" />
      </div>

      <div>
        <label class="block mb-1 font-semibold">Type</label>
        <select v-model="type" class="w-full p-2 rounded bg-gray-800 text-white">
          <option value="tip">Tip</option>
          <option value="lineup">Lineup</option>
        </select>
      </div>

      <button type="submit" class="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-2 rounded text-white font-bold">
        Submit
      </button>

      <p v-if="success" class="text-green-500 mt-4">✅ Submitted for review!</p>
      <p v-if="error" class="text-red-500 mt-4">❌ {{ error }}</p>
    </form>
  </div>
</template>
