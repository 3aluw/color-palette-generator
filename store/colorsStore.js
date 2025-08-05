import { defineStore, acceptHMRUpdate } from "pinia";


export const useColorsStore = defineStore("ColorsStore", () => {
const palette = ref(["#fffdfa","#263A4F","#34AD54","#FF9933","#785E57"])

const CSSSnippet = computed(()=> `:root{
  --light-shades: ${palette.value[0]};
  --light-accent: ${palette.value[1]};
  --main-color: ${palette.value[2]};
  --dark-accent: ${palette.value[3]};
  --dark-shades: ${palette.value[4]};
}`
)


//functions
//rgbToHex functions
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex([r, g, b]) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}



async function fetchColorPalette (){

try{
 const res = await fetch("http://colormind.io/api/",{
  method: "POST",
    body : JSON.stringify({"model":"ui"})
 })
 const newPalette=  await res.json();
 palette.value = [];
 newPalette.result.forEach((el)=>{ palette.value.push(`${rgbToHex(el)}`) })
}
catch(Error){
  console.log("Got an Error", Error)
}
}

const copyCSSSnippet = ()=>{
      navigator.clipboard.writeText(CSSSnippet.value);
}

  return {
   palette,fetchColorPalette,CSSSnippet,copyCSSSnippet
  };
},{
  persist: true}
);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useColorsStore, import.meta.hot));
}
