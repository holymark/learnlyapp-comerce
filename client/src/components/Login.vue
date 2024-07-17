<script lang="ts">
export default {
    data() {
    return {
      user: null,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    filterProducts(searchTerm) {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
  },
  created() {
    this.$store.dispatch('fetchProducts');
  },
};
</script>

<template>
    <div>

        <form>
            <!-- Suggested code may be subject to a license. Learn more: ~LicenseLog:3865146569. -->
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username">
            <label for="password">Password:</label>
        <input type="password" id="password" v-model="password">
    </form>
    <button @click="login">Login</button>
    <p>{{ user }}</p>
</div>

</template>