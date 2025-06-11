<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Fuse from "fuse.js";

const games = [
  { name: "Valorant", description: "Ability shooter", route: "/valorant", image: "/src/assets/images/valorant_homepage.png" },
  { name: "Rocket League", description: "Flips & cars", route: "/rocketleague", image: "/src/assets/images/rocketleague_homepage.jpg" },
  { name: "Lethal Company", description: "Teamwork & fear", route: "/lethalcompany", image: "/src/assets/images/lethalcompany_homepage.jpg" },
  { name: "R.E.P.O", description: "Extracting items", route: "/repo", image: "/src/assets/images/repo_homepage.png" },
  { name: "Apex Legends", description: "Battle royale shooter", route: "/apex", image: "/src/assets/images/apex_homepage.jpg" },
  { name: "Call of Duty", description: "Military shooter", route: "/cod", image: "/src/assets/images/cod_homepage.jpg" },
  { name: "Fortnite", description: "Building & shooting", route: "/fortnite", image: "/src/assets/images/fortnite_homepage.jpg" },
  { name: "Minecraft", description: "Block-building adventure", route: "/minecraft", image: "/src/assets/images/minecraft_homepage.jpg" },
  { name: "League of Legends", description: "MOBA strategy game", route: "/leagueoflegends", image: "/src/assets/images/leagueoflegends_homepage.jpg" },
  { name: "Counter-Strike", description: "Tactical shooter", route: "/counterstrike", image: "/src/assets/images/counterstrike_homepage.jpg" },
];

const fuse = new Fuse(games, {
  keys: ["name", "description"],
  threshold: 0.4,
});

const route = useRoute();
const query = ref(route.query.q || "");
const results = ref([]);

function filterResults() {
  const q = query.value;
  if (!q) {
    results.value = [];
    return;
  }
  const searchResults = fuse.search(q);
  results.value = searchResults.map(result => result.item);
}

watch(() => route.query.q, (newQuery) => {
  query.value = newQuery || "";
  filterResults();
});

onMounted(() => {
  filterResults();
});
</script>

<template>
  <div class="min-h-screen px-6 pt-24 text-white max-w-6xl mx-auto">
    <h1 class="text-4xl font-bold mb-10">Search Results for "{{ query }}"</h1>

    <div v-if="results.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <router-link
        v-for="game in results"
        :key="game.name"
        :to="game.route"
        class="transform transition-transform duration-300 hover:scale-105"
      >
        <div>
          <img :src="game.image" :alt="game.name" class="w-48 h-48 mx-auto rounded-xl mb-3 object-cover" />
          <h3 class="text-xl font-bold">{{ game.name }}</h3>
          <p class="text-sm text-gray-300">{{ game.description }}</p>
        </div>
      </router-link>
    </div>

    <p v-else class="text-gray-400">No results found.</p>
  </div>
</template>
