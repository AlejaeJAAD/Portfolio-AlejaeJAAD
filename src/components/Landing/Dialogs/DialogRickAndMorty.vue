<!-- @format -->

<template>
  <v-app>
    <v-dialog v-model="dialogRickAndMorty" width="1200px" persistent>
      <v-card>
        <v-card-title>
          <span class="text-h5">Rick and Morty API</span>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" lg="7" md="7" sm="12">
              <v-card
                max-height="400px"
                elevation="10"
                class="mx-auto designImage"
              >
                <v-img
                  max-height="400px"
                  src="../../../assets/rickandmortyAPIBG.png"
                ></v-img>
              </v-card>
            </v-col>
            <v-col cols="12" lg="5" md="5" sm="12">
              <v-sheet>
                <v-card-title>
                  What's the point of this API usage (Rick and Morty API)?
                </v-card-title>
                <v-card-subtitle>
                  Texto explicando en que consiste la api, tecnologias y todo
                  eso...
                </v-card-subtitle>
                <v-card-text>
                  The technologies that were used here in this project where...
                  <br />
                  [Vue JS V2 - Vuetify - RickAndMorty API]
                  <br />
                  [From VueJS - Vuex Store - Asyncronus petitions using Fetch -
                  Router]
                  <br />
                  [From Vuetify - V-Card - V-Pagination - V-Dialog - V-Sheet]
                  <br />
                  <br />
                  <hr />
                  <br />
                  Take a look by yourself to the Rick and Morty API
                  <br />
                  <v-btn
                    color="green"
                    outlined
                    v-bind:href="`${api}`"
                    target="_blank"
                  >
                    Redirect me now!
                  </v-btn>
                </v-card-text>
              </v-sheet>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn color="green darken-1" outlined @click="rickandmortyApi"
            >Send me to page...</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn color="red" outlined @click.stop="show = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  export default {
    props: ['dialogRickAndMorty'],
    data() {
      return {
        dialog: false,
        api: 'https://rickandmortyapi.com',
      };
    },
    computed: {
      show: {
        get() {
          return this.visible;
        },
        set(value) {
          if (!value) {
            this.$emit('close');
          }
        },
      },
    },
    methods: {
      rickandmortyApi() {
        setTimeout(() => {
          this.$router.replace({ path: '/rickandmorty' });
        }, 500);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .designImage {
    border-radius: 5%;
  }
</style>
