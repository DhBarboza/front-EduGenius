<template>
  <div>
    <select v-model="selectedMateria" @change="updateSelectedTopico(null)">
      <option v-for="(materia, index) in materias" :key="index" :value="materia">{{ materia }}</option>
    </select>

    <select v-model="selectedTopico">
      <option v-for="(topico, index) in topicos[selectedMateria]" :key="index" :value="topico">{{ topico }}</option>
    </select>

    <textarea v-model="texto" placeholder="Digite seu conteúdo aqui"></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      materias: ['Matéria 1', 'Matéria 2', 'Matéria 3'], // Exemplo de matérias
      topicos: {
        'Matéria 1': ['Tópico 1.1', 'Tópico 1.2', 'Tópico 1.3'],
        'Matéria 2': ['Tópico 2.1', 'Tópico 2.2', 'Tópico 2.3'],
        'Matéria 3': ['Tópico 3.1', 'Tópico 3.2', 'Tópico 3.3'],
      },
      selectedMateria: '',
      selectedTopico: '',
      texto: '',
    };
  },
  methods: {
    updateSelectedTopico(topico) {
      this.selectedTopico = topico;
    },
  },
};
</script>

<style>
/* Estilos CSS podem ser adicionados aqui */
</style>
