<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <v-app-bar app color="background " class="px-4" dark>
      <v-icon
        @click="drawer = !drawer"
        class="d-block d-sm-none"
        color="success"
        >mdi-apps-box</v-icon
      >

      <v-tabs color="success" class="px-3 d-none d-sm-block">
        <v-spacer></v-spacer>
        <v-tab class="success--text ">About</v-tab>
        <v-tab class="success--text">Experience</v-tab>
        <v-tab class="success--text">Projects</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer color="background" v-model="drawer" absolute temporary>
      <div class="mb-2"></div>
      <v-spacer></v-spacer>
      <v-list-item>
        <v-list-item-avatar>
          <!-- <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img> -->
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="success--text">Peter Olu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="2" md="2" xs="1"></v-col>
          <v-col cols="12" md="8" xs="10">
            <HeaderApp />
            <about-app />
            <experience />
            <projects />
          </v-col>
          <v-col cols="2" md="2" xs="1"></v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AboutApp from "./components/AboutApp.vue";
import Experience from "./components/Experience.vue";
import HeaderApp from "./components/HeaderApp";
import Projects from "./components/Projects.vue";

export default {
  name: "App",

  components: {
    HeaderApp,
    AboutApp,
    Experience,
    Projects,
  },

  data: () => ({
    drawer: false,
    items: [
      { title: "Home", icon: "mdi-view-user" },
      { title: "About", icon: "mdi-user" },
      { title: "Experience", icon: "mdi-user" },
      { title: "Projects", icon: "mdi-user" },
    ],
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};
</script>
