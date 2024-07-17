import { RouterLink, RouterView } from 'vue-router'

<template>
  <header>
    <nav>
      <div class="logo">
        <h1>
          <a href="/">LearnlyEcommerce</a>
        </h1>
      </div>
      <ul class="">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/login">Login</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
