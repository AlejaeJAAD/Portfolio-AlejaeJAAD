<!-- @format -->

<template>
  <v-row style="margin-top: 2rem">
    <v-col cols="12" style="padding-bottom: 2rem">
      <div>
        <v-btn>Prev</v-btn>
        <v-btn>Next</v-btn>
      </div>
    </v-col>
    <v-col cols="4" v-for="character in getCharacters" :key="character.id">
      <RickAndMortyCardCharacter :character="character" />
    </v-col>
    <v-col cols="12" style="padding-bottom: 2rem">
      <div>
        <v-btn>Prev</v-btn>
        <v-btn>Next</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  import RickAndMortyCardCharacter from './RickAndMortyCardCharacter.vue';

  export default {
    name: 'Characters',
    components: {
      RickAndMortyCardCharacter,
    },
    data() {
      return {};
    },
    mounted() {
      this.$store.dispatch('getCharacters');
    },
    computed: {
      getCharacters() {
        return this.$store.getters.getCharactersFilter || {};
      },
    },
  };
</script>

<style lang="scss"></style>
