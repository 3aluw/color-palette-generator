<template>
    <div class="cont">


        <div class="main-img-cont">
            <img class="main-pic" :class="{ recoler: colorImage }"
                src="https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="colorful image">
        </div>
        <div>
            <p class="main-text">Colors enrichs our experience everywhere</p>
            <button>Generate a color palette</button>
        </div>
    </div>


</template>
<script setup>
import { useColorsStore } from '~~/store/colorsStore';


const colorImage = ref(false);
const colorsStore = useColorsStore();
onMounted(() => setTimeout(() => { colorImage.value = true }, 1500))

</script>
<style>
.main-img-cont {
    width: 100vw;
}

.main-pic {
    width: 100%;
    max-height: 60vh;
    filter: grayscale(100);
    transition: all 6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.recoler {
    filter: grayscale(0);
}
</style>