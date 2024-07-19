<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue'
export default defineComponent({
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    logout() {
      this.$store.commit('setUser', null)
      this.$router.push('/login')
    }
  }
})
</script>

<template>
  <div>
    <header>
      <nav>
        <button class="md:hidden focus:outline-none">
          <svg
            class="h-6 w-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <div class="hidden md:flex space-x-4">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink v-if="user" to="/add">Add Product</RouterLink>
          <RouterLink v-if="!user" to="/login">Login</RouterLink>
          <span v-if="user" @click="logout">Logout</span>
        </div>
      </nav>
    </header>
    <RouterView />
  </div>
</template>
