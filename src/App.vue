<script setup>
import {usePlanetsStore} from "./store/planets";

  const store = usePlanetsStore();
  const planets = store.planets;
  console.log(planets);
  planets.forEach((currentPlanet) => {
    console.log(currentPlanet.name)
  })
</script>

<template>
  <div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </div>
  <RouterView/>
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
