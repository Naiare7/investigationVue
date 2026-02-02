<script setup>
import { RouterView } from 'vue-router'
import NavSidebar from './components/NavSidebar.vue'
</script>

<template>
  <div class="layout">
    <NavSidebar/>
    <main class="main-container">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
  .layout {
    display: flex;
    width: 100%;
  }
  .main-container {
    display: flex;
    justify-content: center;
    place-items: center;
    width: 100%;
    padding: 1rem;
  }
</style>
