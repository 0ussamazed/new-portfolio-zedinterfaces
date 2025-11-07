<template>
  <v-container id="home" class="text-white cairo">
    <v-row class="align-center content" style="min-height: 100vh">
      <!-- النص -->
      <v-col cols="12" md="6" class="text-md-start text-center">
        <h1 class="title"><span>Hi</span>, I'm Oussama Zedam</h1>

        <!-- الأنيميشن -->
        <h2 class="subtitle second-txt typewriter">
          {{ displayText }}
        </h2>

        <p class="description second-txt">
          I craft responsive web applications where technologies meet
          creativity. Building exceptional digital experiences with modern
          Front-End and Back-End frameworks.
        </p>

        <div class="d-flex justify-center justify-md-start mt-4">
          <v-btn
            color="primary"
            class="mr-2"
            variant="flat"
            @click="scrollToSection('projects')"
          >
            View My Works
          </v-btn>
          <v-btn
            color="primary"
            variant="outlined"
            @click="scrollToSection('contact')"
          >
            Contact Me
          </v-btn>
        </div>
      </v-col>

      <!-- الصورة -->
      <v-col cols="12" md="6" class="text-center">
        <img
          src="../assets/welcome page/myPuct.svg"
          alt="profile"
          class="profile-img mx-auto"
          loading="lazy"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";

// العناوين اللي يتبدلوا
const roles = ["Software Engineer", "UI / UX Designer"];

const displayText = ref("");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    displayText.value = currentRole.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeWriter, 2000);
      return;
    }
  } else {
    displayText.value = currentRole.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  const speed = isDeleting ? 50 : 120;
  setTimeout(typeWriter, speed);
}
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

onMounted(() => {
  typeWriter();
});
</script>

<style scoped>
/* النصوص */
span {
  color: #3b82f6;
}
.second-txt {
  color: #d1d5db;
}
.title {
  font-size: 3rem;
  font-weight: bold;
}
.subtitle {
  font-size: 2rem;
  min-height: 2.5rem; /* باش يبقى المكان ثابت */
}
.description {
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 600px;
  margin: auto;
}

/* المؤشر */
.typewriter::after {
  content: "|";
  margin-left: 4px;
  color: #3b82f6;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}

/* الصورة */
.profile-img {
  max-width: 500px;
  width: 100%;
  height: auto;
}

/* 📱 هواتف */
@media (max-width: 960px) {
  .title {
    font-size: 2rem;
  }
  .subtitle {
    font-size: 1.5rem;
  }
  .description {
    font-size: 1rem;
  }
}
</style>
