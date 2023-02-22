<script setup>
import {useRoute} from "vue-router";
import { onMounted, toRef } from "vue";
import useFilterPlanet from "@/composables/filterPlanet";

const route = useRoute();
const slug = route.params.slug;
console.log(route.params);

const { state, filterPlanette } = useFilterPlanet();
const { name } = state.selectPlanet;

// TESTING
const x = toRef(state, "selectPlanet");
filterPlanette(slug);
console.log(state.selectPlanet);
const { overview } = state.selectPlanet;
console.log(overview)
onMounted(() => {
})


</script>

<template>
    <h2>{{ slug }}</h2>
    <h4 v-for="(value, propertyName) in state.selectPlanet" :key="propertyName">
        <span></span> {{ propertyName }}: {{ value }}
    </h4>
</template>


<style lang="scss" scoped>
h2 {
    color: black;
}
</style>