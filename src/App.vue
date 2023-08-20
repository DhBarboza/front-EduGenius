<script setup>
</script>

<template>
  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/content">Content</router-link> |
      <router-link to="/login">Login</router-link>
  </div>
  <router-view />
</template>

<style>
  .navbar {
    background-color: lightgreen;
    padding: 1.2rem;
  }
</style>