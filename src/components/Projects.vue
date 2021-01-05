<template>
  <v-container>
    <v-row>
      <v-col class="" cols="12">
        <div class="custom-container ">
          <span
            class=" 
            custom-header display-1 
            headerTextSecondary--text 
            font-weight-normal  "
          >
            Personal Projects
          </span>
        </div>
        <div class="dispplay-1 primaryText--text my-10">
          Below is a gallery of personal projects I built at my leisure time .
        </div>
        <!-- <v-card class="mx-auto"> -->
        <v-container>
          <v-row dense>
            <v-col mb="5" v-for="project in projects" :key="project.title">
              <h3 class="text-center mb-3 mt-3 primaryText--text">
                {{ project.title }}
              </h3>
              <project-cards :projectDetails="project" />
            </v-col>
          </v-row>
        </v-container>
        <!-- </v-card> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProjectCards from "./ProjectCards.vue";
export default {
  components: { ProjectCards },
  name: "Projects",
  data: () => ({
    projects: [
      {
        img: require("../assets/projects/yopix.jpeg"),
        title: "Yopix",
        desc:
          "A pexel clone built using pexel Api and Vuejs. It displays a grid of nice shots taking by awesome photographers.",
        link: "https://yopix.netlify.app/",
      },
      {
        img: require("../assets/projects/movie-share-min.jpeg"),
        title: "Mo-Vie-Share",
        desc:
          "A movie collection app, where registered users can create a collection of movie list and share with the world",
        link: "https://movie-share.netlify.app/",
      },
      {
        img: require("../assets/projects/yopee-store-min.jpeg"),
        title: "Yopee Store",
        desc:
          "An ecommerce website built using Nodejs and Vuejs. It has the basic features an ecommerce site: Add to cart, check out page and payment page",
        link: "https://yopee-store.netlify.app/",
      },
    ],
  }),
};
</script>
<style scoped>
.custom-container {
  position: relative;
}
.custom-header::after {
  content: "";
  width: 20%;
  height: 1px;
  background-color: aqua;
  opacity: 0.5;
  display: inline-block;
}
</style>
