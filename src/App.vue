<!-- @format -->

<template>
  <v-app>
    <v-main>
      <router-view name="nav" />
      <div>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    components: {},
    data() {
      return {};
    },
  };
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
