<script setup>
import Header from "@/components/Header.vue";
import useFilterPlanet from "@/composables/filterPlanet";
const { state } = useFilterPlanet();
</script>

<template>
  <Header :links="state.planets" />
  <RouterView :key="$route.params" />
</template>

<style lang="scss">
@import url(./assets/sass/main.scss)
</style>
