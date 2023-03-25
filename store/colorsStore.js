import { defineStore, acceptHMRUpdate } from "pinia";


export const useColorsStore = defineStore("ColorsStore", () => {
const palette = ref(["rgb(255, 253, 250)","rgb(181, 168, 144)","rgb(58, 111, 220)","rgb(179, 66, 120)","rgb(80, 56, 193)"])




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
