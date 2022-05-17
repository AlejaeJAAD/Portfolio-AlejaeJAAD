<!-- @format -->

<template>
  <div class="showError">
    <transition name="fadeAway">
      <v-card
        elevation="21"
        color="transparent"
        class="card errorMessage"
        v-if="this.$store.state.error"
      >
        <h2 class="card-title">Error</h2>
        <v-spacer></v-spacer>
        <p class="p-left p-right p-text">
          {{ this.string }}
        </p>
        <v-card-actions class="card-actions">
          <button
            class="dismiss btn-red"
            @click.prevent="dismiss()"
            aria-label="Dismiss Error"
          >
            Dismiss Error
          </button>
        </v-card-actions>
      </v-card>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Error',
    data() {
      return {
        string: '',
      };
    },
    mounted() {
      console.log(this.$store.state.error);
      this.string = this.$store.state.error;
    },
    methods: {
      dismiss() {
        this.$store.dispatch('SET_ERROR', '');
        setTimeout(() => {
          this.$router.replace({ path: '/music' });
        }, 1000);
      },
    },
  };
</script>

<style scoped>
  /* Not the cleanest CSS I've ever written - trying to loop my extra helper classes into as minimal css as possible 🍻*/
  .showError {
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgb(0, 0, 0) 0%,
      #4a0000 49%,
      #860000 79%,
      #b80000 100%,
      rgba(0, 0, 0, 0.974) 136%
    );
    width: 100%;
    height: 100vh;
    position: absolute;
  }
  .card {
    background: hsl(129, 77%, 95%);
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 7px;
    padding: 0 0 5px;
    text-align: center;
  }

  .card-title {
    text-align: left;
    background-color: hsl(0, 95%, 16%);
    margin: 0;
    border-radius: 7px 7px 0 0;
    color: #f3f3f3;
    padding: 5px 10px;
    font-size: 1.17em;
  }
  .p-text {
    padding: 1rem;
    color: #f3f3f3;
    white-space: pre-wrap;
  }
  .card-actions {
    padding-right: 1em;
    padding-bottom: 0.5rem;
  }

  .card-actions > button {
    padding: 0.2rem 1rem;
  }

  .btn-red {
    background-color: hsla(0, 91%, 21%, 0.637);
    border-color: #47eb5d;
    color: #f3f3f3;
    border-radius: 4px;
  }

  .fadeAway-enter-active {
    transition: all 0.3s ease;
  }

  .fadeAway-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .fadeAway-leave-to,
  .fadeAway-enter {
    opacity: 0;
    transform: translateX(100px);
  }

  .errorMessage {
    margin-top: 15%;
    max-width: 600px;
    min-width: 150px;
  }
</style>
