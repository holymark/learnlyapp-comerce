<script setup lang="ts">
import ProductListVue from '../components/ProductList.vue'
</script>

<template>
  <div class="ls">
    <div class="text-center p-10">
      <h1 class="font-bold text-4xl mb-4">Find Your Favorite Fruits</h1>
      <h1 class="text-3xl">Tailwind CSS</h1>
    </div>
    <ProductListVue />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .ls {
    min-height: 100vh;
  }
}
</style>
