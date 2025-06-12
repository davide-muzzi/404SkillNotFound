<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const name = ref("");
const email = ref("");
const message = ref("");
const success = ref("");
const error = ref("");

async function sendContact() {
  if (!name.value || !email.value || !message.value) {
    error.value = "Bitte alle Felder ausfüllen";
    return;
  }

  try {
    await axios.post("http://localhost:3000/api/contact", {
      name: name.value,
      email: email.value,
      message: message.value
    });
    success.value = "Deine Nachricht wurde gesendet!";
    name.value = email.value = message.value = "";
    error.value = "";
  } catch (err) {
    error.value = "Fehler beim Senden - bitte versuchen Sie es später.";
  }
}
</script>

<template>
  <div class="pt-24 max-w-3xl mx-auto flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 text-white">
    <h1 class="text-4xl font-bold mb-6 font-rajdhani">Contact Us</h1>
    <p class="text-lg text-gray-300 mb-10">
      Have feedback, a question, or want to get in touch? Fill out the form below and we'll get back to you!
    </p>

    <form @submit.prevent="sendContact" class="space-y-6">
      <div>
        <label class="block mb-1 font-semibold">Name</label>
        <input v-model="name" class="w-full p-3 rounded bg-gray-800 text-white" placeholder="Your name" />
      </div>

      <div>
        <label class="block mb-1 font-semibold">Email</label>
        <input v-model="email" type="email" class="w-full p-3 rounded bg-gray-800 text-white" placeholder="you@example.com" />
      </div>

      <div>
        <label class="block mb-1 font-semibold">Message</label>
        <textarea v-model="message" class="w-full p-3 rounded bg-gray-800 text-white" rows="6" placeholder="Type your message here..."></textarea>
      </div>

      <button type="submit" class="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 rounded text-white font-bold font-rajdhani">
        Send Message
      </button>

      <p v-if="success" class="text-green-500 mt-4">Thank you! Your message has been sent.</p>
      <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
    </form>
  </div>
</template>
