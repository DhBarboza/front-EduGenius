<script setup>
</script>

<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/registerContent">Registar Conteudo</router-link>
    <router-link to="/login">Login</router-link>
  </div>
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
  #nav {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 1%;
    background-color: rgb(7, 160, 130);
    padding: 2rem;
  }

  footer {
    background-color: lightgreen;
    padding: 1.2rem;
  }

  router-link {
    color: white;
    text-decoration: none;
  }
</style>