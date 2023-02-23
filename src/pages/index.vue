<script setup>
import neptune from '@/assets/img/planet-neptune.svg' // => or relative path
// import sun from "../assets/img/sun.png";
//NOTE: not using store anymore et je sais pas common passer les données comme proprietaire depuis un router-view
import useFilterPlanet from "@/composables/filterPlanet";
const sun = new URL("../assets/img/sun.png", import.meta.url);
const imageUrl = new URL("@/assets/img/planet-uranus.svg", import.meta.url);
const { state } = useFilterPlanet();

const getImgURL = (imageName) => {
    return new URL(`../assets/img/planet-${imageName}.svg`, import.meta.url);
}
</script>
        
<template>
    <div class="canvas">
        <!-- <img :src="imageUrl" alt="getdeez"> -->
        <div class="sun"></div>
        <RouterLink v-for="(currentPlanet, index) in state.planets" :key="index"
            :to="`/${currentPlanet.name.toLowerCase()}`" :class="`planet-${currentPlanet.name.toLowerCase()}`">
        </RouterLink>
    </div>
</template>


<style lang="scss" scoped>
.canvas {
    position: relative;
    width: 100%;
    height: calc(100% - 8.5rem); //@note - 8.5rem = height header. wait is there a difference between that and height: 100%; dans ce cas-ci ?

    .sun {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 80px;
        width: 80px;
        border-radius: 1000px;
        background-image: url("../assets/img/sun.png");
        background-size: cover;
        box-shadow: 0 0 10px 2px rgb(255 107 0 / 40%), 0 0 22px 11px rgb(255 203 0 / 13%);
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    // NOTE: class names that starts with planet. ie: planet-mercury, planet-earth etc
    //NOTE: just used this to target all the links together and put the same styles on them.
    a[class^="planet-"] {
        // a {
        position: absolute;
        top: 50%;
        left: 50%;
        border: 1px solid rgba(102, 166, 229, 0.12);
        border-radius: 1000px;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        -webkit-transition: border 300ms ease;
        transition: border 300ms ease;

        &::before {
            position: absolute;
            content: '';
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            border-radius: 100px;
            -webkit-transition: -webkit-transform 300ms ease;
            -webkit-transition: transform 300ms ease;
            transition: transform 300ms ease;
        }

        &:hover::before {
            -webkit-transform: scale(1.5) translate(-50%, -50%);
            -ms-transform: scale(1.5) translate(-50%, -50%);
            transform: scale(1.5) translate(-50%, -50%);
        }

    }

    .planet {

        //NOTEIMPORTANT: there is no planet class. this is so i can concatenate the unique classnames on here via nesting
        &-mercury {
            width: 100px;
            height: 100px;
            -webkit-animation: orbit 7.1867343561s linear infinite;
            animation: orbit 7.1867343561s linear infinite;
            z-index: 100;

            &::before {
                height: 8px;
                width: 8px;
                background-image: url("../assets/img/planet-mercury.svg");
                background-size: cover;
            }

            &:hover {
                border: 1px solid #419db9;
            }
        }

        &-venus {
            width: 130px;
            height: 130px;
            -webkit-animation: orbit 18.4555338265s linear infinite;
            animation: orbit 18.4555338265s linear infinite;
            z-index: 99;

            &::before {
                height: 15px;
                width: 15px;
                background-image: url("../assets/img/planet-venus.svg");
                background-size: cover;
            }

            &:hover {
                border: 1px solid #eda44a;
            }
        }

        &-earth {
            width: 175px;
            height: 175px;
            -webkit-animation: orbit 30s linear infinite;
            animation: orbit 30s linear infinite;
            z-index: 98;

            &::before {
                width: 16px;
                height: 16px;
                background-image: url("../assets/img/planet-earth.svg");
                background-size: cover;

            }

            &:hover {
                border: 1px solid #6f2ed6;
            }
        }

        &-mars {
            width: 220px;
            height: 220px;
            -webkit-animation: orbit 56.4261314589s linear infinite;
            animation: orbit 56.4261314589s linear infinite;
            z-index: 97;

            &::before {
                width: 12px;
                height: 12px;
                background-image: url("../assets/img/planet-mars.svg");
                background-size: cover;

            }

            &:hover {
                border: 1px solid #d14e33;
            }
        }

        &-jupiter {
            width: 370px;
            height: 370px;
            -webkit-animation: orbit 355.7228171013s linear infinite;
            animation: orbit 355.7228171013s linear infinite;
            z-index: 96;

            &::before {
                width: 36px;
                height: 36px;
                background-image: url("../assets/img/planet-jupiter.svg");
                background-size: cover;
            }

            &:hover {
                border: 1px solid #d93b36
            }
        }

        &-saturn {
            width: 470px;
            height: 470px;
            -webkit-animation: orbit 882.6952471456s linear infinite;
            animation: orbit 882.6952471456s linear infinite;
            z-index: 95;

            &::before {
                width: 55px;
                height: 40px;
                background-image: url("../assets/img/planet-saturn.svg");
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
            }

            &:hover {
                border: 1px solid #cb5020
            }
        }

        &-uranus {
            width: 550px;
            height: 550px;
            -webkit-animation: orbit 2512.4001967933s linear infinite;
            animation: orbit 2512.4001967933s linear infinite;
            z-index: 94;

            &::before {
                width: 20px;
                height: 20px;
                background-image: url("../assets/img/planet-uranus.svg");
                background-size: cover;
            }

            &:hover {
                border: 1px solid #1ec2a4
            }
        }

        &-neptune {
            width: 660px;
            height: 660px;
            -webkit-animation: orbit 4911.7838624549s linear infinite;
            animation: orbit 4911.7838624549s linear infinite;
            z-index: 93;

            &::before {
                width: 20px;
                height: 20px;
                background-image: url("../assets/img/planet-neptune.svg");
                background-size: cover;
            }

            &:hover {
                border: 1px solid hsl(222, 87%, 56%);
            }

        }

    }
}

img {
    width: 50rem;
    height: 50rem;
    z-index: 10000;
}

//NOTE: orbit animation
@keyframes orbit {
    0% {
        -webkit-transform: translate(-50%, -50%) rotate(0deg);
        -ms-transform: translate(-50%, -50%) rotate(0deg);
        transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
        -webkit-transform: translate(-50%, -50%) rotate(-360deg);
        -ms-transform: translate(-50%, -50%) rotate(-360deg);
        transform: translate(-50%, -50%) rotate(-360deg);
    }
}
</style>