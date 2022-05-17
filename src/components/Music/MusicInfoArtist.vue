<!-- @format -->

<template>
  <div class="backgroundMusicArtistCard">
    <v-row no-gutters>
      <v-col cols="12" class="text-left btnRegresar">
        <v-btn outlined color="indigo" @click="buscarOtroArtista()"
          ><v-icon>mdi-keyboard-backspace</v-icon>Buscar otro artista
        </v-btn>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6">
        <v-card color="rgba(23,23,23, 0.4)" class="mac" elevation="1">
          <v-row no-gutters>
            <v-col cols="8" xs="12" sm="12" md="8">
              <v-img
                :src="infoArtist.strArtistThumb"
                style="border-radius: 10px"
                width="100%"
              ></v-img>
            </v-col>
            <v-col cols="4" xs="12">
              <v-card-title class="card-root-title">
                {{ infoArtist.strArtist }}
                <br />
              </v-card-title>
              <v-card-text class="card-root-text">
                <span>Formed Year - </span>{{ infoArtist.intFormedYear }}
                <br />
                <span>Style - </span>{{ infoArtist.strStyle }}
                <br />
                <span>Genre - </span>{{ infoArtist.strGenre }}
                <br />
                <span>Mood - </span>{{ infoArtist.strMood }}
                <br />
                <v-btn
                  icon
                  v-bind:href="`http://${infoArtist.strWebsite}`"
                  target="_blank"
                >
                  <v-icon>mdi-web</v-icon>
                </v-btn>
                <v-btn
                  icon
                  v-bind:href="`http://${infoArtist.strFacebook}`"
                  target="_blank"
                >
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="5">
        <v-list class="mac-01" color="rgba(27,27,27,0.4)">
          {{ infoArtist.strBiographyEN }}
        </v-list>
      </v-col>
      <v-col cols="5" v-if="showCarousel">
        <v-card>Hola este es el carousel con fotos</v-card>
      </v-col>
    </v-row>
    <v-row style="margin: 0.5rem; padding-top: 4rem" class="shrink">
      <v-col
        class="bg"
        cols="12"
        lg="3"
        md="3"
        sm="6"
        xs="12"
        v-for="album in albums"
        :key="album.idAlbum"
      >
        <MusicAlbumsArtist :album="album" />
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
  import MusicAlbumsArtist from './MusicAlbumsArtist';

  export default {
    props: ['infoArtist', 'showInfoArtist', 'searchArtist'],
    components: {
      MusicAlbumsArtist,
    },
    data() {
      return {
        showCarousel: false,
        albumCovers: [],
      };
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => {
          if (this.infoArtist.length == 0) {
            console.log('Bad');
          } else {
            this.$store.dispatch(
              'getAlbumsFromArtist',
              this.infoArtist.idArtist
            );
          }
        }, 1000);
      });
    },
    computed: {
      albums() {
        return this.$store.getters.getAlbumsData;
      },
    },
    methods: {
      buscarOtroArtista() {
        this.$store.state.artistData = [];
        this.$store.state.albumsData = [];
        this.$emit('getInfo', { showInfoArtist: false, searchArtist: true });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .backgroundMusicArtistCard {
    height: auto;
    width: 100%;
    margin-top: 2rem;
  }
  .mac {
    padding: 1rem;
    margin: 4rem;
  }
  .mac-01 {
    margin: 4rem 0 0 3rem;
    padding: 2rem;
    font-family: verdana, arial, helvetica;
    line-height: 18px;
    letter-spacing: -1px;
    font-size: 1rem;
    width: 100%;
    overflow-wrap: break-word;
    white-space: pre-wrap;
  }
  .v-list {
    height: auto; /* or any height you want */
    overflow-y: auto;
    color: rgba(242, 242, 242, 1) !important;
  }
  .mac-02 {
    padding: 1rem;
  }
  .card-root-title {
    color: rgb(242, 242, 242);
  }
  .card-root-text {
    color: rgb(80, 102, 102) !important;
    text-align: left;
  }
  .bg {
    padding: 1rem;
  }
  .btnRegresar {
    margin-top: 4rem;
    margin-bottom: -2.5rem;
    margin-left: 4rem;
  }
</style>
