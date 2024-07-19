<script lang="ts">
import { defineComponent } from 'vue'
import { ActionTypes } from '../stores/vuex/actions'

export default defineComponent({
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async submitForm() {
      const credentials = {
        email: this.email,
        password: this.password
      }
      try {
       // console.log(credentials)
        await this.$store.dispatch(ActionTypes.LOGIN, credentials)
        this.$router.push('/')
      } catch (err) {
        console.error(err)
      }
    }
  }
})
</script>

<template>
  <div class="container min-w-[537px] mx-auto mt-10 max-w-md p-4 bg-white shadow-md rounded-lg">
    <h2 class="text-2xl text-gray-800 font-bold mb-6 text-center">User Login</h2>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label for="email" class="block text-gray-700 font-medium">Email</label>
        <input
          type="email"
          v-model="email"
          id="email"
          required
          class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label for="password" class="block text-gray-700 font-medium">Password</label>
        <input
          type="password"
          v-model="password"
          id="password"
          required
          class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Login
      </button>
    </form>
  </div>
</template>
