import { defineStore, acceptHMRUpdate } from "pinia";


export const useColorsStore = defineStore("ColorsStore", () => {
const palette = ref(["5"])




//functions
async function fetchColorPalette (){


 const res = await fetch("http://colormind.io/api/",{
  method: "POST",
    body : JSON.stringify({"model":"ui"})
 })
 
 const newPalette=  await res.json();
 palette.value = [];
 newPalette.result.forEach((el)=>{ palette.value.push(`rgb(${el.toString()})`) })
 
 

}


  return {
   palette,fetchColorPalette
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useColorsStore, import.meta.hot));
}
