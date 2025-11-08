<template>
  <v-container
    id="certificates"
    class="d-flex flex-column align-center justify-center cairo py-16 px-6"
  >
    <h1 class="cairo text-center mt-12 mb-2"><span>My</span> Credentials</h1>
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
          <v-tab value="academic" class="tab-btn">Academic</v-tab>
          <v-tab value="online" class="tab-btn">Online</v-tab>
        </v-tabs>
      </div>

      <v-window v-model="tab">
        <!-- Academic -->
        <v-window-item value="academic">
          <v-row class="d-flex justify-center mt-10" dense>
            <v-col cols="12">
              <div class="d-flex justify-center flex-wrap">
                <v-card
                  v-for="(item, i) in visibleAcademic"
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
                </v-card>
              </div>
            </v-col>
          </v-row>

          <div class="d-flex justify-center align-center mt-6">
            <v-btn icon class="nav-btn" @click="prevSlideAcademic">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn icon class="nav-btn" @click="nextSlideAcademic">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </v-window-item>

        <!-- Online -->
        <v-window-item value="online">
          <v-row class="d-flex justify-center mt-10" dense>
            <v-col cols="12">
              <div class="d-flex justify-center flex-wrap">
                <v-card
                  v-for="(item, i) in visibleOnline"
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
                </v-card>
              </div>
            </v-col>
          </v-row>

          <div class="d-flex justify-center align-center mt-6">
            <v-btn icon class="nav-btn" @click="prevSlideOnline">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn icon class="nav-btn" @click="nextSlideOnline">
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

const tab = ref("academic");
const currentIndexAcademic = ref(0);
const itemsPerViewAcademic = ref(3);
const currentIndexOnline = ref(0);
const itemsPerViewOnline = ref(3);

const certificates = [
  {
    title: "Bachelor in Computer Science",
    img: new URL("../assets/credentials/diplome info.svg", import.meta.url)
      .href,
    tags: ["Full-Stack", "Problem Solving", "Networks"],
  },
  {
    title: "Web Development",
    img: new URL("../assets/credentials/web dev.svg", import.meta.url).href,
    tags: ["Figma", "Front-End", "Back-End"],
  },
  {
    title: "Desktop App Dev",
    img: new URL("../assets/credentials/desktop dev.svg", import.meta.url).href,
    tags: ["Python", "QtDesigner", "SQLite3"],
  },
  {
    title: "Technical English",
    img: new URL("../assets/credentials/tech eng.svg", import.meta.url).href,
    tags: ["English", "Communication", "Understanding Terminal Errors"],
  },
];

const onlineCertificates = [
  {
    title: "B1 English Level",
    img: new URL("../assets/credentials/english_b1.svg", import.meta.url).href,
    tags: ["Listening", "Reading", "Speaking", "Writing"],
  },
  {
    title: "Web Design",
    img: new URL("../assets/credentials/web design.svg", import.meta.url).href,
    tags: ["HTML", "CSS", "JS"],
  },
];

const updateItemsPerView = () => {
  const view = window.innerWidth < 600 ? 1 : 3;
  itemsPerViewAcademic.value = view;
  itemsPerViewOnline.value = view;
};
onMounted(() => {
  updateItemsPerView();
  window.addEventListener("resize", updateItemsPerView);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateItemsPerView);
});

const visibleAcademic = computed(() =>
  certificates.slice(
    currentIndexAcademic.value,
    currentIndexAcademic.value + itemsPerViewAcademic.value
  )
);
const visibleOnline = computed(() =>
  onlineCertificates.slice(
    currentIndexOnline.value,
    currentIndexOnline.value + itemsPerViewOnline.value
  )
);

function nextSlideAcademic() {
  currentIndexAcademic.value =
    currentIndexAcademic.value + itemsPerViewAcademic.value <
    certificates.length
      ? currentIndexAcademic.value + 1
      : 0;
}
function prevSlideAcademic() {
  currentIndexAcademic.value =
    currentIndexAcademic.value > 0
      ? currentIndexAcademic.value - 1
      : Math.max(0, certificates.length - itemsPerViewAcademic.value);
}
function nextSlideOnline() {
  currentIndexOnline.value =
    currentIndexOnline.value + itemsPerViewOnline.value <
    onlineCertificates.length
      ? currentIndexOnline.value + 1
      : 0;
}
function prevSlideOnline() {
  currentIndexOnline.value =
    currentIndexOnline.value > 0
      ? currentIndexOnline.value - 1
      : Math.max(0, onlineCertificates.length - itemsPerViewOnline.value);
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
  border-radius: 12px 12px 0 0 !important;
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

@media (max-width: 600px) {
  .tab-btn {
    font-weight: 700;
    font-size: 0.8rem;
  }
  .v-tab--selected {
    padding: 0 12px;
  }
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
