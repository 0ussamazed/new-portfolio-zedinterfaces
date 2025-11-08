<template>
  <v-container id="home" class="text-white cairo">
    <v-row class="align-center content" style="min-height: 100vh">
      <!-- النص -->
      <v-col cols="12" md="6" class="text-md-start text-center">
        <h1 class="title"><span>Hi</span>, I'm Oussama Zedam</h1>
        <h2 class="subtitle second-txt typewriter">{{ displayText }}</h2>
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

      <!-- الصورة مع الإطار والأيقونات -->
      <v-col cols="12" md="6" class="text-center">
        <div class="profile-wrapper mx-auto">
          <div class="glow"></div>
          <div class="outer-ring"></div>
          <img
            src="@/assets/welcome page/myPuct.svg"
            alt="profile"
            class="profile-img"
            loading="lazy"
          />

          <!-- الحاوية الجديدة للأيقونات -->
          <div class="icon-orbit">
            <div class="icon icon-top-left">
              <v-icon size="26" color="primary">mdi-monitor</v-icon>
            </div>
            <div class="icon icon-bottom-center">
              <v-icon size="26" color="primary">mdi-palette</v-icon>
            </div>
            <div class="icon icon-right-center">
              <v-icon size="26" color="primary">mdi-code-tags</v-icon>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";

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
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

onMounted(() => {
  typeWriter();
});
</script>

<style scoped>
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
  min-height: 2.5rem;
}
.description {
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 600px;
  margin: auto;
}

/* مؤشر الكتابة */
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

/* الإطار المضيء */
.profile-wrapper {
  position: relative;
  width: 320px;
  height: 320px;
  margin: auto;
  border-radius: 50%;
}
.glow {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(59, 130, 246, 0.3) 0%,
    rgba(59, 130, 246, 0) 70%
  );
  box-shadow: 0 0 60px 20px rgba(59, 130, 246, 0.4);
  z-index: 0;
}

/* الإطار الدائري الأزرق الخارجي */
.outer-ring {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 3px solid rgba(59, 130, 246, 0.8);
  z-index: 1;
}

.profile-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  z-index: 2;
}

/* الأيقونات */
.icon {
  position: absolute;
  background-color: #0f172a;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
  z-index: 3;
}

/* مواضع الأيقونات */
.icon-top-left {
  top: 12%;
  left: 0%;
}

.icon-bottom-center {
  bottom: -8%;
  left: 50%;
  transform: translateX(-50%);
}

.icon-right-center {
  top: 38%;
  right: -8%;
}
/* حركة دوران الأيقونات حول الصورة */
@keyframes orbit {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* تغليف الأيقونات بحاوية مستقلة تدور */
.icon-orbit {
  position: absolute;
  inset: 0;
  animation: orbit 10s linear infinite;
  z-index: 3;
}

/* نحافظ على الأيقونات داخل المدار */
.icon-orbit .icon {
  position: absolute;
}

/* نضبط نفس مواضع الأيقونات كما كانت */
.icon-top-left {
  top: 12%;
  left: 0%;
}
.icon-bottom-center {
  bottom: -8%;
  left: 50%;
  transform: translateX(-50%);
}
.icon-right-center {
  top: 38%;
  right: -8%;
}

/* حركة طفو الصورة */
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
}

.profile-wrapper {
  border-radius: 50%;
  position: relative;
  z-index: 2;
  animation: float 4s ease-in-out infinite; /* ✨ إضافة حركة الطفو */
}

/* للشاشات الصغيرة */
/* للشاشات الصغيرة */
@media (max-width: 600px) {
  .profile-wrapper {
    margin-top: 2rem;
    width: 220px; /* تصغير حجم الصورة */
    height: 220px;
  }

  .title {
    font-size: 2rem; /* تصغير العنوان */
  }

  .subtitle {
    font-size: 1.5rem; /* تصغير العنوان الفرعي */
    min-height: 2rem;
  }

  .description {
    font-size: 1rem; /* تصغير الوصف */
    max-width: 100%;
    line-height: 1.5;
  }

  .icon {
    width: 35px;
    height: 35px;
  }

  .icon-top-left {
    top: 8%;
    left: 2%;
  }

  .icon-right-center {
    top: 35%;
    right: -8%;
  }

  .icon-bottom-center {
    bottom: -8%;
  }
}
</style>
