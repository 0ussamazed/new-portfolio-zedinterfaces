<template>
  <v-container
    id="projects"
    class="d-flex flex-column align-center justify-center cairo py-16 px-6"
  >
    <h1 class="cairo text-center mt-12 mb-2"><span>My</span> Works</h1>
    <div class="section-underline mb-10"></div>

    <v-card
      class="main-card pa-6 w-100"
      style="border: 2px solid #3b82f6; max-width: 1200px"
    >
      <div class="d-flex justify-center">
        <v-tabs
          v-model="tab"
          centered
          class="tabs-center"
          color="#3b82f6"
          slider-color="#3b82f6"
        >
          <v-tab value="web" class="tab-btn">Web Sites</v-tab>
          <v-tab value="desktop" class="tab-btn">Desktop Apps</v-tab>
        </v-tabs>
      </div>

      <v-window v-model="tab">
        <!-- Web Projects -->
        <v-window-item value="web">
          <v-row class="d-flex justify-center mt-10" dense>
            <v-col cols="12">
              <div class="d-flex justify-center flex-wrap">
                <v-card
                  v-for="(item, i) in visibleWeb"
                  :key="i"
                  class="item-card pa-4 mx-3"
                  max-width="300"
                >
                  <img :src="item.img" class="item-img" alt="" />
                  <h3 class="text-white mt-3">{{ item.title }}</h3>
                  <p class="text-gray-300 mt-2">{{ item.desc }}</p>
                  <div class="d-flex flex-wrap justify-center mt-3">
                    <v-chip
                      v-for="(chip, c) in item.tags"
                      :key="c"
                      color="#3b82f6"
                      text-color="white"
                      class="ma-1"
                    >
                      {{ chip }}
                    </v-chip>
                  </div>
                  <div class="d-flex justify-center mt-4">
                    <v-btn
                      variant="outlined"
                      color="#3b82f6"
                      class="show-btn"
                      @click="openLink(item.link)"
                    >
                      SHOW PROJECT
                      <v-icon end>mdi-chevron-right</v-icon>
                    </v-btn>
                  </div>
                </v-card>
              </div>
            </v-col>
          </v-row>

          <div class="d-flex justify-center align-center mt-6">
            <v-btn icon class="nav-btn" @click="prevSlideWeb">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn icon class="nav-btn" @click="nextSlideWeb">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </v-window-item>

        <!-- Desktop Projects -->
        <v-window-item value="desktop">
          <v-row class="d-flex justify-center mt-10" dense>
            <v-col cols="12">
              <div class="d-flex justify-center flex-wrap">
                <v-card
                  v-for="(item, i) in visibleDesktop"
                  :key="i"
                  class="item-card pa-4 mx-3"
                  max-width="300"
                >
                  <img :src="item.img" class="item-img" alt="" />
                  <h3 class="text-white mt-3">{{ item.title }}</h3>
                  <div class="d-flex flex-wrap justify-center mt-3">
                    <v-chip
                      v-for="(chip, c) in item.tags"
                      :key="c"
                      color="#3b82f6"
                      text-color="white"
                      class="ma-1"
                    >
                      {{ chip }}
                    </v-chip>
                  </div>
                  <div class="d-flex justify-center mt-4">
                    <v-btn
                      variant="outlined"
                      color="#3b82f6"
                      class="show-btn"
                      @click="openLink(item.pdf)"
                    >
                      SHOW PROJECT
                      <v-icon end>mdi-chevron-right</v-icon>
                    </v-btn>
                  </div>
                </v-card>
              </div>
            </v-col>
          </v-row>

          <div class="d-flex justify-center align-center mt-6">
            <v-btn icon class="nav-btn" @click="prevSlideDesktop">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn icon class="nav-btn" @click="nextSlideDesktop">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </v-window-item>
      </v-window>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const tab = ref("web");
const currentIndexWeb = ref(0);
const itemsPerViewWeb = ref(3);
const currentIndexDesktop = ref(0);
const itemsPerViewDesktop = ref(3);

