<template>
  <div>
    <welcome-page data-aos="fade-down"></welcome-page>
    <AboutMe data-aos="fade-right" data-aos-delay="100"></AboutMe>
    <MySkiils data-aos="fade-left" data-aos-delay="150"></MySkiils>
    <MyWorks data-aos="zoom-in-up" data-aos-delay="200"></MyWorks>
    <MyCredentials data-aos="flip-up" data-aos-delay="250"></MyCredentials>
    <MyFooter data-aos="fade-down" data-aos-delay="300"></MyFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomePage from "@/components/WelcomePage.vue";
import AboutMe from "@/components/AboutMe.vue";
import MySkiils from "@/components/MySkiils.vue";
import MyWorks from "@/components/MyWorks.vue";
import MyCredentials from "@/components/MyCredentials.vue";
import MyFooter from "@/components/MyFooter.vue";
export default {
  components: {
    WelcomePage,
    AboutMe,
    MySkiils,
    MyWorks,
    MyCredentials,
    MyFooter,
  },
};
</script>
<style></style>
