<template>
  <v-container>
    <v-row>
      <v-col class="" cols="12">
        <div class="header-container ">
          <span
            class=" 
            about-header display-1 
            headerTextSecondary--text 
            font-weight-normal  "
          >
            About Me
          </span>
        </div>
        <div class="dispplay-1 primaryText--text my-10">
          Hello! I'm Peter Olu, a software engineer based in Kano Nigeria, I
          enjoy creating things that live on the internet, whether that be
          websites, applications, or anything in between. My goal is to always
          build products that provide pixel-perfect, performant experiences.
          Here are a few technologies I've been working with recently:
        </div>
        <v-card class="mx-auto">
          <v-list dense color="backgroundSecondary">
            <v-card-title class="font-weight-thin success--text"
              >TECHNOLOGIES</v-card-title
            >
            <v-list-item-group color="primary">
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-icon>
                  <v-icon
                    color="headerTextSecondary"
                    v-text="item.icon"
                  ></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    class="success--text"
                    v-text="item.text"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutApp",
  data: () => ({
    items: [
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
.header-container {
  position: relative;
}
.about-header::after {
  content: "";
  width: 20%;
  height: 1px;
  background-color: aqua;
  opacity: 0.5;
  display: inline-block;
}
</style>
