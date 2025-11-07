<template>
  <v-app-bar class="text-white px-4 mynav" flat>
    <v-container
      class="d-flex align-center justify-space-between nav-container"
    >
      <!-- Logo + Title -->
      <div class="d-flex align-center mr-10 cairo">
        <img :src="logo" alt="logo" width="50" class="me-3" />
        <p class="mb-0 brand"><span>Z</span>ed<span>I</span>nterfaces</p>
      </div>

      <!-- Links (فقط للشاشات الكبيرة) -->
      <v-toolbar-items class="d-none d-md-flex">
        <v-btn
          v-for="(item, i) in menu"
          :key="i"
          text
          class="nav-link cairo"
          :class="{ active: activeSection === item.toLowerCase() }"
          @click="scrollToSection(item.toLowerCase())"
        >
          {{ item }}
        </v-btn>
      </v-toolbar-items>

      <!-- Burger menu (فقط للموبايل + التابلات) -->
      <v-menu offset-y transition="slide-y-transition">
        <template v-slot:activator="{ props }">
          <v-btn class="d-md-none" icon v-bind="props">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list class="glass-menu text-center">
          <v-list-item
            class="cairo menu-link"
            v-for="(item, i) in menu"
            :key="i"
            link
            :class="{ active: activeSection === item.toLowerCase() }"
            @click="scrollToSection(item.toLowerCase())"
          >
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";
import logo from "@/assets/logo.svg";

const menu = ["Home", "About", "Skills", "Projects", "Certificates", "Contact"];
const activeSection = ref("home");

function scrollToSection(section) {
  const el = document.getElementById(section);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    activeSection.value = section;
  }
}
</script>

<style scoped>
.mynav {
  background-color: rgba(19, 31, 52, 0.5) !important;
  backdrop-filter: blur(6px);
  position: fixed !important;
  top: 10px;
  left: 0;
  right: 0;
  z-index: 1000;
}

/* 🟦 في الشاشات الكبيرة: نخليها fit-content ومتمركزة */
@media (min-width: 992px) {
  .mynav {
    width: fit-content !important;
    margin: 1rem auto;
    border-radius: 100px;
  }
}

.brand {
  font-size: 1.3rem;
  font-weight: 600;
}

span {
  color: #3b82f6;
}

.nav-link {
  text-transform: none;
  font-weight: 500;
  color: #e0e0e0;
  transition: color 0.3s;
}
.nav-link:hover,
.nav-link.active {
  font-weight: bold;
  color: #3b82f6 !important;
}

/* 🟦 ستايل glass للـ v-menu */
.glass-menu {
  background-color: rgba(19, 31, 52, 0.5) !important;
  backdrop-filter: blur(6px);
  border-radius: 12px;
  padding: 0.5rem 0;
}

/* روابط المينيو */
.menu-link {
  color: #e0e0e0;
  font-weight: 500;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 8px;
  margin: 0 0.5rem;
}
.menu-link:hover {
  background-color: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
}
.menu-link.active {
  background-color: #3b82f6;
  border-radius: 50px !important;
  color: #fff !important;
  font-weight: bold;
}
</style>
