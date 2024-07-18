<template>
  <div class="container mt-5">
    <h2>Login</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="email" class="form-control" id="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" class="form-control" id="password" required />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitForm() {
      const credentials = {
        email: this.email,
        password: this.password
      }
      this.$store
        .dispatch('login', credentials)
        .then(() => {
          this.$router.push('/')
        })
        .catch((err: string) => {
          console.error(err)
        })
    }
  }
})
</script>
