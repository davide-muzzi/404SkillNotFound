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
          <h1 class="text-6xl font-bold mb-3 font-rajdhani">Lethal Company</h1>
          <p class="text-2xl max-w-md font-medium font-rajdhani">
            Lethal Company is a co-op survival horror game where up to four
            players work for "The Company" to collect scrap from abandoned,
            industrialized moons
          </p>
        </div>

        <!-- Image -->
        <img
          src="../assets/images/Lethalcompanyplayer.png"
          alt="Lethal Company Player"
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

        <!-- Tab Content (Optional Preview) -->
        <div class="text-center mt-10 text-xl font-rajdhani">
          <div v-if="activeTab === 'Bestiary'">
            <div class="text-left">
              <b>Bunker spider</b>
              <div class="flex justify-between">
                The Bracken, also known as the Flower Man, is a shadowy humanoid
                creature that can creep up behind you silently, waiting for the
                moment to snap your neck when you least expect it. They can
                spawn on every moon, although 56-Vow has the highest spawn rate.
                They deal immediate death once they attempt to snap your neck.
                Trying to kill one of them is not impossible, though. You could
                deal 3-5 hits to them using a shovel or sign in order to kill
                them, causing them to sink into the floor and vaporize. Here's
                how you can deal with them: The best chance of survival is to
                completely avoid them. Once you spot a Bracken, make sure to
                look away from it as soon as possible, as staring at it will
                aggro it. It will then proceed to back up, but it will return.
                The more you see it, the more aggro it will become, meaning it
                is more likely to attack you at a relatively high pace even at a
                glance. If you assume it is about to kill you, you'd better
                start running and try to run around corners to evade it, or even
                better, get out of the facility. (Tip: They can open doors in
                just 1.25 seconds, and zap guns are basically useless)
                <img
                  src="../assets/images\Lethalcompanybestiarybracken.png"
                  alt="Lethal Company Bracken"
                  class="w-[300px] md:w-[400px]"
                />
              </div>
            </div>
            <div class="pt-20px text-left">
              <b>Bunker spider</b>
              <div class="flex justify-between">
                Bunker Spider The Bunker Spider is a large arachnid found on
                every moon, with the highest chance of occurrence being on
                41-Experimentation. They randomly spawn in the facility, where
                they will lay down their spider webs, slowing down anyone trying
                to trespass it. Luckily, not only can you kill the spider with 5
                hits using the shovel or sign (it will kill you in 2 hits
                though), but you can also remove the spider webs that way.
                Here's how you can deal with it: Bunker spiders stay in one area
                of the facility if they're in their passive state. Once they
                spot a player, they will start crawling towards you, but lucky
                you, they're not as fast as your sprinting pace, so you can
                easily outrun them. Once you lose the spider, it will return to
                its nest. Another important note on them is their height, as
                they're considered ankle biters. Therefore, you can just stand
                on an elevated platform or a rail in order to avoid getting
                killed (where you can easily kill it too). (Tip: Avoid getting
                into its webs, as that will reveal your location to them).
                <img
                  src="../assets/images\Lethalcompanybestiaryspider.png"
                  alt="Lethal Company Spider"
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
              In Lethal Company, your team collects scrap under time pressure
              while avoiding monsters. Communication via walkie-talkie, proper
              timing, and learning creature behavior are essential for survival.
            </p>
            <p class="mb-2">
              Use your equipment wisely – flashlights have limited battery, and
              zap guns are weak against some enemies. Watch the clock, and don’t
              overextend your runs.
            </p>
            <p>
              Each facility has unique hazards like locked doors, switches,
              traps, and layout complexity. Coordinate roles – one player can
              stay at the ship to monitor and guide others remotely.
            </p>
          </div>

          <div
            v-else-if="activeTab === 'Tips'"
            class="text-left max-w-3xl mx-auto"
          >
            <h2 class="text-3xl font-bold mb-4">Survival Tips</h2>
            <ul class="list-disc ml-6 space-y-2">
              <li>
                Always check the quota and time remaining before exploring.
              </li>
              <li>
                Don’t be greedy – exiting with some loot is better than dying
                with lots.
              </li>
              <li>
                Use your voice carefully – some monsters respond to sound.
              </li>
              <li>Learn the map layout and mark key escape paths mentally.</li>
              <li>
                When alone, avoid long hallways and always keep your back safe.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
