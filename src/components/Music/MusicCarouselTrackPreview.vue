<!-- @format -->

<template>
  <div>
    <v-row>
      <v-col cols="12" v-if="showCarousel">
        <v-carousel>
          <v-carousel-item
            style="width: 100%; height: 100%"
            v-for="image in images"
            :key="image.alt"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <v-img :src="image.src" max-height="100%"></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" v-if="showMusic">
        <v-img class="white--text align-end" height="auto" :src="preview[5]">
          <v-card-title class="title-name">{{ preview[2] }}</v-card-title>
        </v-img>

        <p style="margin-top: 1rem">
          <audio controls :src="preview[0]"></audio>
        </p>
        <span style="color: black">Hola</span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    props: {
      images: {
        type: Array,
        // Arrays and Objects must return factory functions instead of
        // literal values. You can't do `default: []`, you have to do
        // `default: function() { return []; }`... what I wrote was the
        // short-hand for how to do it with ES6 fat-arrow functions
        default: () => [],
      },
      showCarousel: {
        type: Boolean,
      },
      showMusic: {
        type: Boolean,
      },
      artistName: {
        type: String,
      },
      songS: {
        type: String,
      },
    },
    data() {
      return {};
    },
    methods: {},
    mounted() {},
    computed: {
      preview() {
        if (this.showMusic == true) {
          return this.$store.getters.getPreview;
        } else {
          this.$store.getters.getPreview = '';
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .title-name {
    background-color: rgba(27, 27, 27, 0.9) !important;
  }
</style>
