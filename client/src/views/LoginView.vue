<script>
import { defineComponent } from 'vue'
import Login from '../components/Login.vue'

export default defineComponent({
  setup() {}
})
</script>

<template>
  <div class="login">
    <h1>Login to your account</h1>
    <Login />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .login {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
