<script setup>
const props = defineProps({
    links: {
        type: Array,
        required: true
    }
});

console.log(props.links); //NOTE: looks good
const links = props.links;
</script>

<template>
    <header class="header">
        <RouterLink to="/">
            <h1 class="header__title">The Planets</h1>
        </RouterLink>

        <nav class="header__nav">
            <ul class="header__nav--list">
                <li v-for="(currentLink, index) in links" :key="index">
                    <RouterLink :to="`/${currentLink.name.toLowerCase()}`">
                        {{ currentLink.name }}
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>


<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 8.5rem;
    padding: 0 6rem;

    border-bottom: 1px solid rgb(55, 55, 78);

    &__title {
        font-family: "Antonio", sans-serif;
        text-transform: uppercase;
        font-size: 2.5rem;
        font-weight: 400;
    }

    &__nav {
        // TeSTING:
        font-family: "Spartan", sans-serif;

        text-transform: uppercase;
        font-size: 1.1rem;
        font-weight: 600;

        &--list {
            list-style: none;
            display: flex;

            li {
                margin-left: 2rem;

                a {

                    &,
                    &:link,
                    &:visited {
                        color: variables.$colour-links;
                    }

                    &:hover,
                    &:active {
                        color: variables.$colour-primary;
                    }
                }
            }
        }
    }
}
</style>