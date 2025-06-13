<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="pt-24 flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 text-white font-rajdhani">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-5xl font-bold mb-12 text-center">All Games</h1>

      <!-- First row -->
      <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center mb-16">
        <!-- Rocket League -->
        <RouterLink to="/rocketleague" class="transform transition-transform duration-300 hover:scale-105">
          <div>
            <img
              src="/src/assets/images/rocketleague_homepage.jpg"
              alt="Rocket League"
              class="w-48 h-48 mx-auto rounded-xl mb-3 object-cover"
            />
            <h3 class="text-xl font-semibold">Rocket League</h3>
            <p class="text-lg text-gray-300">Where aerial flips decide victory</p>
          </div>
        </RouterLink>

        <!-- Lethal Company -->
        <RouterLink to="/lethalcompany" class="transform transition-transform duration-300 hover:scale-105">
          <div>
            <img
              src="/src/assets/images/lethalcompany_homepage.jpg"
              alt="Lethal Company"
              class="w-48 h-48 mx-auto rounded-xl mb-3 object-cover"
            />
            <h3 class="text-xl font-semibold">Lethal Company</h3>
            <p class="text-lg text-gray-300">Teamwork or terror</p>
          </div>
        </RouterLink>

        <!-- R.E.P.O. -->
        <RouterLink to="/repo" class="transform transition-transform duration-300 hover:scale-105">
          <div>
            <img
              src="/src/assets/images/repo_homepage.png"
              alt="R.E.P.O"
              class="w-48 h-48 mx-auto rounded-xl mb-3 object-cover"
            />
            <h3 class="text-xl font-semibold">R.E.P.O</h3>
            <p class="text-lg text-gray-300">Collect, extract, repeat</p>
          </div>
        </RouterLink>
      </section>

      <!-- Second row -->
      <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
        <!-- Valorant -->
        <RouterLink to="/valorant" class="transform transition-transform duration-300 hover:scale-105">
          <div>
            <img
              src="/src/assets/images/valorant_homepage.png"
              alt="Valorant"
              class="w-48 h-48 mx-auto rounded-xl mb-3 object-cover"
            />
            <h3 class="text-xl font-semibold">Valorant</h3>
            <p class="text-lg text-gray-300">Strategy and ability warfare</p>
          </div>
        </RouterLink>

        <!-- Phasmaphbia-->
        <div class="transform transition-transform duration-300 hover:scale-105">
          <img
            src="\src\assets\images\phasmaphobia_gamespage.png"
            alt="PHASMAPHOBIA"
            class="w-48 h-48 mx-auto rounded-xl mb-3 object-cover"
          />
          <h3 class="text-xl font-semibold">Phasmophobia</h3>
          <p class="text-lg text-gray-300">Ghost hunting under pressure</p>
        </div>

        <!-- Example Game 2 -->
        <div class="transform transition-transform duration-300 hover:scale-105">
          <img
            src="/src/assets/images/leagueoflegends_gamepage.png"
            alt="League of Legends"
            class="w-48 h-48 mx-auto rounded-xl mb-3 object-cover"
          />
          <h3 class="text-xl font-semibold">League of Legends</h3>
          <p class="text-lg text-gray-300">Team fights, tactics, triumph</p>
        </div>
      </section>
    </div>
  </div>
</template>
