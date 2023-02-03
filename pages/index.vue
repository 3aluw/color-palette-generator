<template>
    <div class="cont">

        <section>
            <div class="main-img-cont">
                <img class="main-pic" :class="{ recoler: colorImage }"
                    src="https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="colorful image">
            </div>
            <div class="main-text-cont">
                <p class="main-text">Colors enrichs our experience everywhere</p>
                <v-btn rounded="lg" color="#3E66FB" prepend-icon="mdi-arrow-down-thick" class="text-white">
                    Generate a color palette
                </v-btn>
            </div>
        </section>

        <section>
            <div class="palette-cont d-flex gap-8 justify-space-around">
                <div class="color-cont">
                    <div class="color-rec light-shades"></div>
                    <p>Light shades</p>
                </div>
                <div class="color-cont">
                    <div class="color-rec light-accent"></div>
                    <p>Light accent</p>
                </div>
                <div class="color-cont">
                    <div class="color-rec main-color"></div>
                    <p>Main color</p>
                </div>
                <div class="color-cont">
                    <div class="color-rec dark-accent"></div>
                    <p>Dark accent</p>
                </div>
                <div class="color-cont">
                    <div class="color-rec dark-shades"></div>
                    <p>dark shades</p>
                </div>

            </div>
            <div class="css-cont"></div>

        </section>
    </div>


</template>
<script setup>
import { useColorsStore } from '~~/store/colorsStore';


const colorImage = ref(false);
const colorsStore = useColorsStore();
onMounted(() => setTimeout(() => { colorImage.value = true }, 1500))

</script>
<style>
.recoler {
    filter: grayscale(0);
}

section {
    margin-bottom: 5rem;
}

/*section -1*/

.main-img-cont {
    width: 100vw;
}

.main-pic {
    width: 100%;
    max-height: 80vh;
    filter: grayscale(100);
    transition: all 6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}


.main-text-cont {
    text-align: center;
}

.main-text {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 700;
    font-size: 2.5rem;
}


/*2nd section */


.palette-cont {
    background-color: #D9D9D9;
    height: 12rem;
    padding-block: 1rem;
}

.color-cont {
    width: 7.5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;
}

.color-cont>p {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
}

.color-rec {
    background: blue;
    width: 100%;
    aspect-ratio: 1 / 1;
}
</style>