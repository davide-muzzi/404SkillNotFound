<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

const selectedTab = ref("tips");

const acceptedTips = ref([]);
const acceptedLineups = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/accepted");
    acceptedTips.value = response.data.filter((entry) => entry.type === "tip");
    acceptedLineups.value = response.data.filter((entry) => entry.type === "lineup");
  } catch (error) {
    console.error("Fehler beim Laden der Tipps/Lineups:", error);
  }
});

</script>

<template>
  <div class="items-center text-white pt-[70px] flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
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
  <div
    v-for="tip in acceptedTips"
    :key="tip.id"
    class="flex flex-col md:flex-row justify-between items-start gap-6"
  >
    <div class="text-left max-w-md">
      <h3 class="font-bold text-xl mb-2 font-rajdhani">{{ tip.title }}</h3>
      <p class="text-lg text-gray-300 font-rajdhani">{{ tip.description }}</p>
    </div>
    <div class="w-full md:w-[400px] h-[220px]">
      <video
        v-if="tip.mediaUrl.endsWith('.mp4')"
        :src="tip.mediaUrl"
        controls
        class="w-full h-full rounded-lg object-cover"
      />
      <img
        v-else
        :src="tip.mediaUrl"
        alt="tip media"
        class="w-full h-full rounded-lg object-cover"
      />
    </div>
  </div>
</div>


        <!-- Lineups -->
        <div v-if="selectedTab === 'lineups'" class="space-y-12 mt-10">
  <div
    v-for="lineup in acceptedLineups"
    :key="lineup.id"
    class="flex flex-col md:flex-row justify-between items-start gap-6"
  >
    <div class="text-left max-w-md">
      <h3 class="font-bold text-xl mb-2 font-rajdhani">{{ lineup.title }}</h3>
      <p class="text-lg text-gray-300 font-rajdhani">{{ lineup.description }}</p>
    </div>
    <div class="w-full md:w-[400px] h-[220px]">
      <video
        v-if="lineup.mediaUrl.endsWith('.mp4')"
        :src="lineup.mediaUrl"
        controls
        class="w-full h-full rounded-lg object-cover"
      />
      <img
        v-else
        :src="lineup.mediaUrl"
        alt="lineup media"
        class="w-full h-full rounded-lg object-cover"
      />
    </div>
  </div>
</div>

      </div>
      <div class="flex justify-center mt-20 mb-10">
  <router-link to="/submit">
    <button class="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition font-rajdhani">
      Add Tip or Lineup
    </button>
  </router-link>
</div>
    </div>
  </div>
</template>
