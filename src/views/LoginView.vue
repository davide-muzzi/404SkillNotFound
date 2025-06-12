<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import { login } from "../stores/auth";
const router = useRouter();

const email = ref("");
const password = ref("");
const error = ref("");

async function handleLogin(e) {
  e.preventDefault();
  console.log("Submitted:", email.value, password.value);

  try {
    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.value, password: password.value }),
    });

    if (!res.ok) {
      const errData = await res.json();
      throw new Error(errData.message || "Login failed");
    }

    const data = await res.json();
    login(data.token);
    localStorage.setItem("role", data.role); 
    router.push("/");
  } catch (err) {
    console.error("Login error:", err);
    error.value = err.message;
  }
}
</script>

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img src="../assets/images/nav_logo.png" alt="Logo" class="w-[60px] h-[60px] mx-auto " />
      <h1 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Login</h1>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleLogin">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-white">Email address</label>
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
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-white">Password</label>
            <div class="text-sm">
              <router-link
                to="/forgotpassword"
                class="font-semibold text-indigo-600 hover:text-indigo-500"
                >Forgot password</router-link
              >
            </div>
          </div>
          <div class="mt-2">
            <input
              v-model="password"
              type="password"
              name="password"
              id="password"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none autofill:shadow-[inset_0_0_0px_1000px_white]"
            />
          </div>
        </div>

        <div>
          <button 
            type="submit"
            class="flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs bg-gradient-to-r from-purple-500 to-pink-500 "
          >
            Sign in
          </button>
        </div>
      </form>
      <p v-if="error" class="text-red-600 mt-2">{{ error }}</p>

      <router-link
        to="/register"
        class="font-semibold text-indigo-600 hover:text-indigo-500 "
      >
        Don't have an account? Register here
      </router-link>
    </div>
  </div>
</template>
