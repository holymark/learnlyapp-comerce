<script setup lang="ts">
import ProductListVue from '../components/ProductList.vue'
</script>

<template>
  <div class="ls">
    <div class="text-center p-10">
      <h1 class="font-bold text-2xl md:text-4xl mb-4 ">Find The Best IPhone</h1>
      <h1 class="text-xl md:text-3xl">Best Of The Best IPhone Collections</h1>
    </div>

    <ProductListVue />

    <div class="w-full">
      <img
        src="https://img.freepik.com/free-vector/mobile-phone-different-perspectives_52683-51648.jpg?t=st=1721288235~exp=1721291835~hmac=fc5ccfa0c4c9da001c7f1d55e974384e4ba862c721c3ad12c981eb917f57e356&w=996"
        alt="IPhone"
        class="w-full h-24 rounded-lg shadow-md"
      />
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .ls {
    min-height: 100vh;
  }
}
</style>
