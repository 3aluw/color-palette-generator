<template>
    <div class="basic-container" :style="cssVars">
        <header>
            <h1>UI Preview – Color Palette</h1>
        </header>

        <main>

            <!-- Palette Colors -->
            <section>
                <h2>Palette
                    <v-btn icon variant="text" @click="rotateIcon">
                        <v-icon icon="mdi-refresh" color="black" :class="{ rotate: rotate }"></v-icon>
                    </v-btn>
                </h2>
                <div class="palette">
                    <div v-for="(color, index) in colorClasses" :key="color">
                        <v-btn class="w-100 h-100 border d-flex justify-center align-center" :class="color">
                            <v-menu activator="parent" :close-on-content-click="false" location="right">
                                <div>
                                    <v-color-picker v-model="colorsStore.palette[index]"
                                        :modes="['hex']"></v-color-picker>
                                </div>
                            </v-menu></v-btn>
                    </div>

                </div>
            </section>

            <!-- Headings & Paragraphs -->
            <section>
                <h2>Typography</h2>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <p>Lorem ipsum dolor sit amet, <a href="#">this is a link</a> consectetur adipiscing elit. Sed
                    varius, velit in pretium gravida, urna risus tempor turpis, vitae tincidunt neque purus sit amet
                    neque.</p>
            </section>

            <!-- Buttons -->
<!-- Buttons -->
<section>
  <h2>Buttons</h2>

  <h3>Solid Buttons</h3>
  <div class="buttons-group">
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-dark">Dark</button>
    <button class="btn btn-accent">Dark Accent</button>
  </div>

  <h3>Outlined Buttons</h3>
  <div class="buttons-group">
    <button class="btn btn-outline btn-primary">Primary</button>
    <button class="btn btn-outline btn-secondary">Secondary</button>
    <button class="btn btn-outline btn-dark">Dark</button>
    <button class="btn btn-outline btn-accent">Dark Accent</button>
  </div>

  <h3>Ghost / Text Buttons</h3>
  <div class="buttons-group">
    <button class="btn btn-ghost btn-primary">Primary</button>
    <button class="btn btn-ghost btn-secondary">Secondary</button>
    <button class="btn btn-ghost btn-dark">Dark</button>
    <button class="btn btn-ghost btn-accent">Dark Accent</button>
  </div>
</section>

            <!-- Forms -->
            <section>
                <h2>Form Elements</h2>
                <form>
                    <label for="name">Text Input</label>
                    <input type="text" id="name" placeholder="Enter your name">

                    <label for="select">Select Dropdown</label>
                    <select id="select">
                        <option>Option One</option>
                        <option>Option Two</option>
                    </select>

                    <label for="message">Textarea</label>
                    <textarea id="message" rows="3" placeholder="Your message"></textarea>
                </form>
            </section>

            <!-- Cards -->
            <section>
                <h2>Cards</h2>
                <div class="card-grid">

                    <!-- Default Card -->
                    <div class="card">
                        <h3>Default Card</h3>
                        <p>This is a simple card with light background and dark text.</p>
                        <button class="btn-primary">Read More</button>
                    </div>

                    <!-- Image Card -->
                    <div class="card card-image">
                        <img src="https://i.ibb.co/gb1tg75k/g41f06d29e1eb9a28c392bb8aeb827b3a9eee2bb59394ab100ca334f178ad19029c75ffff26ee87dc21681073cd10d324831.jpg"
                            alt="sample image">
                        <div class="card-body">
                            <h3>Image Card</h3>
                            <p>A card that includes an image at the top and a call-to-action.</p>
                            <button class="btn-secondary">Explore</button>
                        </div>
                    </div>

                    <!-- Accent Border Card -->
                    <div class="card card-accent">
                        <h3>Accent Border</h3>
                        <p>This card uses the secondary color as a border and for the button.</p>
                        <button class="btn-secondary">Details</button>
                    </div>

                    <!-- Dark Mode Card -->
                    <div class="card card-dark">
                        <h3>Dark Card</h3>
                        <p>Perfect for dark-themed sections while still using the palette.</p>
                        <button class="btn-accent">More Info</button>
                    </div>

                </div>
            </section>

            <!-- Alerts -->
            <section>
                <h2>Alerts</h2>
                <div class="alert alert-primary">This is a primary alert</div>
                <div class="alert alert-secondary">This is a secondary alert</div>
                <div class="alert alert-dark">This is a dark alert</div>
            </section>

        </main>

        <footer>
            &copy; 2025 Color Palette UI Preview
        </footer>


    </div>
</template>

<script setup>
import { useColorsStore } from '../store/colorsStore';

useHead({
    title: 'Demo',
    meta: [
        { name: 'description', content: 'A demo for the generated palette' }
    ],
    bodyAttrs: {
        class: 'test'
    },
})

const colorsStore = useColorsStore();
const colorClasses = ['light-shades', 'light-accent', 'main-color', 'dark-accent', 'dark-shades']

const cssVars = computed(() => {
    return {
        '--light': colorsStore.palette[0],
        '--dark': colorsStore.palette[4],
        '--primary': colorsStore.palette[2],
        '--secondary': colorsStore.palette[1],
        '--dark-accent': colorsStore.palette[3]
    }
})
const openedColorPicker = ref(0)
const drawer = ref(false);
const rotate = ref(false);
const rotateIcon = () => {
    colorsStore.fetchColorPalette()
    rotate.value = true, setTimeout(() => { rotate.value = false }, 1500)
}

