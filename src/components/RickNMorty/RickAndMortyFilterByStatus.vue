<!-- @format -->

<template>
  <div class="filter">
    <div class="item" @click="filter('')">All</div>
    <div class="item" @click="filter('Alive')">Alive</div>
    <div class="item" @click="filter('Dead')">Dead</div>
    <div class="item" @click="filter('unknown')">Unknown</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      filter(status) {
        console.log('Estatus Actual: ', status);
        this.$store.dispatch('filterByStatus', status);
      },
    },
  };
</script>

<style lang="scss">
  .filter {
    width: 500px;
    padding-top: -6rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-radius: 10px;
    overflow: hidden;
    .item {
      padding: 1rem 0.5rem;
      background-color: var(--background-card);
      text-align: center;
      cursor: pointer;
      &:hover {
        color: var(--text-orange);
      }
    }
  }
</style>
