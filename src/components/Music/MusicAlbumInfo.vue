<!-- @format -->

<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-dialog
          v-model="dialog"
          max-width="100%"
          height="100%"
          persistent
          scrollable
        >
          <v-card
            height="100%"
            width="100%"
            style="overflow: hidden !important"
          >
            <v-row>
              <v-col cols="4">
                <v-card-title>{{ albumName }}</v-card-title>
                <v-card style="margin: 6rem" elevation="10">
                  <v-card-title class="text-h5 grey lighten-2">
                    {{ artistName }}
                  </v-card-title>

                  <MusicCarouselTrackPreview
                    :images="images"
                    :showCarousel="showCarousel"
                    :showMusic="showMusic"
                    :artistName="artistName"
                    :songS="songS"
                  />
                </v-card>
              </v-col>
              <v-col cols="7" style="padding: 2rem">
                <MusicSongsLyrics
                  :albumName="albumName"
                  :artistName="artistName"
                  :songs="songs"
                  :showCarousel="showCarousel"
                  :showMusic="showMusic"
                  @changeValue="updateValue"
                />
              </v-col>
            </v-row>
            <v-card-actions>
              <v-btn
                style="margin-top: -6rem; margin-left: 5rem"
                outlined
                color="deep-purple lighten-2"
                @click="close"
                :disabled="!this.showCarousel && this.showMusic"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import store from '@/store';
  import MusicCarouselTrackPreview from './MusicCarouselTrackPreview';
  import MusicSongsLyrics from './MusicSongsLyrics.vue';
  export default {
    props: ['albumName', 'artistName', 'songs', 'images', 'dialog'],
    components: {
      MusicCarouselTrackPreview,
      MusicSongsLyrics,
    },
    data() {
      return {
        dialogSongs: false,
        showCarousel: true,
        showMusic: false,
        songS: '',
      };
    },
    methods: {
      close() {
        store.commit('setPreviewBlank');
        this.$emit('eventname', this.dialogSongs);
      },
      updateValue(carousel, music, selectedSong) {
        //console.log(this.showCarousel, this.showMusic);
        //FALSE - TRUE CUANDO SE MUESTRA CAROUSEL Y CANCIONES, SOLO HABILITAR BOTON CUANTO ESTOS ESTEN ASI...
        this.showCarousel = carousel;
        this.showMusic = music;
        this.songS = selectedSong;
      },
    },
    mounted() {},
  };
</script>

<style lang="scss" scoped></style>
