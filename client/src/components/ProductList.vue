<script lang="ts">
import {type Product  } from "../../index"

export default {
  data() {
    return {
      filteredProducts: []
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  methods: {
    filterProducts(searchTerm: string) {
      this.filteredProducts = this.products.filter((product: Product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
  },
  created() {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<template>
  <div>
    <SearchBar @search="filterProducts" />
    <ul>
      <li v-for="product in products" :key="product._id">{{ product.name }}</li>
    </ul>
  </div>
</template>
