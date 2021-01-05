<template>
  <v-container>
    <v-row>
      <v-col class="header-landing mt-14  " cols="12">
        <h3 class=" intro success--text font-weight-light body-3">
          Hi 👋, my name is
        </h3>
        <h1 class=" headerTextSecondary--text my-6 text-md-h1 font-weight-bold">
          Peter Olu.
        </h1>
        <h3 class=" primaryText--text text-md-h2 text-h4 font-weight-bold mb-3">
          I build awesome UI for the web
        </h3>
        <div class=" title font-weight-light primaryText--text my-11">
          I am a software engineer. I have good eyes for details, when I'm not
          coding, I am designing...
        </div>
        <v-btn
          outlined
          class="pa-6"
          href="mailto:peter.o.olur@gmail.com"
          color="success"
          >Get In Touch</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HeaderApp",

  data: () => ({}),
};
</script>
<style scoped>
.header-landing {
  height: 80vh;
}
</style>
