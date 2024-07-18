<script setup lang="ts">
import ProductListVue from '../components/ProductList.vue'
</script>

<template>
  <div class="ls">
    <ProductListVue />
    <h1>Login to your account</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .ls {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
