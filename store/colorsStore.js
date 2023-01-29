import { defineStore, acceptHMRUpdate } from "pinia";


export const useColorsStore = defineStore("ColorsStore", () => {
const colors = ref([])




//functions
async function fetchColorPalette (){
 const newPalette = await fetch("http://colormind.io/api/",{
  method: "POST",
    body : JSON.stringify({"model":"ui"})
 })
   colors.value.push(await newPalette.json())

}


  return {
   colors,fetchColorPalette
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useColorsStore, import.meta.hot));
}
