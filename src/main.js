import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import AOS from "aos";
import "aos/dist/aos.css";

const vuetify = createVuetify({
  components,
  directives,
});
AOS.init({
  duration: 900, // مدة الأنيميشن
  offset: 120, // المسافة قبل ما يبدأ
  easing: "ease-in-out",
  once: false, // ← باش يعاود يخدم كل مرة
  mirror: true, // ← يخدم حتى كي تطلع بالسكرول
});

createApp(App).use(vuetify).use(store).use(router).mount("#app");
