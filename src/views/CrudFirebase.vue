<!-- @format -->

<template>
  <div>
    <Nav :color="color" />
    <div v-if="!thereIsElements" class="noEl">
      <v-row no-gutters>
        <v-col cols="12" class="spaceCrud">
          <v-card>
            <h3>There are no elements loaded yet...</h3>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div v-else class="backgroundCRUD">
      <v-row no-gutters>
        <v-col cols="12" class="spaceCrud">
          <h2>C R U D</h2>
          <v-btn class="button" small :to="{ name: 'crudLS/login' }"
            >Login</v-btn
          >
          <v-btn class="button" small :to="{ name: 'crudLS/register' }"
            >Register</v-btn
          >
        </v-col>

        <v-col cols="12">
          <div class="home">
            <h3>Latest Games</h3>

            <p v-if="games.length == 0">No games found</p>
            <v-row no-gutters justify="space-between">
              <v-col
                cols="3"
                v-for="game in games"
                :key="game.id"
                style="margin: 2rem"
              >
                <v-card>
                  <v-img
                    v-if="game.image"
                    height="auto"
                    :src="game.image"
                    lazy-src="https://via.placeholder.com/250"
                  ></v-img>

                  <v-card-title>{{ game.title }}</v-card-title>
                  <v-card-text>
                    <p class="body-1">Developer: {{ game.developer }}</p>
                    <p class="body-1">Publisher: {{ game.publisher }}</p>
                    <p class="body-1">Posted By: {{ game.author }}</p>
                    <p>{{ game.description }}</p>

                    <v-btn block color="primary">Learn more</v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
  import Nav from '../components/Global/Nav.vue';
  import { auth, storage, gamesCollection, usersCollection } from '../firebase';
  export default {
    name: 'App',
    components: { Nav },
    data() {
      return {
        games: [],
        color: 'indigo',
        thereIsElements: false,
      };
    },
    methods: {
      async getGames() {
        try {
          const querySnapshot = await gamesCollection.get();
          querySnapshot.forEach(async (doc) => {
            let img = '';
            if (doc.data().image) {
              img = await storage
                .ref()
                .child(doc.data().image)
                .getDownloadURL();
            }

            let authorQuery = await usersCollection
              .doc(doc.data().userId)
              .get();

            setTimeout(() => {
              this.games.push({
                id: doc.id,
                title: doc.data().title,
                developer: doc.data().developer,
                publisher: doc.data().publisher,
                description: doc.data().description,
                image: img,
                img: doc.data().image,
                author: authorQuery.data().name,
              });
              this.thereIsElements = true;
            }, 3000);
            console.log(this.games.length);
          });
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

<style lang="scss">
  .spaceCrud {
    position: relative;
    margin-top: 5rem;
  }
  .backgroundCRUD {
    background-color: #f6f5f2;
    color: #0000009f;
    overflow: auto;
  }
  .button {
    margin: 0.3rem;
  }
  .noEl {
    height: 101vh;
    background-color: aliceblue;
  }
</style>
