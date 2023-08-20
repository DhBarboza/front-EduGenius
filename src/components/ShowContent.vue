<template>
  <div class="content-page">
    <div class="content-boxes">
      <div v-for="content in contents" :key="content.id" class="content-box">
        <h3>{{ content.title }}</h3>
        <p>{{ content.description }}</p>
      </div>
    </div>
  </div>
  {{  }}
</template>

<script>
import { useSubjectSelection } from '/src/stores/subjectSelectionStore.js';
export default {
  name: 'ShowContent',
  data() {
    return {
      subjectName: 'Nome da Matéria',
      topicName: 'Nome do Tópico',
      contents: [
        {
          id: 1,
          title: 'Conteúdo 1',
          description: 'Descrição do conteúdo 1.',
        },
        {
          id: 2,
          title: 'Conteúdo 2',
          description: 'Descrição do conteúdo 2.',
        },
        {
          id: 3,
          title: 'Conteúdo 3',
          description: 'Descrição do conteúdo 3.',
        },
      ],
    };
  },
  created() {
    const selectedSubject = useSubjectSelection();
    console.log(selectedSubject)
    this.subjectName = selectedSubject.getSubject;
    this.topicName = selectedSubject.getTopic;
  },
};
</script>

<style>
.content-page {
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.content-boxes {
  display: flex;
  justify-content: space-between;
}

.content-box {
  flex: 1;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 10px;
  background-color: #f5f5f5;
}
</style>