<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue'
import { useStore } from '../stores/vuex'
import { ActionTypes } from '../stores/vuex/actions'
import { type Product } from '../stores/vuex/state'

export default defineComponent({
  setup() {
    const store = useStore()
    const searchQuery = ref('')

    onMounted(() => {
      //@ts-ignore
      store.dispatch(ActionTypes.FETCH_PRODUCTS);
    })
    const filteredProducts = computed(() => {
      if (!searchQuery.value) return store.getters.allProducts
      return store.getters.allProducts.filter((product: Product) =>
        product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    
    })

    return {
      searchQuery,
      filteredProducts
    }
  }
})
</script>

<template>
  <div>
    <div class="mb-4">
      <input
        type="text"
        class="w-full p-2 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search products..."
        v-model="searchQuery"
      />
    </div>
    <section
      class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
    >
      <div v-for="product in filteredProducts" :key="product.id">
        <div
          class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <img :src="product.imageURL" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
          <div class="px-4 py-3 w-72">
            <span class="text-gray-400 mr-3 uppercase text-xs">{{ product.brand }}</span>
            <p class="text-lg font-bold text-black truncate block capitalize">{{ product.name }}</p>
            <p class="text-sm text-gray-600 cursor-auto">{{ product.description }}</p>
            <div class="flex items-center">
              <p class="text-lg font-semibold text-black cursor-auto my-3">${{ product.price }}</p>
              <del class="text-gray-400">
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
  </div>
</template>
