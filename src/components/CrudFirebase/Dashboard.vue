<!-- @format -->

<template>
  <div class="dashboard">
    <h1>Hi, {{ getUser.name }}</h1>
    <div v-if="authenticated">
      <v-btn @click="logout" text>Logout</v-btn>
    </div>
    <div v-else>
      <v-btn :to="{ name: 'crudLS/login' }">Login</v-btn>
      <v-btn :to="{ name: 'crudLS/register' }">Register</v-btn>
    </div>
    <v-spacer></v-spacer>
    <Game @game:added="addGame" />

    <v-row>
      <v-col md="4" v-for="(game, index) in games" :key="game.id">
        <v-card>
          <v-img
            v-if="game.image"
            height="250"
            :src="game.image"
            lazy-src="https://via.placeholder.com/250"
          ></v-img>

          <v-card-title>{{ game.title }}</v-card-title>
          <v-card-text>
            <p class="subtitle-1">Developer: {{ game.developer }}</p>
            <p class="subtitle-1">Publisher: {{ game.publisher }}</p>
            <p>{{ game.description }}</p>
          </v-card-text>
          <v-card-actions>
            <Game :game="game" :index="index" @game:updated="updateGame" />
            <v-btn color="red" @click="deleteConfirm(game.id, game.title)" text
              >Delete</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="deleteDialog" max-width="400">
      <v-card>
        <v-card-title class="headline"> Delete game? </v-card-title>
        <v-card-text>
          Are you sure you want to delete <b>{{ pTitle }}</b
          >?
        </v-card-text>
        <v-card-actions>
          <v-btn text color="red" @click="deleteGame">Delete</v-btn>
          <v-btn @click="deleteDialog = false" text color="secondary"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Game from './Game.vue';
  import { auth, storage, gamesCollection } from '@/firebase';
  export default {
    components: {
      Game,
    },
    data() {
      return {
        games: [],
        pId: null,
        pTitle: null,
        deleteDialog: false,
      };
    },
    computed: {
      authenticated() {
        return this.$store.getters.getAuthenticated;
      },
      getUser() {
        return this.$store.getters.getUserProfile;
      },
    },
    methods: {
      async addGame(doc) {
        let img = '';
        if (doc.image) {
          img = await storage.ref().child(doc.image).getDownloadURL();
        }

        this.games.push({
          id: doc.id,
          title: doc.title,
          developer: doc.developer,
          publisher: doc.publisher,
          description: doc.description,
          image: img,
          img: doc.image,
        });
      },
      async updateGame(doc) {
        let img = '';
        if (doc.image) {
          img = await storage.ref().child(doc.image).getDownloadURL();
        }

        this.games.splice(doc.index, 1, {
          id: doc.id,
          title: doc.title,
          developer: doc.developer,
          publisher: doc.publisher,
          description: doc.description,
          image: img,
          img: doc.image,
        });
      },
      logout() {
        this.$store.dispatch('logout');
      },
      async getGames() {
        try {
          const querySnapshot = await gamesCollection
            .where('userId', '==', auth.currentUser.uid)
            .get();
          querySnapshot.forEach(async (doc) => {
            let img = '';
            if (doc.data().image) {
              img = await storage
                .ref()
                .child(doc.data().image)
                .getDownloadURL();
            }

            this.games.push({
              id: doc.id,
              title: doc.data().title,
              developer: doc.data().developer,
              publisher: doc.data().publisher,
              description: doc.data().description,
              image: img,
              img: doc.data().image,
            });
          });
        } catch (e) {
          console.log(e);
        }
      },
      async deleteConfirm(id, title) {
        this.deleteDialog = true;
        this.pId = id;
        this.pTitle = title;
      },
      async deleteGame() {
        try {
          await gamesCollection.doc(this.pId).delete();
          alert('Game deleted!');

          //Remove game from array
          this.games.splice(
            this.games.findIndex((x) => x.id == this.pId),
            1
          );
          this.deleteDialog = false;

          //Reset
          this.pId = null;
          this.pTitle = null;
        } catch (e) {
          console.log(e);
        }
      },
    },
    async mounted() {
      await this.getGames();
    },
  };
</script>

<style lang="scss" scoped></style>
