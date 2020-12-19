<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <v-app-bar flat app color="primary" dark>
      <v-icon color="success">mdi-home</v-icon>
      <v-spacer></v-spacer>

      <v-tabs>
        <v-spacer></v-spacer>
        <v-tab class="green--text">
          <v-icon class="white">mdi-open-in-new</v-icon>
          Item One
        </v-tab>
        <v-tab class="green--text text--lighten-1">Item Two</v-tab>
        <v-tab class="orange--text">Item Three</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
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
