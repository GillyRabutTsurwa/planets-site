<script setup>
import Header from "@/components/Header.vue";
import useFilterPlanet from "@/composables/filterPlanet";
const { state } = useFilterPlanet();
</script>

<template>
  <Header :links="state.planets" />
  <!-- line below very important in making RouterLinks able to update data -->
  <!-- thanks to link here: https://stackoverflow.com/questions/62868980/vue-js-router-link-not-updating -->
  <RouterView :key="$route.params" />
</template>

<style lang="scss">
@import url(./assets/sass/main.scss)
</style>
