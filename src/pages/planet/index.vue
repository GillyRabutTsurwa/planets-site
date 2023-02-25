<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, watch, toRef } from "vue";
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
delete updatedImages.geology;
console.log(updatedImages);

const getImgURL = (imageName) => {
    return new URL(`../../assets/img/${imageName}`, import.meta.url);
};

// NEW: toggle between content
// NOTE: will put these two into one function later

const toggleContent = (obj = overview, e) => {
    currentContent.value = obj.content;
    currentSource.value = obj.source;

    if (e) {
        console.log(e.target.dataset.type)
    }
    else {
        console.log("no e")
    }
};

//TESTING: j'essaie de retrouver info de l'objet
const imgoverview = ref(null);

onMounted(() => {
    toggleContent();
    console.log(imgoverview.value.dataset.type);
});

// NOTE: I finally get what this code does
watch(currentContent, (newValue, oldValue) => {
    console.log("New: " + newValue);
    console.log("Old: " + oldValue);
})
</script>

<template>
    <div class="planet-container">
        <figure>
            <img v-if="images.planet" :src="getImgURL(images.planet)" ref="imgoverview" data-type="overview" alt="" />
            <img v-else :src="getImgURL(images.internal)" ref="img-internal" alt="">
            <!-- this will be our "pseudoelement" -->
            <img v-if="images.planet && images.geology" :src="getImgURL(images.geology)" ref="img-geology" alt="" />
        </figure>
        <article>
            <h2>{{ name }}</h2>
            <p>{{ currentContent }}</p>
            <div class="source">
                <span class="source__label">Source:</span>
                <a :href="currentSource" target="_blank" class="source__link">
                    <span class="source__link--text">Wikipedia</span>
                    <svg class="source__link--icon" color="hsl(240, 6%, 54%)"
                        style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 12px; height: 12px;"
                        viewBox="0 0 1024 1024">
                        <path
                            d="M967.68 56.32c-37.547-37.547-82.773-56.32-135.68-56.32h-640c-52.907 0-98.133 18.773-135.68 56.32s-56.32 82.773-56.32 135.68v640c0 52.907 18.773 98.133 56.32 135.68s82.773 56.32 135.68 56.32h640c52.907 0 98.133-18.773 135.68-56.32s56.32-82.773 56.32-135.68v-640c0-52.907-18.773-98.133-56.32-135.68zM853.333 533.333c0.028 0.556 0.043 1.207 0.043 1.861 0 17.062-10.722 31.619-25.796 37.301l-0.274 0.091c-4.914 2.056-10.616 3.3-16.595 3.413l-0.045 0.001c-0.273 0.007-0.595 0.011-0.918 0.011-11.496 0-21.85-4.888-29.096-12.7l-0.023-0.025-96-96-355.925 356.011c-7.489 7.841-18.026 12.716-29.701 12.716-0.118 0-0.236-0-0.354-0.001l0.018 0c-0.111 0.001-0.241 0.002-0.372 0.002-11.664 0-22.19-4.876-29.65-12.7l-0.016-0.016-67.925-68.011c-7.84-7.475-12.716-18.001-12.716-29.664 0-0.101 0-0.202 0.001-0.303l-0 0.015c-0.001-0.111-0.002-0.241-0.002-0.372 0-11.664 4.876-22.19 12.7-29.65l0.016-0.016 356.011-356.011-96-96c-13.824-12.8-16.896-28.416-9.387-46.592 5.772-15.35 20.331-26.074 37.394-26.074 0.684 0 1.364 0.017 2.040 0.051l-0.095-0.004h320c11.52 0 21.589 4.267 30.037 12.629 7.791 7.469 12.632 17.961 12.632 29.584 0 0.159-0.001 0.318-0.003 0.477l0-0.024v320z">
                        </path>
                    </svg>
                </a>
            </div>
            <!--  -->
            <div class="buttons">
                <!-- NOTE: will put buttons in loop much later -->
                <button @click="toggleContent(overview, $event)" data-type="overview">
                    <span>01</span>
                    <span>Overview</span>
                </button>
                <button @click="toggleContent(structure, $event)" data-type="internal">
                    <span>02</span>
                    <span>Internal Structure</span>
                </button>
                <button @click="toggleContent(geology, $event)" data-type="geology">
                    <span>03</span>
                    <span>Surface Geology</span>
                </button>
            </div>
        </article>
        <div class="stats">
            <div v-for="(currentValue, currentProperty) in { rotation, revolution, radius, temperature }"
                :key="currentValue">
                <h4>{{ currentProperty }}</h4>
                <span>{{ currentValue }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.planet-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    row-gap: 2rem;
    margin: 0 auto;
    max-width: 110rem;
}

// NOTE: will change later
figure {
    position: relative;
    grid-column: 1 / 2;

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

article {
    align-self: center;

    h2 {
        font-family: "Antonio", sans-serif;
        font-size: 8rem;
        text-transform: uppercase;
        font-weight: 500;
    }

    p {
        margin-top: 2.5rem;
        color: rgb(131, 131, 145);
        line-height: 2.5rem;
    }

    .source {
        margin-top: 4rem;
        color: rgb(131, 131, 145);

        &__label {
            margin-right: 0.75rem;
        }

        &__link {
            font-weight: 600;
            text-decoration: underline;

            &--text {
                margin-right: 1rem;
            }

            &--icon {
                display: inline-block;
                stroke: currentcolor;
                fill: currentcolor;
                width: 12px;
                height: 12px;
            }
        }
    }
}

.buttons {
    grid-column: 2 / -1;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    button {
        cursor: pointer;
        background-color: transparent;
        border: 1px solid rgb(131, 131, 145);
        color: #f4f4f4;
        font-size: 1.2rem;
        letter-spacing: 0.16rem;
        line-height: 25px;
        padding: 1rem 2.5rem;

        font-family: "Spartan", sans-serif;
        font-weight: 600;
        text-transform: uppercase;

        margin-top: 2rem;

        display: flex;
        justify-content: space-between;

        span {
            &:first-child {}

            &:last-child {
                margin-right: auto;
                margin-left: 3rem;
            }
        }

    }
}

.stats {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 4rem;
    justify-content: space-around;
    align-items: center;

    div {
        border: 1px solid rgb(55, 55, 78);
        padding: 2.5rem 3rem;

        h4 {
            font-size: 1.1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 1rem;
        }

        span {
            font-family: "Antonio", sans-serif;
            text-transform: uppercase;
            font-size: 4rem;
            letter-spacing: -1.5px;
        }
    }
}
</style>
