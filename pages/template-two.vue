<template>
    <div class="basic-container" :style="cssVars">
        <!-- app toolbar for mobile -->
        <v-card>
            <v-layout>
                <v-app-bar color="primary" class="d-block d-sm-none">

                    <v-menu  :style="cssVars" :close-on-content-click="false">
                        <template v-slot:activator="{ props }">
                            <v-app-bar-nav-icon variant="text" v-bind="props"></v-app-bar-nav-icon>
                        </template>
                        <div class="d-flex justify-center flex-wrap bg-grey-lighten-5 border">
                            <div class="color-cont" v-for="(color, index) in colorClasses" :key="color">
                                <v-btn class="color-cer border d-flex justify-center align-center" :class="color">
                                    <v-menu activator="parent" :close-on-content-click="false" location="right" submenu>
                                        <div>
                                            <v-color-picker v-model="colorsStore.palette[index]"
                                                :modes="['hex']"></v-color-picker>
                                        </div>
                                    </v-menu></v-btn>


                            </div>
                        </div>
                    </v-menu>
                    <v-toolbar-title>color palette</v-toolbar-title>
                </v-app-bar>


            </v-layout></v-card>
        <!-- For md and above-->
        <div class="color-palette d-none d-sm-flex ">
            <div class="color-cont">
                <div class="refresh-cer" @click="rotateIcon">
                    <v-icon icon="mdi-refresh" size="x-large" :class="{ rotate: rotate }"></v-icon>
                </div>
                <p>Regenerate</p>
            </div>
            <div class="color-cont" v-for="(color, index) in colorClasses" :key="color">
                <div class="color-cer d-flex justify-center align-center" :class="color"
                    @click="openedColorPicker = openedColorPicker == index + 1 ? 0 : index + 1">
                    <v-icon icon="mdi-close-circle" size="x-large" v-if="openedColorPicker == index + 1"></v-icon>
                </div>
                <p>{{ color }}</p>
                <v-color-picker v-if="openedColorPicker == index + 1" v-model="colorsStore.palette[index]"
                    :modes="['hex']"></v-color-picker>
            </div>
        </div>

        <!-- template Start -->
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Color Palette UI Preview</title>

        </head>

        <body>

            <header>
                <h1>UI Preview – Color Palette</h1>
            </header>

            <main>

                <!-- Palette Colors -->
                <section>
                    <h2>Palette</h2>
                    <div class="palette">
                        <div class="light"></div>
                        <div class="dark"></div>
                        <div class="primary"></div>
                        <div class="secondary"></div>
                        <div class="dark-accent"></div>
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
                <section>
                    <h2>Buttons</h2>
                    <div class="buttons-group">
                        <button class="btn-primary">Primary</button>
                        <button class="btn-secondary">Secondary</button>
                        <button class="btn-dark">Dark</button>
                        <button class="btn-accent">Dark Accent</button>
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

                <!-- Card -->
                <section>
                    <h2>Card Example</h2>
                    <div class="card">
                        <h3>Card Title</h3>
                        <p>This is a sample card using your generated color palette. It shows how backgrounds, borders,
                            and text interact.</p>
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

        </body>

        </html>

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
    background-color: rgb(0, 0, 0);
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
}

/* Palette Bar */
.palette {
    display: flex;
    gap: 5px;
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
}

button {
    padding: 0.7rem 1.2rem;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    color: var(--light);
}

.btn-primary {
    background: var(--primary);
}

.btn-secondary {
    background: var(--secondary);
}

.btn-dark {
    background: var(--dark);
}

.btn-accent {
    background: var(--dark-accent);
}

button:hover {
    opacity: 0.9;
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
.card {
    border: 1px solid var(--dark-accent);
    border-radius: 6px;
    padding: 1rem;
    background: var(--light);
    max-width: 350px;
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