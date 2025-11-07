<template>
  <v-container
    id="about"
    class="about-section d-flex flex-column align-center justify-center cairo"
  >
    <h1 class="cairo text-center mb-1">About<span>Me</span></h1>
    <div class="section-underline mb-5"></div>

    <v-card
      class="mt-5 text-white cardBorder"
      rounded
      style="background-color: #131f34"
    >
      <v-row class="d-flex justify-center align-center">
        <!-- النص -->
        <v-col cols="12" md="6">
          <h1 class="text-center">
            <span>F</span>ront-<span>E</span>nd <span>Dev</span>eloper
          </h1>

          <v-card-text class="secondarytxt vcard-text">
            • I’m a multidisciplinary developer passionate about building
            digital solutions that blend performance and design.<br /><br />
            • I develop modern websites, create efficient desktop applications,
            and design clean user interfaces focused on user experience.<br /><br />
            • I believe details make the difference and always strive to deliver
            professional work with real impact.
          </v-card-text>
        </v-col>

        <!-- معلومات شخصية -->
        <v-col cols="auto" class="ma-5">
          <v-card
            class="text-white cardBorder"
            style="background-color: #0d1117"
          >
            <h2 class="text-center"><span>P</span>ersonal <span>I</span>nfo</h2>

            <v-card class="text-white inner-card">
              <v-row
                v-for="(item, index) in info"
                :key="index"
                class="d-flex align-center ml-1"
              >
                <v-col cols="auto">
                  <img :src="item.icon" alt="" loading="lazy" />
                </v-col>
                <v-col>
                  <p class="secondarytxt">{{ item.label }}</p>
                  <p>{{ item.value }}</p>
                </v-col>
              </v-row>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import userIcon from "../assets/about me/User.svg";
import emailIcon from "../assets/about me/email.svg";
import locationIcon from "../assets/about me/location.svg";
import statusIcon from "../assets/about me/status.svg";

const info = [
  { icon: userIcon, label: "Name", value: "Oussama Zedam" },
  { icon: emailIcon, label: "Email", value: "oussamazaddam.2003@gmail.." },
  { icon: locationIcon, label: "Location", value: "Algeria" },
  { icon: statusIcon, label: "Status", value: "Open to opportunities" },
];
</script>

<style scoped lang="scss">
.about-section {
  padding: 80px 0;

  span {
    color: #3b82f6;
  }

  h1,
  h2,
  p {
    word-wrap: break-word;
  }
}

.section-underline {
  height: 4px;
  width: 120px;
  border-radius: 2px;
  background: linear-gradient(to right, #3b82f6, #0d1117);
}

.cardBorder {
  border: 1px solid #3b82f6;
  border-radius: 15px;
  box-shadow: rgba(59, 130, 246, 0.25);
}

.secondarytxt {
  color: #d1d5db;
}

.inner-card {
  background-color: #0d1117;
}

.v-card h1,
.v-card h2 {
  margin: 1rem;
}

/* النص الرئيسي */
.vcard-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #e5e7eb;
  letter-spacing: 0.7px;
  text-align: justify;
  max-width: 95%;
  margin: auto;
}

/* تحسين الاستجابة */
@media (max-width: 960px) {
  .about-section {
    padding: 40px 10px;
  }

  .vcard-text {
    letter-spacing: 0.7px;
    text-align: start;
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .v-card h1 {
    font-size: 1.4rem;
  }

  img {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 600px) {
  .vcard-text {
    font-size: 0.9rem;
    letter-spacing: 0.9px;
  }

  img {
    width: 28px;
    height: 28px;
  }
}
</style>
