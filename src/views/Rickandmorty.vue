<!-- @format -->

<template>
  <div class="bgDiv">
    <Nav :color="color" />
    <v-row no-gutters>
      <v-col cols="12" class="ricknmortyBG">
        <h1>Rick And Morty</h1>
        <RickAndMortyFilterByStatus />
        <RickAndMortyFilterByName />
        <RickAndMortyListCharacters />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import Nav from '../components/Global/Nav.vue';
  import RickAndMortyListCharacters from '../components/RickNMorty/RickAndMortyListCharacters.vue';
  import RickAndMortyFilterByStatus from '../components/RickNMorty/RickAndMortyFilterByStatus.vue';
  import RickAndMortyFilterByName from '../components/RickNMorty/RickAndMortyFilterByName.vue';
  export default {
    name: 'App',
    components: {
      Nav,
      RickAndMortyListCharacters,
      RickAndMortyFilterByStatus,
      RickAndMortyFilterByName,
    },
    data() {
      return {
        color: 'pink darken-3',
      };
    },
  };
</script>

<style lang="scss">
  .bgDiv {
    background-color: #ff08c7;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23D15584' stroke-width='97.4' stroke-opacity='0.36' %3E%3Ccircle fill='%23FF08C7' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23f213ba' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23e51aad' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23d81fa1' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23cb2395' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23be268a' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23b1287f' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23a32974' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23962a6a' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23892b61' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%237c2b57' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%236f2b4e' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23622a46' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%2356293e' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%23492736' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233c252e' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23302328' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23232021' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    color: #c61bdd;
    padding: 1rem;
  }
  :root {
    --background-body: #24282f;
    --background-card: #3c3e44;
    --text-white: #ffffff;
    --text-gray: #c0c0c0;
    --text-orange: #ff9800;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #242f25;
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  h1 {
    margin-bottom: 3rem;
    text-align: center;
  }
  .container {
    width: 980px;
    max-width: 90%;
    margin: 5rem auto;
  }
  img {
    width: 100%;
  }
  .ricknmortyBG {
    position: relative;
    margin-top: -1.5rem;
  }
</style>
