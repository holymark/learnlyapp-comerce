<script lang="ts">
import { defineComponent } from 'vue'
import SearchBar from './SearchBar.vue'
import type { Product } from '@/types';

export default defineComponent({
  data() {
    return {
      filteredProducts: [
        {
          id: '1',
          name: 'Iphone 12',
          description: 'A nice phone by Apple Inc',
          price: '800',
          imageURL: 'https://www.istore.com.ng/cdn/shop/products/12blk_2ae8247a-5f68-44f7-86f0-d9b605f1332c_5000x.png?v=1619669265'
        }
      ]
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
})
</script>

<template>
  <div>
    <SearchBar @search="filterProducts" />
    <div class="products">

      <div v-for="product in filteredProducts" :key="product.id" class="product">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>
        <img :src="product.imageURL" alt="product image" />
      </div>
    </div>
  </div>
</template>


