<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const error = ref("");
const success = ref("");
const router = useRouter();

async function handleRegister(e) {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.value, password: password.value }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Registration failed");
    }

    success.value = "Registration successful! Redirecting to login...";
    setTimeout(() => router.push("/home"), 2000);
  } catch (err) {
    error.value = err.message;
  }
}
</script>

<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0B0449] to-[#620F5D] px-4"
  >
    <form
      @submit="handleRegister"
      class="bg-white p-6 rounded-md w-full max-w-sm space-y-4"
    >
      <h2 class="text-xl font-bold text-center">Register</h2>
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        required
        class="w-full border rounded px-3 py-2"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
        class="w-full border rounded px-3 py-2"
      />
      <button
        type="submit"
        class="bg-indigo-600 text-white w-full py-2 rounded hover:bg-indigo-500"
      >
        Register
      </button>
      <p v-if="error" class="text-red-500 text-sm text-center">{{ error }}</p>
      <p v-if="success" class="text-green-600 text-sm text-center">
        {{ success }}
      </p>
    </form>
  </div>
</template>
