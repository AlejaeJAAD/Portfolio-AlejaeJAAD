<!-- @format -->

<template>
  <div>
    <Nav :color="color" />
    <v-row no-gutters>
      <v-col cols="12" class="">
        <h1>CRUD</h1>
        <Datatable />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import Nav from '../components/Global/Nav.vue';
  import Datatable from '../components/Crud/Datatable.vue';
  export default {
    name: 'Crud',
    components: { Nav, Datatable },
    data() {
      return {
        color: 'indigo',
      };
    },
  };
</script>

<style lang="scss" scoped></style>
