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
                <v-btn rounded="lg" color="#3E66FB" prepend-icon="mdi-arrow-down-thick" class="text-white" size="large"
                    @click="fetchNewPalette" href="#pallette">
                    Generate a color palette
                </v-btn>
            </div>
        </section>

        <section class="second-section">
            <div class="palette-cont d-flex gap-8 justify-space-around" id="pallette">

                <div class="color-cont" v-for="(colorValue, colorName, index) in colorsDic">
                    <div class="color-rec d-flex justify-center" :class="colorName"
                        @click="openedColorPicker = openedColorPicker == index + 1 ? 0 : index + 1">
                        <v-icon icon="mdi-close-circle" size="x-large" v-if="openedColorPicker == index + 1"></v-icon>
                    </div>
                    <p>{{ colorName }}</p>
                    <v-color-picker v-if="openedColorPicker == index + 1" v-model="colorsStore.palette[index]"
                        :modes="['hex']"></v-color-picker>
                </div>

            </div>
            <div class="color-palette-btns  d-flex gap-8 justify-space-around my-10">
                <v-btn rounded="lg" color="#3E66FB" prepend-icon="mdi-rotate-right" class="text-white" size="large"
                    @click="fetchNewPalette">
                    Regenerate
                </v-btn>
                <NuxtLink to="/template-one"> <v-btn rounded="lg" color="#3E66FB" prepend-icon="mdi-arrow-right-thick"
                        class="text-white" size="large">
                        See it in action
                    </v-btn></NuxtLink>
            </div>
        </section>
        <section>
            <div class="css-cont my-16">


                <p ref="cssSnippet">
                    :root{ <br>
                    <span class="var-name"> --light-shades </span>: <span class="var-color">{{
                        colorsStore.palette[0]
                    }}</span>; <br>
                    <span class="var-name"> --light-accent </span>: <span class="var-color">{{
                        colorsStore.palette[1]
                    }}</span>; <br>
                    <span class="var-name"> --main-color </span>: <span class="var-color">{{
                        colorsStore.palette[2]
                    }}</span>; <br>
                    <span class="var-name"> --dark-accent</span> : <span class="var-color">{{
                        colorsStore.palette[3]
                    }}</span>; <br>
                    <span class="var-name"> --dark-shades </span>: <span class="var-color">{{
                        colorsStore.palette[4]
                    }}</span>; <br>
                    }
                </p>
                <v-btn variant="outlined" class="copy-btn" @click="copySnippet">{{ copyButtonText }}</v-btn>
            </div>
        </section>


    </div>
</template>
<script setup>
import { useColorsStore } from '../store/colorsStore';
const colorsStore = useColorsStore();

const fetchNewPalette = async () => await colorsStore.fetchColorPalette();



onMounted(() => {
    setTimeout(() => { colorImage.value = true }, 1500)
})


const colorImage = ref(false);




//section 2

// colors dic

const colorsDic = computed(() => {
    return {
        "light-shades": colorsStore.palette[0],
        "light-accent": colorsStore.palette[1],
        "main-color": colorsStore.palette[2],
        "dark-accent": colorsStore.palette[3],
        "dark-shades": colorsStore.palette[4],
    }
})

//color picker opener 

const openedColorPicker = ref(0)
//section 3

const cssSnippet = ref(null)
const copyButtonText = ref("Copy");
const copySnippet = () => {
    navigator.clipboard.writeText(cssSnippet.value.innerText);
    copyButtonText.value = "copied !"
    setTimeout(() => { copyButtonText.value = "Copy" }, 2000)
}


</script>
<style  >
body {
    color: black;
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

.recoler {
    filter: grayscale(0);
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

.second-section {
    background-color: #D9D9D9;
    padding-block: 3rem;
}

.palette-cont {
    scroll-padding-top: 100px;
}

.color-cont {
    width: 7.5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;
    position: relative;
}

.color-cont>p {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    height: 3rem;
}

.color-rec {
    background: blue;
    width: 100%;
    aspect-ratio: 1 / 1;
}

/*color picker */
.v-color-picker {
    position: absolute;
    top: 100px;

    z-index: 5;
}



.color-cont:nth-child(n+4):nth-child(-n+6)>.v-color-picker {
    right: 50px;
}

/*rec colors */

.light-shades {
    background: v-bind('colorsStore.palette[0]');
}

.light-accent {
    background: v-bind('colorsStore.palette[1]');
}

.main-color {
    background: v-bind('colorsStore.palette[2]');
}

.dark-accent {
    background: v-bind('colorsStore.palette[3]');
}

.dark-shades {
    background: v-bind('colorsStore.palette[4]');
}



/*css code generator */
.css-cont {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    display: block;
    overflow-x: auto;
    padding: 1em;
    background: #2b2b2b;
    color: #f8f8f2;
    font-size: 1.1rem;

}



.var-name {
    color: #09c3e4;

}

.var-color {
    color: #ebb031;
}

.copy-btn {
    margin-block: 1rem;
    width: 15rem;
    font-size: 1.2rem;
}
</style>