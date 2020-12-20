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
        <div class="experiance-container mt-12">
          <v-card>
            <v-tabs color="success" class="background">
              <v-tab>
                <v-icon left>mdi-account</v-icon>
                Option 1
              </v-tab>
              <v-tab>
                <v-icon left>mdi-lock</v-icon>
                Option 2
              </v-tab>
              <v-tab>
                <v-icon left>mdi-access-point</v-icon>
                Option 3
              </v-tab>

              <v-tab-item>
                <v-card class="background" flat>
                  <v-card-text>
                    <p>
                      Sed aliquam ultrices mauris. Donec posuere vulputate arcu.
                      Morbi ac felis. Etiam feugiat lorem non metus. Sed a
                      libero.
                    </p>

                    <p>
                      Nam ipsum risus, rutrum vitae, vestibulum eu, molestie
                      vel, lacus. Aenean tellus metus, bibendum sed, posuere ac,
                      mattis non, nunc. Aliquam lobortis. Aliquam lobortis.
                      Suspendisse non nisl sit amet velit hendrerit rutrum.
                    </p>

                    <p class="mb-0">
                      Phasellus dolor. Fusce neque. Fusce fermentum odio nec
                      arcu. Pellentesque libero tortor, tincidunt et, tincidunt
                      eget, semper nec, quam. Phasellus blandit leo ut odio.
                    </p>
                  </v-card-text>
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
              <v-tab-item>
                <v-card class="background" flat>
                  <v-card-text>
                    <p>
                      Fusce a quam. Phasellus nec sem in justo pellentesque
                      facilisis. Nam eget dui. Proin viverra, ligula sit amet
                      ultrices semper, ligula arcu tristique sapien, a accumsan
                      nisi mauris ac eros. In dui magna, posuere eget,
                      vestibulum et, tempor auctor, justo.
                    </p>

                    <p class="mb-0">
                      Cras sagittis. Phasellus nec sem in justo pellentesque
                      facilisis. Proin sapien ipsum, porta a, auctor quis,
                      euismod ut, mi. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nam at tortor in
                      tellus interdum sagittis.
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
