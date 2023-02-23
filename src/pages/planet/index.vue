<script setup>
import { useRoute } from "vue-router";
import { onMounted, toRef } from "vue";
import useFilterPlanet from "@/composables/filterPlanet";

const route = useRoute();
const slug = route.params.slug;
console.log(route.params);

const { state, filterPlanette } = useFilterPlanet();

// TESTING
// const x = toRef(state, "selectPlanet");

filterPlanette(slug);
console.log(state.selectPlanet);
const { geology, images, name, overview, radius, revolution, rotation, structure, temperature } = state.selectPlanet;

//NOTE: i am accessing images.geology separately and don't need it in the obejct used to render the main and internal images
//NOTE: therefore i will make a new object that does NOT contain the geology property

//NOTE: making a new duplicate object of images called updated images so that images stays unaffected through property deletion
const updatedImages = { ...images };
// NOTE; deleting the property from our new duplicate object
delete updatedImages.geology
//TESTING to see if it works
console.log(updatedImages);
//PASS


const getImgURL = (imageName) => {
    return new URL(`../../assets/img/${imageName}`, import.meta.url);
}


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
    </div>
    <h2>{{ name }}</h2>
</template>


<style lang="scss" scoped>
h2 {
    color: black;
}
</style>