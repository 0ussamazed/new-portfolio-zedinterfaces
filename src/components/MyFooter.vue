<template>
  <v-footer class="footer" height="auto" id="contact">
    <v-container
      class="text-center py-10 d-flex align-center justify-center flex-column"
    >
      <h2 class="footer-title mb-2">Contact<span> Me</span></h2>
      <div class="section-underline mb-10"></div>

      <div class="contact-icons d-flex justify-center align-center mb-8">
        <div v-for="(item, i) in contacts" :key="i" class="contact-item mx-6">
          <v-btn
            icon
            :href="item.link"
            target="_blank"
            class="contact-btn"
            variant="text"
          >
            <v-icon size="36" color="blue">{{ item.icon }}</v-icon>
          </v-btn>
          <p class="text-caption mt-2 blue--text">{{ item.name }}</p>
        </div>
      </div>

      <p class="footer-copy text-body-2 grey--text mt-4">
        Oussama Zedam. All rights reserved 2025 ©.
      </p>
    </v-container>
  </v-footer>
</template>

<script setup>
const contacts = [
  {
    name: "github",
    icon: "mdi-github",
    link: "https://github.com/0ussamazed",
  },
  {
    name: "WhatsApp",
    icon: "mdi-whatsapp",
    link: "https://wa.me/213668505568",
  },
  {
    name: "Telegram",
    icon: "mdi-send",
    link: "https://t.me/oussama_zedam",
  },
  {
    name: "Email",
    icon: "mdi-email-outline",
    link: "mailto:oussama.zedam@univ-constantine2.dz",
  },
];
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
.footer {
  background-color: transparent;
  color: #e0e0e0;
  text-align: center;
}
.footer-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
}
.contact-icons {
  flex-wrap: wrap;
}
.contact-item p {
  color: #3a82f7;
  font-weight: 400;
}
.footer-copy {
  color: #ccc;
  font-size: 1rem;
}
</style>
