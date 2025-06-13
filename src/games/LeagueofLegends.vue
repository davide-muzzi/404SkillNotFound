<script setup>
import { ref } from "vue";

const activeTab = ref("Champions");

function setTab(tab) {
  activeTab.value = tab;
}
</script>

<template>
  <div
    class="items-center text-white pt-[70px] flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="w-full max-w-6xl">
      <!-- Header Section -->
      <section
        class="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0"
      >
        <div class="text-left">
          <h1 class="text-6xl font-bold mb-3 font-rajdhani">
            League of Legends
          </h1>
          <p class="text-2xl max-w-md font-medium font-rajdhani">
            League of Legends is a strategic 5v5 MOBA where players pick unique
            champions and compete in intense matches to destroy the enemy nexus.
            The game demands teamwork, map awareness, and precise mechanics.
          </p>
        </div>

        <img
          src="../assets/images/MUNDO.png"
          alt="League of Legends Scene"
          class="w-[300px] md:w-[400px]"
        />
      </section>

      <!-- Tab-style Navbar -->
      <section>
        <div
          class="flex justify-center pt-16 border-b border-gray-600 space-x-6"
        >
          <button
            @click="setTab('Champions')"
            :class="[
              'px-6 py-2 font-semibold transition-all duration-200',
              activeTab === 'Champions'
                ? 'border-b-4 border-white text-white'
                : 'text-gray-400 hover:text-white',
            ]"
          >
            Champions
          </button>
          <button
            @click="setTab('Game mechanics')"
            :class="[
              'px-6 py-2 font-semibold transition-all duration-200',
              activeTab === 'Game mechanics'
                ? 'border-b-4 border-white text-white'
                : 'text-gray-400 hover:text-white',
            ]"
          >
            Game mechanics
          </button>
          <button
            @click="setTab('Tips')"
            :class="[
              'px-6 py-2 font-semibold transition-all duration-200',
              activeTab === 'Tips'
                ? 'border-b-4 border-white text-white'
                : 'text-gray-400 hover:text-white',
            ]"
          >
            Tips
          </button>
        </div>

        <!-- Tab Content -->
        <div class="text-center mt-10 text-xl font-rajdhani">
          <div v-if="activeTab === 'Champions'" class="space-y-20 text-left">
            <!-- Zed -->
            <div>
              <h2 class="text-3xl font-bold mb-4">Zed</h2>
              <div class="flex justify-between">
                <p class="mb-4">
                  Zed is a deadly assassin who excels at eliminating targets
                  before they can react. Using shadows, he can blink across the
                  battlefield and burst enemies with a deadly combo. His
                  ultimate, Death Mark, leaves a delayed burst that triggers
                  after a few seconds. He thrives in the mid lane and is
                  dangerous when fed, but vulnerable when his cooldowns are used
                  poorly.
                </p>
                <img
                  src="../assets/images/ZED.png"
                  alt="Zed Champion"
                  class="w-[300px] md:w-[400px]"
                />
              </div>
            </div>

            <!-- Lux -->
            <div>
              <h2 class="text-3xl font-bold mb-4">Lux</h2>
              <div class="flex justify-between">
                <p class="mb-4">
                  Lux is a long-range mage known for her burst damage and crowd
                  control. She can poke enemies from afar, root them with Light
                  Binding, and finish with a powerful laser ultimate. Great for
                  mid or support roles, Lux excels at zoning and harassing
                  enemies. She’s fragile, so positioning and vision are key to
                  staying alive.
                </p>
                <img
                  src="../assets/images/Character.png"
                  alt="Lux Champion"
                  class="w-[300px] md:w-[400px]"
                />
              </div>
            </div>
          </div>

          <div
            v-else-if="activeTab === 'Game mechanics'"
            class="text-left max-w-3xl mx-auto"
          >
            <h2 class="text-3xl font-bold mb-4">Game Mechanics</h2>
            <p class="mb-2">
              League of Legends is based on map control, champion abilities, and
              team synergy. Each match features farming minions for gold, buying
              items, and working as a team to control objectives like dragons,
              turrets, and Baron Nashor.
            </p>
            <p class="mb-2">
              Every champion has a passive, three abilities (Q, W, E), and an
              ultimate (R). Map awareness and vision control are essential to
              avoid ganks and secure kills.
            </p>
            <p>
              The goal is to push through enemy defenses and destroy the Nexus —
              but winning lanes and staying coordinated are just as important.
            </p>
          </div>

          <div
            v-else-if="activeTab === 'Tips'"
            class="text-left max-w-3xl mx-auto"
          >
            <h2 class="text-3xl font-bold mb-4">Tips</h2>
            <ul class="list-disc ml-6 space-y-2">
              <li>
                Always ward bushes and jungle entrances — vision wins games.
              </li>
              <li>Don’t chase kills blindly — objectives win matches.</li>
              <li>Watch the minimap every few seconds to avoid ganks.</li>
              <li>Ping often to communicate — even without voice chat.</li>
              <li>
                Play to your champion’s strengths — don’t force fights when
                behind.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
