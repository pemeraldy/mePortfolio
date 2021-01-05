<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="custom-container ">
          <span
            class=" 
            custom-header display-1 
            headerTextSecondary--text 
            font-weight-normal  "
          >
            Experience
          </span>
        </div>
        <div class="experiance-container background mt-12">
          <v-card class="">
            <v-tabs
              color="success"
              background-color="deepBackground"
              class="background"
            >
              <v-tab class="background">
                Cambiodci
              </v-tab>
              <v-tab class="background">
                Techmatrix
              </v-tab>

              <v-tab-item>
                <v-card class="background" flat>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="mt-2 font-weight-bold body-1"
                        >Software Developer @ Cambiodci
                      </v-list-item-title>
                      <v-list-item-subtitle class="mt-4 success--text">
                        <v-chip
                          color="success"
                          outlined
                          text-color="headerTextSecondary"
                        >
                          April - September 2018</v-chip
                        >
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list dense color="background">
                    <v-list-item-group color="primary">
                      <v-list-item v-for="(duty, i) in dutiesOne" :key="i">
                        <v-list-item-icon>
                          <v-icon
                            color="headerTextSecondary"
                            v-text="duty.icon"
                          ></v-icon>
                        </v-list-item-icon>
                        <!-- <v-list-item-content> -->
                        <div
                          class="headerTextSecondary--text mb-4 "
                          v-text="duty.text"
                        ></div>
                        <!-- </v-list-item-content> -->
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card class="background" flat>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="mt-2 font-weight-bold body-1"
                        >Software Developer @ Techmatrix
                      </v-list-item-title>
                      <v-list-item-subtitle class="mt-4 success--text">
                        <v-chip
                          color="success"
                          outlined
                          text-color="headerTextSecondary"
                        >
                          October 2018 - Present</v-chip
                        >
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list dense color="background">
                    <v-list-item-group color="primary">
                      <v-list-item v-for="(duty, i) in dutiesTwo" :key="i">
                        <v-list-item-icon>
                          <v-icon
                            color="headerTextSecondary"
                            v-text="duty.icon"
                          ></v-icon>
                        </v-list-item-icon>
                        <!-- <v-list-item-content> -->
                        <div
                          class="headerTextSecondary--text mb-4 "
                          v-text="duty.text"
                        ></div>
                        <!-- </v-list-item-content> -->
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Experience",
  data: () => ({
    dutiesOne: [
      {
        text: "Worked with a team of developers to build NGO websites",
        icon: "mdi-arrow-right-circle",
      },
      {
        text:
          "Interfaced with clients on a weekly basis, providing technological expertise",
        icon: "mdi-arrow-right-circle",
      },
      {
        text:
          "Optimized and developed a corporate website theme based on Odoo ERP technology.",
        icon: "mdi-arrow-right-circle",
      },
    ],
    dutiesTwo: [
      {
        text:
          "Worked remotely with a team of three developers to build a web GIS application ",
        icon: "mdi-arrow-right-circle",
      },
      {
        text:
          "Created client's update reports and made presentations of progress during online meetings",
        icon: "mdi-arrow-right-circle",
      },
      {
        text:
          "Incorporated UI design knowledge into web app development, enhancing designs with additional rich media assets",
        icon: "mdi-arrow-right-circle",
      },
    ],
  }),
};
</script>
<style scoped>
.container {
  min-height: 60vh;
  /* background: #061428; */
}
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
.experiences {
  background-color: #061428 !important;
  border: 2px solid springgreen;
}
</style>
