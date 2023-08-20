<script setup>
</script>

<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
  <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <img src="./assets/LogotipoEduGenius.png">
    <div class="d-inline-flex p-2"> 
      <router-link to="/" class="btn">Home</router-link>
      <router-link to="/registerContent" class="btn">Registar Conteudo</router-link>
      <router-link to="/login" class="btn">Login</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script>

// import MyFooter from './components/MyFooter.vue';

export default {
  name: 'App',
  // components: {
  //   MyFooter,
  // },
};
</script>

<style>
  .img {
    width: 400px;
  }

  .nav {
    height: 50%;
  }

  router-link {
    color: white;
    text-decoration: none;
  }
</style>