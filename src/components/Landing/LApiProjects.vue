<!-- @format -->

<template>
  <v-app>
    <v-container class="py-3">
      <v-row>
        <v-col cols="12">
          <v-sheet min-height="250" class="fill-height" color="transparent">
            <v-lazy
              v-model="isActive"
              :options="{
                threshold: 0.5,
              }"
              class="fill-height"
            >
              <v-row>
                <v-col cols="12">
                  <v-card-title>Portfolio.</v-card-title>
                  <v-divider></v-divider>
                </v-col>
                <v-col cols="4" class="text-sm-left text-center">
                  <v-card
                    hover
                    @click="rickandmorty"
                    height="100%"
                    class="apiCard"
                  >
                    <v-img src="@/assets/rickandmortBG.webp" class="imageBg">
                      <v-card-title class="cardTitle"
                        >Rick and Morty</v-card-title
                      >
                    </v-img>
                  </v-card>
                </v-col>
                <v-col cols="4" class="text-sm-left text-center">
                  <v-card hover @click="music" height="100%" class="apiCard">
                    <v-img src="@/assets/musicBG.jpg" class="imageBg">
                      <v-card-title class="cardTitle">Music</v-card-title>
                    </v-img>
                  </v-card>
                </v-col>
                <v-col cols="4" class="text-sm-left text-center">
                  <v-card
                    hover
                    @click="crudfirebase"
                    height="100%"
                    class="apiCard"
                  >
                    <v-img src="@/assets/crudfirebasevue.webp" class="imageBg">
                      <v-card-title class="cardTitle"
                        >Crud using Firebase</v-card-title
                      >
                    </v-img>
                  </v-card>
                </v-col>
                <v-col cols="4" class="text-sm-left text-center">
                  <v-card hover @click="json">JSONPlaceholder</v-card>
                </v-col>
                <v-col cols="4" class="text-sm-left text-center">
                  <v-card hover @click="crud" height="100%" class="apiCard">
                    <v-img src="@/assets/crudfirebasevue.webp" class="imageBg">
                      <v-card-title class="cardTitle">CRUD</v-card-title>
                    </v-img>
                  </v-card>
                </v-col>
                <DialogRickAndMorty
                  v-if="dialogRickAndMorty"
                  :dialogRickAndMorty="dialogRickAndMorty"
                  @close="dialogRickAndMorty = false"
                />
              </v-row>
            </v-lazy>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import DialogRickAndMorty from './Dialogs/DialogRickAndMorty.vue';
  export default {
    components: {
      DialogRickAndMorty,
    },
    data() {
      return {
        isActive: false,
        dialogRickAndMorty: false,
      };
    },
    methods: {
      rickandmorty() {
        setTimeout(() => {
          this.dialogRickAndMorty = true;
        }, 1000);
      },
      music() {
        setTimeout(() => {
          this.$router.replace({ path: '/music' });
        }, 1000);
      },
      crudfirebase() {
        setTimeout(() => {
          this.$router.replace({ path: '/crudLS' });
        }, 1000);
      },
      crud() {
        setTimeout(() => {
          this.$router.replace({ path: '/crud' });
        }, 1000);
      },
      json() {
        setTimeout(() => {
          this.$router.replace({ path: '/json' });
        }, 1000);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .cardTitle {
    background-color: rgba(27, 27, 27, 0.4);
    color: azure;
  }
  .apiCard {
    border-radius: 30px !important;
  }
  .imageBg {
    height: 100%;
  }
</style>
