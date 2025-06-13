<script setup>
import { ref } from "vue";

const activeTab = ref("Bestiary");

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
        <!-- Text -->
        <div class="text-left">
          <h1 class="text-6xl font-bold mb-3 font-rajdhani">Repo</h1>
          <p class="text-2xl max-w-md font-medium font-rajdhani">
            Repo is a tactical extraction shooter that challenges players to
            navigate hostile zones, secure intel, and extract without being
            caught. Communication, stealth, and firepower are key to survival.
          </p>
        </div>

        <!-- Image -->
        <img
          src="../assets/images/repoplayer.png"
          alt="Repo Character"
          class="w-[300px] md:w-[400px]"
        />
      </section>

      <!-- Tab-style Navbar -->
      <section>
        <div
          class="flex justify-center pt-16 border-b border-gray-600 space-x-6"
        >
          <button
            @click="setTab('Bestiary')"
            :class="[
              'px-6 py-2 font-semibold transition-all duration-200',
              activeTab === 'Bestiary'
                ? 'border-b-4 border-white text-white'
                : 'text-gray-400 hover:text-white',
            ]"
          >
            Bestiary
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
          <div v-if="activeTab === 'Bestiary'" class="space-y-20 text-left">
            <div>
              <h2 class="text-3xl font-bold mb-4">Apex Predator</h2>
              <div class="flex justify-between">
                <p class="mb-4">
                  The Apex Predator is a towering biomechanical beast designed
                  to hunt high-value targets. It is rarely encountered, but when
                  it appears, it signifies the zone has reached critical threat
                  level. Unlike other enemies, the Apex doesn't patrol — it
                  tracks. It uses heat, noise, and line-of-sight data to
                  triangulate player locations. Once locked on, it won't stop
                  until the target is dead or out of the map. Its armor deflects
                  most standard ammo, and it shrugs off stun or shock effects.
                  The only real defense is avoidance — cutting power to confuse
                  its sensors, using terrain to hide your heat signature, and
                  moving quietly. If you're spotted, your best bet is to scatter
                  and regroup later. Some squads have managed to trap it in
                  destructible environments or lead it into ambushes, but
                  success is rare. The Apex Predator is a test of teamwork,
                  planning, and pure survival instinct.
                </p>
                <img
                  src="../assets/images/Repoapexpredator.png"
                  alt="Repo Sentry Drone"
                  class="w-[300px] md:w-[400px]"
                />
              </div>
            </div>

            <div>
              <h2 class="text-3xl font-bold mb-4">Upscream</h2>
              <div class="flex justify-between">
                <p class="mb-4">
                  The Upscream is a levitating horror that emits violent,
                  high-frequency sound waves. It hovers silently in upper
                  corridors or ceilings, remaining dormant until a player steps
                  within its sound field. Once triggered, it lets out a piercing
                  sonic shriek that disables equipment, causes disorientation,
                  and instantly alerts all nearby enemies. Its true danger isn't
                  direct combat — it's the chaos it causes. Weapons jam, HUDs
                  glitch, and team communication breaks down under the audio
                  pressure. If not silenced quickly, it can collapse an entire
                  stealth operation within seconds. Upscreams are vulnerable to
                  flashbangs and silenced sniper fire, but only during their
                  charge-up phase. If left alone, they regenerate and reposition
                  unpredictably. When entering vertical spaces or stairwells,
                  always scan above — if you hear static or distant ringing,
                  it's already too late.
                </p>
                <img
                  src="../assets/images/RepoUpscream.png"
                  alt="Repo Hunter Unit"
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
              Repo emphasizes stealth-based extraction gameplay. Players
              infiltrate high-risk areas to collect intel, loot, or eliminate
              targets, then must exfil before being overwhelmed.
            </p>
            <p class="mb-2">
              Weapons have weight and recoil mechanics, while sound plays a
              major role in detection. Inventory management, positioning, and
              awareness are all vital. Every shot or step can give away your
              location.
            </p>
            <p>
              Enemies include AI patrols, drones, and traps. Maps are
              randomized, and enemy behavior adapts to your actions.
            </p>
          </div>

          <div
            v-else-if="activeTab === 'Tips'"
            class="text-left max-w-3xl mx-auto"
          >
            <h2 class="text-3xl font-bold mb-4">Tips</h2>
            <ul class="list-disc ml-6 space-y-2">
              <li>Stick to shadows and avoid sprinting in open areas.</li>
              <li>Use suppressed weapons or melee to stay silent.</li>
              <li>
                Always have an escape route planned before grabbing key
                objectives.
              </li>
              <li>
                Team up with coordinated players who can watch flanks and scout.
              </li>
              <li>
                Learn AI patrol patterns and use distractions to divide enemies.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
