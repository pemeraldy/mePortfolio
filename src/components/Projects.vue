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
          Below is a collection of personal projects I have developed .
        </div>
        <!-- <v-card class="mx-auto"> -->
        <v-container>
          <h1>Projects comes here</h1>
          <v-row dense>
            <v-col mb="5">
              <project-cards />
            </v-col>
            <v-col mb="5">
              <project-cards />
            </v-col>
            <v-col mb="5">
              <project-cards />
            </v-col>
            <v-col mb="5">
              <project-cards />
            </v-col>
            <v-col mb="5">
              <project-cards />
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
  name: "AboutApp",
  data: () => ({
    skills: [
      { text: "Javascript", icon: "mdi-language-javascript" },
      { text: "Vue", icon: "mdi-vuejs" },
      { text: "React", icon: "mdi-react" },
      { text: "HTML & CSS", icon: "mdi-language-html5" },
      { text: "Nodejs", icon: "mdi-nodejs" },
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
