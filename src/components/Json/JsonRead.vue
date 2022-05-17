<!-- @format -->

<template>
  <div>
    <v-row>
      <v-col md="3" v-for="user in users" :key="user.id">
        <div class="users">
          <v-card>
            <h2>{{ user.name }}</h2>
            <p>{{ user.email }}</p>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'JsonRead',
    props: ['users'],
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped></style>
