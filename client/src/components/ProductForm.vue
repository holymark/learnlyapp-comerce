<template>
  <div class="container mt-5">
    <h2>Add New Product</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" v-model="name" class="form-control" id="name" required />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea v-model="description" class="form-control" id="description" required></textarea>
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="number" v-model="price" class="form-control" id="price" required />
      </div>
      <div class="form-group">
        <label for="imageURL">Image URL</label>
        <input type="text" v-model="imageURL" class="form-control" id="imageURL" required />
      </div>
      <button type="submit" class="btn btn-primary">Add Product</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      description: '',
      price: '',
      imageURL: ''
    }
  },
  methods: {
    submitForm() {
      const product = {
        name: this.name,
        description: this.description,
        price: this.price,
        imageURL: this.imageURL
      }
      axios
        .post('/api/products', product, {
          headers: { Authorization: `Bearer ${this.$store.state.user.token}` }
        })
        .then(() => {
          this.$router.push('/')
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }
}
</script>
