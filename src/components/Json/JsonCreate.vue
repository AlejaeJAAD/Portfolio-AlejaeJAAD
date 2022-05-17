<!-- @format -->

<template>
  <div>
    <div class="user-add">
      <v-card>
        <h2>Add user</h2>
        <v-text-field
          v-model="name"
          :rules="fieldRules"
          label="Enter name"
          required
          outlined
        ></v-text-field>
        <br />
        <v-text-field
          v-model="email"
          :rules="fieldRules"
          label="Enter email"
          required
          outlined
        ></v-text-field>
      </v-card>

      <v-card v-for="user in this.users" :key="user.id">
        <h1>{{ user.id }}</h1>
        <h1>{{ user.name }}</h1>
        <h2>{{ user.email }}</h2>
      </v-card>

      <v-btn @click="storeUser">Store</v-btn>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios';
  export default {
    name: 'JsonCreate',
    props: ['users'],
    data() {
      return {
        email: '',
        name: '',
        fieldRules: [(v) => !!v || 'This field is required'],
      };
    },
    methods: {
      async storeUser() {
        try {
          const userTBC = await Axios.post(
            'https://jsonplaceholder.typicode.com/users',
            {
              name: this.name,
              email: this.email,
            }
          );

          console.log(userTBC.data);
          console.log(this.users.length);
          this.users.push(userTBC.data);
        } catch (e) {
          console.log(e);
        }
      },
    },
  };
</script>

<style lang="scss" scoped></style>
