<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';
import Header from './components/Header.vue';
</script>

<template>
  <div id=""> 
   
    <Header/>

    <RouterView />
  </div>

</template>
