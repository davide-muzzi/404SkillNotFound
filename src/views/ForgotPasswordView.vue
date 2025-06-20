<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const email = ref("");
const success = ref("");
const error = ref("");

async function sendReset() {
  if (!email.value) {
    error.value = "Please enter your email";
    return;
  }

  try {
    // You can later replace this with your real API
    await axios.post("http://localhost:3000/api/forgot-password", {
      email: email.value,
    });

    success.value = "If this email exists, a reset link has been sent.";
    error.value = "";
    email.value = "";
  } catch (err) {
    error.value = "An error occurred. Please try again later.";
  }
}
</script>

<template>
  <div class="pt-24 px-6 max-w-md mx-auto text-white">
    <h1 class="text-3xl font-bold mb-6 font-rajdhani">Forgot Password</h1>
    <p class="text-gray-300 mb-6">
      Enter your email address, and we’ll send you a link to reset your password.
    </p>

    <form @submit.prevent="sendReset" class="space-y-4">
      <div>
        <label class="block mb-1 font-semibold">Email</label>
        <input
          v-model="email"
          type="email"
          placeholder="you@example.com"
          class="w-full p-3 rounded bg-gray-800 text-white"
        />
      </div>

      <button
        type="submit"
        class="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 rounded text-white font-bold font-rajdhani"
      >
        Send Reset Link
      </button>

      <p v-if="success" class="text-green-500 mt-4">{{ success }}</p>
      <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
    </form>
  </div>
</template>