<script lang="ts">
import { defineComponent } from 'vue'
import axios from '../stores/vuex/axiosConfig'

export default defineComponent({
  data() {
    return {
      name: '',
      brand: '',
      description: '',
      price: 0,
      imageURL: ''
    }
  },
  methods: {
    async submitForm() {
      const product = {
        name: this.name,
        description: this.description,
        price: this.price,
        imageURL: this.imageURL
      }
      try {
        await this.$store.dispatch('ADD_PRODUCT', product, this.$store.state.user.token)

        // await axios.post('/api/products', product, {
        //   headers: { Authorization: `Bearer ${this.$store.state.user.token}` }
        // });
        this.$router.push('/')
      } catch (err) {
        console.error(err)
      }
    }
  }
})
</script>
<template>
  <div class="container min-w-[537px] mx-auto mt-10 max-w-lg p-4 bg-white shadow-md rounded-lg">
    <h2 class="text-2xl text-gray-800 font-bold mb-6 text-center">Add New Product</h2>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label for="name" class="block text-gray-700 font-medium">Name</label>
        <input
          type="text"
          v-model="name"
          id="name"
          required
          class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label for="brand" class="block text-gray-700 font-medium">Brand</label>
        <input
          type="text"
          v-model="brand"
          id="brand"
          required
          class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label for="description" class="block text-gray-700 font-medium">Description</label>
        <textarea
          v-model="description"
          id="description"
          required
          class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <div>
        <label for="price" class="block text-gray-700 font-medium">Price</label>
        <input
          type="number"
          v-model="price"
          id="price"
          required
          class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label for="imageURL" class="block text-gray-700 font-medium">Image URL</label>
        <input
          type="text"
          v-model="imageURL"
          id="imageURL"
          required
          class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Add Product
      </button>
    </form>
  </div>
</template>
