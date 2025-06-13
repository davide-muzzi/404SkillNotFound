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
        <div class="text-left">
          <h1 class="text-6xl font-bold mb-3 font-rajdhani">Phasmophobia</h1>
          <p class="text-2xl max-w-md font-medium font-rajdhani">
            Phasmophobia is a cooperative ghost-hunting game where players
            investigate paranormal activity using a variety of tools and try to
            identify the ghost type before it's too late. Teamwork, observation,
            and staying calm are crucial.
          </p>
        </div>

        <img
          src="../assets/images/phasmaphobiaghost.png"
          alt="Phasmophobia Player"
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
            Ghosts
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
            <!-- Revenant -->
            <div>
              <h2 class="text-3xl font-bold mb-4">Revenant</h2>
              <div class="flex justify-between">
                <p class="mb-4">
                  The Revenant is one of the deadliest ghosts in Phasmophobia.
                  It moves extremely fast when it has a target and is known for
                  aggressively chasing players during a hunt. If a player is
                  seen, there’s almost no escape. When idle, however, it moves
                  very slowly. The key to surviving a Revenant is hiding —
                  running won’t work once you’re spotted.
                </p>
                <img
                  src="../assets/images/phasmaphobiaghost1.png"
                  alt="Revenant Ghost"
                  class="w-[300px] md:w-[400px]"
                />
              </div>
            </div>

            <!-- Mimic -->
            <div>
              <h2 class="text-3xl font-bold mb-4">Mimic</h2>
              <div class="flex justify-between">
                <p class="mb-4">
                  The Mimic is a unique ghost that can imitate the traits of any
                  other ghost in the game, making it tricky to identify. It
                  causes confusion by showing evidence of multiple ghost types.
                  Players must look for spirit orbs in combination with freezing
                  temperatures and spirit box responses to correctly confirm a
                  Mimic. Watch out — what looks like a harmless ghost might
                  suddenly turn aggressive.
                </p>
                <img
                  src="../assets/images/phasmaphobiaghost2.png"
                  alt="Mimic Ghost"
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
              Phasmophobia is built around gathering evidence using tools like
              the EMF Reader, Spirit Box, UV Light, and Ghost Writing Book to
              determine the ghost type. Each ghost leaves behind different
              combinations of evidence.
            </p>
            <p class="mb-2">
              Ghosts interact with the environment and become more aggressive as
              the investigation progresses. Players must manage sanity, as low
              sanity increases the likelihood of a hunt.
            </p>
            <p>
              Communication via voice is both a feature and a danger — ghosts
              can hear players and even respond, so staying quiet at times is
              vital.
            </p>
          </div>

          <div
            v-else-if="activeTab === 'Tips'"
            class="text-left max-w-3xl mx-auto"
          >
            <h2 class="text-3xl font-bold mb-4">Tips</h2>
            <ul class="list-disc ml-6 space-y-2">
              <li>
                Start with basic tools like EMF and thermometer to locate the
                ghost room.
              </li>
              <li>Always keep a crucifix nearby once activity rises.</li>
              <li>Don't talk during a hunt — the ghost hears you.</li>
              <li>
                Watch your sanity — taking pills early can save your life later.
              </li>
              <li>
                Mark ghost evidence in the journal as soon as you find it.
              </li>
              <li>
                Use this Cheat sheet to learn spesific ghost and hunt types :
                <a href="https://phasmophobia.seancsapps.com/" class="font-bold"
                  >click here</a
                >
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
