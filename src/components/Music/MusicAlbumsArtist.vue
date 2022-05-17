<!-- @format -->

<template>
  <v-container>
    <v-card
      class="albumCardBG mx-auto"
      style="position: relative"
      height="100%"
    >
      <v-card-title class="artistNameBG" style="word-break: break-word">{{
        album.strAlbumStripped
      }}</v-card-title>

      <v-img
        class="white--text align-end"
        width="100%"
        max-height="100%"
        :src="album.strAlbumThumb"
        style="object-fit: cover"
      >
      </v-img>
      <v-card flat>
        <v-card-actions>
          <v-btn color="black" text> Explore </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
              <v-btn @click="displayAlbumSlide(album)"></v-btn>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-card>
    <MusicAlbumInfo
      v-if="showInfo"
      :albumName="albumName"
      :artistName="artistName"
      :songs="songs"
      :images="images"
      :dialog="dialog"
      @eventname="updateparent"
    />
  </v-container>
</template>

<script>
  import MusicAlbumInfo from './MusicAlbumInfo';

  export default {
    props: ['album'],
    components: {
      MusicAlbumInfo,
    },
    data() {
      return {
        dialog: false,
        show: false,
        showInfo: false,
        images: [
          { alt: 'strAlbumThumb', src: this.album.strAlbumThumb },
          { alt: 'strAlbumThumbBack', src: this.album.strAlbumThumbBack },
        ],
      };
    },
    methods: {
      displayAlbumSlide(album) {
        setTimeout(() => {
          this.show = false;
          this.$store.dispatch('getSongsFromAlbum', album);
          this.showInfo = true;
          this.dialog = true;
        }, 500);
      },
      updateparent(variable) {
        this.dialog = variable;
      },
    },
    mounted() {},
    computed: {
      songs() {
        return this.$store.getters.getSongsData;
      },
      artistName() {
        return this.$store.getters.getArtistName;
      },
      albumName() {
        return this.$store.getters.getAlbumName;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .artistNameBG {
    background-color: rgba(27, 27, 27, 0.5);
    color: aliceblue;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    display: block;
  }
  .albumCardBG {
    padding: 0.5rem;
    background-image: url('@/assets/mix-colors-grafitti-abstract-4k-lw.jpg');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>