const webProjects = [
  {
    title: "My First Portfolio",
    img: new URL("../assets/works/firstPortfolio.svg", import.meta.url).href,
    tags: ["VUE", "VUETIFY"],
    link: "https://portfolio-zedinterfaces.netlify.app/",
  },
  {
    title: "To-Do List",
    img: new URL("../assets/works/todoList.svg", import.meta.url).href,
    tags: ["Vue", "VUETIFY"],
    link: "https://t0-d0-lsit.netlify.app/",
  },
  {
    title: "ZedLib",
    img: new URL("../assets/works/zedLib.svg", import.meta.url).href,
    tags: ["HTML", "CSS", "JS", "BOOTSTRAP", "DJ"],
    link: "https://django-library-app.onrender.com/",
  },
  {
    title: "Weather App",
    img: new URL("../assets/works/weather.svg", import.meta.url).href,
    tags: ["VUE", "API"],
    link: "https://weatheer-vueapp.netlify.app/",
  },
];

const desktopProjects = [
  {
    title: "ZedLib Desktop",
    img: new URL("../assets/works/desZedLib.svg", import.meta.url).href,
    tags: ["Python", "QtDesigner", "SQLite3"],
    pdf: new URL("../assets/works/zedLib.pdf", import.meta.url).href,
  },
];

const updateItemsPerView = () => {
  const view = window.innerWidth < 600 ? 1 : 3;
  itemsPerViewWeb.value = view;
  itemsPerViewDesktop.value = view;
};
onMounted(() => {
  updateItemsPerView();
  window.addEventListener("resize", updateItemsPerView);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateItemsPerView);
});

const visibleWeb = computed(() =>
  webProjects.slice(
    currentIndexWeb.value,
    currentIndexWeb.value + itemsPerViewWeb.value
  )
);
const visibleDesktop = computed(() =>
  desktopProjects.slice(
    currentIndexDesktop.value,
    currentIndexDesktop.value + itemsPerViewDesktop.value
  )
);

function nextSlideWeb() {
  currentIndexWeb.value =
    currentIndexWeb.value + itemsPerViewWeb.value < webProjects.length
      ? currentIndexWeb.value + 1
      : 0;
}
function prevSlideWeb() {
  currentIndexWeb.value =
    currentIndexWeb.value > 0
      ? currentIndexWeb.value - 1
      : Math.max(0, webProjects.length - itemsPerViewWeb.value);
}
function nextSlideDesktop() {
  currentIndexDesktop.value =
    currentIndexDesktop.value + itemsPerViewDesktop.value <
    desktopProjects.length
      ? currentIndexDesktop.value + 1
      : 0;
}
function prevSlideDesktop() {
  currentIndexDesktop.value =
    currentIndexDesktop.value > 0
      ? currentIndexDesktop.value - 1
      : Math.max(0, desktopProjects.length - itemsPerViewDesktop.value);
}

function openLink(link) {
  if (link) window.open(link, "_blank");
}
</script>

<style scoped>
span {
  color: #3b82f6;
}
.section-underline {
  height: 4px;
  width: 200px;
  border-radius: 2px;
  background: linear-gradient(to right, #3b82f6, #0d1117);
}
.main-card {
  background-color: #0d1729;
  border-radius: 20px;
  box-shadow: 0 0 15px #0b1626;
}
.tabs-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tab-btn {
  font-weight: 600;
  font-size: 1.2rem;
  color: #9ca3af;
  transition: 0.3s;
}
.v-tab--selected {
  color: white !important;
  background-color: #3b82f6 !important;
  border-radius: 25px;
  padding: 0 20px;
}
.item-card {
  background-color: #131f34;
  border-radius: 15px;
  color: white;
  text-align: center;
  transition: 0.3s;
}
.item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 15px #3b82f6;
}
.item-img {
  width: 100%;
  border-radius: 10px;
}
.nav-btn {
  background-color: #3b82f6;
  color: white;
  margin: 0 8px;
  transition: 0.3s;
}
.nav-btn:hover {
  background-color: #2563eb;
}
.show-btn {
  border-color: #3b82f6;
}
@media (max-width: 600px) {
  .main-card {
    width: 100% !important;
    padding: 16px !important;
  }
  .item-card {
    max-width: 300px;
    margin: 8px auto;
  }
  .v-col {
    padding: 0 !important;
  }
  .v-container {
    padding: 0 8px !important;
  }
}
</style>
