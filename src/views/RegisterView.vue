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
    setTimeout(() => router.push("/login"), 2000); 
  } catch (err) {
    error.value = err.message;
  }
}
</script>

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 text-white">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img src="../assets/images/nav_logo.png" alt="Logo" class="w-[60px] h-[60px] mx-auto" />
      <h1 class="mt-10 text-center text-2xl font-bold tracking-tight">Register</h1>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleRegister">
        <div>
          <label for="email" class="block text-sm font-medium">Email address</label>
          <input
            v-model="email"
            type="email"
            name="email"
            id="email"
            required
            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none autofill:shadow-[inset_0_0_0px_1000px_white]"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium">Password</label>
          <input
            v-model="password"
            type="password"
            name="password"
            id="password"
            required
            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none autofill:shadow-[inset_0_0_0px_1000px_white]"
          />
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </button>
        </div>
      </form>

      <p v-if="error" class="text-red-500 text-sm text-center mt-2">{{ error }}</p>
      <p v-if="success" class="text-green-500 text-sm text-center mt-2">{{ success }}</p>
    </div>
  </div>
</template>
