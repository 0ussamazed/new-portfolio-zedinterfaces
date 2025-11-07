<template>
  <v-app>
    <MyNav />
    <v-main class="main-bg">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MyNav from "./components/MyNav.vue";

export default {
  components: { MyNav },
};
</script>

<style lang="scss">
html,
body {
  scroll-behavior: smooth;
  overflow-x: hidden;
  will-change: scroll-position;
  scroll-padding-top: 55px; /* عدّل حسب ارتفاع الـnavbar */
}

/* تسريع رسم الـnavbar */
.v-app-bar {
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* خط القاهرة */
.cairo {
  font-family: "Cairo", sans-serif;
  font-optical-sizing: auto;
}

/* خلفية التطبيق */
.main-bg {
  background-image: url("@/assets/bg.svg");
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  max-width: 100%;
  color: #fff;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
