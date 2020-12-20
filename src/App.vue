<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <v-app-bar app color="background " class="px-4" dark>
      <v-icon class="d-block d-sm-none" color="success">mdi-home</v-icon>

      <v-tabs class="px-3 d-none d-sm-block">
        <v-spacer></v-spacer>
        <v-tab class="success--text ">About</v-tab>
        <v-tab class="success--text">Experience</v-tab>
        <v-tab class="success--text">Work</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="2" md="2" xs="1"></v-col>
          <v-col cols="12" md="8" xs="10">
            <HeaderApp />
            <about-app />
          </v-col>
          <v-col cols="2" md="2" xs="1"></v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AboutApp from "./components/AboutApp.vue";
import HeaderApp from "./components/HeaderApp";
// import HeaderApp from "./components/HeaderApp";

export default {
  name: "App",

  components: {
    HeaderApp,
    AboutApp,
  },

  data: () => ({
    //
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};
</script>
