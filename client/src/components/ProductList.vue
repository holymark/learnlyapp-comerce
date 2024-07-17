<script setup lang="ts">
export default {
  data() {
    return {
      filteredProducts: [],
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    filterProducts(searchTerm) {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
  },
  created() {
    this.$store.dispatch('fetchProducts');
  },
};
</script>

<template>
    <div>
      <SearchBar @search="filterProducts"/>
      <div v-for="product in filteredProducts" :key="product.id">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>
        <img :src="product.imageURL" alt="product image"/>
      </div>
    </div>
  </template>
  