<script setup>
import { ref } from "vue";

const activeTab = ref("Car Types");

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
          <h1 class="text-6xl font-bold mb-3 font-rajdhani">Rocket League</h1>
          <p class="text-2xl max-w-md font-medium font-rajdhani">
            Rocket League is a fast-paced sports game where players use
            rocket-powered vehicles to hit a giant ball into the opposing team’s
            goal. It blends soccer with high-speed driving in competitive
            multiplayer arenas.
          </p>
        </div>

        <img
          src="../assets/images/Rocketleagueplayer.png"
          alt="Rocket League Car"
          class="w-[300px] md:w-[400px]"
        />
      </section>

      <!-- Tab-style Navbar -->
      <section>
        <div
          class="flex justify-center pt-16 border-b border-gray-600 space-x-6"
        >
          <button
            @click="setTab('Car Types')"
            :class="[
              'px-6 py-2 font-semibold transition-all duration-200',
              activeTab === 'Car Types'
                ? 'border-b-4 border-white text-white'
                : 'text-gray-400 hover:text-white',
            ]"
          >
            Car Types
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
          <div v-if="activeTab === 'Car Types'" class="space-y-20 text-left">
            <!-- Octane -->
            <div>
              <h2 class="text-3xl font-bold mb-4">Octane</h2>
              <div class="flex justify-between">
                <p class="mb-4">
                  The Octane is the most widely used car in Rocket League and is
                  known for its balanced hitbox, precise turning, and strong
                  aerial presence. It is a favorite among pros and casuals alike
                  for its versatility and control. Whether you're dribbling,
                  flicking, or challenging in 50/50s, the Octane handles it all
                  with consistency.
                </p>
                <img
                  src="../assets/images/octanenobackground.png"
                  alt="Octane"
                  class="w-[300px] md:w-[400px]"
                />
              </div>
            </div>

            <!-- Fennec -->
            <div>
              <h2 class="text-3xl font-bold mb-4">Fennec</h2>
              <div class="flex justify-between">
                <p class="mb-4">
                  The Fennec shares the same hitbox as the Octane but offers a
                  boxier, cleaner shape that some players prefer for power shots
                  and blocking plays. It’s also popular at high ranks due to its
                  solid feel during challenges and great control in tight
                  spaces.
                </p>
                <img
                  src="../assets/images/fennectransparentfinnaly.png"
                  alt="Fennec"
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
              Rocket League combines car control, physics, and ball mechanics in
              a competitive environment. Mastering boosts, flips, aerials, and
              rotations is essential to progress in rank.
            </p>
            <p class="mb-2">
              Every car has a unique hitbox, affecting how it interacts with the
              ball. Boost pads regenerate boost over time and are critical for
              fast recovery and high-speed plays.
            </p>
            <p>
              Positioning and rotations are key — success often depends more on
              being in the right place than on mechanical skill alone.
            </p>
          </div>

          <div
            v-else-if="activeTab === 'Tips'"
            class="text-left max-w-3xl mx-auto"
          >
            <h2 class="text-3xl font-bold mb-4">Tips</h2>
            <ul class="list-disc ml-6 space-y-2">
              <li>Rotate back post and avoid ball-chasing.</li>
              <li>Use quick chat commands to communicate with teammates.</li>
              <li>Practice aerials in free play and custom training.</li>
              <li>Don't overcommit — maintain good spacing in 2v2 and 3v3.</li>
              <li>Customize your camera settings for better control.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
