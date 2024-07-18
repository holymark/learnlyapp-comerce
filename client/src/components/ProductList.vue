<script lang="ts">
import { defineComponent } from 'vue'
import SearchBar from './SearchBar.vue'
import type { Product } from '@/types'

export default defineComponent({
  data() {
    return {
      filteredProducts: [
        {
          id: '1',
          name: 'Iphone 12',
          description: 'A nice phone by Apple Inc',
          price: '800',
          imageURL:
            'https://www.istore.com.ng/cdn/shop/products/12blk_2ae8247a-5f68-44f7-86f0-d9b605f1332c_5000x.png?v=1619669265'
        },
        {
          id: '1',
          name: 'Iphone 11',
          brand: 'Apple',
          description: 'A nice phone by Apple Inc',
          price: '800',
          imageURL:
            'https://img.freepik.com/free-vector/realistic-smartphone-with-black-back-cover_23-2148385252.jpg?t=st=1721274062~exp=1721277662~hmac=f973f06d6e79ca4969b421e23a8da0fdbb9f849de149f7494178e3d827d8c0f6&w=740'
        },
          {
            id: '1',
            name: 'Iphone X',
            description: 'A nice phone by Apple Inc',
            price: '800',
            imageURL:
              'https://img.freepik.com/free-vector/smartphone-with-gradient-wallpaper_23-2147846501.jpg?t=st=1721274122~exp=1721277722~hmac=9b9784339329148fd28564ed63f5a35587bb5c8f92fc9a423c81fdeb64a0ba76&w=740'
          },
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
  <section
    class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
  >
    <div v-for="product in filteredProducts" :key="product.id">
      <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <img :src="product.imageURL" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
        <div class="px-4 py-3 w-72">
          <span class="text-gray-400 mr-3 uppercase text-xs">{{ product.brand }}</span>
          <p class="text-lg font-bold text-black truncate block capitalize">{{ product.name }}</p>
          <div class="flex items-center">
            <p class="text-lg font-semibold text-black cursor-auto my-3">{{ product.price }}</p>
            <del>
              <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div class="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path
                  d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
