<template>
  <v-card
    @mouseover="hover = true"
    @mouseleave="hover = false"
    class="mx-auto backgroundSecondary project-card"
    max-width="344"
    min-height="450"
    max-height="450"
  >
    <v-img
      class="white--text align-end"
      height="300px"
      :src="projectDetails.img"
    >
      <v-card-title class="primaryText--text">{{
        projectDetails.title
      }}</v-card-title>
    </v-img>

    <!-- <v-card-subtitle class="pb-0">Number 10</v-card-subtitle> -->

    <v-card-text class="text--primary">
      <div class="text-truncate">{{ projectDetails.desc }}</div>

      <!-- <div>Whitsunday Island, Whitsunday Islands</div> -->
    </v-card-text>

    <v-card-actions>
      <v-btn
        class="success--text"
        :href="projectDetails.link"
        target="_blank"
        color="success"
        text
      >
        View live
      </v-btn>
    </v-card-actions>
    <!-- <v-overlay absolute="true" overlay="hover"></v-overlay> -->
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
    };
  },
  props: {
    projectDetails: {
      type: Object,
    },
  },
};
</script>

<style lang="css" scoped>
.project-card {
  transition: 0.3s all ease-in;
}
.project-card:hover {
  transform: scale(1.05);
}
</style>
