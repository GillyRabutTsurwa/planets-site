<script setup>
import useFilterPlanet from "@/composables/filterPlanet";
const { state } = useFilterPlanet();
</script>

<template>
  <div>
    <RouterLink v-for="(currentLink, index) in state.planets" :key="index" :to="`/${currentLink.name.toLowerCase()}`">
      {{currentLink.name}}
    </RouterLink>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </div>
  <!-- <code>{{ store.planets }}</code> -->
  <RouterView :key="$route.params"/>
</template>

<style lang="scss" scoped>
div {
  background-color: variables.$default;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
