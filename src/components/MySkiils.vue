<template>
  <v-container
    id="skills"
    class="d-flex flex-column align-center justify-center cairo py-16 px-6"
  >
    <h1 class="cairo text-center mt-12 mb-2"><span>My</span>Skills</h1>
    <div class="section-underline mb-10"></div>

    <v-timeline align="center" line-color="#131F34" class="skills-timeline">
      <v-timeline-item
        v-for="(category, index) in skills"
        :key="index"
        :dot-color="category.dotColor"
      >
        <template #opposite>
          <span class="title-text">{{ category.title }}</span>
        </template>

        <template #icon>
          <img
            :src="category.icon"
            width="20"
            height="20"
            :alt="`${category.title} icon`"
          />
        </template>

        <v-card class="skill-card" :class="{ small: category.small }">
          <v-row
            class="pa-4"
            :class="category.center ? 'd-flex justify-center align-center' : ''"
          >
            <v-col
              v-for="(skill, i) in category.items"
              :key="i"
              cols="4"
              sm="3"
              md="2"
              class="d-flex justify-center align-center"
            >
              <img :src="skill" alt="" class="skill-icon" />
            </v-col>
          </v-row>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script setup>
const skills = [
  {
    title: "Programming Languages",
    dotColor: "#131F34",
    icon: new URL("../assets/skills/Code.svg", import.meta.url).href,
    items: [
      new URL("../assets/skills/html.svg", import.meta.url).href,
      new URL("../assets/skills/css.svg", import.meta.url).href,
      new URL("../assets/skills/js.svg", import.meta.url).href,
      new URL("../assets/skills/lang c.svg", import.meta.url).href,
      new URL("../assets/skills/python.svg", import.meta.url).href,
      new URL("../assets/skills/java.svg", import.meta.url).href,
    ],
  },
  {
    title: "Frameworks",
    dotColor: "#0a1833",
    icon: new URL("../assets/skills/stars.svg", import.meta.url).href,
    items: [
      new URL("../assets/skills/devicon_vuetify.svg", import.meta.url).href,
      new URL("../assets/skills/logos_bootstrap.svg", import.meta.url).href,
      new URL("../assets/skills/logos_vue.svg", import.meta.url).href,
      new URL(
        "../assets/skills/vscode-icons_file-type-django.svg",
        import.meta.url
      ).href,
    ],
  },
  {
    title: "UI/UX Tools",
    dotColor: "#0a1833",
    icon: new URL("../assets/skills/PaintBrush.svg", import.meta.url).href,
    small: true,
    center: true,
    items: [
      new URL("../assets/skills/skill-icons_figma-dark.svg", import.meta.url)
        .href,
    ],
  },
];
</script>

<style scoped>
span {
  color: #3b82f6;
}

.section-underline {
  height: 4px;
  width: 120px;
  border-radius: 2px;
  background: linear-gradient(to right, #3b82f6, #0d1117);
}

.skill-card {
  background-color: #101b2e;
  color: white;
  border-radius: 12px;
  min-width: 280px;
}
.skill-card.small {
  min-width: 180px;
}

.title-text {
  font-weight: 600;
  color: white;
  font-size: 1.1rem;
}

/* أيقونات المهارات */
.skill-icon {
  width: 40px;
  height: 40px;
}

/* تحسين العرض على الهواتف */
@media (max-width: 600px) {
  #skills {
    padding: 2rem 1rem !important;
  }

  h1 {
    font-size: 1.6rem;
  }

  .v-timeline {
    padding-inline: 0 !important;
  }

  .v-timeline-item__opposite {
    display: none !important; /* إخفاء العنوان الجانبي */
  }

  .skill-card {
    min-width: 100% !important;
  }

  .skill-icon {
    width: 32px;
    height: 32px;
  }
}
</style>
