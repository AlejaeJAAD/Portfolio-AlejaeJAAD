<!-- @format -->

<template>
  <div>
    <v-row style="margin-top: 2rem; padding: 1rem">
      <v-col cols="12" v-if="showS">
        <v-list
          v-for="(song, i) in songs"
          :key="i"
          max-width="auto"
          class="mx-auto"
          style="padding: 0.5rem"
        >
          <v-btn block outlined black @click="getLyric(song)">{{ song }}</v-btn>
        </v-list>
      </v-col>
      <v-col cols="12" v-if="showLyric">
        <v-list class="lista">
          <v-card
            color="transparent"
            elevation="10"
            class="lyricClass"
            style="overflow-y: scroll"
            height="63vh"
          >
            {{ Lyric }}
          </v-card>
        </v-list>
        <v-btn @click="showSongs" outlined black style="margin-top: -3rem"
          >Get me back to the songs!</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    props: ['albumName', 'artistName', 'songs'],
    components: {},
    data() {
      return {
        showLyric: false,
        showS: true,
        carousel: false,
        music: true,
        selSong: '',
      };
    },
    methods: {
      getLyric(selectedSong) {
        this.$nextTick(() => {
          setTimeout(() => {
            this.carousel = false;
            this.music = true;
            this.selSong = selectedSong;
            const artName = this.artistName;
            const payload = { nameArtist: artName, songSelected: selectedSong };
            this.$store.dispatch('getLyricFromSong', payload);
            this.$nextTick(() => {
              setTimeout(() => {
                const trackData = {
                  nameArtist: artName,
                  songSelected: selectedSong,
                };
                this.$store.dispatch('getTrackData', trackData);
                this.showLyric = true;
                this.showS = false;
                this.$emit(
                  'changeValue',
                  this.carousel,
                  this.music,
                  selectedSong
                );
              }, 1000);
            });
          }, 1000);
        });
      },
      showSongs() {
        this.showS = true;
        this.showLyric = false;
        this.carousel = true;
        this.music = false;
        this.$emit('changeValue', this.carousel, this.music, this.selSong);
      },
    },
    computed: {
      Lyric() {
        return this.$store.getters.getLyric;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .lyricClass {
    white-space: pre-wrap;
    padding: 3rem;
    margin-bottom: 3rem;
  }
</style>
