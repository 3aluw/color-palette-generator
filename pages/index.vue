<template>
    <div>
        <p> HI {{ colorsStore.colors }}</p>
        <img class="main-pic" :class="{ recoler: colorImage }"
            src="https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="colorful image">
    </div>


</template>
<script setup>
import { useColorsStore } from '~~/store/colorsStore';


const colorImage = ref(false);
const colorsStore = useColorsStore();
onMounted(() => setTimeout(() => { colorImage.value = true }, 1500))

</script>
<style>
.main-pic {
    filter: grayscale(100);
    transition: all 1s linear;
}

.recoler {
    filter: grayscale(0);
}
</style>