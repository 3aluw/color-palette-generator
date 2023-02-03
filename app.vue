<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
import { useColorsStore } from './store/colorsStore';


const colorsStore = useColorsStore();


onMounted(async () => {
  await colorsStore.fetchColorPalette();

})
</script>
<style>
body {
  margin: 0;
}
</style>