</script>

<style scoped>
.color-palette {

    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    color: white;
    z-index: 5;

}

.sticky-palette {
    position: sticky;
    top: 0px;
    height: 100px;
}

.color-cont {
    width: 7.5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;
    text-align: center;
    align-items: center;
    position: relative;
}

.refresh-cer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    background-color: rgb(62, 102, 251);
    cursor: pointer;
}



.mdi-refresh {
    color: white;
}

.refresh-cer:active {
    background-color: white;
}

.refresh-cer:active>.mdi-refresh {
    color: rgb(62, 102, 251);
}

.color-cer {
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    background-color: white;
}

.undiplayed {
    display: none;
}

.light-shades {
    background: var(--light);

}

.light-accent {
    background: var(--secondary);
}

.main-color {
    background: var(--primary);
}

.dark-accent {
    background: var(--dark-accent);
}

.dark-shades {
    background: var(--dark);
}



.v-color-picker {
    position: absolute;
    top: 80px;

    z-index: 5;
}

.color-cont:nth-child(n+4):nth-child(-n+6)>.v-color-picker {
    right: 50px;
}

.v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: black;
}

.rotate {
    transform: rotate(360deg);
    transition: transform 1.5s ease-in-out;
}

/*small screens styling */
@media screen and (max-width:600px) {
    .color-cont:nth-child(n+4):nth-child(-n+6)>.v-color-picker {
        right: auto;
    }

    .sticky-top {
        top: 0;
    }
}



body {
    font-family: system-ui, sans-serif;
    background-color: var(--light);
    color: var(--dark);
    margin: 0;
    padding: 0;
    line-height: 1.5;
}

header {
    background-color: var(--primary);
    color: var(--light);
    padding: 1rem;
    text-align: center;
}

header h1 {
    color: inherit;
}

main {
    max-width: 1100px;
    margin: auto;
    padding: 2rem;
}

section {
    margin-bottom: 2rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin-top: 0;
    color: var(--primary);
    margin-block: 1rem;
}

/* Palette Bar */
.palette {
    display: flex;
    gap: 0.5rem;
    margin: 1rem 0;
}

.palette div {
    flex: 1;
    height: 40px;
    border-radius: 4px;
}

.light {
    background: var(--light);
    border: 1px solid #ccc;
}

.dark {
    background: var(--dark);
}

.primary {
    background: var(--primary);
}

.secondary {
    background: var(--secondary);
}

.dark-accent {
    background: var(--dark-accent);
}

/* Buttons */
.buttons-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.btn {
  padding: 0.7rem 1.2rem;
  border-radius: 4px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: capitalize;
}

/* Solid buttons */
.btn-primary { background: var(--primary); color: var(--light); }
.btn-secondary { background: var(--secondary); color: var(--light); }
.btn-dark { background: var(--dark); color: var(--light); }
.btn-accent { background: var(--dark-accent); color: var(--light); }

.btn:hover {
  opacity: 0.9;
}

/* Outlined buttons */
.btn-outline {
  background: transparent;
  border: 2px solid;
}
.btn-outline.btn-primary {
  border-color: var(--primary);
  color: var(--primary);
}
.btn-outline.btn-secondary {
  border-color: var(--secondary);
  color: var(--secondary);
}
.btn-outline.btn-dark {
  border-color: var(--dark);
  color: var(--dark);
}
.btn-outline.btn-accent {
  border-color: var(--dark-accent);
  color: var(--dark-accent);
}
.btn-outline:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

/* Ghost (text) buttons */
.btn-ghost {
  background: transparent;
  border: none;
}
.btn-ghost.btn-primary { color: var(--primary); }
.btn-ghost.btn-secondary { color: var(--secondary); }
.btn-ghost.btn-dark { color: var(--dark); }
.btn-ghost.btn-accent { color: var(--dark-accent); }

.btn-ghost:hover {
  text-decoration: underline;
}


/* Form elements */
input,
select,
textarea {
    width: 100%;
    padding: 0.6rem;
    border-radius: 4px;
    border: 1px solid var(--dark-accent);
    font-size: 1rem;
}

label {
    font-weight: bold;
    display: block;
    margin-top: 1rem;
    margin-bottom: 0.3rem;
}

input:focus,
select:focus,
textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 4px var(--primary);
}

/* Card */
/* Card Grid Layout */
.card-grid {
    align-items: end;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

/* Base Card */
.card {
    border: 1px solid var(--dark-accent);
    border-radius: 6px;
    padding: 1rem;
    background: var(--light);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

/* Image Card */
.card-image img {
    width: 100%;
    height: auto;
    border-radius: 6px 6px 0 0;
}

.card-image .card-body {
    padding-top: 0.5rem;
}

/* Accent Border Card */
.card-accent {
    border: 2px solid var(--secondary);
}

/* Dark Card */
.card-dark {
    background: var(--dark);
    color: var(--light);
}

.card-dark button {
    color: var(--light);
}

/* Alerts */
.alert {
    padding: 1rem;
    border-radius: 4px;
    margin: 1rem 0;
    color: var(--light);
}

.alert-primary {
    background: var(--primary);
}

.alert-secondary {
    background: var(--secondary);
}

.alert-dark {
    background: var(--dark);
}

footer {
    text-align: center;
    padding: 1rem;
    background: var(--dark);
    color: var(--light);
}
</style>