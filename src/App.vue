<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="flex mb-2">
    <RouterLink to="/">Static Component</RouterLink>
    <RouterLink to="/reusable">Reusable Component</RouterLink>
  </nav>
  <RouterView />
</template>
