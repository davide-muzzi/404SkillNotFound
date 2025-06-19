<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { isLoggedIn } from "../stores/auth";

const searchQuery = ref("");
const router = useRouter();
const userRole = ref("");
const showSubmissions = ref(false);
const submissions = ref([]);
const selected = ref(null);

// Navigation-Suche
function search() {
  if (searchQuery.value.trim() !== "") {
    router.push({ path: "/search", query: { q: searchQuery.value } });
  }
}

// Rolle beim Laden prüfen
onMounted(() => {
  const storedRole = localStorage.getItem("role");
  if (storedRole) {
    userRole.value = storedRole;
  }
});

// Admin: Einreichungen laden
async function loadSubmissions() {
  const res = await axios.get("http://localhost:3000/api/submissions");
  submissions.value = res.data;
  showSubmissions.value = true;
}

async function accept(id) {
  await axios.post(`http://localhost:3000/api/submissions/${id}/accept`);
  submissions.value = submissions.value.filter((s) => s.id !== id);
  selected.value = null;
}

async function reject(id) {
  await axios.post(`http://localhost:3000/api/submissions/${id}/reject`);
  submissions.value = submissions.value.filter((s) => s.id !== id);
  selected.value = null;
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  router.push("/login")
}
</script>

<template>
  
  <div class="p-6 pt-24 max-w-5xl mx-auto flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 text-white">
    <h1 class="text-4xl font-bold mb-6 font-rajdhani">Account</h1>
    <div v-if="userRole === 'admin'" class="mt-8">
      <button
        @click="loadSubmissions"
        class="bg-gradient-to-r from-yellow-400 to-pink-400 px-5 py-2 rounded text-xl font-rajdhani font-medium"
      >
        Requested Submits
      </button>
    </div>
    <button @click="logout" class="bg-red-600 px-4 py-2 rounded mt-5 font-rajdhani text-lg font-medium">Logout</button>

    <div v-if="showSubmissions" class="mt-10">
      <!-- 📥 Admin Review -->
      <div v-if="selected" class="bg-gray-800 p-4 rounded-xl space-y-4">
        <h2 class="text-2xl font-bold">{{ selected.title }}</h2>
        <p class="text-lg">{{ selected.description }}</p>
        <div class="w-full">
          <video
            v-if="selected.mediaUrl.endsWith('.mp4')"
            controls
            class="w-full max-w-xl rounded-lg mt-4"
          >
            <source :src="selected.mediaUrl" type="video/mp4" />
            Your browser does not support video.
          </video>
          <img
            v-else
            :src="selected.mediaUrl"
            class="w-full max-w-xl rounded-lg mt-4"
            alt="Submission media"
          />
        </div>
        <div class="flex gap-4 mt-4">
          <button @click="accept(selected.id)" class="bg-green-500 px-4 py-2 rounded font-rajdhani">Accept</button>
          <button @click="reject(selected.id)" class="bg-red-500 px-4 py-2 rounded font-rajdhani">Reject</button>
          <button @click="selected = null" class="bg-gray-500 px-4 py-2 rounded font-rajdhani">Back</button>
        </div>
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="submission in submissions"
          :key="submission.id"
          @click="selected = submission"
          class="bg-gray-700 p-4 rounded-xl cursor-pointer hover:scale-105 transition"
        >
          <h3 class="text-xl font-semibold font-rajdhani">{{ submission.title }}</h3>
          <p class="text-sm text-gray-300 font-rajdhani">{{ submission.type }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
