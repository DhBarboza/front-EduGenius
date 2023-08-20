<script setup>
import { ref, computed } from 'vue'
import ShowSubjects from './components/ShowSubjects.vue'
import MateriaTopico from './components/MateriaTopico.vue'


const routes = {
  '/': ShowSubjects,
  '/about': MateriaTopico
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] 
})
</script>

<template>
  <a href="#/">Home</a> |
  <a href="#/about">About</a> |
  <a href="#/non-existent-path">Broken Link</a>
  <component :is="currentView" />
</template>