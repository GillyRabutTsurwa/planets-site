<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, toRef } from "vue";
import useFilterPlanet from "@/composables/filterPlanet";

const route = useRoute();
const slug = route.params.slug;
console.log(route.params);

const { state, filterPlanette } = useFilterPlanet();

// NOTE: refs for changing content on button click. look at toggleContent function
const currentContent = ref("");
const currentSource = ref("");


// TESTING
// const x = toRef(state, "selectPlanet");

filterPlanette(slug);
console.log(state.selectPlanet);
const { geology, images, name, overview, radius, revolution, rotation, structure, temperature } = state.selectPlanet;


const updatedImages = { ...images };
delete updatedImages.geology
console.log(updatedImages);


const getImgURL = (imageName) => {
    return new URL(`../../assets/img/${imageName}`, import.meta.url);
}

// NEW: toggle between content
// NOTE: will put these two into one function later

const toggleContent = (obj = overview) => {
    currentContent.value = obj.content;
    currentSource.value = obj.source;
}

onMounted(() => {
    toggleContent();
})


</script>

<template>
    <div class="planet-container">
        <figure>
            <!-- then in the template, i am using updatedImages, instead of images -->
            <img v-for="(currentImage, currentProperty) in updatedImages" :key="currentImage" :src="getImgURL(currentImage)"
                :alt="currentProperty">
            <!-- this below element will be my "pseudoelement" -->
            <img v-if="images.geology" :src="getImgURL(images.geology)" alt="">
        </figure>
        <article>
            <h2>{{ name }}</h2>
            <p>{{ currentContent }}</p>
            <!-- NOTE: will put buttons in loop much later -->
            <button @click="toggleContent(overview)">Overview</button>
            <button @click="toggleContent(structure)">Internal Structure</button>
            <button @click="toggleContent(geology)">Surface Geology</button>
        </article>
    </div>
    <h2>{{ name }}</h2>
</template>


<style lang="scss" scoped>
.planet-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin: 0 auto;
    max-width: 111rem;
}

// NOTE: will change later
figure {
    position: relative;
}
</style>