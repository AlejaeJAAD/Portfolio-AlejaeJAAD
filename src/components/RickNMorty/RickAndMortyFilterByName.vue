<!-- @format -->

<template>
  <div class="search">
    <input
      style="border: 1px solid #3c3e44"
      type="text"
      placeholder="Search by name"
      v-model="name"
      @keyup="filter()"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
      };
    },
    methods: {
      filter() {
        this.$store.dispatch('filterByName', this.name);
      },
    },
  };
</script>

<style lang="scss">
  .search {
    width: 400px;
    margin: 3rem auto 0;
    input {
      height: 53px;
      width: 400px;
      border-radius: 10px;
      padding: 0 0.5rem;
      color: #c61bdd;
      &:hover {
        color: var(--text-orange);
      }
      &:focus {
        color: var(--text-orange);
        outline: none !important;
      }
      background-color: var(--background-card);
    }
  }
  ::placeholder {
    color: #c61bdd;
    opacity: 1; /* Firefox */
  }
</style>
