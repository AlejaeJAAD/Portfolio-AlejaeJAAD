<!-- @format -->

<template>
  <v-footer inset style="width: 100%" padless class="footerbg">
    <v-card flat tile class="text-center" width="100%" color="#e33e5a">
      <v-card-text>
        <v-btn class="mx-4 white--text" icon>
          <a
            href="https://wwww.facebook.com"
            target="_blank"
            class="white--text"
            ><v-icon size="24px">mdi-facebook</v-icon></a
          >
        </v-btn>
        <v-btn class="mx-4 white--text" icon>
          <a href="https://wwww.twitter.com" target="_blank" class="white--text"
            ><v-icon size="24px">mdi-twitter</v-icon></a
          >
        </v-btn>
        <v-btn class="mx-4 white--text" icon>
          <a
            href="https://wwww.linkedin.com"
            target="_blank"
            class="white--text"
            ><v-icon size="24px">mdi-linkedin</v-icon></a
          >
        </v-btn>
        <v-btn class="mx-4 white--text" icon>
          <a
            href="https://wwww.instagram.com"
            target="_blank"
            class="white--text"
            ><v-icon size="24px">mdi-instagram</v-icon></a
          >
        </v-btn>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-text class="mx-4 white--text">
        {{ new Date().getFullYear() }} — <strong>AlejaeJAAD</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
  .footerbg {
    position: inherit;
  }
</style>
