<script setup lang="ts">
import { RouterLink } from "vue-router";

</script>

<template>
  <div class="min-h-screen flex flex-col justify-center items-center text-white px-6 pt-[70px]">
    <div class="w-full max-w-6xl space-y-20">
      <section class="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        <div class="text-left">
          <h1 class="text-5xl font-bold mb-3">404SkillNotFound</h1>
          <p class="text-lg">Your #1 Guide to improve you Skills.</p>
        </div>

        <img
          src="/src/assets/images/placeholder.png"
          alt="Laptop with characters"
          class="rounded-2xl w-[50%]"
        />
      </section>

      <section>
        <!-- Valorant -->
        <RouterLink to="/valorant" class="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 transform transition-transform duration-300 ">
          <div class="max-w-sm text-left">
            <h2 class="text-2xl font-bold mb-2">Valorant</h2>
            <p class="text-sm leading-relaxed">Tactical shooter meets high-speed ability warfare - where precision and strategy collide.</p>
          </div>

          <img
            src="/src/assets/images/valorant_homepage.png"
            alt="Valorant Game"
            class="rounded-2xl shadow-lg w-[50%] hover:scale-105 transform transition-transform duration-300"
          />
        </RouterLink>
      </section>
      <section class="mt-16 mb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-white text-center max-w-6xl mx-auto px-6">

      <!-- Rocket League -->
        <RouterLink to="/rocketleague" class="transform transition-transform duration-300 hover:scale-105">
          <div>
            <img
              src="/src/assets/images/rocketleague_homepage.jpg"
              alt="Rocket League"
              class="w-48 h-48 mx-auto rounded-xl mb-3 object-cover"
            />
            <h3 class="text-lg font-semibold">Rocket League</h3>
            <p class="text-sm text-gray-300">Where aerial flips decide victory</p>
          </div>
        </RouterLink>

        <!-- Lethal Company -->
        <RouterLink to="/lethalcompany" class="transform transition-transform duration-300 hover:scale-105">
          <div>
            <img
              src="/src/assets/images/lethalcompany_homepage.jpg"
              alt="Rocket League"
              class="w-48 h-48 mx-auto rounded-xl mb-3 object-cover"
            />
            <h3 class="text-lg font-semibold">Lethal Company</h3>
            <p class="text-sm text-gray-300">Teamwork or terror</p>
          </div>
        </RouterLink>

        <!-- R.E.P.O. -->
        <RouterLink to="/repo" class="transform transition-transform duration-300 hover:scale-105">
          <div>
            <img
              src="/src/assets/images/repo_homepage.png"
              alt="Rocket League"
              class="w-48 h-48 mx-auto rounded-xl mb-3 object-cover"
            />
            <h3 class="text-lg font-semibold">R.E.P.O</h3>
            <p class="text-sm text-gray-300">Collect, extract, repeat</p>
          </div>
        </RouterLink>
      </section>
    </div>
  </div>
</template>
