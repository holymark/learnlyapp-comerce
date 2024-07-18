<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">E-commerce</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item" v-if="user">
          <router-link to="/add" class="nav-link">Add Product</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" v-if="!user">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item" v-if="user">
          <span class="nav-link" @click="logout">Logout</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
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
}
</script>
