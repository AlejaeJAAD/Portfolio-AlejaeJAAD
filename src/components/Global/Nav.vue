<!-- @format -->

<template>
  <div class="bg">
    <v-app-bar :color="color" tile app clipped-left elevation="10" dense>
      <v-btn
        class="text-h7"
        text
        left
        color="white"
        @click.stop="drawer = !drawer"
      >
        Menu
        <v-icon size="40" v-if="!drawer">mdi-chevron-right</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text color="white">Alejae</v-btn>
    </v-app-bar>
    <v-navigation-drawer
      color="transparent"
      left
      width="auto"
      app
      clipped
      flat
      disable-resize-watcher
      v-model="drawer"
    >
      <template v-slot:prepend>
        <v-list-item two-line class="px-2">
          <v-list-item-content>
            <v-list-item-subtitle>API's Menu</v-list-item-subtitle>
          </v-list-item-content>
          <v-btn icon style="color: black" @click.stop="drawer = !drawer">
            <v-icon size="30" v-if="drawer">mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
      </template>

      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            @mouseenter="item.hovered = true"
            color="black"
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            id="vlistitem"
            :class="`${item.type}`"
          >
            <v-list-item-content>
              <v-list-item-title class="text-h7">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn
            class="text-h7"
            small
            color="black"
            outlined
            @click="$router.push('/')"
          >
            Volver a pagina principal <v-icon>mdi-logout</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    props: ['color'],
    name: 'Nav',
    data() {
      return {
        drawer: false,
        searchQuery: '',
        cancelQueryBtn: false,
        searchBox: false,
      };
    },
    computed: {
      items() {
        const items = [
          {
            title: 'Rick and Morty API',
            icon: 'mdi-vector-intersection',
            to: '/rickandmorty',
            type: 'rickandmorty',
            hovered: false,
          },
          {
            title: 'Music API',
            icon: 'mdi-vector-intersection',
            to: '/music',
            type: 'music',
            hovered: false,
          },
          {
            title: 'CRUD LocalStorage',
            icon: 'mdi-vector-intersection',
            to: '/crudLS',
            type: 'crud',
            hovered: false,
          },
          {
            title: 'JSON',
            icon: 'mdi-json',
            to: '/json',
            type: 'json',
            hovered: false,
          },
        ];
        return items;
      },
    },
    mounted() {
      if (this.$route.query.s) {
        this.cancelQueryBtn = true;
      }
      this.$nextTick(() => {});
    },
  };
</script>

<style scoped>
  .v-list-item:hover {
    background-color: rgb(255, 255, 255) !important;
  }
  .bg {
    margin-top: -0.5rem;
    font-family: Bahnschrift SemiBold;
  }
  .backgroundC {
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='282' height='282' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23260D19' stroke-width='3.4'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%231D0000'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
  }
  #vlistitem.v-list-item.rickandmorty {
    background-image: url('@/assets/rickandmorty.png');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  #vlistitem.v-list-item.music {
    background-image: url('@/assets/music.png');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  #vlistitem.v-list-item.crud {
    background-image: url('@/assets/crud.png');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  #vlistitem.v-list-item.json {
    background-image: url('@/assets/json.png');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>
