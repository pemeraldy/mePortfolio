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
                          April - October 2018</v-chip
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
                  <v-card-text>
                    <p>
                      Morbi nec metus. Suspendisse faucibus, nunc et
                      pellentesque egestas, lacus ante convallis tellus, vitae
                      iaculis lacus elit id tortor. Sed mollis, eros et ultrices
                      tempus, mauris ipsum aliquam libero, non adipiscing dolor
                      urna a orci. Curabitur ligula sapien, tincidunt non,
                      euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                    </p>
                  </v-card-text>
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
        text: "Work with a team of developer to develop NGO websites",
        icon: "mdi-arrow-right-circle",
      },
      {
        text:
          "Interfaced with clients on a weekly basis, providing technological expertise",
        icon: "mdi-arrow-right-circle",
      },
    ],
    dutiesTwo: [
      {
        text: "Work with a team of developer to develop NGO websites",
        icon: "mdi-arrow-right-circle",
      },
      {
        text:
          "Interfaced with clients on a weekly basis, providing technological expertise",
        icon: "mdi-arrow-right-circle",
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
.experiences {
  background-color: #061428 !important;
  border: 2px solid springgreen;
}
</style>
