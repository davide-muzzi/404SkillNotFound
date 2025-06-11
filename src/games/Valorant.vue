<script setup lang="ts">
import { ref } from "vue";

const selectedTab = ref("tips"); // default tab
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center items-center text-white px-6 pt-[70px]">
    <div class="w-full max-w-6xl">
      <!-- Header Section -->
      <section class="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        <!-- Text -->
        <div class="text-left">
          <h1 class="text-6xl font-bold mb-3 font-rajdhani">Valorant</h1>
          <p class="text-2xl max-w-md font-medium font-rajdhani">
            Tactical shooter meets high-speed ability warfare - where precision
            and strategy collide.
          </p>
        </div>

        <!-- Image -->
        <img
          src="../assets/images/omen.png"
          alt="Valorant Character"
          class="w-[300px] md:w-[400px]"
        />
      </section>

      <!-- Tab Buttons -->
      <div class="flex flex-col sm:flex-row justify-center mt-16 gap-6">
        <button
          @click="selectedTab = 'tips'"
          :class="[
            'px-8 py-3 rounded-full font-semibold transition hover:scale-105 duration-300 font-rajdhani',
            selectedTab === 'tips'
              ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
              : 'bg-white text-black',
          ]"
        >
          Tips & Tricks
        </button>

        <button
          @click="selectedTab = 'lineups'"
          :class="[
            'px-8 py-3 rounded-full font-semibold transition hover:scale-105 duration-300 font-rajdhani',
            selectedTab === 'lineups'
              ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
              : 'bg-white text-black',
          ]"
        >
          Lineups
        </button>
      </div>

      <!-- Slide Content -->
      <div class="mt-12 space-y-6">
        <!-- Tips & Tricks -->
        <div v-if="selectedTab === 'tips'" class="space-y-12 mt-10">
          <!-- Tip 1 -->
          <div
            class="flex flex-col md:flex-row justify-between items-start gap-6"
          >
            <div class="text-left max-w-md">
              <h3 class="font-bold text-xl mb-2 font-rajdhani">Movement Error</h3>
              <p class="text-lg text-gray-300 font-rajdhani">Don't move while shooting. Bullets will fire inaccurately.</p>
            </div>
            <div class="w-full md:w-[400px] h-[220px] bg-gray-400 rounded-lg flex items-center justify-center">
              <span class="text-4xl text-white">▶</span>
            </div>
          </div>

          <!-- Tip 2 -->
          <div class="flex flex-col md:flex-row justify-between items-start gap-6">
            <div class="text-left max-w-md">
              <h3 class="font-bold text-xl mb-2 font-rajdhani">Sunset A-Site Brim Molly</h3>
              <p class="text-lg text-gray-300 font-rajdhani">Execution: Post-Plant<br />Time to take effect: 4 sec</p>
            </div>
            <div class="w-full md:w-[400px] h-[220px] bg-gray-400 rounded-lg flex items-center justify-center">
              <span class="text-4xl text-white">▶</span>
            </div>
          </div>
        </div>

        <!-- Lineups -->
        <div v-if="selectedTab === 'lineups'" class="space-y-12 mt-10">
          <!-- Lineup 1 -->
          <div class="flex flex-col md:flex-row justify-between items-start gap-6">
            <div class="text-left max-w-md">
              <h3 class="font-bold text-xl mb-2 font-rajdhani">Bind A Site - Viper Lineup</h3>
              <p class="text-lg text-gray-300 font-rajdhani">Execution: Post-Plant<br />Covers default plant from A Short</p>
            </div>
            <div class="w-full md:w-[400px] h-[220px] bg-gray-400 rounded-lg flex items-center justify-center">
              <span class="text-4xl text-white">▶</span>
            </div>
          </div>

          <!-- Lineup 2 -->
          <div class="flex flex-col md:flex-row justify-between items-start gap-6">
            <div class="text-left max-w-md">
              <h3 class="font-bold text-xl mb-2 font-rajdhani">Ascent B Site - Sova Arrow</h3>
              <p class="text-lg text-gray-300 font-rajdhani">Info dart on back site from Mid<br />1 charge, 2 bounces</p>
            </div>
            <div class="w-full md:w-[400px] h-[220px] bg-gray-400 rounded-lg flex items-center justify-center">
              <span class="text-4xl text-white">▶</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
