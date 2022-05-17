<!-- @format -->

<template>
  <div class="backgroundJSON">
    <v-btn @click="getUsers">Get users</v-btn> <br />
    <v-row>
      <v-col cols="2">
        <JsonCreate :users="users" />
      </v-col>
      <v-col cols="10">
        <JsonRead :users="users" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import Axios from 'axios';
  import JsonRead from '../components/Json/JsonRead.vue';
  import JsonCreate from '../components/Json/JsonCreate.vue';
  export default {
    name: 'Json',
    components: {
      JsonRead,
      JsonCreate,
    },
    data() {
      return {
        users: [],
      };
    },
    methods: {
      async getUsers() {
        try {
          const users = await Axios.get(
            'https://jsonplaceholder.typicode.com/users'
          );

          this.users = users.data;
        } catch (e) {
          console.log(e);
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .backgroundJSON {
    position: relative;
    margin-top: 5rem;
  }
</style>
